import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const PostgreSqlFlowCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="step" source="step" />
      </SimpleForm>
    </Create>
  );
};
