import * as i from 'types';
import * as React from 'react';

import { FormContainer, Input, Textarea } from 'common/form';
import { Button } from 'common/interaction';
import PrimeLayout from 'layouts/PrimeLayout';
import { Accordion, Navigation } from 'modules';

type FormValues = {
  name: string;
  company: string;
  message: string;
};

const Contact: i.NextPageComponent = () => {
  const [formData, setFormData] = React.useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
  };

  return (
    <>
      <Navigation
        navigationItems={[
          {
            label: 'Home',
            url: '/',
          },
          {
            label: 'Team',
            url: '/team',
          },
          {
            label: 'Contact',
            url: '/contact',
          },
        ]}
      />

      <Accordion
        title="FAQ"
        accordionItems={[
          {
            id: '5e41dd50-6831-4e39-b2fd-b02f4b272d30',
            title: 'What is an integration test?',
            text: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.',
          },
          {
            id: 'c4df5aeb-4963-4cca-a23d-682d6212dcd2',
            title: 'How can this component be tested?',
            text: 'Donec sed odio dui. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
          },
          {
            id: '569c203c-0ed3-4cff-a50e-a27204ace963',
            title: 'What is this sample question?',
            text: 'Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.',
          },
        ]}
      />

      <FormContainer<FormValues> onSubmit={onSubmit}>
        {({ register }) => (
          <>
            <Input label="Name" {...register('name')} />
            <Input label="Company" {...register('company')} />
            <Textarea label="Message" {...register('message')} />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </>
        )}
      </FormContainer>

      {formData && (
        <ul>
          <li>Name: {formData.name}</li>
          <li>Company: {formData.company}</li>
          <li>Message: {formData.message}</li>
        </ul>
      )}
    </>
  );
};

Contact.layout = (page, pageProps) => {
  return <PrimeLayout>{page}</PrimeLayout>;
};

export default Contact;
