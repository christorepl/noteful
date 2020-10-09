import React from 'react'

export default class AppError extends React.Component {
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