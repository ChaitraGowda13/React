import React,{useState , useRef} from 'react'
import VIDEO from "./movie.mp4"

const App = () => {
  let [video , setVideo] = useState(VIDEO)
  let [loading , setLoading] = useState(false)
  let videoRef = useRef()
  let playOrPause = ()=>{
    if(!loading)
    {
      setLoading(true)
      videoRef.current.play()
    }
    else
    {
      setLoading(false)
      videoRef.current.pause()
    }

  }

  return (
    <div>
      <video src={video} height="200px" width="400px" onClick={playOrPause}ref={videoRef}></video>
    </div>
  )
}

export default App