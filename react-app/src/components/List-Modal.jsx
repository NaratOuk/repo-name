import React, { useState } from "react";
import Modal from "./Modal";

const ListModal = () =>{

    const [message,setMessage] = useState([]);

    function recieveMessage(m){
        console.log(m);
        setMessage([...message,m]);
    }

    return(
        <div className="list-modal">
        <Modal Message={recieveMessage}/>
        {message.map((m) =>(
            <ListItem item={m}/>
        ))}
        </div>
    )
}

export default ListModal;

const ListItem = ({item}) => {
    return <>
        
            <p>{item}</p>
        
    </>
};
