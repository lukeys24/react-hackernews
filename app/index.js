import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Posts from './components/Posts'
import New from './components/New'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>

                    <Switch>
                        <Route 
                            exact
                            path="/"
                            component={Posts}
                        />

                        <Route 
                            exact
                            path="/new"
                            component={New}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('app')
)