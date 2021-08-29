import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import IMAGE from 'constants/images';
import Banner from 'components/Banner';

function MainPage() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 😍" backgroundUrl={IMAGE.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
