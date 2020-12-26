import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [libraryStatus, setLibraryStatus ] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
      />
      <Library
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        songs={songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default App;
