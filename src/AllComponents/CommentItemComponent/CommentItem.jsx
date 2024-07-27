import { useState } from 'react';
import './CommentItem.css';
import Counter from '../CounterComponent/Counter';
import DeleteCommentComponent from '../DeleteComponent/Delete';
import RepliesComponent from '../RepliesComponent/Replies';

export default function CommentItem(props) {
      const [showReplyInput, setShowReplyInput] = useState(false);
      const [replyContent, setReplyContent] = useState('');

      function handleReplyClick(username) {
          setReplyContent(`@${username}`);  //Mention to a username in reply input
          setShowReplyInput(!showReplyInput);
      }

      function handleSendReply() {
          props.handleAddReply(replyContent, props.specialKey);
          setReplyContent('');
          setShowReplyInput(false);
      }
      // event.target.value = value of input field to add a reply to a comment = replyContent
      function handleReplyChange(event) {
          setReplyContent(event.target.value);
      }

  return (
    <>
      {/* Main Comments */}
      <div className='CommentItem'>
        <Counter FinalScore={props.Score} />
        <div id='CommentItemContent'>
            <div className='Header'>
              <div className='Title'>
                <img src={props.UserAvatar} alt="Not Found" />
                <h4>{props.UserName}</h4>
                {props.UserName == "nagla" ? <button id='youbtn'>You</button> : null}
                <p>{props.CreatedAt}</p>
              </div>

              <DeleteCommentComponent
                specialKey={props.specialKey}
                finalDeleteComment={props.deleteComment}
                finaluserName={props.UserName}
              />
              
              {props.UserName != "nagla" && (
              <RepliesComponent 
              handleReplyClick = {() => handleReplyClick(props.UserName)}   
              comment ={props.comment} />
              )}
            </div>

            <div className='content'>
              <p>{props.Content}</p>
            </div>

        </div>
      </div>
    {/* Main Comments */}

      {/* Reply Section */}
      <div id='ReplySection'>
  
        {showReplyInput && (
          <div id='ReplyInput'>
            <img src={props.NaglaUserAvatar} alt="Not Found" id='NaglaUserAvatar' />
            <textarea value={replyContent} onChange={handleReplyChange} />
            <button onClick={handleSendReply}>Send</button>
          </div>
        )}

        <div id='coverReplyItem'>
          {/* reply = reply object in replies array */}
          {props.Replies.map( reply => (
            <div key = {reply.id} id ='ReplyItem'>
              <Counter FinalScore = {reply.score} />
              <div id='replayContent'>
                <div className='Header'>
                  <div className='Title'>
                      <img src={reply.userAvatar} alt="Not Found" />
                      <h4>{reply.userName}</h4>
                      {reply.userName == "nagla" ? <button id='youbtn'>You</button> : null}
                      <p>{reply.createdAt}</p>
                      {reply.userName == "ramsesmiron" && (
                        <RepliesComponent handleReplyClick={() => handleReplyClick(reply.userName)} />
                      )}
                      {/* There is a problem here */}
                      <DeleteCommentComponent
                        specialKey={reply.id}
                        finalDeleteComment={props.deleteComment}
                        finaluserName={reply.userName}
                      />

                  </div>
                </div>

                <div className='content'>
                  <p>{reply.content}</p>
                </div>

              </div>
            </div> ))}
            </div>
      </div>
    </> )}
