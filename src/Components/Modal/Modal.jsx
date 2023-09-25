import React from 'react'
import "./Modal.css";
export const Modal = ({modalClick, data}) => {
  return (
    <>
    
    <div className="modal-wrapper"></div>
    <div className='modal-container'>

        <h2 className="modal-heading">
            {data.title}
        </h2>
        <p className='modal-source'>
            {data.source}
        </p>

        <div className="modal-body">
            <div className="article">
                {data.content}
            </div>
            <div className="image">
                <img src={data.image} alt="" />
            </div>
        </div>
        <div className="buttons-modal">
            <a href={data.url}>
        <button className='modal-button' style={{width: "28%",backgroundColor:"red"}}>Read Full Article</button>
        </a>
        <button className='modal-button' onClick={modalClick}>
            Close
        </button>
        </div>

    </div>
    </>
  )
}

