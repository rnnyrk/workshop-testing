import { NextApiRequest, NextApiResponse } from 'next';

import { getRandomDate, getRandomNumber } from 'services';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
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
  }
};
