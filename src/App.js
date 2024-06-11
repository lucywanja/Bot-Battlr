import logo from './logo.svg';
import './App.css';
import './output.css';
import React, { useEffect, useState } from 'react'
import BotCollection from './component/BotCollection.js'
import YourBotArmy from './component/YourBotArmy.js'


function App() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] =useState ([]);
  const [bnState, setBtnState] =useState ("botCollection");

  useEffect(() => {
    fetch("https://jsonbackend-7hqi.onrender.com/bots")
    .then((r) => r.json())
    .then((data) => setBots(data));
  }, []);
 

  function handleClickBot(bot) {
    // console.log(bot)
    // const movedBots = bots.filter((item) => item.id != bot.id )
    // //setBots(movedBots);
    army.forEach((item)=>{
      if(item.id === bot.id){
        bot = null;
      }
    })
    if(bot != null){
      setArmy([...army,bot])
      window.alert('bot Added')
    }else{
      window.alert('bot already Added')
    }

  }


  // Release the bot from army page
  function releaseBot(bot) {
    // console.log(item)

    setArmy(army.filter((item) => item.id != bot.id ))
    window.alert('bot released')
     
  }

  function handleDelete(bot) {
    
    
    fetch("https://jsonbackend-7hqi.onrender.com/bots/"+bot.id , {method:'delete'})
    .then((r) => r.json())
    .then(() => {
      setBots(bots.filter((item) => item.id != bot.id ))
      setArmy(army.filter((item) => item.id != bot.id ))
    });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex flex-row justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Bot Army</h1>
        <div>
          <button className="mx-2 p-2 bg-blue-700 hover:bg-blue-800 rounded" onClick={()=>setBtnState("botCollection")}>Bot Collection</button>
          <button className="mx-2 p-2 bg-blue-700 hover:bg-blue-800 rounded" onClick={()=>setBtnState('yourBotArmy')}>Your Bot Army</button>
        </div>
      </nav>
      {
        bnState == "botCollection" ?
          <BotCollection handleClickBot={handleClickBot} bot={bots}/> :
          <YourBotArmy army={army} releaseBot={releaseBot} handleDelete={handleDelete}/>

      }
      {/* <BotCollection/>
      <YourBotArmy/> */}
    </div>
  );
}

export default App;
