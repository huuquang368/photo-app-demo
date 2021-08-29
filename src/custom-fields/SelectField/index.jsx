import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { ErrorMessage } from 'formik';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

function SelectField(props) {
  const {
    field, //fast field formik Props
    form,
    options = [],
    label = '',
    placeholder = '',
    disabled = false,
  } = props;
  const { name, value } = field;
  const { touched, errors } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find(option => option.value === value);

  const handleOptionChange = selectedOption => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

export default SelectField;
