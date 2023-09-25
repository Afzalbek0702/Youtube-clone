import moment from "moment";
import { Link } from "react-router-dom";

const ChannelVideos = ({ items }: any) => {
	return (
		<Link to={`/watch/${items.id.videoId}`}>
			<div className="w-[400px] md:w-full my-3 cursor-pointer hover:scale-105 duration-150 overflow-hidden">
				<img
					src={items.snippet.thumbnails.medium.url}
					alt="Img"
					className="w-[380px] md:w-full h-[220px]"
				/>
				<Link
					to={`/channel/${items.snippet.channelId}`}
					className="flex items-center"
				>
					<img
						src={items.snippet.thumbnails.medium.url}
						alt="User img"
						className="rounded-[50%] w-12 h-12"
					/>
					<div className="ml-5">
						<h1 className="text-lg my-2">{items.snippet.title.slice(0, 50)}</h1>
						<h2 className="text-Gray text-base my-2">
							{items.snippet.channelTitle}
							&nbsp;/&nbsp;
							{moment(items.snippet.publishTime).fromNow()}
						</h2>
					</div>
				</Link>
			</div>
		</Link>
	);
};

export default ChannelVideos;
