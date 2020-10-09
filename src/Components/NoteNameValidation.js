import React from 'react'
import NotefulContext from '../Context/NotefulContext'

export default class NoteNameValidation extends React.Component {
    static contextType = NotefulContext

    render(){
        // console.log('val component ran', this.context.err)
        const err = this.context.err
        return(
            <div className="errorMessage">
                {err}
            </div>
        )
    }
}