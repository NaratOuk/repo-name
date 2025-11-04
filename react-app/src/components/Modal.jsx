import React, { useState } from "react";

const Modal = ({Message}) => {
  const [input, setInput] = useState("");
  function handleSubmit(e){
    
    e.preventDefault();
    Message(input);
    setInput(""); 
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }

    return (
        <div className="modal">
         <form >
            <input type="text" placeholder="name" value={input} onChange={(e) => handleChange(e)} />
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
         </form>
        </div>
  );
};

export default Modal;
