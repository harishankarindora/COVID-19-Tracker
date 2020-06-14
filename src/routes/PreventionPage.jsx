import React from "react";
import {PreventionPageHeadingBox, Prevention} from "../components";
import "./Routes.css";

class PreventionPage extends React.Component {

    render() {
        return (
            <>
                <div className="prevention-heading" style={{backgroundColor: '#24292e'}}>
                    <PreventionPageHeadingBox></PreventionPageHeadingBox>
                </div>
                <div className="content-container">
                    <Prevention></Prevention>
                </div>
            </>
        )
    }
}

export default PreventionPage;