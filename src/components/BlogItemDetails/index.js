import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading : true
  }

  componentDidMount = () => {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
    }
    this.setState({blogData: updatedData,isLoading : false})
  }

  render() {
    const {blogData,isLoading} = this.state
    const {title, content, avatarUrl, imageUrl, author} = blogData
    return (
      <div >
      {isLoading ? (
        <Loader type="TailSpin" color='#00BFFF' height={50} width={50} />
      ) : (
        <div className="blog-details-container">
        <h1 className="title-heading">{title}</h1>
        <div className="profile-card">
          <img src={avatarUrl} alt={author} className="blog-item-avatar-img" />
          <p className="blog-item-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-img" />
        <p className="content">{content}</p>
      </div>
      )}
      </div>
    )
  }
}

export default BlogItemDetails
