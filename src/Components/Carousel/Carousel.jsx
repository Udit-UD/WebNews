import React, {useState} from 'react';
import "./Carousel.css";
import NewsItem from './NewsItem';



export default function Carousel({news, setShowModal, setData}) {

  const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (direction === "right") {
            const nextIndex = (currentIndex + 1) % news.length;
            setCurrentIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : 0));
        }
    };
  return (

    <div className="carousel-container">
    <div className="navigation-btn">
      <button className="left-btn" onClick={() => handleClick("left")}>
        {" "}
        {" < "}
      </button>
    </div>
    {
  news ? (
    news.slice(currentIndex, currentIndex + 6).map((item) => (
      <NewsItem
        key={item.id}
        name={item.title}
        artists={item.source.name}
        image={item.urlToImage}
        description={item.description}
        content = {item.content}
        setShowModal = {setShowModal}
        setData = {setData}
        url={item.url}
      />
    ))
  ) : (
    "Loading..."
  )
}


    <div className="navigation-btn">
      <button
        className="right-btn"
        onClick={() => handleClick("right")}
      >
        {" "}
        {" > "}
      </button>
    </div>
  </div>
  )
}
