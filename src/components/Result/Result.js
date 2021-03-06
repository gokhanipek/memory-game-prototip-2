import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Result extends Component {
    render() {
        const {userName, score} = this.props.location;
        console.warn(this.props);
        return (
            <div>
                {userName}, {score}
            </div>
        )
    }
}

export default withRouter(Result)