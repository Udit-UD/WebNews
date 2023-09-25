import React from 'react'
import "./newsItem.css";
import {BsArrowsFullscreen} from "react-icons/bs";


export default function NewsItem({name, artists, image, setShowModal, description,setData, content, url}) {

  function truncateText(text, maxLength) {
    if (text === null || text === undefined) {
      return ''; // Return an empty string if text is null or undefined
    }
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }
      const maxLength = 70;

      const currData = {
        title: name,
        source: artists,
        image: image,
        description: description, 
        content: content,
        url: url
        
      }

      const handleModalClick = () => {
        setData(currData);
        setShowModal(true);
      }

  return (
    <div className='item-container'>
        <div className="item-img">
            <img src={image} alt="" />
            <div className="play-button-overlay">
                <BsArrowsFullscreen onClick={handleModalClick}/>
            </div>
        </div>

        <div className="details">
            <div className="description">
                {artists}
            </div>
            <div className="title">
                {truncateText(name, maxLength)}
            </div>
        </div>
        
    </div>
  )
}