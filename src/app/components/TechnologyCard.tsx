import { ScreenSize, useSize } from "../hooks/useSize";

interface ITechnologyCard {
	image: string;
	text: string;
	deviceType: ScreenSize;
    classNames?: string;
}

const TechnologyCard = ({ image, text, deviceType, classNames }: ITechnologyCard) => {
	return (
		<div
			className={`bg-gray-800 rounded-[20px] py-5 px-12 ${
				deviceType === ScreenSize.MOBILE
					? "max-w-[30%] min-w-[30%] min-h-[100%] mx-4"
					: "h-[180px] w-[160px]"
			} flex flex-1 justify-center items-center flex-col ${classNames}`}
		>
			<div className="flex flex-1 items-center justify-center">
				<img
					className={`object-center ${
						deviceType == ScreenSize.MOBILE
							? "max-w-[40%]"
							: "max-w-[80%]"
					}`}
					src={image}
				/>
			</div>
			<div
				className={`text-white ${
					deviceType == ScreenSize.MOBILE ? "text-xs" : "text-[18px]"
				} font-bold text-center mt-4`}
			>
				{text}
			</div>
		</div>
	);
};

export default TechnologyCard;
