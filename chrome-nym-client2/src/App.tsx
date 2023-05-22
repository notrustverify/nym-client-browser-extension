import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connectMixnet,sendMessage } from './context/mixnetManager'

declare global {
  var nym: any;
  var nymReady: false;
}

function checkNymReady(){
  if(!window.nymReady) {
    console.log("not ready")    
    setTimeout(checkNymReady, 1000);//wait 50 millisecnds then recheck
    return;
}
console.log("ready")

  sendMessage("test","Ef5HmZLWPNBVfu9buT9z42APkmUQ8mkq47Tj7JyXNgMc.CSLXVeJgMEhJvkVD7XX9PNFsMrPNZmnSiHLLhXZec9NM@678qVUJ21uwxZBhp3r56z7GRf6gMh3NYDHruTegPtgMf")

return
}


function App() {

  const [title, setTitle] = React.useState('');
  const [headlines, setHeadlines] = React.useState<string[]>([]);

  React.useEffect(() => {
    
  });

  connectMixnet()
  checkNymReady()
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
