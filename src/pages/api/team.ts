import fetch from 'node-fetch';

import { getRandomDate, getRandomNumber } from 'services';

export default (req, res) => {
  fetch('https://cms.labela.nl/api/v1/team')
    .then((data) => data.json())
    .then((data: any) => {
      const offices = data.items[0].offices_block.offices;

      const team = {
        items: [
          {
            employees: data.items[0].employees.map((employee) => ({
              ...employee,
              value: {
                name: employee.value.name,
                function: employee.value.function,
                image: employee.value.image,
                office_id: offices[getRandomNumber(2)].id,
                birthdate: getRandomDate(),
              },
            })),
          },
        ],
      };
      res.status(200).json(team);
    });
};
