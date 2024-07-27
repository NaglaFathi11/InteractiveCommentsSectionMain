import './Delete.css'
import DeleteIcon from '../../assets/Images/icon-delete.svg'

export default function DeleteComment(props) {
    // event.target.getAttribute('finalspecialkey') = special key of comment to delete = comment.id
    function HandleDeleteComment(event){

      if (window.confirm("Are you sure you want to delete this comment?")) {

        props.finalDeleteComment(event.target.getAttribute('finalspecialkey'))
    }}
    

  return (
        <>
          {props.finaluserName == "nagla" ?
          <div id='deleteComment'>
          <img src= {DeleteIcon} alt="Not Found" />
          <button finalspecialkey = {props.specialKey} onClick={HandleDeleteComment}>Delete</button></div> : null}
        
        </>
  )}

