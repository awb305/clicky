import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './playerImage.css';

const styles = {
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '4rem'
  }
};

class PlayerImage extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <Col xs={6} md={4} style={styles.col}>
        <Image
          className="pic-UNC"
          src={this.props.image.link}
          name={this.props.image.name}
          onClick={this.props.clickedFunc}
          thumbnail
        />
      </Col>
    );
  }
}

export default PlayerImage;
