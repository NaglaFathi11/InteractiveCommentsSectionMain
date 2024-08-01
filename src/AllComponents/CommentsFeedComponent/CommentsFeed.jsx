import './CommentsFeed.css';
import CommentItem from '../CommentItemComponent/CommentItem';

export default function CommentsFeed(props) {


  return (

    <div id='AllComments'>
      {/* comment = comment object */}
      {props.ListOfComments.map( comment => (
      <CommentItem
          key = {comment.id}
          commentId = {comment.id}
          UserAvatar = {comment.userAvatar}
          UserName = {comment.userName}
          CreatedAt = {comment.createdAt}
          Score = {comment.score}
          Content = {comment.content}
          DeleteCommentFunction = {props.DeleteCommentFunction}
          DeleteReplyFunction = {props.DeleteReplyFunction}
          handleAddReply = {props.handleAddReply}
          replies = {comment.replies}

          replyId = {comment.replies.id}
          comment = {comment} 
          NaglaUserAvatar = {props.UserAvatar}
          CommentAdded={props.CommentAdded}
          NewContenteAfterEdit = {props.NewContenteAfterEdit}
          NewReplieseAfterEdit ={props.NewReplieseAfterEdit}

       


          
      />
      ))}
      
    </div>
  )}
