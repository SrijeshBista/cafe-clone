import React from 'react'
import traningimg from '../assets/traning.png';
const BlogCard=({Imagesrc , title})=> {
  return (
    <div className="Blog-card">
      <div className="blog-img">
        <img src={Imagesrc} alt="Coffee Class" />
      </div>
      <div className="blog-title">
        <p>{title}</p>
      </div>

    </div>
  )
}

export default BlogCard
