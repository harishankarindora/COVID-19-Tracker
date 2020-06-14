import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import styles from "./NewsPageHeadingBox.module.css";

class NewsPageHeadingBox extends React.Component {
    render() {
        return (
            <>
                <div className={styles.headingbox}>
                    {this.props.data.endpoint === "news/trending" ?
                        <>
                            <h3 className={styles.heading}>Headlines</h3>
                            <div className={styles.headingbuttons}>
                                <div className={`${styles.selectlanguage} ${styles.button}`} area-label="Select Language">
                                    <select className={styles.select} value={this.props.data.language} onChange={this.props.data.handleLanguageChange}>
                                        <option value="en">English</option>
                                        <option value="hi">Hindi</option>
                                        <option value="zh_CN"> 简体中文</option>
                                        <option value="zh_TW">繁體中文</option>
                                        <option value="ja">日本語</option>
                                        <option value="ko">코리언</option>
                                        <option value="nl">Nederlands</option>
                                        <option value="de">Deutsch</option>
                                        <option value="it">Italiano</option>
                                        <option value="ms">Bahasa Melayu</option>
                                        <option value="id">Bahasa Indonesia</option>
                                        <option value="th">ภาษาไทย</option>
                                        <option value="vi">Tiếng Việt</option>
                                        <option value="ta">தமிழ்</option>
                                    </select>
                                </div>
                                <div className={`${styles.share} ${styles.button}`} role="button" onClick={this.props.data.togglePopup} aria-label="Share on social media">
                                    <ShareOutlinedIcon fontSize='small' htmlColor='#ee82ee'/>Share
                                </div>
                            </div>
                        </>
                        :
                        <div className={styles.searchedquery} >
                            <h3>{this.props.data.query}</h3>
                            <span onClick={this.props.data.clearSearchResult}><ClearIcon htmlColor='#ee82ee'/></span>
                        </div>
                    }
                </div>
            </>
        )
    }
}
export default NewsPageHeadingBox;