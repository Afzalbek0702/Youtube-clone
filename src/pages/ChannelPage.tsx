import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelDetails, Navbar, Sidebar } from "../components";
import { getChannelDetails } from "../api/getChannelDetails";

const ChannelPage = ({ open, openHandler }: any) => {
	const { id } = useParams();
	const [chanellDetails, setChannelDetails] = useState([]);
	useEffect(() => {
		getChannelDetails(id).then((data) => setChannelDetails(data.items));
	}, [id]);
	// console.log(id);

	// console.log(chanellDetails);

	return (
		<>
			<Navbar openHandler={openHandler} open={open} />
			<div className="flex md:w-full sm:flex-col-reverse">
				<Sidebar open={open} />
				<div
					className={`flex flex-col  ${
						open ? "w-[100%] pl-24 md:w-full" : "w-[calc(100%-240px)] md:w-full"
					} h-[calc(100vh-56px)] md:md:h-[calc(100vh-84px)]`}
				>
					{chanellDetails.map((items) => (
						<ChannelDetails items={items} id={id} />
					))}
				</div>
			</div>
		</>
	);
};

export default ChannelPage;
