import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieSlide.module.css";

function MovieSlide({ id, coverImg, title,  summary }) {
    return(<div className= {styles.movie} >
                <Link to={'/movie/${id'} >
                     <img src= {coverImg} alt={title} />
                </Link>
                <div className={styles.letters}>
                    <div className= {styles.title}>
                        <div>
                            <h6 className={styles.movieName}>
                                <Link to={'/movie/${id'} >
                                    {(title.length > 35)
                                    ? `${title.slice(0, 35)}...`
                                    : title}
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            
        </div>   
    )
}

MovieSlide.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.strings
  }
  
  export default MovieSlide;