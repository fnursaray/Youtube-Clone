import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="flex flex-col items-center justify-center top-3">
      <img
        src="https://www.youtube.com/img/desktop/unavailable/unavailable_video.png"
        alt="Page not found"
        className="w-[50%] max-w-[500px] "
      />
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="textDecoration-none bg-blue text-[18px] ">
        ANA SAYFAYA GİT
      </Link>
    </div>
  );
};

export default Undefined;
