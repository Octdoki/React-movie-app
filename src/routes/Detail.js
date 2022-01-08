import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

function Detail( ) {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState( [ ] );
    const { id } = useParams( );
    
    useEffect(() => {
      fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(response => response.json())
      .then(json => {
          setMovie(json.data.movie);
          setLoading(false);
      })
  }, []);
    return (
        <div className={styles.container}>
          {
          loading
           ? 
            <Loading />
             : 
              <MovieDetail 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres} 
                style_tag="Detail" />
            
          }
        </div>
      )
}

export default Detail;