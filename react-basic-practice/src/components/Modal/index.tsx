import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import Button from "../Button";
import { MODAL_TITLES } from "@constants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  isLoading,
  children,
}) => {
  const footerDeleteStyles =
    title === MODAL_TITLES.DELETE_CUSTOMER
      ? {
          flexDirection: "row" as "row",
          justifyContent: "space-around",
        }
      : {};

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} trapFocus={false}>
      <ModalOverlay />
      <ModalContent maxWidth="794px" padding="0 40px">
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter {...footerDeleteStyles}>
          {title === MODAL_TITLES.DELETE_CUSTOMER && (
            <Button
              label="Yes"
              variant="primary"
              size="sm"
              onClick={onSubmit}
              isLoading={isLoading}
            />
          )}
          <Button
            label={title === MODAL_TITLES.DELETE_CUSTOMER ? "No" : "Close"}
            variant="secondary"
            size="sm"
            onClick={onClose}
          />
        </ModalFooter>
      </ModalContent>
      
    </ChakraModal>
  );
};

export default Modal;
