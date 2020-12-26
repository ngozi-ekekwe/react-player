import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ setLibraryStatus, libraryStatus }) {
  const libraryStatusHandler = () => {
    setLibraryStatus(!libraryStatus)
  }
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={libraryStatusHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
        </button>
    </nav>
  )
}