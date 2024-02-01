import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import img from './img/logo192.png'

// const useStyles = makeStyles(theme => ({
//   paper: {
//     width: '100%',
//     height: 300,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
// }));

export default function CarouselComponent() {
  // const classes = useStyles();
  const items = [
    {
      src: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
  ];

  return (
    <Carousel
     IndicatorIcon={<h1>dd</h1>}
    >
      {items.map((item, index) => (
        <img src={item.src} />
      ))}
    </Carousel>
  );
}
{/* <Paper key={index}  style={{ backgroundImage: `url(${item.src})` }} /> */ }

