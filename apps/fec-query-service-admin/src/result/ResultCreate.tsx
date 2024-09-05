import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { QueryTitle } from "../query/QueryTitle";

export const ResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="query.id" reference="Query" label="query">
          <SelectInput optionText={QueryTitle} />
        </ReferenceInput>
        <DateTimeInput label="receivedDate" source="receivedDate" />
      </SimpleForm>
    </Create>
  );
};
