"use client"

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface SomeProps {
  url:string
}


const Problem: React.FC<SomeProps> = ({url}) =>{
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);
    return (
      <>
      {/* <div className='border border-blue-400'>開発中</div> */}
        {hasWindow && <ReactPlayer url={url} controls={true} />}
      </>
    );
    }

    export default Problem