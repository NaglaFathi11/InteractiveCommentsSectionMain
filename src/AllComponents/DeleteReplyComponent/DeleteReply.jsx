
import './DeleteReply.css'
import DeleteIcon from '../../assets/Images/icon-delete.svg'

export default function DeleteReply(props) {

    function HandleReplyComment (event) {
      const myCommentId = event.target.getAttribute('commentid')
      const myReplyId = event.target.getAttribute('replyid')
          if (window.confirm("Are you sure you want to delete your reply? 🤔")){
                  props.DeleteReplyFunction(myCommentId, myReplyId )
          }
    
    
       
        //  console.log(event.target.getAttribute('commentid'))
        //  console.log(event.target.getAttribute('replyid'))
    
    }
 
  return (
        <>
          { props.UserName == "nagla" ?
          <div id='deleteComment'>
          <img src= {DeleteIcon} alt="Not Found" />
          <button commentid = {props.commentId}  replyid = {props.replyId} onClick = {HandleReplyComment}> Delete </button></div>
           : null }  
        </>
  )
}

