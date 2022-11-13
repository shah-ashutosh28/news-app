import React, { Component } from 'react'

export default function NewsItem(props) {
  
  
    let {title, description,imageUrl, newsUrl, author, date, source, mode} = props;
    const mystyle = {
      color: mode==='light'?'black':'white',
      backgroundColor: mode==='light'?'white':'black'
    }
    return (
      <div className='my-3'>
      <div className="card">
      <img src={imageUrl?imageUrl:"https://images.livemint.com/img/2022/10/30/600x338/Fixed_deposit_rates_1561114822692_1667101585415_1667101585415.jpg"} className="card-img-top" alt="..."/>
      <div className="card-body" style={mystyle}>
      <div>
      <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{left:"0"}}>{source} </span>
      </div>  
      <h5 className="card-title" style={mystyle}>{title}...</h5>
        <p className="card-text"  style={mystyle}>{description}...</p>
        <p className="card-text"  style={mystyle}><small className="text-muted"  style={mystyle}>By {author?author : "Unknown"} on {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})} </small></p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
      </div>
    )
  
}


