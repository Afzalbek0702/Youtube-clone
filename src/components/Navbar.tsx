import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { Bell, CreateIcon, Logo, Search, User } from "../assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ({ openHandler, open }: any) => {
	const navigate = useNavigate();
	const [input, setInput] = useState("");
	const [openForm, setOpenForm] = useState(false);

	const onsubmit = (e: any): void => {
		e.preventDefault();

		if (input) {
			navigate(`/search/${input}`);
		}
	};
	return (
		<div className="bg-Primary w-full h-14 flex justify-between items-center px-4 sticky top-0 md:px-2 overflow-hidden">
			<div className="flex items-center ">
				<button onClick={openHandler} className="md:hidden">
					<HiMiniBars3
						className={`text-white text-2xl mr-6 duration-100 ${
							open ? "rotate-90" : "rotate-0"
						}`}
					/>
				</button>
				<Link to={"/"}>
					<img src={Logo} alt="" className="" />
				</Link>
			</div>
			{/*  Search box */}
			<form
				onSubmit={(e) => onsubmit(e)}
				className={`flex items-center w-[450px]  md:w-full md:absolute ${
					openForm
						? "md:-translate-y-0 md:-translate-x-4"
						: "md:-translate-y-20 "
				}`}
			>
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type="text"
					placeholder="Search"
					className="w-4/5 h-10 bg-black border !border-Secondary  outline-none text-white text-lg p-2 rounded-s-xl"
				/>
				<button
					onClick={() => setOpenForm((prev) => !prev)}
					type="submit"
					className="w-16 h-10 border-none bg-Secondary rounded-e-xl"
				>
					<AiOutlineSearch className="text-white text-2xl m-auto" />
				</button>
			</form>
			{/* Account div */}
			<div className="flex">
				<img
					src={Search}
					alt=""
					className="mx-2 hidden md:block"
					onClick={() => setOpenForm((prev) => !prev)}
				/>
				<img src={CreateIcon} alt="" className="mx-2 md:hidden text-white" />
				<img src={Bell} alt="" className="mx-2" />
				<img src={User} alt="" className="w-8 mx-2 md:w-6" />
			</div>
		</div>
	);
};

export default Navbar;
