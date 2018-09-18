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
    link: '/images/jordan.jpeg'
  },
  {
    name: 'Antawn',
    link: '/images/antawn.jpeg'
  },
  {
    name: 'Billy',
    link: '/images/billy.jpg'
  },
  {
    name: 'Dean',
    link: '/images/dean.jpg'
  },
  {
    name: 'Ford',
    link: '/images/ford.jpg'
  },
  {
    name: 'James',
    link: '/images/james.jpeg'
  },
  {
    name: 'Justin',
    link: '/images/justin.jpg'
  },
  {
    name: 'Marcus',
    link: '/images/marcus.jpg'
  },
  {
    name: 'Vince',
    link: '/images/vince.jpg'
  }
];

class Container extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0
  };

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

  render() {
    const column = images.map(image => (
      <PlayerImage
        image={image}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        increaseCurrentScore={this.increaseCurrentScore}
        checkTopScore={this.checkTopScore}
        clearCurrentScore={this.clearCurrentScore}
      />
    ));

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
