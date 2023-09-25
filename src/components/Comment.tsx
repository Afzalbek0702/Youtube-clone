import moment from "moment";
import Loader from "./Loader";

const Comment = ({ commentItems }: any) => {
	if(!commentItems) return <Loader/>
   return (
		<div className="text-white md:px-2">
			<div className="flex items-center mt-10">
				<img
					src={
						commentItems.snippet.topLevelComment.snippet.authorProfileImageUrl
					}
					alt=""
					className="w-10 h-10 mr-5 bg-slate-600 rounded-full"
				/>
				<div>
					<h1 className="text-base font-bold tracking-wider">
						{commentItems.snippet.topLevelComment.snippet.authorDisplayName}
						<span className="text-sm font-normal text-Gray">
							&nbsp;/{" "}
							{moment(
								commentItems.snippet.topLevelComment.snippet.publishedAt
							).fromNow()}
						</span>
					</h1>
					<p className="text-base font-normal mt-1 overflow-hidden">
						{commentItems.snippet.topLevelComment.snippet.textOriginal}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Comment;
