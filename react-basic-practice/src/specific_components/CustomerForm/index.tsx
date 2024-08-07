import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Button,
} from "@chakra-ui/react";
import { ICustomer, StatusType, ErrorType } from "@types";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import {
  TEXT,
  ERROR_MESSAGES,
  POSITIVE_DECIMAL,
  NEGATIVE_ALLOWED,
} from "@constants";
import { capitalizeFirstLetter } from "@utils";

interface CustomerFormProps {
  data?: ICustomer;
  onSubmit?: (customer: ICustomer) => void;
  isLoading?: boolean;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  data,
  onSubmit,
  isLoading,
}) => {
  const [error, setError] = useState<ErrorType>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let regex = POSITIVE_DECIMAL;
    if (name === "balance") {
      regex = NEGATIVE_ALLOWED;
    }
    if (name !== "balance" && value.includes("-")) {
      event.target.value = value.replace("-", "");
    }
    const match = value.match(regex);
    const validValue = match ? match[0] : "";

    event.target.value = validValue;
  };

  /**
   * Validates a form field value based on its name and returns an error message if validation fails.
   * @param {string} name - The name of the form field.
   * @param {string} value - The value of the form field.
   * @returns {string} - The validation error message, or an empty string if valid.
   */
  const validate = (name: string, value: string): string => {
    const fieldName = capitalizeFirstLetter(name);
    switch (name) {
      case "name":
        if (!value.trim()) return ERROR_MESSAGES.REQUIRED_FIELD("Name");
        if (!TEXT.test(value)) return ERROR_MESSAGES.REQUIRED_TEXT("Name");
        break;
      case "rate":
      case "balance":
      case "deposit":
        if (!value.trim()) return ERROR_MESSAGES.REQUIRED_FIELD(fieldName);
        break;
      case "description":
        if (!value.trim()) return ERROR_MESSAGES.REQUIRED_FIELD("Description");
    }
    return "";
  };

  /**
   * Handles blur events for input fields, validating the field and setting error messages.
   * @param {React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} event - The blur event.
   * @returns {void}
   */
  const handleBlur = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    const errorMessage = validate(name, value);
    setError((prev) => ({ ...prev, [name]: errorMessage }));
  };

  /**
   * Handles form submission, validates the form, and calls onSubmit if the form is valid.
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const customer: ICustomer = {
      name: formData.get("name")?.toString() || "",
      status: formData.get("status")?.toString() as StatusType,
      rate: formData.get("rate")?.toString() || "",
      balance: formData.get("balance")?.toString() || "",
      deposit: formData.get("deposit")?.toString() || "",
      description: formData.get("description")?.toString() || "",
    };

    let isValid = true;
    let newError: ErrorType = {};
    for (let key in customer) {
      const errorMessage = validate(
        key,
        customer[key as keyof ICustomer] as string
      );
      if (errorMessage) {
        isValid = false;
        newError[key] = errorMessage;
      }
    }
    setError(newError);

    if (isValid) {
      onSubmit?.({
        ...customer,
        ...(!!data && { id: data.id }),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" rowGap="20px" columnGap="30px">
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!error.name}>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              defaultValue={data?.name || ""}
              onBlur={handleBlur}
              errorMessage={error.name}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl width="342px">
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              defaultValue={data?.status || "Open"}
              onBlur={handleBlur}
              _focusVisible={{}}
              borderColor="paleSky"
              _hover={{
                borderColor: "paleSky",
              }}
            >
              <option value="Open">Open</option>
              <option value="Paid">Paid</option>
              <option value="Inactive">Inactive</option>
              <option value="Due">Due</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!error.rate}>
            <FormLabel>Rate</FormLabel>
            <Input
              name="rate"
              defaultValue={data?.rate || ""}
              placeholder="$"
              onBlur={handleBlur}
              errorMessage={error.rate}
              onChange={handleInputChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!error.balance}>
            <FormLabel>Balance</FormLabel>
            <Input
              name="balance"
              defaultValue={data?.balance || ""}
              placeholder="$"
              onBlur={handleBlur}
              errorMessage={error.balance}
              onChange={handleInputChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!error.deposit}>
            <FormLabel>Deposit</FormLabel>
            <Input
              name="deposit"
              defaultValue={data?.deposit || ""}
              placeholder="$"
              onBlur={handleBlur}
              errorMessage={error.deposit}
              onChange={handleInputChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!error.description}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              defaultValue={data?.description || ""}
              onBlur={handleBlur}
              errorMessage={error.description}
            />
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={2}
          display="flex"
          justifyContent="center"
          margin="45px 0 -32px 0"
        >
          <Button
            variant="primary"
            size="sm"
            type="submit"
            isLoading={isLoading}
          >
            {data ? "Save" : "Create"}
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};

export default CustomerForm;
