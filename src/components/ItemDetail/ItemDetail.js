
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ItemDetail = ({item, setDisplay}) => {
  return <>
    <button onClick={() => setDisplay('')}>Go back</button>
    <Card sx={{ width: 275 }} className="m-1em">
        <CardContent>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2">
           {item.body}
          </Typography>
        </CardContent>
      </Card>
  </>
}

export default ItemDetail