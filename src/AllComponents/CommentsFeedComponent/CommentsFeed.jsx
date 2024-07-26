import './CommentsFeed.css';
import CommentItem from '../CommentItemComponent/CommentItem';

export default function CommentsFeed(props) {



  function DeleteCommentFunction(event) {
    const newObjectAfterDelete = props.ListOfComments.filter(post => post.id !== event);
    props.setComments(newObjectAfterDelete);
  }

  return (
    <div id='AllComments'>
      {props.ListOfComments.map(comment => (
        <CommentItem
          key={comment.id}
          specialKey={comment.id}
          UserAvatar={comment.userAvatar}
          UserName={comment.userName}
          CreatedAt={comment.createdAt}
          Score={comment.score}
          Content={comment.content}
          deleteComment={DeleteCommentFunction}
          handleAddReply={props.handleAddReply}
          Replies={comment.replies}
          comment ={comment} 
           NaglaUserAvatar ={props.UserAvatar}

        />
      ))}
      
    </div>
  );
}
