import { useState } from "react";

import { useEffect } from "react";

function Checkboxes() {
  const [currentReason,setCurrentReason]=useState(null)
  const [disabled,setdisabled]=useState(true)
  const [desc,setdesc]=useState("")
  const reasons=["Violence","false information","Spam","Hate Speech","Nudidity","Suicide or self injury","Unauthorized sales","Harrasment","Something else"]

  const handleChange=(reason)=>{
  if(currentReason===reason) setCurrentReason(null)
  else setCurrentReason(reason)

  }
  const handleDesc=(event)=>{
   setdesc(event.target.value)
  }
  useEffect(()=>{
if(currentReason===reasons[8] && desc==="") setdisabled(true)
else if(currentReason!=null)setdisabled(false)

  },[currentReason,desc])
  
    const displayReason = reasons.map((reason,index)=>{
        return(
            <div className="flex gap-2" key={index}>
                <input type="checkbox" checked={currentReason===reason} onChange={()=>handleChange(reason)}/>
                <span>{reason}</span>

            </div>
        )
    })

  return(
<div className="flex flex-col">
{displayReason}
{currentReason===reasons[8] && <div className="flex flex-col">
  <span>Provide an explanaion</span>
<input type="textarea" value={desc} onChange={handleDesc} />
</div> }

<button disabled={disabled} className="disabled:bg-white">Report</button>
</div>

  )
}


export default Checkboxes;
