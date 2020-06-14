import React from 'react';
import CountUp from "react-countup";
import styles from "./MainSummary.module.css";

class MainSummary extends React.Component {
    render() {
        const { summary } = this.props;
        return (
            <div className={styles.mainSummaryBox}>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <h3>Confirmed Cases</h3>
                    </div>
                    <div className={styles.data} style={{ color: '#a79eb7' }}>
                        <CountUp start={0} end={summary.cases} duration={1.6} separator="," />
                    </div>
                    <div className={styles.delta} style={{ color: '#a79eb7', backgroundColor: '#a79eb730' }}>
                        +{<CountUp start={0} end={summary.todayCases} duration={2} separator="," />}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <h3>Total Deaths</h3>
                    </div>
                    <div className={styles.data} style={{ color: '#d84d4d' }}>
                        <CountUp start={0} end={summary.deaths} duration={2} separator="," />
                    </div>
                    <div className={styles.delta} style={{ color: '#d84d4d', backgroundColor: '#ff000017' }}>
                        +{<CountUp start={0} end={summary.todayDeaths} duration={2} separator="," />}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <h3>Total Recovered</h3>
                    </div>
                    <div className={styles.data} style={{ color: '#8ACA2B' }}>
                        <CountUp start={0} end={summary.recovered} duration={2} separator="," />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainSummary;