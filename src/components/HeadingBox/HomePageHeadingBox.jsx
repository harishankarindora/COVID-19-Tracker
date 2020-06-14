import React from "react";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import styles from "./HomePageHeadingBox.module.css";

class HomePageHeadingBox extends React.Component {
    render() {
        const { summary, togglePopup } = this.props;
        return (
            <div className={styles.summaryHeader}>
                <div className={styles.headingBox}>
                    <div className={styles.headingPanel}>
                        <h1 className={styles.heading}>
                            Coronavirus (COVID-19) Tracker
							</h1>
                        <div className={styles.lastUpdate}>Updated less then {Math.ceil((new Date().getTime() - summary.updated) / 60000)} min ago</div>
                    </div>
                    <div className={styles.sharePanel} role="button" aria-label="Share icon" onClick={togglePopup}>
                        <ShareOutlinedIcon fontSize='small' htmlColor='#5b7488'/>
                    </div>
                </div>
                <div className={styles.sourceBox}>
                    <h3>source:</h3>
                    <a target="_blank" rel="noopener noreferrer" href="https://coronavirus.jhu.edu/map.html" className="link">Johns Hopkins Center for Systems Science and Engineering</a>
                </div>
            </div>
        )
    }
}
export default HomePageHeadingBox;