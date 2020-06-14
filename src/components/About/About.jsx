import React from "react";
import styles from "./About.module.css";

class About extends React.Component {

    render() {
        return (
            <>
                <div className={styles.aboutBox}>
                    <div className={styles.title}><h3>About COVID-19 Tracker</h3></div>
                    <div className={styles.descreption}><p>
                        COVID-19 Tracker is a fully open source project, all information and data are available on Github.<br /><br />
                        We collecte data from multiple sources that are tracking and aggregating coronavirus data. They update at different times and may have different ways of gathering data. Some regions may not provide complete breakdown of COVID-19 related stats.<br /><br />
                        Trending data represents changes over the last 24 hours
                        </p></div>
                    <div className={styles.sources}>
                        <div className={styles.sourcesTitle}><h3>Sources:</h3></div>
                        <p><a href="https://corona.lmao.ninja/">https://corona.lmao.ninja</a></p>
                        <p><a href="https://covid19.mathdro.id/api">https://covid19.mathdro.id/api</a></p>
                        <p><a href="https://api.coronatracker.com/">https://api.coronatracker.com</a></p>
                    </div>
                </div>
            </>
        )
    }
}

export default About;