import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WebhookList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Webhooks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="headers" source="headers" />
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
