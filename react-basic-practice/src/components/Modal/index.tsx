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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isEdit?: boolean;
  onSubmit?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  isEdit,
  onSubmit,
  children,
}) => {
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
          gap="13px"
          padding="45px 0 27px 0"
        >
          {onSubmit && (
            <Button
            label={isEdit ? "Save" : "Create"}
              variant="primary"
              size="sm"
              onClick={onSubmit}
            />
          )}
          <Button
            label="Close"
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
