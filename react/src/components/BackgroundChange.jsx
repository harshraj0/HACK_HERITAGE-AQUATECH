import React, {useState,useEffect} from 'react'
const BackgroundChange=()=>{


const images=['url(static/images/fourthimg.jpg)','url(static/images/seventhimg.jpg)','url(static/images/thirdimg.jpg)','url(static/images/secimg.jpg)','url(static/images/first.jpg)'];

const [currImage,setcurrImage]=useState(0);
useEffect(() => {
  const interval = setInterval(() => {
  setcurrImage((prevImage) => (prevImage + 1) % images.length);
  }, 5000); 
  return()=>clearInterval(interval);
},[images.length])

  return (

          <div className="absolute w-screen h-screen bg-cover bg-center transition-all duration-1000 z-1"
            style={{ backgroundImage: images[currImage] }}>
            </div>
)
}
            export default BackgroundChange;