import * as i from 'types';
import * as React from 'react';
import Image from 'next/image';

import { Modal } from 'common/interaction';

import {
  EmployeeContainer,
  EmployeeContent,
  EmployeeList,
  EmployeeListItemContainer,
} from './styled';

const EmployeeListItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <EmployeeListItemContainer>
      <strong>{label.replace('_', ' ')}</strong>
      <span>{value}</span>
    </EmployeeListItemContainer>
  );
};

export const Employee = ({ employee }: EmployeeProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Modal.Root openModal={() => setOpen(true)} closeModal={() => setOpen(false)} isOpen={isOpen}>
      <>
        <Modal.Container>
          <EmployeeList>
            {Object.entries(employee.value).map(([label, value], index) => {
              if (label === 'image' || label === 'office') return null;
              return (
                <EmployeeListItem key={`${label}_${index}`} label={label} value={value as string} />
              );
            })}
          </EmployeeList>
        </Modal.Container>

        <Modal.Trigger>
          <EmployeeContainer>
            <EmployeeContent>
              <h3>{employee.value.name}</h3>
              <p>{employee.value.function}</p>
            </EmployeeContent>

            <Image
              src={`https://cms.labela.nl${employee.value.image.small}`}
              width={488}
              height={800}
              alt={employee.value.image.alt}
            />
          </EmployeeContainer>
        </Modal.Trigger>
      </>
    </Modal.Root>
  );
};

type EmployeeProps = {
  employee: i.Employee;
};
