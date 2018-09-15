import React from "react";
import "./container.css";
import {Grid, Row, Col, Image} from 'react-bootstrap'

const styles = {
  grid: {
      paddingLeft: '15rem',
      paddingRight: '15rem',
     
  },
  row: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: '4rem'
  }
};

const Container= ()=> (

<Grid fluid style={styles.grid}>
  <Row style={styles.row}>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/jordan.jpeg" thumbnail />
    </Col>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/antawn.jpeg" thumbnail />
    </Col>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/billy.jpg" thumbnail />
    </Col>
  </Row>
  <Row style={styles.row}>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/dean.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/ford.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/james.jpeg" thumbnail />
    </Col>
  </Row>
  <Row style={styles.row}>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/justin.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/marcus.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4} style={styles.col}>
      <Image className = "pic-UNC" src="/images/vince.jpg" thumbnail />
    </Col>
  </Row>
</Grid>




);

export default Container; 


