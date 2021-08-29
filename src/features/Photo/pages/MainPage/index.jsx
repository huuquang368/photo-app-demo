import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import IMAGE from 'constants/images';
import Banner from 'components/Banner';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

function MainPage() {
  const photos = useSelector(state => state.photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEditPhoto = photo => {
    history.push(`/photos/${photo.id}`);
  };
  const handleRemovePhoto = photo => {
    dispatch(removePhoto(photo.id));
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 😍" backgroundUrl={IMAGE.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
      </Container>

      <PhotoList
        photoList={photos}
        onPhotoEditClick={handleEditPhoto}
        onPhotoRemoveClick={handleRemovePhoto}
      />
    </div>
  );
}

export default MainPage;
