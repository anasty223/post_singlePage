import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchArticleById } from "./api/axios";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import unsplash_lI7dlA5VBp8 from "./images/unsplash_lI7dlA5VBp8.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function PostItem() {
  const [posts, setPosts] = useState("");
  const location = useLocation();

  // console.log(posts);
  const { id } = useParams();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const results = await fetchArticleById(id);

        setPosts(results);
      } catch (error) {
        alert("Post not found", {
          duration: 1000,
        });
      }
    }
    fetchUsers();
  }, [id]);

  return (
    <div className="container">
    <div className="post-container">
      <img width="1440" src={unsplash_lI7dlA5VBp8} alt="cinema" className="imgCinema" />
      <Card className="cardPost">
      <Typography
        className="postTitle"
        gutterBottom
        variant="h5"
        component="h2"
      >
        {posts.title}
      </Typography>
      <Typography className="postSummary"
      sx={{ mt: '5rem' }} 
      style={{color:"#000000"}}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {posts.summary}
      </Typography>
      <Typography
        style={{color:"#000000",width: "1140px", textAlign:"start"}}
      className="postSummary"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare
        convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit
        habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo
        mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia
        accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit.
        Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat
        ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor
        vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus.
        Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque
        ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus
        facilisi mauris diam amet et sed. At aliquet id amet, viverra a magna
        lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non.
        Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec
        ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed
        nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus
        maecenas massa, arcu ac adipiscing odio facilisis ac eu. In eget ipsum,
        sed ultrices tempor consequat, elementum cras porta. Sagittis etiam
        dictumst at duis praesent a. Malesuada odio amet aenean diam. Tincidunt
        lorem faucibus neque aliquet lobortis feugiat sed aliquam pulvinar.
        Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu
        ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed
        convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus eu
        porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis
        nibh ac et. Adipiscing amet in parturient etiam fames. Facilisi id eu
        sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu.
        Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In
        ipsum suscipit nec pharetra non vitae sagittis aenean sit. Consequat
        integer sit netus pellentesque scelerisque ut. Elit augue dui viverra
        facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet
        magna in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris
        nunc, eu non massa donec sit duis. Libero nascetur mauris, ac in aliquet
        cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a
        viverra. Proin convallis bibendum venenatis non orci id proin vitae.
        Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi,
        aliquet ut sagittis proin enim. Eget in aenean mi a elit viverra amet
        urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi
        mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet
        gravida convallis elementum, metus cras. Adipiscing suspendisse etiam
        tellus tellus arcu. At accumsan rhoncus, fringilla ut scelerisque
        consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel
        purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis.
        Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi viverra
        mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet
        nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
        facilisis amet placerat ultrices lobortis proin nulla.
      </Typography>

      


      </Card>


    </div>
    <NavLink className="goBack" to={location.state?.from ?? "/"}>
    <FontAwesomeIcon className="iconMore back" icon={faArrowRight} /> Back to homepage 
      </NavLink>
      <Outlet />
    </div>
  );
}

export default PostItem;
