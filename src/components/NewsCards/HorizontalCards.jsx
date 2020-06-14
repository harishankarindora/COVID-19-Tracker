import React from "react";
import style from "./HorizontalCards.module.css";

class horizontalCards extends React.Component {
    render() {
        const { articles } = this.props;

        return (
            <div className={style.horizontalPanels}>
                {articles.slice(0, 5).map((article) => (
                    <div className={style.newsPanel} key={article.nid}>
                        <a href={article.url} target="__blank" className={style.newsCard}>
                            <div className={style.newsImageWrapper}>
                                <div className={style.newsImage} style={{ backgroundImage: `url(${article.urlToImage} )` }}></div>
                            </div>
                            <div className={style.news}>
                                <div className={style.newsTitle}>{article.title}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default horizontalCards;