import React from 'react'
import PropTypes from 'prop-types'

export default class NotesErrors extends React.Component {
    state = {
        hasError: false
    }
    
    static getDerivedStateFromError(err) {
       return { hasError: true }
    }

    render(){
        if(this.state.hasError) {
            return <div>Something went wrong with adding your new note. Please reload the page and try again.</div>
        }
        return <div>{this.props.children}</div>
    }
}

NotesErrors.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}