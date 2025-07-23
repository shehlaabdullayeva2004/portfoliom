import React, { useEffect, useRef } from 'react';
import '../../Styles/main.scss';
import './Home.scss';
import ProfileCard from '../../Component/ProfileCard/ProfileCard';
import bgVideo from '../../assets/Images/bgvideooo.mp4'
import RightSideBar from '../../Component/RightSideBar/RightSideBar';
import Introduction from '../../Component/Introduction/Introduction';
import Experience from '../../Component/Experience/Experience';
import Projects from '../../Component/Projects/Projects';

export default function Home() {
  const videoRef = useRef(null);
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate =0.4; // 0.5x yavaş
      }
    }, []);
  
  return (
    <div className="home">
      <video
        // src="https://www.w3schools.com/html/mov_bbb.mp4"
        src={bgVideo}
        autoPlay
        muted
        loop
        className="video-background"
        ref={videoRef}
      ></video>
      <div className="video-overlay">
      </div>

      <div className="content">
        <ProfileCard />
        <Introduction />
        <Experience />
        <Projects/>
        <RightSideBar />
      </div>
    </div>
  );
}
