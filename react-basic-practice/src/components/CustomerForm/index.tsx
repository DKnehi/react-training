import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Button,
} from "@chakra-ui/react";
import { ICustomer, StatusType } from "@types";
import Input from "../Input";
import Textarea from "../TextArea";

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (!/^[a-zA-Z\s]+$/.test(value))
          return "Name must contain only letters";
        break;
      case "rate":
      case "balance":
      case "deposit":
        if (!value.trim()) return `${name} is required`;
        if (isNaN(Number(value))) return `${name} must be a number`;
        break;
      case "description":
        if (!value.trim()) return "Description is required";
        break;
      default:
        break;
    }
    return "";
  };

  const handleBlur = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    const errorMessage = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

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

    let valid = true;
    let newErrors: { [key: string]: string } = {};
    for (let key in customer) {
      const errorMessage = validate(
        key,
        customer[key as keyof ICustomer] as string
      );
      if (errorMessage) {
        valid = false;
        newErrors[key] = errorMessage;
      }
    }
    setErrors(newErrors);

    if (valid) {
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
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              defaultValue={data?.name || ""}
              onBlur={handleBlur}
              errorMessage={errors.name}
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
            >
              <option value="Open">Open</option>
              <option value="Paid">Paid</option>
              <option value="Inactive">Inactive</option>
              <option value="Due">Due</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!errors.rate}>
            <FormLabel>Rate</FormLabel>
            <Input
              name="rate"
              defaultValue={data?.rate || ""}
              placeholder="$"
              onBlur={handleBlur}
              errorMessage={errors.rate}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!errors.balance}>
            <FormLabel>Balance</FormLabel>
            <Input
              name="balance"
              defaultValue={data?.balance || ""}
              placeholder="$"
              onBlur={handleBlur}
              errorMessage={errors.balance}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!errors.deposit}>
            <FormLabel>Deposit</FormLabel>
            <Input
              name="deposit"
              defaultValue={data?.deposit || ""}
              placeholder="$"
              onBlur={handleBlur}
              errorMessage={errors.deposit}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              defaultValue={data?.description || ""}
              onBlur={handleBlur}
              errorMessage={errors.description}
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
