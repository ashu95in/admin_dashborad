import React from 'react'
import VideoUploader from '../../../component/VideoControle/VideoUploader'
import {useParams} from "react-router-dom"
const VideoEdit = () => {
  const {id,vlink,ilink,title} = useParams()
  return (
    <VideoUploader data={{id:id,v_link:vlink,i_link:ilink,title:title}} ></VideoUploader>
  )
}

export default VideoEdit