import React from 'react';
// import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router';

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = values => {
    return new Promise(resolve => {
      console.log('Form submit: ', values);
      setTimeout(() => {
        dispatch(addPhoto(values));
        history.push('/photos');
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😁" />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
