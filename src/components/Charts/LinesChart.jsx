import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import styles from "./Chart.module.css";

class LinesChart extends React.Component {

    render() {
        const { historical } = this.props;
        var historical_data = Object.entries(historical.cases).map(([key, value]) => {
            return  {date: key, confirmed: value, deaths: historical.deaths[key], recovered: historical.recovered[key] };
        });
        // console.log(historical_data);

        
        return (
            <>
                <div className={styles.chartpanel}>
                    <h3>Cases over time</h3>
                    <h2>Worldwide</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart width={800} height={400} data={historical_data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                            <CartesianGrid vertical={false} strokeDasharray="3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} iconSize={22} />
                            <Line type="monotone" dataKey="confirmed" name="Confirmed" dot={{ stroke: '#a79eb7', strokeWidth: 1, r: 2 }}
                                activeDot={{ strokeWidth: 1, r: 5 }} stroke='#a79eb7' />
                            <Line type="monotone" dataKey="deaths" name="Deaths" dot={{ stroke: '#d84d4d', strokeWidth: 1, r: 2 }}
                                activeDot={{ strokeWidth: 1, r: 5 }} stroke='#d84d4d' />
                            <Line type="monotone" dataKey="recovered" name="recovered" dot={{ stroke: '#8aca2b', strokeWidth: 1, r: 2 }}
                                activeDot={{ strokeWidth: 1, r: 5 }} stroke='#8aca2b' />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </>
        );
    }
}

export default LinesChart;