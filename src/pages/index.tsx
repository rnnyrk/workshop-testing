import * as i from 'types';

import PrimeLayout from 'layouts/PrimeLayout';
import { Accordion, Navigation } from 'modules/contentBlocks';

const Home: i.NextPageComponent = () => {
  return (
    <>
      <Navigation
        navigationItems={[
          {
            label: 'Home',
            url: '/',
          },
          {
            label: 'About',
            url: '/about',
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
    </>
  );
};

Home.layout = (page, pageProps) => {
  return <PrimeLayout>{page}</PrimeLayout>;
};

export default Home;
