import { Navbar, Search, Sidebar } from "../components";

const SearchPage = ({ open, openHandler }: any) => {
	return (
		<>
			<Navbar openHandler={openHandler} open={open} />
			<div className="flex">
				{open ? <Sidebar open={open} /> : ""}
				<Search />
			</div>
		</>
	);
};

export default SearchPage;
