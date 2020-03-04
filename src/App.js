import React from 'react';
import './App.css';
import Todos from './todos/containers/Todos';
import Header from './todos/containers/Header';
import Notifications from './todos/containers/Notifications';
import Footer from './todos/containers/Footer';

function App() {
  return (
    <div className="todoapp">
      <Notifications />
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
