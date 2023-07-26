import './Heart.css';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { useState } from 'react';






const Heart = () => {

    const [liked, setLiked] = useState(false)

const handleClick = () => {

    liked == true ? setLiked(false) : setLiked(true)
}

  return (
    <div onClick={handleClick}>
        { liked == true ? <BsFillHeartFill className='heart' /> : <BsHeart className='heart' />}
        
    </div>
  )
}

export {Heart}