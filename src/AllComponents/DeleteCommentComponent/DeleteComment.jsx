import './DeleteComment.css'
import DeleteIcon from '../../assets/Images/icon-delete.svg'

export default function DeleteComment(props) {
  
    function HandleDeleteComment(event){

      if (window.confirm("Are you sure you want to delete your comment? 🤔")) {

        props.DeleteCommentFunction(event.target.getAttribute('commentid'))
    }
  
  }
    

  return (
        <>
          {props.UserName == "nagla" ?
          <div id='deleteComment'>
          <img src= {DeleteIcon} alt="Not Found" />
          <button  commentid = {props.commentId}    onClick={HandleDeleteComment}>Delete</button></div> : null} 
        
        </>
  )}

