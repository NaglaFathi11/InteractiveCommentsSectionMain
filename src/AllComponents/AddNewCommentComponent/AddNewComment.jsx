import { useState } from 'react'
import './AddNewComment.css'

 export default function AddNewComment(props) {
    // ValueInput = input field value = event.target.value
    const [ValueInput, setValueInput] = useState('')

    function HandleSendComment(){
        props.CommentAdded(ValueInput)
        setValueInput('')
    }

    function HandleChangeComment (event){ // event.target.value = value of input field
        setValueInput(event.target.value) 
    }

  return (
   <div id='NewComment'>
        <img src={props.UserAvatar} alt="Not Found"/>
        <textarea type="text" placeholder='Add a comment...' value={ValueInput} onChange={HandleChangeComment}/>
        <button onClick={HandleSendComment}>SEND</button>
   </div>
  )}
