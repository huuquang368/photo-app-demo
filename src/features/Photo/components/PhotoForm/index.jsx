import React from 'react';
// import PropTypes from 'prop-types';
// import * as Yup from 'yup';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Button, FormGroup } from 'reactstrap';

// import RandomPhotoField from 'custom-fields/RandomPhotoField';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import './styles.scss';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log('submit:', values)}
    >
      {formikProps => {
        // do something here
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Enter title ..."
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="Choose category"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

// PhotoForm.propTypes = {
//   onSubmit: PropTypes.func,
// };

export default PhotoForm;
