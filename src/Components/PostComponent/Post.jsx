import './Post.css'
import ReplayIcon from '../../assets/Images/icon-reply.svg'
import Counter from '../CounterComponent/Counter'

export default function Post(props) {
  return (
    <div id='Post'>
        <Counter />
        <div id='PostContent'>

        <div id='Header'>
            <div id='Title'>
                <img src={props.UserAvatar} alt="Not Found" />
                <h4>{props.UserName}</h4>
                <p>{props.CreatedAt}</p>
            </div>

            <div id='Reply'>
                <img src={ReplayIcon} alt="Not Found" />
                <span>Reply</span>
            </div>
        </div>

        <div id='content'>
            <p>{props.Content}</p>
        </div>
        
        </div>
    </div>
  )
}

