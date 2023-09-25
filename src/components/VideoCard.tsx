import moment from "moment";
import { Link } from "react-router-dom";
import Loader from "./Loader";

interface Props {
	items: any;
}
const VideoCard = ({ items }: Props) => {
	if (!items) return <Loader />;

	return (
		<Link to={`/watch/${items.id.videoId}`}>
			<div className="w-[400px] md:w-full m-3 md:my-3 mx-0 cursor-pointer hover:scale-105 duration-150 ">
				<img
					src={items.snippet.thumbnails.medium.url}
					alt="Img"
					className="w-[380px] h-[220px] md:w-full md:h-auto"
				/>
				<Link
					to={`/channel/${items.snippet.channelId}`}
					className="flex items-center"
				>
					<img
						src={items.snippet.thumbnails.medium.url}
						alt="User img"
						className="rounded-[50%] w-12 h-12 md:w-9 md:h-9"
					/>
					<div className="ml-5 md:ml-2">
						<h1 className="text-lg my-2 md:text-sm">
							{items.snippet.title.slice(0, 50)}
						</h1>
						<h2 className="text-Gray text-base md:text-xs my-2">
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

export default VideoCard;
