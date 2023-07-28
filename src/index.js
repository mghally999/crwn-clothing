import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavigationProvider } from './contexts/navigation.context';
import { UserProvider } from './contexts/user.context';
import './index.scss';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </NavigationProvider>
);
