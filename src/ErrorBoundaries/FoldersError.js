import React from 'react'

export default class NotesError extends React.Component {
    state = {
        hasError: false
    }
    
    static getDerivedStateFromError(err) {
       return { hasError: true }
    }

    render(){
        if(this.state.hasError) {
            return <div>Something went wrong with adding your new folder.</div>
        }
        return <div>{this.props.children}</div>
    }
}