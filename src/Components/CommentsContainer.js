import React from 'react'


const CommentsData=[{
    name:"deepak",
    text:"hskhfdsjbfdsjfbksdfhbj",
    replies:[{
        name:"deepak",
        text:"hskhfdsjbfdsjfbksdfhbj",
        replies:[{
            name:"deepak",
            text:"hskhfdsjbfdsjfbksdfhbj",
            replies:[]
        },{
            name:"deepak",
            text:"hskhfdsjbfdsjfbksdfhbj",
            replies:[{
                name:"deepak",
                text:"hskhfdsjbfdsjfbksdfhbj",
                replies:[{
                    name:"deepak",
                    text:"hskhfdsjbfdsjfbksdfhbj",
                    replies:[]
                }]
            }]
        }]
    },{
        name:"deepak",
        text:"hskhfdsjbfdsjfbksdfhbj",
        replies:[]
    },{
        name:"deepak",
        text:"hskhfdsjbfdsjfbksdfhbj",
        replies:[]
    }]
},
{
    name:"deepak",
    text:"hskhfdsjbfdsjfbksdfhbj",
    replies:[]
},
{
    name:"deepak",
    text:"hskhfdsjbfdsjfbksdfhbj",
    replies:[]
},
{
    name:"deepak",
    text:"hskhfdsjbfdsjfbksdfhbj",
    replies:[]
}
]




const Comment = ({data})=>{
    const {name,text,replies} = data
    return <div className='flex bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12' alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRODr8ojk1iGz8kJ8I7iKbPgSgjqsP7i0NAyNPRU&s"/>
        
        <div className='px-3'>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        </div>
        </div>
}

const CommentList = ({comments})=>{
    return  comments.map((comment,index)=> (
        <div>
       <Comment  key={index} data ={comment}/>
       <div className='pl-5 border border-l-black ml-2'>
       <CommentList comments={comment.replies}/>
       </div>
   </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 >Comments:</h1>
    <CommentList comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer
