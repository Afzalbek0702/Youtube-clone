import { Link } from "react-router-dom";

const ChannelCard = ({ items }: any) => {
	return (
		<Link
			to={`/channel/${items.id.channelId}`}
			className="w-[400px] flex flex-col  items-center"
		>
			<img
				src={items.snippet.thumbnails.default.url}
				alt=""
				className="rounded-full w-52 mt-10"
			/>
			<h1 className="text-white text-3xl mt-5 text-center">
				{items.snippet.channelTitle}
			</h1>
		</Link>
	);
};

export default ChannelCard;
