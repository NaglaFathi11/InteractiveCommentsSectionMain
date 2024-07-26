import { useState } from 'react';
import './CommentItem.css';
import Counter from '../CounterComponent/Counter';
import DeleteCommentComponent from '../DeleteComponent/Delete';
import RepliesComponent from '../RepliesComponent/Replies';

export default function CommentItem(props) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  function handleReplyClick() {
    setReplyContent(`@${props.comment.userName}`)
    setShowReplyInput(!showReplyInput);
  }

  function handleSendReply() {
    props.handleAddReply(replyContent, props.specialKey);
    setReplyContent('');
    setShowReplyInput(false);
  }

  function handleReplyChange(event) {
    setReplyContent(event.target.value);
  }

  return (
    <>

    <div className='CommentItem'>
      <Counter FinalScore={props.Score} />
      <div id='CommentItemContent'>
        <div className='Header'>
          <div className='Title'>
            <img src={props.UserAvatar} alt="Not Found" />
            <h4>{props.UserName}</h4>
            {/* You beside my name */}
            {props.UserName == "nagla" ? 
                <button id='youbtn'>You</button>
            : null}
            {/*  */}
            <p>{props.CreatedAt}</p>
          </div>
          <DeleteCommentComponent
            specialKey={props.specialKey}
            finalDeleteComment={props.deleteComment}
            finaluserName={props.UserName}
          />

          {/* Exclusion reply from my comments */}
          {props.UserName != "nagla" && (
            <RepliesComponent handleReplyClick={handleReplyClick}
          comment ={props.comment} /> )}
          {/* ////////////// */}
        </div>
        <div className='content'>
          <p>{props.Content}</p>
        </div>

      </div>
    </div>

 {/* Reply Input Section  */}
    <div id='ReplySection'>

          { showReplyInput ? (
            <div id='ReplyInput'>
              <img src={props.NaglaUserAvatar} alt="Not Found" id='NaglaUserAvatar'/>
              <textarea
                value={replyContent}
                onChange={handleReplyChange}/>
              <button onClick={handleSendReply}>Send</button>
            </div>
          ) : null}
      {/* Reply Input Section  */}

      {/* Reply Content Section  */}
          {props.Replies.map(reply => (
               
               <div key={reply.id} id='ReplyItem'>
                {/* <div id='handleCounter'> */}
                <Counter FinalScore={reply.score} />
                <div id='replayContent'>
                <div className='Header'> 
               <div className='Title'>
              <img src={reply.userAvatar} alt="Not Found" />
              <h4>{reply.userName}</h4>
              <p>{reply.createdAt}</p>
            <RepliesComponent handleReplyClick={handleReplyClick}
          comment ={props.comment} /> 
              </div>
        
              </div>
                {/* </div> */}
               
         
              <div className='content'> <p>{reply.content}</p></div>
             </div>
            </div>
          
          ))}
          
      {/* Reply Content Section  */}
      
      </div>
 
        </>
  );
}