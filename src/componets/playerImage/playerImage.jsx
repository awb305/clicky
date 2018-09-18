import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
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

  /* handleClick = () => {
    if (!this.state.clicked) {
      this.props.increaseCurrentScore(this.props.currentScore);
    } else {
      this.props.clearCurrentScore();
      this.props.checkTopScore();
    }

    this.setState({
      clicked: true
    });
  }; */

  handleClick = () => {
    if (!this.props.clicked) {
      console.log(this.props.item);
      this.props.increaseCurrentScore(this.props.currentScore);
    } else {
      this.props.clearCurrentScore();
      this.props.checkTopScore();
    }
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
