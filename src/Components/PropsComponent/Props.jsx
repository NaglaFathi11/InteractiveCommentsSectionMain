import './Props.css'
import Post from '../PostComponent/Post'
import AmyrobsonAvatar from '../../assets/avatars/image-amyrobson.png'
import MaxblagunAvatar from '../../assets/avatars/image-maxblagun.png'

export default function Props() {

const PostsArray = [
  {
    id: 1,
    userAvatar: AmyrobsonAvatar,
    userName: "amyrobson",
    createdAt: "1 month ago",
    score: 12,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
  },

  {
    id: 2,
    userAvatar: MaxblagunAvatar,
    userName: "maxblagun",
    createdAt: "2 weeks ago",
    score: 5,
    content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
  }
   
 ]

  return (
    <div id='AllPosts'>
      {
          PostsArray.map((post) => {
            return <Post 
                        key = {post.id}
                        UserAvatar={post.userAvatar} 
                        UserName = {post.userName}
                        CreatedAt = {post.createdAt}  
                        Score = {post.score}
                        Content ={post.content}
                   />
      
    })}

    </div>
  )
}

