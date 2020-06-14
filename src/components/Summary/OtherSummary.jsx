import React from "react";
import CountUp from "react-countup";
import styles from "./OtherSummary.module.css";

class OtherSummary extends React.Component {

    render() {
        const { summary } = this.props;
        return (
            <div className={styles.otherSummaryBoxes}>
                <div className={styles.box}>
                    <div className={styles.column1}>
                        <div className={styles.activeCasesLabel}>Active Cases:</div>
                        <div className={styles.activeCasesData}>
                            <CountUp start={0} end={summary.active} duration={1.6} separator="," />
                        </div>
                        <div className={styles.lastUpdate}>Updated less then {Math.ceil((new Date().getTime() - summary.updated) / 60000)} min ago</div>
                    </div>
                    <div className={styles.column2}>
                        <div className={styles.item}>
                            <div className={styles.valueRow}>
                                <span className="label">Normal Cases</span>
                                <span className="value">{(summary.active - summary.critical).toLocaleString()} ({((summary.active - summary.critical) / summary.active * 100).toPrecision(4) + "%"})</span>
                            </div>
                            <div className={styles.bar}>
                                <div className={styles.valueBar} style={{ width: ((summary.active - summary.critical) / summary.active * 100) + "%", backgroundColor: "#7d7ddf" }}>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.valueRow}>
                                <span className="label">Critical Cases</span>
                                <span className="value">{(summary.critical).toLocaleString()} ({((summary.critical) / summary.active * 100).toPrecision(4) + "%"})</span>
                            </div>
                            <div className={styles.bar}>
                                <div className={styles.valueBar} style={{ width: ((summary.critical) / summary.active * 100) + "%", backgroundColor: "#df0000" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <h3 className={styles.data}>
                        <div className="description">Recovery Rate:</div>
                        <div className="value">{(summary.recovered / summary.cases * 100).toPrecision(4)}%</div>
                    </h3>
                    <h3 className={styles.data}>
                        <div className="description">Fatality Rate:</div>
                        <div className="value">{(summary.deaths / summary.cases * 100).toPrecision(4)}%</div>
                    </h3>
                    <h3 className={styles.data}>
                        <div className="description">Affected Countries:</div>
                        <div className="value">{summary.affectedCountries}</div>
                    </h3>
                    <h3 className={styles.data}>
                        <div className="description">Cases Per One Million:</div>
                        <div className="value">{summary.casesPerOneMillion}</div>
                    </h3>
                    <h3 className={styles.data}>
                        <div className="description">Deaths Per One Million:</div>
                        <div className="value">{summary.deathsPerOneMillion}</div>
                    </h3>
                    <h3 className={styles.data}>
                        <div className="description">Total Tests:</div>
                        <div className="value">{(summary.tests).toLocaleString()}</div>
                    </h3>
                    <h3 className={styles.data}>
                        <div className="description">Tests Per One Million:</div>
                        <div className="value">{(summary.testsPerOneMillion).toLocaleString()}</div>
                    </h3>
                </div>
            </div>
        )
    }
}

export default OtherSummary;