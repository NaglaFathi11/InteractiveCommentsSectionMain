import './App.css';
import CommentsFeed from './AllComponents/CommentsFeedComponent/CommentsFeed';
import AddNewComment from './AllComponents/AddNewCommentComponent/AddNewComment';
import AmyrobsonAvatar from './assets/avatars/image-amyrobson.png';
import MaxblagunAvatar from './assets/avatars/image-maxblagun.png';
import RamsesmironAvatar from './assets/avatars/image-ramsesmiron.png'
import NaglaAvatr from './assets/avatars/nagla.webp';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function App(props) {

  const [comments, setComments] = useState([

    {
      id: 1,
      userAvatar: AmyrobsonAvatar,
      userName: "amyrobson",
      createdAt: "1 month ago",
      score: 12,
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      replies: [] 
    },
    {
      id: 2,
      userAvatar: MaxblagunAvatar,
      userName: "maxblagun",
      createdAt: "2 weeks ago",
      score: 5,
      content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      
      replies: [
        {
           id: 1,
           userAvatar: RamsesmironAvatar,
           userName: "ramsesmiron",
           createdAt: "1 week ago",
           score: 4,
           content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        },
     
  ]}]);


      // My new comment
      function CommentAdded(newComment) { 
        const NewCommentObject = {
          id: uuidv4(),
          userAvatar: NaglaAvatr,
          userName: "nagla",
          createdAt: "Just Now",
          score: 7,
          content: newComment,
          replies: [] 
        };

        setComments([...comments, NewCommentObject]);
      }

      //Edit my comments function
      function NewContenteAfterEdit (newContent, clickedcommentId){
        // console.log(newContent);
        const updatedMyComments =  comments.map((comment) => {
          if (comment.id == clickedcommentId){
               return {...comment, content: newContent}
          }else {
            return comment
          }
         
        })
        //  console.log(updatedMyComments);
         setComments(updatedMyComments);
      }


      // Add Reply function
      function handleAddReply(replyContent, commentId) { 
        // console.log(ReplyCommentId)
        const updatedCommentsWithReplies = comments.map(comment => {
              if (comment.id == commentId) {
                  return {   ...comment,
                      replies: [...comment.replies, 
                          { id: uuidv4(),
                            userAvatar: NaglaAvatr,
                            userName: "nagla",
                            createdAt: "Just Now",
                            score: 7,
                            content: replyContent }
                          
                          ]};

              }else  return comment })
      
        setComments(updatedCommentsWithReplies);}


      //Edit my replies function
      function NewReplieseAfterEdit (clickedCommentId, clickedReplyId, ValueAfterReplyEdit){
            //  console.log(clickedCommentId , clickedReplyId , ValueAfterReplyEdit)
            let updatedMyCommentsWithReplies =  comments.map((comment) => {

              if (comment.id == clickedCommentId) {
                     
              let updatedReply = comment.replies.map((reply) => {
                          if (reply.id == clickedReplyId) {
                             return {...reply, content: ValueAfterReplyEdit}
                      
                          }
                          return reply;

                   } 
               
                  )   
                                 

           comment = {...comment, replies: updatedReply}

              }
            return comment
            }
          
         
          )

       
             
            setComments(  updatedMyCommentsWithReplies )
            
                    //  console.log(updatedMyCommentsWithReplies)
              
            
                                        
            }

              

              
    
        
  // Delete function for comment items
  
    function DeleteCommentFunction(commentId) {   
      const newObjectAfterDeleteComment = comments.filter(comment => comment.id != commentId);
      setComments(newObjectAfterDeleteComment);
    }

      // Delete function for reply items
  function DeleteReplyFunction(commentId, replyId) {
    
          let newComments = comments.map(comment => {

          if (comment.id == commentId) {

            let updatedReplies = comment.replies.filter(reply => reply.id != replyId)
         

          return { ...comment, replies : updatedReplies };

          }

           return comment;
          
       
        })

    

         setComments(newComments)
    //  console.log("Updated comments after delete:", newComments);
       
     
    }
    

  return (

    <div id='MainContainer'>
        <CommentsFeed
          ListOfComments={comments}
          setComments={setComments}
          handleAddReply={handleAddReply}
          UserAvatar ={NaglaAvatr}
          replies = {comments.replies}
          DeleteCommentFunction ={DeleteCommentFunction}
          DeleteReplyFunction = {DeleteReplyFunction}
          CommentAdded={CommentAdded}
          NewContenteAfterEdit = {NewContenteAfterEdit}
          NewReplieseAfterEdit ={NewReplieseAfterEdit}

          

  
        />

        <AddNewComment 
          CommentAdded={CommentAdded}
          UserAvatar ={NaglaAvatr}
        />
   </div>

  )}
