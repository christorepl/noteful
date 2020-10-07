import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import axios from 'axios'
import Noteful from './API/Noteful'
import NotefulContext from './Context/NotefulContext'
import Folder from './Components/Folder'
import Header from './Components/Header'
import Main from './Components/Main'
import MainNote from './Components/MainNote'
import GoBackButton from './Components/GoBackButton'
import './App.css'

class App extends React.Component{
    static contextType = NotefulContext

    state = {
        notes: [],
        folders: [],
    }

    async componentDidMount () {
        const notesResponse = await axios.get(`${Noteful.URL}/notes`)
            this.setState({notes: notesResponse.data })
        const foldersResponse = await axios.get(`${Noteful.URL}/folders`)
            this.setState({folders: foldersResponse.data })
    }

    deleteNote = (noteId) => {
        axios.delete(`${Noteful.URL}/notes/${noteId}`)
        const notes = this.state.notes.filter(note => note.id !== noteId)
        this.setState({ notes })
    }

    addFolder (e) {
        e.preventDefault();
        let folderName = e.target.folderName.value
        axios({
            method: 'post',
            url: `${Noteful.URL}/folders/`,
            headers: {'Content-Type': 'application/json'},
            data: {
                name: `${folderName}`
            }
        })
        const folders = this.state.folders
        this.setState({folders})
    }

    render(){
        const value = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.deleteNote
        };
        return(
            <div className="App">
                    <Route
                        path="/"
                        component={Header}
                    />
                    <NotefulContext.Provider
                    value={value}
                    >
                    <div className="navFlex">
                        <Route 
                            exact path="/"
                            component={Folder}/>
                        <Route 
                            exact path="/"
                            component={Main}
                        />
                        <Route 
                            exact path="/folder/:folderId"
                            component={Folder}
                        />
                        <Route
                            exact path="/folder/:folderId"
                            component={Main}
                        />
                        <Route 
                            exact path="/note/:noteId"
                            component={GoBackButton}
                        />
                        <Route
                            exact path="/note/:noteId"
                            component={MainNote}
                        />
                    </div>
                    </NotefulContext.Provider>
                </div>
        )
    }
}

export default withRouter(App) 