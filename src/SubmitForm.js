// Import necessary dependencies
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Formik components for form handling
import * as Yup from 'yup'; // Yup for form validation
import { AccountCircle, Email, Phone, Home, Cake } from '@mui/icons-material'; // Material-UI icons
import './SubmitForm.css'; // Import CSS file

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  dob: Yup.date().required('Date of birth is required'),
});


// Array of country codes
const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+86', name: 'China' },
  { code: '+81', name: 'Japan' },
  { code: '+7', name: 'Russia' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+39', name: 'Italy' },
  { code: '+34', name: 'Spain' },
  { code: '+61', name: 'Australia' },
  { code: '+52', name: 'Mexico' },
  { code: '+1', name: 'Canada' },
  { code: '+82', name: 'South Korea' },
  { code: '+55', name: 'Brazil' },
  { code: '+91', name: 'Indonesia' },
  { code: '+90', name: 'Turkey' },
  { code: '+62', name: 'Philippines' },
  { code: '+7', name: 'Kazakhstan' },
  { code: '+20', name: 'Egypt' },
  { code: '+81', name: 'Vietnam' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+86', name: 'Pakistan' },
  { code: '+7', name: 'Nigeria' },
  { code: '+234', name: 'Argentina' },
  { code: '+380', name: 'Ukraine' },
  { code: '+1', name: 'Algeria' },
  { code: '+20', name: 'Sudan' },
  { code: '+86', name: 'Iraq' },
  { code: '+213', name: 'Afghanistan' },
  { code: '+212', name: 'Morocco' },
  { code: '+249', name: 'Saudi Arabia' },
  { code: '+966', name: 'Peru' },
  { code: '+34', name: 'Uzbekistan' },
  { code: '+998', name: 'Malaysia' },
  { code: '+998', name: 'Angola' },
  { code: '+84', name: 'Ghana' },
  { code: '+92', name: 'Yemen' },
  { code: '+964', name: 'Nepal' },
  { code: '+880', name: 'Venezuela' },
  { code: '+51', name: 'Mozambique' },
  { code: '+55', name: 'Cameroon' },
  { code: '+20', name: 'Ivory Coast' },
  { code: '+86', name: 'Madagascar' },
  { code: '+234', name: 'North Korea' },
  { code: '+251', name: 'Australia' },
  { code: '+966', name: 'Sri Lanka' },
  { code: '+965', name: 'Ethiopia' },
  { code: '+963', name: 'Kenya' },
  { code: '+962', name: 'Somalia' },
  { code: '+961', name: 'Tanzania' },
  { code: '+960', name: 'Uganda' },
  { code: '+959', name: 'Zambia' },
  { code: '+958', name: 'Zimbabwe' },
  { code: '+957', name: 'Botswana' },
  { code: '+956', name: 'Malawi' },
  { code: '+955', name: 'Mali' },
  { code: '+954', name: 'Senegal' },
  { code: '+953', name: 'Chad' },
  { code: '+952', name: 'Rwanda' },
  { code: '+951', name: 'Guinea' },
  { code: '+950', name: 'Benin' },
  { code: '+949', name: 'Tunisia' },
  { code: '+948', name: 'Burundi' },
  { code: '+947', name: 'Mauritania' },
  { code: '+946', name: 'Eritrea' },
  { code: '+945', name: 'Namibia' },
  { code: '+944', name: 'Niger' },
  { code: '+943', name: 'Burkina Faso' },
  { code: '+942', name: 'Togo' },
  { code: '+941', name: 'Sierra Leone' },
  { code: '+940', name: 'Liberia' },
];


// Functional component for the form
const SubmitForm = () => {
  // Function to handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Send form data to mock API endpoint
      const response = await fetch('https://5b28b28b-d46e-4cd7-8dd3-6b97b3a799a1.mock.pstmn.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // Check if form submission was successful
      if (response.ok) {
        alert('Form submitted successfully');
        resetForm(); // Clear form fields
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
    setSubmitting(false); // Set submitting state to false
  };

  // Return JSX for the form
  return (
    <div className="form-container">
      <div className="heading-container">
        <h1>Submit Form</h1>
      </div>
      {/* Formik component for handling form */}
      <Formik
        initialValues={{ name: '', email: '', phone: '', address: '', dob: '', countryCode: countryCodes[0].code }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Form fields */}
            <div className="form-field">
              <label htmlFor="name" className="icon-label">
                <AccountCircle className="icon" /> Name
              </label>
              <Field type="text" name="name" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="icon-label">
                <Email className="icon" /> Email
              </label>
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="phone" className="icon-label">
                <Phone className="icon" /> Phone
              </label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Field as="select" name="countryCode" style={{ marginRight: '10px' }}>
                  {countryCodes.map(country => (
                    <option key={country.code} value={country.code}>{country.name} ({country.code})</option>
                  ))}
                </Field>
                <Field type="text" name="phone" placeholder="Enter your phone number" />
              </div>
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="address" className="icon-label">
                <Home className="icon" /> Address
              </label>
              <Field type="text" name="address" placeholder="Enter your address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="dob" className="icon-label">
                <Cake className="icon" /> Date of Birth
              </label>
              <Field type="date" name="dob" placeholder="Enter your date of birth" />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" disabled={isSubmitting} className="submit-button">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Export the SubmitForm component
export default SubmitForm;