import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUERY_TITLE_FIELD } from "../query/QueryTitle";

export const ResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="ID" source="id" />
        <ReferenceField label="query" source="query.id" reference="Query">
          <TextField source={QUERY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="receivedDate" source="receivedDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
