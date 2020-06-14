import React from "react";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from "recharts";
import styles from "./Chart.module.css";

class BarsChart extends React.Component {

    render() {
        const { historical } = this.props;
        return (
            <>
                <div className={styles.chartpanel}>
                    <h3>New Cases over time</h3>
                    <h2>Worldwide</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart width={800} height={400} data={historical} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                            <XAxis dataKey="reportDate" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="deltaConfirmedDetail.total" name="NewConfirmed" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </>
        );
    }
}

export default BarsChart;