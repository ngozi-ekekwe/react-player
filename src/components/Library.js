import LibrarySong from "./LibrarySong";

export function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) {
  return (
    <div className={`library ${libraryStatus ? 'active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs &&
          songs.map((song, index) => (
            <LibrarySong
              songs={songs}
              key={index}
              currentSong={song}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
            />
          ))}
      </div>
    </div>
  );
}
export default Library;
