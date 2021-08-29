import React from 'react';
// import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router';
import { randomNumber } from 'utils/common';

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editedPhoto = useSelector(state =>
    state.photos.find(item => item.id === parseInt(photoId))
  );

  const initialValues = isAddMode
    ? {
        title: '',
        categoryId: null,
        photo: '',
      }
    : editedPhoto;

  const handleSubmit = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          dispatch(addPhoto(newPhoto));
        } else {
          dispatch(updatePhoto(values));
        }
        history.push('/photos');
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😁" />
      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
