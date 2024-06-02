// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <PrivateRoute path="/products/:id" component={ProductDetailsPage} />
            <Route path="*" render={() => <Redirect to="/login" />} />
          </Switch>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
