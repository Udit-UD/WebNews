import React from 'react';
import './Headlines.css';
import { BsNewspaper } from "react-icons/bs";

export default function Headlines({ news, setShowModal, setData }) {
  let startIndex = 11;
  let endIndex = 16;
  const maxDescLength = 150;
  const maxTitleLength = 50;




  return (
    <div className='headline-container'>
      <h1 className="landing-heading" style={{ marginTop: "1em" }} >
        <BsNewspaper style={{ paddingRight: "0.5em" }} /> Breaking Headlines!!!
      </h1>

      <div className="headlines-container">
        {news && news.slice(startIndex, endIndex + 1).map((item, index) => {
          if (!item) return null; // Skip rendering if item is undefined

          const truncatedDesc = item.description && item.description.length > maxDescLength
            ? item.description.substring(0, maxDescLength) + '...'
            : item.description || ''; // Provide a default value if description is null or undefined

          const truncatedTitle = item.title && item.title.length > maxTitleLength
            ? item.title.substring(0, maxTitleLength) + '...'
            : item.title || ''; // Provide a default value if title is null or undefined
          
            const currData = {
              title: item.title,
              source: item.source.name,
              image: item.urlToImage,
              description: item.description, 
              content: item.content,
              url: item.url
            }

            const handleModalClick = () => {
              setData(currData);
              setShowModal(true);
            }
          return (
            <div className="headline-box" onClick={handleModalClick} key={index}>
              <h2 className="headline-heading">
                {truncatedTitle}
              </h2>
              <div className="source-name">
                <p>{item.source && item.source.name}</p>
              </div>

              <div className="desc-container">
                <div className="headline-desc">
                  {truncatedDesc}
                </div>
                <div className="headline-thumbnail">
                  <img src={item.urlToImage || ''} alt="img" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
