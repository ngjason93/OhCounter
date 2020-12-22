import './App.css';
import React,{useEffect, useState} from 'react' 
import { useCookies } from 'react-cookie'

function Counter() {
  const [counter, setCounter] = useState(0)
  const [drinksin, setDrinksin] = useState(0)
  const [cookies, setCookie, removeCookie ] =useCookies(['tml','standard'])
  const [tml, setTML] = useState(0)

  function calculateDrinksin() {
    var d = new Date().getTime()
    // console.log(d + ' D is ')
    var msPast = d-cookies.standard
    // console.log(msPast + ' msPast is')
    // console.log(tml+' TML IS')
    var timeLeft = tml-msPast
    // console.log(timeLeft + ' timeleft is')
    var display = timeLeft/3600000
    display.toFixed(4)
    // console.log(display.toFixed(4) + " display is this mother")
    // setDrinksin(display.toFixed(5))
    setDrinksin(display.toFixed(6))
  }
    


  function plusone() {
    console.log(typeof tml)
      var newtml = tml+ Number(3600000)
      setTML(newtml)
      // console.log(tml + ' TML IS')
      localStorage.setItem('tml',newtml)
      // console.log('TML AFTER LOCALSTORAGE '+ localStorage.getItem('tml'))
    
  }
  function minusone() {
    setTML(tml-3600000)
    // setCookie('tml', tml)
    localStorage.setItem('tml',tml-3600000)




  }
  function reset() {
    setDrinksin(0)
    removeCookie('standard')
    removeCookie('tml')
    localStorage.removeItem('standard')
    localStorage.removeItem('tml')
  }
  useEffect(() => {
    console.log(localStorage.getItem('standard')+'first')
    if (localStorage.getItem('standard') == null){
      var d = new Date()
      setCookie('standard', d.getTime())
      localStorage.setItem('standard',d.getTime())
}
      else {
        // console.log('typeof storage of standard is '+typeof (localStorage.getItem('standard')))
        setCookie('standard', localStorage.getItem('standard'))
        // console.log('GOT COOKIE FROM STORAGE' + cookies.standard)
        // console.log(cookies.standard)
        // console.log(cookies)
      }
   if (localStorage.getItem('tml')){
      // console.log('TYPE OF IS YES')
      setTML(Number(localStorage.getItem('tml')))
      // console.log(' local storage set TML as ' + localStorage.getItem('tml'))

    }
  },[])
  
  useEffect(() => {
    calculateDrinksin()
    setCounter(setInterval(() => counter+1 , 1000))
  },[counter])


  return(
    <div>
      {/* <h1> {cookies.standard}</h1> */}
     <div id='maincounter'> {drinksin} Drinks left in body
     {/* <div> Time in Milliseconds {tml} is DEBUGGER </div> */}

     
     
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
