import './EditReply.css'
import EditIcon from '../../assets/Images/icon-edit.svg'

function EditReply(props) {

  
  return (

    <div id='editIcon'>
        <img src={EditIcon} alt="" />
        <button onClick={props.handleEditMyReply}>Edit</button>
    </div>
    
  
  )
}

export default EditReply