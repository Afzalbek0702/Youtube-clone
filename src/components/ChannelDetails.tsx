import { useState, useEffect } from "react";
import { getChannelVideos } from "../api/getChannelVideos";
import { ChannelVideos } from ".";

const ChannelDetails = ({ items, id }: any) => {
	const [channelVideos, setChannelVideos] = useState([]);
	useEffect(() => {
		getChannelVideos(id).then((data) => setChannelVideos(data.items));
	}, []);

	return (
		<div className="bg-Primary text-white h-full overflow-y-scroll scrol">
			<div className="">
				<div
					style={{
						width: "100%",
						height: "200px",
						backgroundImage: `url(${items?.brandingSettings.image.bannerExternalUrl})`,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						objectFit: "cover",
					}}
				></div>
			</div>
			<div className="flex justify-between items-center mt-7 px-12 md:flex-col">
				<div className="flex items-center md:flex-col text-center">
					<img
						src={items?.snippet.thumbnails.medium.url}
						alt=""
						className="w-20 h-20 bg-Gray rounded-full mr-5 md:mr-0 md:my-3"
					/>
					<div>
						<h1>{items?.snippet.title}</h1>
						<p className="text-base text-Gray md:my-3">
							{items?.snippet.customUrl} {items?.statistics.subscriberCount}
							{" subscribers "}
							{items?.statistics.videoCount} videos
						</p>
					</div>
				</div>
				<button className="bg-red-600  py-2 px-3">Subscribes</button>
			</div>
			{/* <div className="flex border-b border-b-brGray">
				<ReactPlayer />
				<div className="max-w-[400px] p-6">
					<h1 className="text-base ">Video Title</h1>
					<h2 className="text-sm my-5">576,969 views . 3 weeks ago</h2>
					<p>
						Chris Fisher, also known as the Blind Woodturner, learned his craft
						by listening to hundreds of hours of YouTube videos and
						experimenting in his workshop. Now he’s a YouTube creator himself,
						sells his products worldwide, and does demonstrations all around the
						country.
					</p>
				</div>
			</div> */}
			<div className="flex flex-wrap justify-center">
				{channelVideos.map((items) => (
					<ChannelVideos items={items} />
				))}
			</div>
		</div>
	);
};

export default ChannelDetails;
