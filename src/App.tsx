import { useEffect, useRef, useState } from "react"


function App() {
const [socket,setSocket]=useState();
const inputRef= useRef();

function send(){
  if(!socket){
    return;
  }
  //@ts-ignore
  const message=inputRef.current.value;
  //@ts-ignore
  socket.send(message) ;

}

useEffect(()=>{
  const ws=new WebSocket("ws://localhost:8080");
  setSocket(ws);
  

  ws.onmessage=(ev)=>{
    alert(ev.data)
  }

},[])
  return (
    <div>
    <input ref={inputRef}  type="text" placeholder="meassage...." />
    <button onClick={send}>send</button>
    </div>
  )
}

export default App
