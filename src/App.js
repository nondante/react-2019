import React, { Component } from 'react';
import Posts from "./containers/PostsContainer";
import UserList from "./containers/UserListContainer";
import Header from "./containers/HeaderContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
              <div className="col-8">
                <Posts />
              </div>
              <div className="col-4">
                <UserList />
              </div>
          </div>
        </div>
        {/*<PostModal />*/}
      </div>
    );
  }
}

export default App;
