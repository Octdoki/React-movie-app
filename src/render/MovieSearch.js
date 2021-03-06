import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieSlide.module.css"

function MovieSearch({ id, coverImg, title,  summary }) {
    return(
    <div className= { styles.movie}>
        <div className= {styles.show}>
            <div className={styles.shortView_Img}>
                <img src= {coverImg} alt={title} />
                </div>
            </div>
            <div>
                <h3>
                <Link to={'/movie/${id'} >
                     {(title.length > 35)
                      ? `${title.slice(0, 35)}...`
                      : title}
                </Link>
                 </h3>
            </div>         
            <p>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>
        </div>   
    )
}

MovieSearch.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string
  }
  
  export default MovieSearch;