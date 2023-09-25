import { useState } from "react";
import { ErrorPage } from "./components";
import { Routes, Route } from "react-router-dom";
import { ChannelPage, HomePage, SearchPage, WatchVideo } from "./pages";

const App = () => {
	const [open, setOpen] = useState<boolean>(false);
	const openHandler = () => {
		setOpen((prev) => !prev);
	};
	return (
		<>
			{/* <Loader/> */}
			<Routes>
				<Route
					path="/"
					element={<HomePage open={open} openHandler={openHandler} />}
				/>
				<Route
					path="/search/:id"
					element={<SearchPage open={open} openHandler={openHandler} />}
				/>
				<Route
					path="/watch/:id"
					element={<WatchVideo open={open} openHandler={openHandler} />}
				/>
				<Route
					path="/channel/:id"
					element={<ChannelPage open={open} openHandler={openHandler} />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};
export default App;
