import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home/Home';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
  ]);

  useEffect(() => {
    console.log('App component has rendered');
  });

  return (
    <div className="app-container">
      <Greeting name="Maria" />
      <Counter />
      <Footer/>
      <div className="app-content">{routes}</div>
    </div>
  );
}

export default App;