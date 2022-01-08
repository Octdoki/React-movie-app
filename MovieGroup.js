import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css"


function MovieGroup({ id, coverImg, title, summary} ){
    return(
        <div className= {styles.movie}>
            <div className= {styles.show}>
                <div className={styles.img}>
                     <img src= {coverImg} alt={title} />
                </div>
              <div className={styles.letters}>
               <div className={styles.title}>
                    <div>
                           <h3>
                                <Link to={'/movie/${id'} >
                                     {(title.length > 35)
                                     ? `${title.slice(0, 35)}...`
                                     : title}
                                 </Link>
                            </h3>                          
                     </div>
                </div>
            <p>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>  
            </div>
            </div>
  
        </div>
    )
}

MovieGroup.propTypes = {
 id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string
}

export default MovieGroup;