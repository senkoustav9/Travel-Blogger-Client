import './Post.css';

const Post = () => {
    return(
        <div className='Post'>
            <img className="postImg" src='https://images.pexels.com/photos/12405196/pexels-photo-12405196.jpeg' alt=''/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit!</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
                <p className='postDesc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio placeat amet eaque culpa, corporis voluptatem explicabo harum totam soluta iusto? Corporis dolor, modi veritatis odio eum saepe provident quam commodi cum accusantium sapiente laborum porro doloremque repudiandae nesciunt voluptate temporibus totam. Quae, perferendis facere dignissimos qui esse neque laborum voluptatum.
                </p>
            </div>
        </div>
    )
}
export default Post;