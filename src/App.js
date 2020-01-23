import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import { INSTAGRAM_APIKEY, REDIRECT_URL } from './config.js'

function App() {
  return (
    <div className="App">
      <header>
        <p>Welcome to the Instagram Fetcher</p>
        <h1 className="App-title">Facebook Auth Example</h1>
        <Facebook />
      </header>
      <div>
        <a href={`https://api.instagram.com/oauth/authorize
        ?client_id=${INSTAGRAM_APIKEY}
        &redirect_uri=${REDIRECT_URL}
        &scope=user_profile,user_media
        &response_type=code`} >
          Sign In
        </a>
      </div>
    </div>
  );
}

export default App;
