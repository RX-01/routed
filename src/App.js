import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { About, Inbox, Home, Message, Client, NotFound } from './components'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        Post: []
    }

}

  componentDidMount(){  
    Client.getEntries({'content_type': 'blogPost'}).then(res => {
      // console.log(res.items)
      this.setState({Post: res.items})
    })
  }




  render() {
    return (
      <div className="App">



          <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/inbox">Inbox</Link></li>
            </ul>

            <hr/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>

            <Route exact path="/inbox" render = {(props) => 
              <Inbox {...props} entries = {this.state.Post}/>
            }/>

        
            <Route  path="/inbox/:slug" component={Message}/> 

            <Route component={NotFound}/>
            </Switch>
          </div>
          </Router>

  
  
      </div>
    );
  }
}

App.displayname = "App"

export default App;

// <Route exact path="/inbox/:slug" render={(props) => 
//   <Message {...props} entries = {this.state.Post}/>
// }/>