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
  const [name, setName] = useState(data?.name || "");
  const [status, setStatus] = useState(data?.status || "open");
  const [rate, setRate] = useState(data?.rate ? `$${data.rate}` : "$");
  const [balance, setBalance] = useState(
    data?.balance ? `$${data.balance}` : "$"
  );
  const [deposit, setDeposit] = useState(
    data?.deposit ? `$${data.deposit}` : "$"
  );
  const [description, setDescription] = useState(data?.description || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);
    const newCustomer: ICustomer = {
      name,
      status: capitalizedStatus as StatusType,
      rate,
      balance,
      deposit,
      description,
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl width="342px">
            <FormLabel>Status</FormLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
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
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="$"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Balance</FormLabel>
            <Input
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              placeholder="$"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Deposit</FormLabel>
            <Input
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              placeholder="$"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
