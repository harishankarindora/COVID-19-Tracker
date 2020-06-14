import React from "react";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import styles from "./NewsSearchBox.module.css";

class NewsSearchBox extends React.Component {
    render() {
        return (
            <div className={styles.searchBox}>
                <input className={styles.inputBox} type="text" onChange={this.props.data.handleSearchInput} value={this.props.data.input} placeholder="Search for topics, location & sources" />
                {this.props.data.input ?
                    <span className={styles.searchButton} id="clear-input-box" onClick={this.props.data.clearSearchBox} style={{ fontSize: 30, color: "gray" }}>&times;</span>
                    : null
                }
                <button className={styles.searchButton} onClick={this.props.data.handleSearch}>
                    <SearchOutlinedIcon/>
                </button>
            </div>
        )
    }
}
export default NewsSearchBox;