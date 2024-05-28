import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Items = ({items}) => {

  return <div>
    {
      (items.length &&
      items.map(item => {
      return <Card sx={{ width: 275 }} key={item.id} className="m-1em">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2">
           {item.body}
          </Typography>
        </CardContent>
      </Card>
      })) || null
    }
  </div>
}

export default Items