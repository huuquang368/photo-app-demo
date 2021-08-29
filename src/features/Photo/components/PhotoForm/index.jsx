import React from 'react';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Button, FormGroup } from 'reactstrap';

import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import './styles.scss';

function PhotoForm() {
  const initialValues = {
    title: '',
    categoryId: null,
    photo: '',
  };
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
      onSubmit={values => console.log('submit:', values)}
      validationSchema={validationSchema}
    >
      {formikProps => {
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

export default PhotoForm;
