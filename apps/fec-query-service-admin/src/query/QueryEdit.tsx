import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ResultTitle } from "../result/ResultTitle";

export const QueryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="createDate" source="createDate" />
        <TextInput label="queryText" multiline source="queryText" />
        <ReferenceArrayInput
          source="results"
          reference="Result"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
