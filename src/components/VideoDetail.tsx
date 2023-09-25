import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { DisLikeIcon, LikeIcon, User } from "../assets";
import moment from "moment";
import Loader from "./Loader";

const VideoDetail = ({ videoItems }: any) => {
	const { id } = useParams();

	if (!videoItems) {
		return <Loader />;
	} else {
		return (
			<>
				<ReactPlayer
					url={`www.youtube.com/watch?v=${id}`}
					controls
					width={"100%"}
				/>
				<h1 className="text-2xl font-normal tracking-wide text-white mt-6 md:ml-3 md:text-lg">
					{videoItems.snippet.localized.title}
				</h1>
				<div className="flex items-center justify-between flex-wrap ml-3">
					<h2 className="text-Gray font-bold md:text-sm tracking-wider mt-2 mb-2">
						{parseInt(videoItems.statistics.viewCount).toLocaleString()} views /
						{moment(videoItems.snippet.publishedAt).fromNow()}
					</h2>
					<div className="flex justify-around md:text-sm">
						<span className="flex text-white font-bold tracking-wider">
							<img src={LikeIcon} alt="" />
							&nbsp;{" "}
							{parseInt(videoItems.statistics.likeCount).toLocaleString()}
						</span>
						<span className="flex text-white font-bold ml-4">
							<img src={DisLikeIcon} alt="" />
							&nbsp; 0
						</span>
					</div>
				</div>
				<div className="text-white border-t border-b border-brGray py-4 md:px-3 mt-4 md:w-full">
					<Link
						to={`/channel/${videoItems.snippet.channelId}`}
						className="flex items-center ml-2"
					>
						<img
							src={videoItems.snippet.thumbnails.standard.url}
							alt=""
							className="rounded-full w-10 h-10 bg-slate-500 mr-4"
						/>
						<div>
							<h3 className="text-base font-semibold tracking-wider">
								{videoItems.snippet.channelTitle}
							</h3>
							<p className="text-Gray text-xs font-bold tracking-wider ">
								10 mln Obunachi
							</p>
						</div>
					</Link>
					<h2 className="mt-5 text-sm tracking-wide font-normal overflow-hidden">
						{videoItems.snippet.description.slice(0, 300)}
					</h2>
					<h1 className="mt-6 text-base font-normal">
						{videoItems.statistics.commentCount} comments
					</h1>
					<div className="flex mt-5">
						<img
							src={User}
							alt=""
							className="w-10 h-10 mr-5 bg-slate-600 rounded-full"
						/>
						<input
							type="text"
							placeholder="Add a public comment..."
							className="w-full h-10  bg-Primary outline-none border-b border-b-brGray text-lg font-normal"
						/>
					</div>
				</div>
			</>
		);
	}
};

export default VideoDetail;
