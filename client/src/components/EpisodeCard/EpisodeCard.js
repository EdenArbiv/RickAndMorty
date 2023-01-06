import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ width: 380 ,height: 230 , marginRight: 5, marginBottom: 5, border: '1px solid black', display: 'flex' , justifyContent: 'flex-start'}}>
      <CardMedia
        sx={{ width: 180 }}
        image={'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'}
        title="green iguana"
      />
      <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.episode.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Episode {props.episode.id}
          <br/>
          {props.episode.air_date}
          <br/>
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Sheare</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
      </div>
    </Card>
  );
}