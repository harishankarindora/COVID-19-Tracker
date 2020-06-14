import React from "react";
import { lastupdate } from "./Utils/TimeDifference";
import styles from "./VerticalCards.module.css";

class VerticalCards extends React.Component {
    render() {
        const { articles, slicevalue } = this.props;

        return (
            <div className={styles.verticalPanels}>
                {articles.slice(slicevalue).map((article) => (
                    <div className={styles.newsPanel} key={article.nid}>
                        <a href={article.url} target="__blank" className={styles.newsCard}>
                            <div className={styles.newsImage} style={{ backgroundImage: `url(${article.urlToImage} )` }}></div>
                            <div className={styles.news}>
                                <div className={styles.newsTitle}>{article.title}</div>
                                <div className={styles.newsDescription}>{article.description}</div>
                                <div className={styles.newsProvider}>
                                    <div className={styles.providerName}>{article.siteName}</div>
                                    <div className={styles.providerTime}>{lastupdate(article.publishedAt)}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default VerticalCards;