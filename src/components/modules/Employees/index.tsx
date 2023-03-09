import * as React from 'react';

import { useGetTeam } from 'queries/team';
import { Grid } from 'common/layout';
import { Paragraph } from 'common/typography';

import { Employee } from './components/Employee';

export const Employees = () => {
  const { isLoading, data } = useGetTeam();
  const employees = data?.items?.[0]?.employees;

  return (
    <>
      {isLoading && <Paragraph>Loading</Paragraph>}
      {employees && (
        <Grid>
          {employees.map((employee) => (
            <Employee employee={employee} key={employee.id} />
          ))}
        </Grid>
      )}
    </>
  );
};
