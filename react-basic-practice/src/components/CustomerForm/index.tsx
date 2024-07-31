import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Textarea,
  Button,
  Input,
} from "@chakra-ui/react";
import { ICustomer, StatusType } from "@types";

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
  const [formData, setFormData] = useState({
    name: data?.name || "",
    status: data?.status || "open",
    rate: data?.rate || "$",
    balance: data?.balance || "$",
    deposit: data?.deposit || "$",
    description: data?.description || "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const capitalizedStatus =
      formData.status.charAt(0).toUpperCase() + formData.status.slice(1);
    const newCustomer: ICustomer = {
      name: formData.name,
      status: capitalizedStatus as StatusType,
      rate: formData.rate,
      balance: formData.balance,
      deposit: formData.deposit,
      description: formData.description,
    };

    if (onSubmit) onSubmit(newCustomer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" rowGap="20px" columnGap="30px">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl width="342px">
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="open">Open</option>
              <option value="paid">Paid</option>
              <option value="inactive">Inactive</option>
              <option value="due">Due</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Rate</FormLabel>
            <Input
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              placeholder="Rate"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Balance</FormLabel>
            <Input
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              placeholder="Balance"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Deposit</FormLabel>
            <Input
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              placeholder="Deposit"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
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
