import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {id, author, title, topic, imageUrl, avatarUrl} = blogDetails
    return (
      <Link to={`/blogs/${id}`} className="link-item">
        <li className="list-item">
          <img src={imageUrl} alt="" className="image" />
          <div className="item-details">
            <h1 className="topic">{topic}</h1>
            <h1 className="title">{title}</h1>
            <div className="profile-card">
              <img src={avatarUrl} alt="avatar" className="avatar-img" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
