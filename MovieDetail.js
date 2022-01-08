import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className= {styles.movie}>
        
      <div className={styles.show}>
        <div className= {styles.shortView}>
          <div className= {styles.shortView}>
            <img src={coverImg} alt={title} />  
          </div>
          <div className={styles.shortView_letters}>
            <h2>
               {title}
            </h2>
            {
            genres ?
            <div>
              <b>{'genres'}</b>
              <ul> {genres.map(g => 
              <li key={g}>{g}</li>)}</ul>
              </div> 
              : null
            } 
          </div>
        </div>
      </div>
    </div>
  );
} 

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;