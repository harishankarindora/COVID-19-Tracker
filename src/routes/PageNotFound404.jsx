import React from "react";

class PageNotFound404 extends React.Component {

    render() {
        const pagestyle = {
            color: '#4b5055',
            fontSize: '70px',
            fontWeight: 'bolder',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
        return (
            <div className="pagenotfound" style={pagestyle}>
                <h1 style={{fontSize: '180px'}}>404</h1>
                <h2>Oops! Page not Found</h2>
            </div>
        )
    }
}

export default PageNotFound404;