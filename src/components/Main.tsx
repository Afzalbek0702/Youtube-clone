import { useState } from "react";
import { Category, Feed } from ".";

const Main = ({ open }: any) => {
	const [category, setCategory] = useState("All");
	console.log(category);

	const selectCategory = (x: any) => {
		setCategory(x);
	};
	return (
		<div className={`flex flex-col ${open ? "w-[100%]" : "w-[calc(100%-240px)]"} h-[calc(100vh-56px)]`}>
			<Category categoryHandler={selectCategory} category={category} />
			<Feed category={category} />
		</div>
	);
};

export default Main;
