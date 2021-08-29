import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

function PhotoList({ photoList = [], onPhotoEditClick, onPhotoRemoveClick }) {
  return (
    <div className="photo-list" style={{ padding: '2rem' }}>
      <Row>
        {photoList.map(photo => (
          <Col key={photo.title} xs="12" md="6" lg="3">
            <PhotoCard
              photo={photo}
              onEditClick={onPhotoEditClick}
              onRemoveClick={onPhotoRemoveClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

export default PhotoList;
