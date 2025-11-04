import React, { use } from "react";

function Text(){
    // react hook

    return (
      <>  

      <p>{text}</p>
      <button onClick={()=>setText(`hi`)}>Chnage Text</button>

      </>
          
    )
}

export default Text


//useState return [value,function]