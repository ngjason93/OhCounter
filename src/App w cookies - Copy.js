import './App.css';
import React,{useEffect, useState} from 'react' 
import { useCookies } from 'react-cookie'

function Counter() {
  const [drinksin, setDrinksin] = useState(0)
  const [cookies, setCookie, removeCookie ] =useCookies(['tml','standard'])
  const [tml, setTML] = useState(0)

  function calculateDrinksin() {
    var d = new Date().getTime()
    console.log(d + ' D is ')
    var msPast = d-cookies.standard
    console.log(msPast + ' msPast is')
    console.log(tml+' TML IS')
    var timeLeft = tml-msPast
    console.log(timeLeft + ' timeleft is')
    var display = timeLeft/3600000
    display.toFixed(4)
    console.log(display.toFixed(4) + " display is this mother")
    setDrinksin(display.toFixed(5))
  }
    


  function plusone() {
    setTML(tml+3600000)
    setCookie('tml', tml,{ maxAge: 31536000 })
    console.log(tml + ' TML IS')

    
    // setCookie('time', d.getTime())
    console.log(cookies.standard + ' cokies standard')

    
    
  }
  function minusone() {
    setTML(tml-3600000)
    setCookie('tml', tml,{ maxAge: 31536000 })



  }
  function reset() {
    setDrinksin(0)
    removeCookie('standard')
    removeCookie('time')
  }
  useEffect(() => {
    var d = new Date()
    setCookie('standard', d.getTime(), { maxAge: 31536000 })
    console.log(cookies.standard)
    console.log(cookies)
  },[])
  
  useEffect(() => {
    calculateDrinksin()
  })


  return(
    <div>
      {/* <h1> {cookies.standard}</h1> */}
     <div id='maincounter'> {drinksin} Drinks left in body
     <div>{tml} TML is </div>
     <div> {cookies.standard} cookies standard</div>

     
     
     </div>

    <div id='plusminus'>
    <button onClick={plusone}> + </button>
    <button onClick={minusone}> - </button>
    <button onClick={reset}> Reset </button>  
  
      </div>
  </div>
  )
}

function App() {
  return (
    <div >
      <Counter/>
      
    </div>
  );
}

export default App;
