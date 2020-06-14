import React from "react";
import { FetchNewsData } from "../api";
import { HorizontalCards, VerticalCards } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardSkeletonLoader, PageLoader, NewsSearchBox, NewsPageHeadingBox, SharePopup, ScrollToTop } from "../components";
import "./Routes.css";

class NewsPage extends React.Component {

    state = {
        Articles: [],
        language: 'en',
        limit: 20,
        endpoint: 'news/trending',
        input: '',
        query: '',
        isLoading: true,
        showPopup: false,
    }

    componentDidMount() {
        this.loadArticals();
    }

    async loadArticals() {
        const Data = await FetchNewsData(this.state.endpoint, this.state.query, this.state.language, this.state.limit);
        this.setState({ Articles: Data.items, isLoading: false });
    }

    loadMoreArticals = () => {
        this.setState(prevState => ({ limit: prevState.limit + 10. }), this.loadArticals);
    }

    handleLanguageChange = (event) => {
        this.setState({ endpoint: 'news/trending', language: event.target.value, limit: 20, isLoading: true }, this.loadArticals);
    }

    handleSearchInput = (event) => {
        this.setState({ input: event.target.value });
    }

    handleSearch = () => {
        if (this.state.input && this.state.input.replace(/\s\s+/g, ' ') !== " ") {
            this.setState({ endpoint: 'news/', query: this.state.input.replace(/\s\s+/g, ' '), limit: 20, isLoading: true }, this.loadArticals);
        }
    }

    clearSearchResult = () => {
        if (this.state.query) {
            this.setState({ endpoint: 'news/trending', input: '', query: '', limit: 20, isLoading: true }, this.loadArticals);
        }
    }

    clearSearchBox = () => {
        this.setState({ input: '' })
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
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
                    <div className="news-search-container" style={{ width: '100%', margin: '40px auto 40px' }}>
                        <NewsSearchBox data={{
                            input: this.state.input,
                            handleSearchInput: this.handleSearchInput.bind(this),
                            handleSearch: this.handleSearch.bind(this),
                            clearSearchBox: this.clearSearchBox.bind(this)
                        }} />
                    </div>
                    <div className="news-heading-container" style={{ width: '100%', margin: '0px 0px 20px', padding: '4px 0px 4px 0px' }}>
                        <NewsPageHeadingBox data={{
                            endpoint: this.state.endpoint,
                            language: this.state.language,
                            query: this.state.query,
                            handleLanguageChange: this.handleLanguageChange.bind(this),
                            clearSearchResult: this.clearSearchResult.bind(this),
                            togglePopup: this.togglePopup.bind(this)
                        }} />
                    </div>
                    <div className="news-content-container" style={{ width: '100%', marginBottom: '20px' }}>
                        <InfiniteScroll
                            dataLength={this.state.Articles.length}
                            next={this.loadMoreArticals}
                            hasMore={true}
                            scrollThreshold={1.0}
                            loader={<><CardSkeletonLoader /></>}
                        >
                            {this.state.endpoint === "news/trending" ?
                                <>
                                    <HorizontalCards articles={this.state.Articles} ></HorizontalCards>
                                    <VerticalCards articles={this.state.Articles} slicevalue='5'></VerticalCards>
                                </>
                                :
                                <>
                                    <VerticalCards articles={this.state.Articles} slicevalue='0' ></VerticalCards>
                                </>
                            }
                        </InfiniteScroll>
                    </div>
                </div>
                <ScrollToTop/>
            </>
        )
    }
}

export default NewsPage;