
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography,CardContent,CardMedia,Card, TextField} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Post = ({ article }) => {


    return (
        <article className='article'>
           <Card className="card">
      <CardMedia
        className="card-media"
        image={article.imageUrl}
        title="Paella dish"
      />
      <CardContent>
       

        <Typography className='date' color="#363636">
        <svg className="contacts_icon" width="18" height="18">
            <use href="./images/symbol-defs.svg#icon-akar"></use>
          </svg>
        {article.publishedAt.split('T')[0]}
        </Typography>

        <Typography style={{marginTop:25}}    id="date"  type="date" className="title" gutterBottom variant="h5" component="h2">
        {article.title}
        </Typography>

        <Typography style={{marginTop:20}} className="summary" variant="body2" color="textSecondary" component="p">
          {article.summary}
        </Typography>


        <NavLink to={`/article/${article.id}`}className="more" style={{textDecoration:"none",color:"#363636",marginBottom:25}}>Read more 
      
      <FontAwesomeIcon className="iconMore" icon={faArrowRight} />
           </NavLink>
      </CardContent>


    </Card>
            
        </article>
    )
}
export default Post