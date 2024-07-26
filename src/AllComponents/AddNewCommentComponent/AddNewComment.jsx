import { useState } from 'react'
import './AddNewComment.css'


 export default function AddNewComment(props) {
    // console.log(props)
    // ================== props.initialValue || ''
    const [ValueInput, setValueInput] = useState('')

    function HandleSendComment(){
        props.AddNewComment(ValueInput)
        setValueInput('')
    }

    function HandleChangeComment (event){
        setValueInput(event.target.value)
    }

  return (
   <div id='NewComment'>
        <img src={props.UserAvatar} alt="Not Found"/>
        <textarea type="text" placeholder='Add a comment...' value={ValueInput} onChange={HandleChangeComment}/>
        <button onClick={HandleSendComment}>SEND</button>
   </div>
  )
}
