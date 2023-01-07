import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledDot } from './styles';

export default function MediaCard(props) {
  return (
    <Card sx={{ width: 400 ,height: 230 , marginBottom: 5, border: '1px solid black', display: 'flex' , justifyContent: 'flex-start'}}>
      <CardMedia
        sx={{ width: 180 }}
        image={props.char.image}
        title="green iguana"
      />
      <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.char.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.char.gender} 
          <br/>
          {props.char.species}
          <br/>
          status: 
          {
            props.char.status === 'Alive' ?
            <>
            <StyledDot color='green'/>
            </>
            : props.char.status === 'Dead' ?
            <>
            <StyledDot color='red'/>
            </>
            :
            <>
            <StyledDot/>
            </>
          }
          {props.char.status}
          <br/>
          {props.char.type}
        </Typography>
      </CardContent>
      <CardActions>
        {
          props.char.name && props.char.name === 'Rick Sanchez' && <Button size="small">Change Values</Button>
        }
      </CardActions>
      </div>
    </Card>
  );
}