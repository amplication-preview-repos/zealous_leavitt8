import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const WebhookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="headers" source="headers" />
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
