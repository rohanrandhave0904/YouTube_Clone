import React, { useState } from 'react'
import './Comments.css'
import DisplayComments from './DisplayComments';
function Comments() {
    const[commentText,setCommentText] = useState("")


    const commetsList=[{
      _id:"1",
      commentBody:"hello",
      userCommented:"abc"
    },
    {
      _id:"2",
      commentBody:"hii",
      userCommented:"xyz"
    },
  ]
    const handleOnSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
       <from
       className='comments_sub_from_comments'
       onSubmit={handleOnSubmit}
       >
        <input type="text"
        onChange={e=>setCommentText(e.target.value)}
        placeholder='add comment...'
        className='comment_ibox'
        />
        <input type="submit" value="add" className='comment_add_btn_comment'/>
      </from>
      <div className="display_comment_container">
        {
          commetsList.map(m=>{
            return(
              <DisplayComments 
              cId={m._id}
              commentBody={m.commentBody}
              userCommented={m.userCommented}
              />

            )

          })
        }
        
      </div>
    
    </>
  )
}

export default Comments