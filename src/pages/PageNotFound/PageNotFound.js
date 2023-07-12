import './styledNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="styledNotFound">
      <p>Oops! You might be lost</p>
      <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="404 error" />
      <p>This path leads only to the dark side...</p>
      <Link to="/">Use teleport</Link>
    </div>
  );
}

export default PageNotFound;
