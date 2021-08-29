import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

function InputField(props) {
  const {
    field, //fast field formik Props
    form,
    type = 'text',
    label = '',
    placeholder = '',
    disabled = false, // custom Props
  } = props;
  const { name } = field;
  const { touched, errors } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
