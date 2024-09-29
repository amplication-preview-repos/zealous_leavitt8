import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WebhookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
