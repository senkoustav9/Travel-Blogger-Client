import './SinglePost.css';

export default function SinglePost() {
  return (
    <div className='SinglePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src='https://images.pexels.com/photos/12405196/pexels-photo-12405196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>    
            <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet 
                <div className="singlePostEdit">
                
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>

                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Koustav</b></span>
                
                <span className='singlePostDate'> 1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rem, laudantium voluptas iste beatae doloremque ea quidem, odit tenetur sint dignissimos modi ducimus optio numquam quos voluptate temporibus voluptates dicta?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laborum excepturi numquam adipisci laboriosam sint nulla neque deleniti nesciunt consequuntur odio optio libero voluptas, placeat nam sit eius maiores! Nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis quasi minus, ab unde eum laudantium labore iste provident, quaerat ducimus veniam voluptates, maiores atque dignissimos rem alias esse id accusamus. Dolor aspernatur quidem explicabo facere voluptatum enim numquam aliquam vel laudantium minima. Accusantium doloribus at deserunt ratione nisi aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi illo totam dolore laborum, possimus vel. Maxime, vel perferendis? Nobis vitae maiores incidunt praesentium illo. Tempore, deleniti voluptas. Excepturi nemo eligendi doloremque inventore est voluptates repudiandae quaerat, obcaecati dolores. Magni aperiam temporibus incidunt laborum pariatur beatae, dolores earum? Cupiditate, tempora.
            </p>
        </div>
    </div>       
  )
}