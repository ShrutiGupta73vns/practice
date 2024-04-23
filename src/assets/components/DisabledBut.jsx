import  { useEffect, useState } from 'react'

export default function DisabledBut() {
  
const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [disable,setDisable] = useState(true)
  useEffect(()=>{
    if(input1!="" && input2!=""){
      setDisable(false)
    }
    else{
      setDisable(true)
    }
    
  },[input1,input2])
  
  return (
    <>
      <input
        type="text"
        value={input1}
        onChange={(event) => {
          setInput1(event.target.value);
        }}
      />
      <input
        type="text"
        value={input2}
        onChange={(event) => {
          setInput2(event.target.value);
        }}
      />

      <button disabled={disable} className="disabled:bg-white" >Submit</button>
    </>
  );
}

