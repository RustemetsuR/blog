import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './containers/Pages/Home/Home';
import AddPost from './containers/Pages/AddPost/AddPost';
import Contacts from './components/Pages/Contacts/Contacts';
import About from './components/Pages/About/About';
import SinglePost from './containers/Pages/SinglePost/SinglePost'
import HeaderNavigation from './components/UI/HeaderNavigation/HeaderNavigation';
import EditPost from './containers/Pages/EditPost/EditPost';

const App = () => {

  return (
    <div className="App">
      <div className="back">
         <BrowserRouter>
      <HeaderNavigation/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/posts/add" component={AddPost}/>
         <Route path="/posts/:id/edit/" component={EditPost}/>
         <Route path="/posts/:id/" component={SinglePost}/>
         <Route path="/about" component={About}/>
         <Route path="/contacts" component={Contacts}
        />
       </Switch>
      </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;
