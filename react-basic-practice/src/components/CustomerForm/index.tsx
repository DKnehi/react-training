import React from "react";
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

    onSubmit?.({ 
      ...customer,
      ...(!!data && { id: data.id })
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" rowGap="20px" columnGap="30px">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              defaultValue={data?.name || ""}
              placeholder="Name"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl width="342px">
            <FormLabel>Status</FormLabel>
            <Select name="status" defaultValue={data?.status || "Open"}>
              <option value="Open">Open</option>
              <option value="Paid">Paid</option>
              <option value="Inactive">Inactive</option>
              <option value="Due">Due</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Rate</FormLabel>
            <Input
              name="rate"
              defaultValue={data?.rate || "$"}
              placeholder="Rate"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Balance</FormLabel>
            <Input
              name="balance"
              defaultValue={data?.balance || "$"}
              placeholder="Balance"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Deposit</FormLabel>
            <Input
              name="deposit"
              defaultValue={data?.deposit || "$"}
              placeholder="Deposit"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              defaultValue={data?.description || ""}
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
