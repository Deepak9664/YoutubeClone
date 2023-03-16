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



const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 >Comments:</h1>
    </div>
  )
}

export default CommentsContainer
