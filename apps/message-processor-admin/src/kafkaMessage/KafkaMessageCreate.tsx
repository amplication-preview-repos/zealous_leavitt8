import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KafkaMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="offset" source="offset" />
        <NumberInput step={1} label="partition" source="partition" />
        <div />
        <TextInput label="topic" source="topic" />
      </SimpleForm>
    </Create>
  );
};
