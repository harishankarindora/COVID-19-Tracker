import React from "react";
import "./Routes.css";
import { About } from "../components";

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <div className="content-container">
                    <About/>
                </div>
            </>
        )
    }
}

export default AboutPage;