import './EditComment.css'
import EditIcon from '../../assets/Images/icon-edit.svg'

function EditComment(props) {

  
  return (
    <div id='editIcon'>
        <img src={EditIcon} alt="" />
        <button onClick={props.handleEditMyComment}>Edit</button>
    </div>
  )
}

export default EditComment