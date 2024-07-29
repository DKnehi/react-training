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
          display: "flex",
          flexDirection: "row" as "row",
          justifyContent: "space-around",
        }
      : {};

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth="794px" padding="0 40px">
        <ModalHeader
          padding="23px 0 18px 0"
          borderBottom="1px solid black"
          fontWeight="semibold"
          fontSize="lg"
          color="mirage"
        >
          {title}
        </ModalHeader>
        <ModalBody padding="19px 0 0 0">{children}</ModalBody>
        <ModalFooter
          justifyContent="center"
          flexDirection="column"
          rowGap="13px"
          padding="45px 0 27px 0"
          {...footerDeleteStyles}
        >
          {onSubmit && (
            <Button
              label={
                title === MODAL_TITLES.DELETE_CUSTOMER
                  ? "Yes"
                  : title === MODAL_TITLES.EDIT_CUSTOMER
                    ? "Save"
                    : "Create"
              }
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
