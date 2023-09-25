import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import {BiTrendingUp} from "react-icons/bi";
import Headlines from "../Headlines/Headlines";
import { Modal } from '../Modal/Modal';


function CinemaNews() {
  const [news, setNews] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    title:"",
    source: "",
    image: "",
    description: "",
    content: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=eac5c89303da4094b448050f2c7fce92'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  const modalClick = () => {
    setShowModal(false);
    setData({
      title:"",
      source: "",
      image: "",
      description: "",
      content: "",
      url:"",
    })
  }




  return (
    <div className='news-container'>
      {showModal && <Modal  modalClick = {modalClick} data = {data}/>}
      <h1 className="landing-heading">
        <BiTrendingUp style={{paddingRight: "0.5em"}} /> Trending News
      </h1>

      {news ? (
        <div>
          <Carousel news = {news.articles}  setData = {setData} setShowModal = {setShowModal}/>
          <Headlines news = {news.articles}  setData = {setData} setShowModal = {setShowModal}/>
        </div>
      ) : (
        <div className="loading-screen">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )}
    </div>
  );
}

export default CinemaNews;



