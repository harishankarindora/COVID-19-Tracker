import React from "react";
import styles from "./PreventionPageHeadingBox.module.css";

class PreventionPageHeadingBox extends React.Component {
    render() {
        return (
            <div className={styles.headingBox}>
                <div className={styles.headingText}><h3>World Health Organization <br />Guidelines for COVID-19</h3></div>
                <div className={styles.headingImage}><img src="./logo.png" alt="corona" width="400" height="400"></img></div>
            </div>
        )
    }
}
export default PreventionPageHeadingBox;