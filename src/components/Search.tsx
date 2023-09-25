import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../api/fetchApi";
import { ChannelCard, Sidebar, VideoCard } from ".";
import Loader from "./Loader";
const Search = () => {
	const { id } = useParams();
	const [video, setVideo] = useState([]);
	useEffect(() => {
		setVideo([]);
		fetchFromApi(`search?&q=${id}`).then((data) => setVideo(data.items));
	}, [id]);
	if (!video) return <Loader />;
	return (
		<div className="bg-Primary w-full h-[92.5vh] md:h-[calc(88.2vh)] py-4 pl-7 md:p-0 text-white flex  md:flex-col md:items-start ">
			<div className="scrol overflow-y-scroll flex justify-evenly flex-wrap w-full">
				{video.map((items, index) => (
					<>
						{items.id.videoId && <VideoCard items={items} key={index} />}
						{items.id.channelId && <ChannelCard items={items} key={index} />}
					</>
				))}
			</div>
			<div className="hidden md:block w-full">
				<Sidebar />
			</div>
		</div>
	);
};

export default Search;
