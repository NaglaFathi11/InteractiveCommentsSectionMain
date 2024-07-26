import './Delete.css'
import DeleteIcon from '../../assets/Images/icon-delete.svg'

function DeleteComment(props) {
 
    function HandleDeleteComment(event){

         if (window.confirm("Are you sure you want to delete this comment?")) {
   
        // console.log(event.target.getAttribute('finalspecialkey'))
        props.finalDeleteComment(event.target.getAttribute('finalspecialkey'))
        // DeleteCommentFunction(event.target.getAttribute('finalspecialkey)
        //  function DeleteCommentFunction(event){
        // console.log(event)}
    }}
    

  return (
        <>
        {props.finaluserName == "nagla" ?
        <div id='deleteComment'>
        <img src= {DeleteIcon} alt="Not Found" />
            <button finalspecialkey = {props.specialKey} onClick={HandleDeleteComment}>Delete</button></div>
            : null}
        
          </>
  )
}

export default DeleteComment