import Contact from 'pages/contact';

import { testRenderer, waitFor } from '../test-utils';

describe('When the users visits the contact page, the FAQ should be readable', () => {
  test('<Contact /> - Should render <Accordion /> with content', async () => {
    // Render a React element into the DOM
    const { getAllByTestId, getByText, userEvent } = testRenderer(<Contact />);

    // Check if all items are present
    expect(getByText('FAQ')).toBeInTheDocument();
    expect(getByText('What is an integration test?')).toBeInTheDocument();
    expect(getByText('How can this component be tested?')).toBeInTheDocument();
    expect(getByText("What's the difference between RTL and Jest?")).toBeInTheDocument();

    // Test interactivity of the accordion
    const accordionTriggers = getAllByTestId('accordion-trigger');
    expect(accordionTriggers).toHaveLength(3);

    const accordionContent = getAllByTestId('accordion-content');
    expect(accordionContent).toHaveLength(3);

    // Click on the first accordion item
    expect(accordionContent[0]).not.toBeVisible();
    await userEvent.click(accordionTriggers[0]);

    await waitFor(() => {
      expect(accordionContent[0]).toBeVisible();
    });
  });
});

describe('When the users visits the contact page, the form should be interactive', () => {
  test('<Contact /> - Should render <Form />', () => {
    // Render a React element into the DOM
    const { getByRole, getByLabelText } = testRenderer(<Contact />);

    // Check if all the required elements are present
    expect(getByRole('form')).toBeInTheDocument();

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Message')).toBeInTheDocument();

    expect(getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('<Contact /> - Should submit the <Form /> with invalid data and show errors', async () => {
    // Render a React element into the DOM
    const { getByLabelText, getByRole, getByText, getAllByText, userEvent } = testRenderer(
      <Contact />,
    );

    // Submit the form without any values should result in showing error messages
    await userEvent.click(getByRole('button', { name: 'Submit' }));
    expect(getAllByText('This field is required')).toHaveLength(3);

    // Fill in the form with invalid values
    await userEvent.type(getByLabelText('Email'), 'invalid-email');

    // Show only 2 required errors and 1 invalid email error
    expect(getAllByText('This field is required')).toHaveLength(2);
    expect(getByText('Enter a valid email address')).toBeInTheDocument();
  });

  test('<Contact /> - Should submit the <Form /> successfully', async () => {
    // Render a React element into the DOM
    const { getByText, getByLabelText, getByRole, userEvent } = testRenderer(<Contact />);

    // Fill in all the input fields
    const nameValue = 'Front-end Label A';
    const emailValue = 'info@labela.nl';
    const messageValue = 'I have a question regarding Label A';

    await userEvent.type(getByLabelText('Name'), nameValue);
    await userEvent.type(getByLabelText('Email'), emailValue);
    await userEvent.type(getByLabelText('Message'), messageValue);

    await userEvent.click(getByRole('button', { name: 'Submit' }));

    // Check if the form is submitted successfully (values should be displayed on the page)
    // Could also be something like; check if a toast is present
    await waitFor(() => {
      expect(getByText(`Name: ${nameValue}`)).toBeInTheDocument();
      expect(getByText(`Email: ${emailValue}`)).toBeInTheDocument();
      expect(getByText(`Message: ${messageValue}`)).toBeInTheDocument();
    });
  });
});
