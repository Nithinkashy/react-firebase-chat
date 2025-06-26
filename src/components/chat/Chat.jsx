import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useState } from "react"
import { useRef } from "react";
import { useEffect } from "react";
const Chat = () => {
  const[open,setOpen] = useState(false);
  const[Text,setText]=useState("")

  function openEmoji(){
    setOpen(prevState => !prevState)
  }

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[]);

  function handleEmoji(e){
    setText(prev => prev + e.emoji)
    setOpen(prev => !prev)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Joe Doe</span>
            <p>Lorem ipsum dolor, sit amet ?</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, magni beatae consequuntur mollitia molestias corporis rem? Cum culpa molestiae, rem doloremque esse voluptate, quam, placeat exercitationem odio nostrum magnam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, magni beatae consequuntur mollitia molestias corporis rem? Cum culpa molestiae, rem doloremque esse voluptate, quam, placeat exercitationem odio nostrum magnam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, magni beatae consequuntur mollitia molestias corporis rem? Cum culpa molestiae, rem doloremque esse voluptate, quam, placeat exercitationem odio nostrum magnam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, magni beatae consequuntur mollitia molestias corporis rem? Cum culpa molestiae, rem doloremque esse voluptate, quam, placeat exercitationem odio nostrum magnam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, magni beatae consequuntur mollitia molestias corporis rem? Cum culpa molestiae, rem doloremque esse voluptate, quam, placeat exercitationem odio nostrum magnam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, magni beatae consequuntur mollitia molestias corporis rem? Cum culpa molestiae, rem doloremque esse voluptate, quam, placeat exercitationem odio nostrum magnam.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons"> 
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
        </div>
          <input type="text" placeholder="Type a Message ..." value={Text} onChange={(e)=>setText(e.target.value)}/>
          <div className="emoji">
            <img src="./emoji.png" alt="" onClick={openEmoji}/>
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat