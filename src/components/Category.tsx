import AliceCarousel from "react-alice-carousel";
import { data } from "../utils/category";
interface Props {
	categoryHandler: any;
	category: any;
}
import "react-alice-carousel/lib/alice-carousel.css";
const Category = ({ categoryHandler, category }: Props) => {
	console.log(category);

	return (
		<div className="bg-Primary  py-4 pl-10 h-16 category flex justify-around">
         <AliceCarousel
            mouseTracking
				items={data.map((items) => (
					<button
						key={items.id}
						onClick={() => categoryHandler(items.name, items.id)}
						className={`${
							items.name === category
								? "bg-white text-black hover:bg-white hover:text-black "
								: "bg-Secondary text-white"
						}  py-2 px-4 rounded-2xl mr-3 hover:bg-hover duration-200`}
					>
						{items.name}
					</button>
				))}
			/>
		</div>
	);
};

export default Category;
