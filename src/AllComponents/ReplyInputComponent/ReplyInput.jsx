import './ReplyInput.css'
import { useState } from'react';

function ReplyInput(props) {
     const [replyContent, setReplyContent] = useState(`@${props.UserName}`);
    // event.target.value = value of input field to add a reply to a comment = replyContent
      function handleReplyChange(event) {
          setReplyContent(event.target.value);
      }
        function handleSendReply() {
         
       props.handleAddReply(replyContent, props.commentId);
          setReplyContent('');
          props.setShowReplyInput(false);   
    // console.log(replyContent)
   
    //  console.log( props.commentId)
      }

  return (
    <div id='ReplyInput'>
            <img src={props.NaglaUserAvatar} alt="Not Found" id='NaglaUserAvatar' />
            <textarea value={replyContent} onChange={handleReplyChange} />
            <button onClick={handleSendReply}>Send</button>
          </div>
  )
}

export default ReplyInput