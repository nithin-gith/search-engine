import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function resultLink(props){
    return(
    <Card sx={{ minWidth: 275 }} style = {{
      "margin": "0px auto 25px",
      "boxShadow":"none",
      "border":"1px solid black",
      "width":"50%"}}>
      {/* #1976d2 */}
      <CardContent style = {{"paddingBottom":"2px"}}>
        <Typography style = {{"marginBottom":"0px"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Website
        </Typography>
        <Typography variant="h5" component="div">
          {props.domain}
        </Typography>
        {(props.keywords.length === 0) ?
          <Typography sx={{ mb: 1.5 }} color="text.secondary" style ={{"marginTop":"5px"}}>
            No Keywords Found
          </Typography>
        :
        <div>

        <Typography sx={{ mb: 1.2 }} color="text.secondary" style ={{"marginBottom":"0px","marginTop":"5px"}}>
          Keywords : {props.keywords.map((item) => {return <li>{item}</li>})}
        </Typography>
        </div>
        
        }
        
      </CardContent>
      <CardActions style ={{"paddingTop":"0px"}}>
        <Button size="small" target = "_blank" href = {props.url}>Visit Page</Button>
      </CardActions>
    </Card>
    )
}

export default resultLink;