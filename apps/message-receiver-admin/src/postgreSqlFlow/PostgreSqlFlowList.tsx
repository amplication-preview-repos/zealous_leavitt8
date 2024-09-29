import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PostgreSqlFlowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PostgreSQLFlows"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="flow" source="flow" />
        <TextField label="ID" source="id" />
        <TextField label="step" source="step" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
