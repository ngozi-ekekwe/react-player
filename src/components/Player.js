import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo }) => {
  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    }
  };

  const getTime = (time) => {
    let leftSide = Math.floor(time / 60);
    let rightSide = `0:${Math.floor(time % 60)}`;
    return `${leftSide}:${rightSide}`
  };

  const dragHandler = (event) => {
    const { value } = event.target;
    audioRef.current.currentTime = value;
    setSongInfo({
      ...songInfo,
      currentTime: value
    })
  }

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
