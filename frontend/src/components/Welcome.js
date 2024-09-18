import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Image Gallery</h1>
      <p>
        This is simple application that retrieves photos using Unsplash api. In
        order to start enter any search term in input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
