//192.168.1.14:3000
//import React, {useState}  from 'react';
import React, { Suspense, lazy } from 'react';
//import useStateWithCallback from '../useStateWithCallBack';
import 'fontsource-roboto';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//hash router for github pages
//https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import RecipesPage from "./recipes/RecipesPage";
import HomePage from './home/HomePage';
import Header from './shared/Header';
import AllItemsPage from "./all-items/AllItemsPage";


//lazy load admin stuff
const AdminTablePage = lazy(() => import('./admin/AdminTablePage'));
const CreateGroceryPage = lazy(() => import('./admin/CreateGroceryPage'));
const CreateRecipePage = lazy(() => import('./admin/CreateRecipePage'));

function App(){
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route path="/admin" component={AdminTablePage} />
          <Route path="/create/:id" component={CreateGroceryPage} />
          <Route path="/create" component={CreateGroceryPage} />
          <Route path="/createrecipe" component={CreateRecipePage} />
          <Route exact path="/recipes" render={() => <RecipesPage />} />
          <Route exact path="/all" render={() => <AllItemsPage  />} />
          <Route path="/" render={() => <HomePage />} />
        </Switch>
        </Suspense>
      </Router>
    )
}

export default App;