import React from "react";
import { FetchGlobalData, FetchHistoricalData } from "../api"
import { HomePageHeadingBox, SharePopup, MainSummary, OtherSummary, Countries, LinesChart, BarsChart, ScrollToTop} from "../components";
import { PageLoader } from "../components";
import "./Routes.css";

class HomePage extends React.Component {

    state = {
        GlobalSummary: [],
        Countries: [],
        Historical: [],
        isLoading: true,
        showPopup: false
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    async componentDidMount() {
        const globalData = await FetchGlobalData();
        this.setState({ GlobalSummary: globalData.globalSummary.data });
        this.setState({ Countries: globalData.countries.data });

        const historicalData = await FetchHistoricalData();
        this.setState({ Historical: historicalData.historical.data })

        this.setState({ isLoading: false });
    }


    render() {
        if (this.state.isLoading) {
            return <div className="loading"><PageLoader /></div>
        }
        return (
            <>
                {this.state.showPopup ?
                    <SharePopup
                        togglePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
                <div className="content-container">
                    <div className="heading-container" style={{ width: '100%', marginTop: '45px' }}>
                        <HomePageHeadingBox summary={this.state.GlobalSummary} togglePopup={this.togglePopup.bind(this)} />
                    </div>
                    <div className="main-summary-container" style={{ width: '100%' }}>
                        <MainSummary summary={this.state.GlobalSummary} />
                    </div>
                    <div className="other-summary-container" style={{ width: '100%' }}>
                        <OtherSummary summary={this.state.GlobalSummary} />
                    </div>
                    <div className="table-container" style={{ width: '100%', marginBottom: '20px' }}>
                        <Countries countries={this.state.Countries} />
                    </div>
                    <div className="chart-container" style={{ width: '100%' }}>
                        <LinesChart historical={this.state.Historical} />
                        <BarsChart historical={this.state.Historical} />
                    </div>
                </div>
                <ScrollToTop/>
            </>
        )
    }
}
export default HomePage;