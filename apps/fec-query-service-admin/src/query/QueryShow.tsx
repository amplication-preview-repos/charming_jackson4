import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUERY_TITLE_FIELD } from "./QueryTitle";

export const QueryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="createDate" source="createDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="queryText" source="queryText" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <ReferenceManyField reference="Result" target="queryId" label="Results">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <ReferenceField label="query" source="query.id" reference="Query">
              <TextField source={QUERY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="receivedDate" source="receivedDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
