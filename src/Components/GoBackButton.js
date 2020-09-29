import React from 'react'
import { withRouter } from 'react-router-dom'

class GoBackButton extends React.Component {
    render(){
        return (
            <div>
                <button type="button">
                    Go Back
                </button>
            </div>
        )
    }
}

export default withRouter(GoBackButton)