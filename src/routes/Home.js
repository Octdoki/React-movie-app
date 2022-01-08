
import Slide from "../components/Slide"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import { Group_obj, Group_key_arr } from "../Atom/NavList"
import styles from "./Home.module.css"

function Home() {
  return(
    <div>
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className= {styles.title}>
              <div className= {styles.titleBox}>
              <Link to={`/page/${Group_obj[group]}/1`}
               style={{"display":"flex", "flexDirection":"row", "alignContent":"center"}}          
              >
                 <div className={styles.titleImg}><FontAwesomeIcon icon={faCaretSquareRight} ></FontAwesomeIcon></div>
                 <div><span>{group}</span></div>
                </Link>
                <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`} />
                </div>
              </div>
            </div>
        )
      } )}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>
            This is belongs to DY
          </h3>
        </div>
      </div>
    </div>
  )
}
 
export default Home;