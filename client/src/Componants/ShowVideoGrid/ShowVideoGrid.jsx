import React from 'react'
import './ShowVideoGrid.css'
import ShowVideo from '../ShowVideo/ShowVideo'

function ShowVideoGrid({vids}) {
  return (
    <div className='Container_ShowVideoGrid'>
        {
            vids?.map(vi=>
                {
                    return (
                        <div key={vi._id} className="video_box_App">
                          <ShowVideo vid={vi}/>
                           
                        </div>
                    )



                })



        }
        
        
    </div>
  )
}

export default ShowVideoGrid