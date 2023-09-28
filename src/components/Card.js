import React, { useState } from 'react'

const Card = ({imgUrl,title,disc,discShow,titleTwo}) => {

  const [showMore, setShowMore] = useState(false);
  
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="col-md-4">
        <div className="card-box">
            <div className="card">
                <h2>{title}<br />{titleTwo}</h2>
                <img src={imgUrl} alt='cardImage' />
            </div>
            <div className="card-text">
              <p style={
                {
                  display: '-webkit-box',
                  '-webkit-box-orient': 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  // '-webkit-line-clamp': showMore ? 'initial' : '2',
                  maxHeight: showMore ? '10em' : '3em',
                  transition: "all ease 1s"
                }
              }>
                {disc} {discShow}
              </p>
                <span  
                style={{
                  color:"#1A1D84",
                  cursor:"pointer", 
                }}
                onClick={handleShowMoreClick}>{showMore ? 'Read Less' : 'Read More'}</span>
            </div>
        </div>
    </div>
  )
}

export default Card
