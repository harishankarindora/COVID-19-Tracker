import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavbar.module.css";

class HeaderNavbar extends React.Component {
    render() {

        const mq = window.matchMedia("(max-width: 1024px)");

        const openMenu = () => {
            if (mq.matches) {
                document.getElementById('headernavbar').style.height = "300px";
                document.getElementById('menulines').style.display = "none";
                document.getElementById('closemenulines').style.display = "block";
            }
        }

        const closeMenu = () => {
            if (mq.matches) {
                document.getElementById('headernavbar').style.height = "0px";
                document.getElementById('closemenulines').style.display = "none";
                document.getElementById('menulines').style.display = "block";
            }
        }

        return (

            <div className={styles.headerPanel}>
                <div className={styles.headerBox}>
                    <div><h3 className={styles.pageName}>C</h3></div>
                    <div><img className={styles.logo} src="./logo.png" alt='logo' height="40 " width="40"></img></div>
                    <div><h3 className={styles.pageName}>VID-19 Tracker</h3></div>
                    <div className={styles.headerNavBar} id="headernavbar">
                        <ul>
                            <li id="home"><NavLink exact to="/" activeClassName={styles.selected} onClick={closeMenu}> Home <span className={styles.navIndicator} /></NavLink></li>
                            <li id="news"><NavLink to="/news" activeClassName={styles.selected} onClick={closeMenu}> News <span className={styles.navIndicator} /></NavLink></li>
                            <li id="prevention"><NavLink to="/Prevention" activeClassName={styles.selected} onClick={closeMenu}> Prevention <span className={styles.navIndicator} /></NavLink></li>
                            <li id="about"><NavLink to="/about" activeClassName={styles.selected} onClick={closeMenu}> About <span className={styles.navIndicator} /></NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.headerSpacer}></div>
                    <div className={styles.headerButtons}>
                        <span className={styles.closeMenuLines} id="closemenulines" onClick={closeMenu}>&times;</span>
                        <span className={styles.menuLines} id="menulines" onClick={openMenu}>&#9776;</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderNavbar;