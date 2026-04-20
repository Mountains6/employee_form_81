import type { EmployeeFormValues } from './types';
import { Card, Field, Label, Value } from './styles';

export const ResultCard = ({ data }: { data: EmployeeFormValues }) => {
  return <Card>
    <Field><Label>Name</Label><Value>{data.name}</Value></Field>
    <Field><Label>Surname</Label><Value>{data.surname}</Value></Field>
    <Field><Label>Age</Label><Value>{data.age}</Value></Field>
    <Field><Label>Job Position</Label><Value>{data.jobPosition || '-'}</Value></Field>
  </Card>
}

