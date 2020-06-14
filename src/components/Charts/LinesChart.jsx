import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import styles from "./Chart.module.css";

class LinesChart extends React.Component {

    render() {
        const { historical } = this.props;
        return (
            <>
                <div className={styles.chartpanel}>
                    <h3>Cases over time</h3>
                    <h2>Worldwide</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart width={800} height={400} data={historical} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                            <CartesianGrid vertical={false} strokeDasharray="3" />
                            <XAxis dataKey="reportDate" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} iconSize={22} />
                            <Line type="monotone" dataKey="confirmed.total" name="Confirmed" dot={{ stroke: '#8884d8', strokeWidth: 1, r: 2 }}
                                activeDot={{ strokeWidth: 1, r: 5 }} stroke='#8884d8' />
                            <Line type="monotone" dataKey="deaths.total" name="Deaths" dot={{ stroke: 'red', strokeWidth: 1, r: 2 }}
                                activeDot={{ strokeWidth: 1, r: 5 }} stroke='red' />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </>
        );
    }
}

export default LinesChart;