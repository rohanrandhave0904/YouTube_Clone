import React,{useState} from 'react'
import './Comments.css'
function DisplayComments({cId,commentBody,userCommented})  {

    const[cmtBdy,setcmtBdy] = useState("");
    const[Edit,setEdit] = useState(false);
    const handleEdit=(ctId,ctBdy)=>{
       setEdit(true);
       setcmtBdy(ctBdy);

    }
  return (
    <>
    {
       Edit ?(<>
       <from
       className='comments_sub_from_comments'
       //onSubmit={handleOnSubmit}
       >
        <input type="text"
        onChange={(e)=>setcmtBdy(e.target.value)}
        placeholder='Edit comment...'
        value={cmtBdy}
        className='comment_ibox'
        />
        <input type="submit" value="add" className='comment_add_btn_comment'/>
      </from>
       
       </>):(
         <p className='comment_body'>{commentBody}</p>
       )

    }
    
    <p className='usercommented'> ~  {userCommented} commented </p>
      <p className="EditDel_DisplayCommendt">
        <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
        <i>Delete</i>
      </p>

    </>
  )
}

export default DisplayComments