import React from "react";
import styles from "./Countries.module.css";

class Countries extends React.Component {

    render() {
        const { countries } = this.props;

        const search = () => {
            let filter = document.getElementById('myinput').value.toUpperCase();

            let mytable = document.getElementById('mytable');

            let tr = mytable.getElementsByTagName('tr');

            for (var i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName('td')[0];

                if (td) {
                    let textvlaue = td.textContent || td.innerHTML;

                    if (textvlaue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
        return (
            <>
                <div className={styles.countriesTablePanel}>
                    <div className={styles.tableHeader}>
                        <span>Countries Affected</span>
                        <input type="text" className={styles.searchBox} id="myinput" name="" placeholder="Search..." onKeyUp={search}></input>
                    </div>
                    <div className={styles.table}>
                        <table id="mytable">
                            <thead>
                                <tr>
                                    <th>Countries</th>
                                    <th>Total Cases</th>
                                    <th>New Cases</th>
                                    <th>Total Deaths</th>
                                    <th>Total Recovered</th>
                                    <th>Active Cases</th>
                                    <th>Total Tests</th>
                                    <th>Fatality Rate</th>
                                    <th>Recovery Rate</th>
                                    <th>Cases/<br />1M POP</th>
                                    <th>Deaths/<br />1M POP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countries.map((country) => (
                                    <tr key={country.country}>
                                        <td><img className={styles.flagimg} src={country.countryInfo.flag} height="15" width="16" alt="flag"></img>{country.country}</td>
                                        <td>{(country.cases).toLocaleString('en-IN')}</td>
                                        <td>{(country.todayCases).toLocaleString('en-IN')}</td>
                                        <td>{(country.deaths).toLocaleString('en-IN')}</td>
                                        <td>{(country.recovered).toLocaleString('en-IN')}</td>
                                        <td>{(country.active).toLocaleString('en-IN')}</td>
                                        <td>{(country.tests).toLocaleString('en-IN')}</td>
                                        <td>{(country.deaths / country.cases * 100).toPrecision(4)}%</td>
                                        <td>{(country.recovered / country.cases * 100).toPrecision(4)}%</td>
                                        <td>{(country.casesPerOneMillion).toLocaleString('en-IN')}</td>
                                        <td>{(country.deathsPerOneMillion).toLocaleString('en-IN')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )

    }
}

export default Countries;