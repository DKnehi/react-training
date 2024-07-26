import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  Text,
} from "@chakra-ui/react";
import Button from "../Button";
import { MODAL_TITLES } from "@constants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  confirmDescription?: string;
  isConfirm?: boolean;
  onConfirm?: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  confirmDescription,
  isConfirm,
  onConfirm,
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
        <ModalBody padding="19px 0 0 0">
          {isConfirm ? (
            <Box textAlign="center">
              <Text>{confirmDescription}</Text>
            </Box>
          ) : (
            children
          )}
        </ModalBody>
        <ModalFooter
          justifyContent="center"
          flexDirection="column"
          gap="13px"
          padding="45px 0 27px 0"
        >
          {isConfirm ? (
            <Box display="flex" justifyContent="space-around" width="100%">
              <Button
                label="Yes"
                variant="primary"
                size="sm"
                onClick={onConfirm}
              />
              <Button
                label="No"
                variant="secondary"
                size="sm"
                onClick={onClose}
              />
            </Box>
          ) : (
            <>
              {onSubmit && (
                <Button
                  label={
                    title === MODAL_TITLES.EDIT_CUSTOMER ? "Save" : "Create"
                  }
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
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
