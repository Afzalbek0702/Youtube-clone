import { useState, useEffect } from "react";
import {
	Comment,
	Navbar,
	Sidebar,
	SuggestedVideo,
	VideoDetail,
} from "../components";
import { useParams } from "react-router-dom";
import { GetvideoDeatails } from "../api/getVideodetails";
import { getComments } from "../api/getVideoComments";
import { getSuggestedVideo } from "../api/getSuggestedVideo";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const WatchVideo = ({ open, openHandler }: any) => {
	const { id } = useParams();
	const [comments, setComments] = useState<object[]>([]);
	const [videoDetails, setVideoDetails] = useState([]);
	const [suggestedVideo, setSuggestedVideo] = useState([]);
	const [commentopen, setCommentopen] = useState(false);

	useEffect(() => {
		getComments(id).then((data) => setComments(data.items));
		GetvideoDeatails(id).then((data) => setVideoDetails(data.items));
		getSuggestedVideo(id).then((data) => setSuggestedVideo(data.items));
	}, [id]);
	return (
		<>
			<Navbar openHandler={openHandler} open={open} />
			<div className="flex lg:flex-col bg-Primary h-[calc(100vh-56px)] overflow-y-scroll scrol w-full">
				{open ? <Sidebar open={open} /> : ""}
				<div className="pl-20 w-[65%] lg:w-full md:px-0 flex mr-4 lg:m-0">
					<div className="w-full">
						{videoDetails.map((videoItems) => (
							<>
								<VideoDetail videoItems={videoItems} onchange={onchange} />
								<button
									className=" text-white ml-2 mt-4 sticky top-0 bg-Primary h-10 flex items-center justify-center w-[95%] "
									onClick={() => setCommentopen((prev) => !prev)}
								>
									Show Comment &nbsp;
									{commentopen ? <AiOutlineDown /> : <AiOutlineUp />}
								</button>
								<div className={`${commentopen ? "hidden" : "block"}`}>
									{comments.map((commentItems) => (
										<Comment commentItems={commentItems} />
									))}
								</div>
							</>
						))}
					</div>
				</div>
				<div>
					{suggestedVideo.map((suggestedVideoitems) => (
						<SuggestedVideo suggestedVideo={suggestedVideoitems} />
					))}
				</div>
			</div>
		</>
	);
};

export default WatchVideo;
