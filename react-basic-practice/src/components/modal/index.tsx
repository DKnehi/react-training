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
import Form from "../Form";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  headerText = "Add Customer",
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth="794px" padding="0 40px">
        <ModalHeader padding="23px 0 18px 0" borderBottom="1px solid black" fontWeight="semibold" fontSize="lg" color="mirage">
          {headerText}
        </ModalHeader>
        <ModalBody padding="19px 0 0 0">
          <Form />
        </ModalBody>
        <ModalFooter
          justifyContent="center"
          flexDirection="column"
          gap="13px"
          padding="45px 0 27px 0"
        >
          <Button label="Create" variant="primary" size="sm" />
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
