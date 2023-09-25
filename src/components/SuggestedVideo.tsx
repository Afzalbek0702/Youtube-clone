import { Link } from "react-router-dom";
import Loader from "./Loader";
import { VideoCard } from ".";

const SuggestedVideo = ({ suggestedVideo }: any) => {
   if (!suggestedVideo) return <Loader/>
	return (
		<div className="text-white md:w-full">
			{/* <img src="" alt="" /> */}
			<div className="md:hidden">
				<Link to={`/watch/${suggestedVideo.id.videoId}`}>
					<div className="w-[400px] sm:w-full m-3 cursor-pointer hover:scale-105 duration-150 flex">
						<img
							src={suggestedVideo.snippet.thumbnails.medium?.url}
							alt="Img"
							className="w-48  rounded-xl"
						/>
						<div className="flex items-center">
							<div className="ml-5 md:ml-2">
								<h1 className="text-base my-2">
									{suggestedVideo.snippet.title.slice(0, 50)}
								</h1>
								<h2 className="text-Gray text-sm my-2">
									{suggestedVideo.snippet.channelTitle}
								</h2>
							</div>
						</div>
					</div>
				</Link>
         </div>
         <div className="hidden md:block my-4">

         <VideoCard items={suggestedVideo}/>
         </div>

		</div>
	);
};

export default SuggestedVideo;
