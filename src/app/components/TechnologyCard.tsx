interface ITechnologyCard {
	image: string;
	text: string;
	classNames?: string;
}

const TechnologyCard = ({ image, text, classNames }: ITechnologyCard) => {
	return (
		<div
			className={`bg-gray-800 rounded-[20px] py-5 px-12 w-[200px] flex flex-1 justify-center items-center flex-col ${classNames}`}
		>
			<div className="flex flex-1 items-center justify-center">
				<img
					className={`object-center sm:max-w-[40%] md:max-w-[80%]`}
					src={image}
				/>
			</div>
			<div
				className={`text-white sm:text-xs md:text-[18px] font-bold text-center mt-4`}
			>
				{text}
			</div>
		</div>
	);
};

export default TechnologyCard;
