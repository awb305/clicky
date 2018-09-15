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


const images = [
  {
    name: 'Jordan',
    link: '/images/jordan.jpeg'
  },
  {
    name: 'Antawn',
    link: '/images/antawn.jpeg',
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

let column =  images.map(image => (
  <Col xs={6} md={4} style={styles.col}>
    <Image className = "pic-UNC" alt={image.name} src={image.link} thumbnail />
  </Col> 
 ));


const Container= ()=> (

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




);

export default Container; 


