import {
	MdHomeFilled,
	MdOutlineSlowMotionVideo,
	MdSubscriptions,
	MdOutlineVideoLibrary,
	MdHistory,
	MdOutlineSmartDisplay,
	MdOutlineWatchLater,
	MdThumbUpOffAlt,
	MdSettings,
	MdOutlinedFlag,
	MdOutlineHelpOutline,
	MdOutlineFeedback,
	MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = ({ open }: any) => {
	const mainlinks = [
		{
			icon: <MdHomeFilled className="text-2xl" />,
			name: "Home",
			link: "/",
		},
		{
			icon: <MdOutlineSlowMotionVideo className="text-2xl" />,
			name: "Shorts",
			link: "/",
		},
		{
			icon: <MdSubscriptions className="text-2xl" />,
			name: "Subscriptions",
			link: "/",
		},
		{
			icon: <FaRegCompass className="text-2xl" />,
			name: "Explore",
			link: "/",
		},
	];
	const secondarylinks = [
		{
			icon: <MdOutlineVideoLibrary className="text-2xl" />,
			name: "Library",
		},
		{
			icon: <MdHistory className="text-2xl" />,
			name: "History",
		},
		{
			icon: <MdOutlineSmartDisplay className="text-2xl" />,
			name: "Your Videos",
		},
		{
			icon: <MdOutlineWatchLater className="text-2xl" />,
			name: "Watch Later",
		},
		{
			icon: <MdThumbUpOffAlt className="text-2xl" />,
			name: "Linked Videos",
		},
	];
	const subscriptionLinks = [
		{
			icon: <TbMusic className="text-2xl" />,
			name: "Music",
		},
		{
			icon: <MdOutlineSportsVolleyball className="text-2xl" />,
			name: "Sport",
		},
		{
			icon: <TbDeviceGamepad2 className="text-2xl" />,
			name: "Gaming",
		},
		{
			icon: <GiFilmStrip className="text-2xl" />,
			name: "Films",
		},
	];
	const helpLinks = [
		{
			icon: <MdSettings className="text-2xl" />,
			name: "Settings",
		},
		{
			icon: <MdOutlinedFlag className="text-2xl" />,
			name: "Report History",
		},
		{
			icon: <MdOutlineHelpOutline className="text-2xl" />,
			name: "Help",
		},
		{
			icon: <MdOutlineFeedback className="text-2xl" />,
			name: "Send Feedback",
		},
	];
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	return (
		<>
			<div
				className={`${
					open ? "w-24" : "w-60"
				} h-[calc(100vh-56px)] bg-Primary z-10  ${
					open ? "px-1 absolute" : "overflow-y-scroll"
				}  px-3 hv md:hidden`}
			>
				<div className={`${open ? "hidden" : "block"}`}>
					<ul className="py-4 ">
						{mainlinks.map((items, index) => (
							<li
								key={index}
								className="py-3 pl-4 text-white text-base flex items-center hover:bg-Secondary cursor-pointer hover:rounded-2xl duration-200"
							>
								<span className="mr-5">{items.icon}</span>
								<Link to={`${items.link}`}>{items.name}</Link>
							</li>
						))}
					</ul>
					<div className="w-full h-[1px] bg-Secondary"></div>
					<ul className="py-4">
						{secondarylinks.map((items, index) => (
							<li
								key={index}
								className="py-3 pl-4 text-white text-base flex items-center hover:bg-Secondary cursor-pointer hover:rounded-2xl duration-200"
							>
								<span className="mr-5">{items.icon}</span>
								<span>{items.name}</span>
							</li>
						))}
					</ul>
					<div className="w-full h-[1px] bg-Secondary"></div>

					<ul className="py-4">
						{subscriptionLinks.map((items, index) => (
							<li
								key={index}
								className="py-3 pl-4 text-white text-base flex items-center hover:bg-Secondary cursor-pointer hover:rounded-2xl duration-200"
							>
								<span className="mr-5">{items.icon}</span>
								<span>{items.name}</span>
							</li>
						))}
					</ul>
					<div className="w-full h-[1px] bg-Secondary"></div>

					<ul className="py-4">
						{helpLinks.map((items, index) => (
							<li
								key={index}
								className="py-3 pl-4 text-white text-base flex items-center hover:bg-Secondary cursor-pointer hover:rounded-2xl duration-200"
							>
								<span className="mr-5">{items.icon}</span>
								<span>{items.name}</span>
							</li>
						))}
					</ul>
				</div>
				<div className={`w-20 ${open ? "block" : "hidden"}`}>
					<ul className="py-4 ">
						{mainlinks.map((items, index) => (
							<li
								key={index}
								className="py-3 text-white text-sm flex items-center hover:bg-Secondary cursor-pointer hover:rounded-2xl duration-200"
							>
								<Link
									className="flex flex-col items-center w-20 mt-3"
									to={`${items.link}`}
								>
									{items.icon} <h5 className="mt-2 text-xs">{items.name}</h5>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="w-full h-9 bg-Primary hidden md:block absolute">
				<ul className="py-1 bg-Primary flex justify-around">
					{mainlinks.map((items, index) => (
						<li
							key={index}
							className="text-white text-sm hover:bg-Secondary cursor-pointer hover:rounded-2xl duration-200"
						>
							<Link
								className="flex flex-col items-center w-16 mt-3 text-[12px]"
								to={`${items.link}`}
							>
								<span className="text-sm">{items.icon}</span>
								{items.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
