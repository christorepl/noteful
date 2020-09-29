import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import STORE from './STORE'
import Folder from './Components/Folder'
import Header from './Components/Header'
import Main from './Components/Main'
import GoBackButton from './Components/GoBackButton'
import './App.css'

class App extends React.Component{
    state = {
        folders: STORE.folders,
        notes: STORE.notes
    }
    
    render(){
        return(
            <div className="App">
                <Route
                    path="/"
                    component={Header}
                />
                <Route 
                        exact path="/"
                        render={() => <div className="navFlex">
                        <Folder
                        folders={this.state.folders}
                        notes={this.state.notes}
                        />
                        <Main folders={this.state.folders}
                            notes={this.state.notes}
                        />
                        </div>}
                />
                <Route 
                        exact path="/folder/:folderId"
                        render={() => 
                        <div className="navFlex">
                        <Folder
                        folders={this.state.folders}
                        notes={this.state.notes}
                        />
                        <Main folders={this.state.folders}
                            notes={this.state.notes}
                        />
                        </div>}
                />
                <Route 
                    exact path="/note/:noteId"
                    render={() => 
                        <div className="navFlex">
                            <GoBackButton/>
                            <Main />
                        </div>
                    }
                    />
                </div>
        )
    }
}

export default withRouter(App) 