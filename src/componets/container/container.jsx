import React from 'react';
import './container.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Header from '../header';
import PlayerImage from '../playerImage';

const styles = {
  grid: {
    paddingLeft: '15rem',
    paddingRight: '15rem'
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '4rem'
  }
};

const images = [
  {
    name: 'Jordan',
    link: '/images/jordan.jpeg',
    clicked: false
  },
  {
    name: 'Antawn',
    link: '/images/antawn.jpeg',
    clicked: false
  },
  {
    name: 'Billy',
    link: '/images/billy.jpg',
    clicked: false
  },
  {
    name: 'Dean',
    link: '/images/dean.jpg',
    clicked: false
  },
  {
    name: 'Ford',
    link: '/images/ford.jpg',
    clicked: false
  },
  {
    name: 'James',
    link: '/images/james.jpeg',
    clicked: false
  },
  {
    name: 'Justin',
    link: '/images/justin.jpg',
    clicked: false
  },
  {
    name: 'Marcus',
    link: '/images/marcus.jpg',
    clicked: false
  },
  {
    name: 'Vince',
    link: '/images/vince.jpg',
    clicked: false
  }
];

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      topScore: 0,
      images: images
    };

    this.changeClickedState = this.changeClickedState.bind(this);
  }

  increaseCurrentScore = currentScore => {
    parseInt(currentScore);
    currentScore++;
    this.setState({
      currentScore: currentScore
    });
  };

  checkTopScore = () => {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      });
    }
  };

  clearCurrentScore = () => {
    this.setState({
      currentScore: 0
    });
  };

  changeClickedState(e) {
    const { name } = e.target;
    const mutatedClone = this.state.images.map(element => {
      if (element.name === name) {
        let obj = element;
        obj.clicked = true;
        return obj;
      }
      return element;
    });

    this.setState({
      images: mutatedClone
    });

    this.increaseCurrentScore(this.state.currentScore);
  }

  makePlayerImages = () => {
    const column = this.state.images.map((image, index) => (
      <PlayerImage
        item={index}
        image={image}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        clickedFunc={this.changeClickedState}
        increaseCurrentScore={this.increaseCurrentScore}
        checkTopScore={this.checkTopScore}
        clearCurrentScore={this.clearCurrentScore}
      />
    ));

    return column;
  };

  render() {
    /* const column = this.state.images.map((image, index) => (
      <PlayerImage
        item={index}
        image={image}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        clicked={this.clicked}
        increaseCurrentScore={this.increaseCurrentScore}
        checkTopScore={this.checkTopScore}
        clearCurrentScore={this.clearCurrentScore}
      />
    )); */

    const column = this.makePlayerImages();
    return (
      <div>
        <div>
          <nav className="navbar">
            <ul>
              <li className="brand">Clicky Game</li>
              <li>Click an image to begin!</li>
              <li>
                Current Score: {this.state.currentScore} | Top Score:{' '}
                {this.state.topScore}{' '}
              </li>
            </ul>
          </nav>
        </div>
        <Header />
        <Grid fluid style={styles.grid}>
          <Row style={styles.row}>
            {column[0]}
            {column[1]}
            {column[2]}
          </Row>
          <Row style={styles.row}>
            {column[3]}
            {column[4]}
            {column[5]}
          </Row>
          <Row style={styles.row}>
            {column[6]}
            {column[7]}
            {column[8]}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Container;
