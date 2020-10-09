import React from 'react'
import PropTypes from 'prop-types'

export default class AppErrors extends React.Component {
    state = {
        hasError: false
    }
    
    static getDerivedStateFromError(err) {
       return { hasError: true }
    }

    render(){
        if(this.state.hasError) {
            return <div>Something went wrong with the app. Please reload the page and try again.</div>
        }
        return <div>{this.props.children}</div>
    }
}

AppErrors.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}