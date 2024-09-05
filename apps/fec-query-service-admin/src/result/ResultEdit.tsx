import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { QueryTitle } from "../query/QueryTitle";

export const ResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="query.id" reference="Query" label="query">
          <SelectInput optionText={QueryTitle} />
        </ReferenceInput>
        <DateTimeInput label="receivedDate" source="receivedDate" />
      </SimpleForm>
    </Edit>
  );
};
