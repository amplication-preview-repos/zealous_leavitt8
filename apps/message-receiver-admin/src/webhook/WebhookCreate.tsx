import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WebhookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
