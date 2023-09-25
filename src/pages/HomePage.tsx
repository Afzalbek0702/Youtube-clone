import { useState } from "react";
import {  Feed, Navbar, Sidebar } from "../components";

const HomePage = ({ open, openHandler }: any) => {
	const [category, setCategory] = useState<any>("All");
	return (
		<>
			<Navbar openHandler={openHandler} open={open} />
			<div className="flex md:flex-col-reverse">
				<Sidebar open={open} />
				<div
					className={`flex flex-col  ${
						open ? "w-[100%] pl-24 md:pl-0" : "w-[calc(100%-240px)] md:w-full"
					} h-[calc(100vh-56px)] md:w-full md:h-[calc(100vh-84px)]`}
				>
					{/* <Category categoryHandler={selectCategory} category={category} /> */}
					<Feed category={category} />
				</div>
			</div>
		</>
	);
};

export default HomePage;
