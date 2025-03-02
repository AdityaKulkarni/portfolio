import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const gamingPhotoIds = [
	"143V5XDu677PYaWtJbMk10l9H7sHJ4yD7",
	"1xiXcslhFU46mbVPpBt07E7hsIBya3RBK",
	"12yfEKM7zX_oa67fEcDLcyYjhX14O0goj",
];

const Hobbies = () => {
	return (
		<div className="flex flex-col flex-1 items-center text-black py-2">
			<div
				className={`text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16`}
			>
				Hobbies
			</div>

			<Carousel
				responsive={responsive}
				className="w-full"
				itemClass="bg-white rounded-md mx-2 w-[300px] h-[300px] p-2"
				partialVisbile={false}
				centerMode
				infinite
				autoPlay
				pauseOnHover
				additionalTransfrom={0}
				customTransition="all 1s linear"
			>
				<div>
					<div className="font-bold text-xl">Gaming</div>
					<img
						src="https://lh3.googleusercontent.com/d/12yfEKM7zX_oa67fEcDLcyYjhX14O0goj"
						className="object-cover justify-self-center rounded-lg my-2 w-full h-[200px] border-2 border-solid border-black"
					/>
					<div className="p-2 bg-gray-500 text-white w-fit rounded-md text-sm hover:bg-gray-600 cursor-pointer">
						View Photos
					</div>
				</div>
				<div>
					<div className="font-bold text-xl">Anime</div>
					<img
						src="https://lh3.googleusercontent.com/d/1xiXcslhFU46mbVPpBt07E7hsIBya3RBK"
						className="object-cover justify-self-center rounded-lg my-2 w-full h-[200px] border-2 border-solid border-black"
					/>
					<div className="p-2 bg-gray-500 text-white w-fit rounded-md text-sm my-2 hover:bg-gray-600 cursor-pointer">
						View Photos
					</div>
				</div>
				<div>
					<div className="font-bold text-xl">Long Drive</div>
					<img
						src="https://lh3.googleusercontent.com/d/12yfEKM7zX_oa67fEcDLcyYjhX14O0goj"
						className="object-cover justify-self-center rounded-lg my-2 w-full h-[200px] border-2 border-solid border-black"
					/>
					<div className="p-2 bg-gray-500 text-white w-fit rounded-md text-sm my-2 hover:bg-gray-600 cursor-pointer">
						View Photos
					</div>
				</div>
				<div>
					<div className="font-bold text-xl">Travelling</div>
					<img
						src="https://lh3.googleusercontent.com/d/12yfEKM7zX_oa67fEcDLcyYjhX14O0goj"
						className="object-cover justify-self-center rounded-lg my-2 w-full h-[200px] border-2 border-solid border-black"
					/>
					<div className="p-2 bg-gray-500 text-white w-fit rounded-md text-sm my-2 hover:bg-gray-600 cursor-pointer">
						View Photos
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Hobbies;
