import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KafkaMessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"KafkaMessages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="offset" source="offset" />
        <TextField label="partition" source="partition" />
        <TextField label="payload" source="payload" />
        <TextField label="topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
