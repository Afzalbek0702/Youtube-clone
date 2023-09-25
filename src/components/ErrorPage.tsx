import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
	const navigate = useNavigate();
	const handleclick = () => {
		navigate("/");
	};
	return (
		<div className="flex flex-col items-center justify-center mx-auto text-white w-full  bg-Primary h-screen">
			<h1 className="text-9xl font-extrabold text-hover tracking-wide">
				Oops!
			</h1>
			<h2 className="mt-6 text-3xl font-bold">404 - page not found</h2>
			<button
				onClick={handleclick}
				className="mt-6 bg-Secondary px-5 py-3 rounded-3xl hover:bg-hover text-xl active:scale-105 duration-150"
			>
				Go to Home page
			</button>
		</div>
	);
};

export default ErrorPage;
