import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Button, FormGroup, Spinner } from 'reactstrap';

import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import './styles.scss';

function PhotoForm({ initialValues, onSubmit, isAddMode }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),
    categoryId: Yup.number().required('This field is required.').nullable(),
    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required.'),
      otherwise: Yup.string().notRequired(),
    }), // require when categoryId = 1 and other not required
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting } = formikProps;
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
              <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                {isSubmitting && (
                  <Spinner animation="border" role="status" size="sm">
                    <div></div>
                  </Spinner>
                )}
                {isAddMode ? ' Add to album' : ' Update photo'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default PhotoForm;
