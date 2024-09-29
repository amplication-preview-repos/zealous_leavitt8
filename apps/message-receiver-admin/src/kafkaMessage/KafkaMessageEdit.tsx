import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KafkaMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="offset" source="offset" />
        <NumberInput step={1} label="partition" source="partition" />
        <div />
        <TextInput label="topic" source="topic" />
      </SimpleForm>
    </Edit>
  );
};
