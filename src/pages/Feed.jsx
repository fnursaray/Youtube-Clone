import { useContext } from "react";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Undefined from "./Undefined";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);
  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <>
            <Error message={error} />
            <Undefined />
          </>
        ) : (
          videos.map((item) => <VideoCard key={item.videoId} video={item} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
