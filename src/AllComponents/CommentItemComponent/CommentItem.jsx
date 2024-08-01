import { useState } from 'react';
import './CommentItem.css';
import Counter from '../CounterComponent/Counter';
import DeleteCommentComponent from '../DeleteCommentComponent/DeleteComment';
import RepliesComponent from '../RepliesComponent/Replies';
import ReplyInput from '../ReplyInputComponent/ReplyInput'
import ReplyItem from '../ReplyItemComponent/ReplyItem';
import EditCommentComponent from '../EditCommentComponent/EditComment'



export default function CommentItem(props) {

  
      const [showReplyInput, setShowReplyInput] = useState(false);
          function handleShowReplyIcon() {
          setShowReplyInput(!showReplyInput);
          // console.log('hhhh')
      }



      const [showInputoEdit, setShowInputoEdit] = useState(false);
        function handleEditMyComment(){
           setShowInputoEdit(!showInputoEdit)
           }


           const [newValueAfterEdit, setNewValueAfterEdit] = useState(props.Content)
           function handeOnChangeEdit (event){
            setNewValueAfterEdit(event.target.value)

           }

           function handleEditValue(event){
          // console.log(newValueAfterEdit)
              // console.log(event.target.getAttribute('commentid'))
            const clickedcommentId = event.target.getAttribute('commentid')
              props.NewContenteAfterEdit(newValueAfterEdit , clickedcommentId)
              setShowInputoEdit(false)

           }
    //  console.log(props)
  return (
    <>
      {/* Main Comments */}
      <div id='commentItem'>
        <Counter FinalScore={props.Score} />
        <div id='commentItemContent'>
            <div id='commentHeader'>
              <div id='commentTitle'>
                <img src={props.UserAvatar} alt="Not Found" />
                <h4>{props.UserName}</h4>
                {props.UserName == "nagla" ? <button id='youbtn'>You</button> : null}
                <p>{props.CreatedAt}</p>
              </div>

               <div id='commentIcons'>
                  <DeleteCommentComponent
                    commentId={props.commentId}
                    DeleteCommentFunction={props.DeleteCommentFunction}
                    UserName = {props.UserName} //to show for my comment i=only = nagla
                  />

                {props.UserName == "nagla" && (
                  <EditCommentComponent handleEditMyComment = {handleEditMyComment} />)}
                  
                  {props.UserName != "nagla" && (
                  <RepliesComponent 
                  handleShowReplyIcon = {handleShowReplyIcon}   
                  comment ={props.comment} />
                  )}

    </div>
   </div>

            <div id='commentContent'>
              {showInputoEdit == true ? (
                <>
                <textarea value={newValueAfterEdit} onChange={handeOnChangeEdit}></textarea>
                <button onClick={handleEditValue} commentid = {props.commentId}>Update</button>  </>
              
            )
              
              :   (<p>{props.Content}</p>)}
            </div>




        </div>
      </div>
    {/* Main Comments */}

      {/* Reply Section */}
      <div id='ReplySection'>


       {/*Reply input  */}
        {showReplyInput && (
          <ReplyInput  
            NaglaUserAvatar= {props.NaglaUserAvatar}
            setShowReplyInput ={setShowReplyInput}
            handleAddReply ={props.handleAddReply}
            commentId ={props.commentId}
            UserName = {props.UserName}
  
        
          />
      
        )}

        
        {/*  */}
        
         {/* ui for reply */}
            {props.replies.map(reply => (
        <div id='coverReplyItem' key ={reply.id}>
          
          <ReplyItem 
            replyId = {reply.id}
            replyUserAvatar ={reply.userAvatar}
            replyScore = {reply.score}
            replyUserName ={reply.userName}
            replyCreatedAt ={reply.createdAt}
            replyContent = {reply.content}


          commentId = {props.commentId}
          DeleteReplyFunction = {props.DeleteReplyFunction}
          handleShowReplyIcon = {handleShowReplyIcon}
          UserName ={props.UserName}
          NewReplieseAfterEdit ={props.NewReplieseAfterEdit}
   
          />

     </div>
           ))}
       
      </div>
    </> )}
