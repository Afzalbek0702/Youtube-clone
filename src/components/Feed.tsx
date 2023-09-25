import { useEffect, useState } from "react";
import { fetchFromApi } from "../api/fetchApi";
import { VideoCard } from ".";

const Feed = () => {
	const [video, setVideo] = useState([]);
	useEffect(() => {
		setVideo([]);
		fetchFromApi(`search?&q=Uzbekistan
      `).then((data) => setVideo(data.items));
	}, []);
	return (
		<div className="scrol bg-Primary w-full h-[calc(100vh)] py-4 pl-7 md:p-0  text-white overflow-y-scroll flex justify-evenly  flex-wrap">
			{video.map((items, index) => (
				<VideoCard items={items} key={index} />
			))}
		</div>
	);
};

export default Feed;
