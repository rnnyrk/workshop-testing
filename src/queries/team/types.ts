import * as i from 'types';

export type Employee = {
  id: string;
  type: string;
  value: {
    birthdate: string;
    function: string;
    name: string;
    office_id: string;
    image: {
      small: string;
      large: string;
      moble: string;
      alt: string;
    };
  };
};

export type Team = {
  items: {
    employees: i.Employee[];
  }[];
};
