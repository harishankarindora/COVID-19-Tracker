import React from "react";
import style from "./CardSkeletonLoader.module.css";

class CardSkeletonLoader extends React.Component {
    render() {
        return (
            <div className={style.card}>
                <span className={`${style.Skeleton} ${style.image}`}></span>
                <div className={style.text}>
                    <span className={`${style.Skeleton} ${style.title}`}></span>
                    <span className={`${style.Skeleton} ${style.description}`}></span>
                    <span className={`${style.Skeleton} ${style.description}`}></span>
                    <div className={style.subtext}>
                        <span className={`${style.Skeleton} ${style.source}`}></span>
                        <span className={`${style.Skeleton} ${style.time}`}></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardSkeletonLoader;