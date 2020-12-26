import React from "react";

const LibrarySong = ({ currentSong, setCurrentSong, audioRef, isPlaying, songs, setSongs }) => {
  const setSelectedSongHandler = () => {
    setCurrentSong(currentSong);
    const newSongs = songs.map((song) => {
      if( song.id === currentSong.id) {
        return {
          ...song,
          active: true

        }
      }
      else {
        return {
          ...song,
          active: false
        }
      }
    })
    if(isPlaying) {
      const playPromise  = audioRef.current.play();
      if(playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        })
      }
    }
    setSongs(newSongs)

  }
  return (
    <div className={`library-song ${currentSong.active ? 'selected' : ''}`} onClick={setSelectedSongHandler}>
      <img src={currentSong.cover} alt={currentSong.name} />
      <div className="song-description">
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
