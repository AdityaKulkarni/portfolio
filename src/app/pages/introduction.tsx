"use client";

import TechnologyCard from "../components/TechnologyCard";

const Introduction = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center">
			<div className="flex p-8 md:w-[40%] max-w-[600px] max-h-[800px] justify-center">
				<img
					src="/aditya.jpeg"
					className={` object-cover rounded-xl opacity-0 animate-fade`}
					alt="aditya"
				/>
			</div>

			<div className="flex flex-col pb-8 lg:w-[60%] gap-4 p-4">
				<div className="place-items-center lg:place-items-start">
					<h1
						className={`sm:flex-1 text-center text-[48px] lg:text-[84px] font-bold`}
					>
						Aditya Kulkarni
					</h1>
				</div>
				<div
					className={`flex flex-col items-center gap-10`}
				>
					<div className="flex flex-row gap-10 items-center justify-center">
						<TechnologyCard
							image="frontend.svg"
							text="Frontend Developer"
							classNames="opacity-0 animate-fade-slide-300"
						/>
						<TechnologyCard
							image="backend.svg"
							text="Backend Developer"
							classNames="opacity-0 animate-fade-slide-500"
						/>
					</div>
					<div className="flex flex-row gap-10 items-center justify-center">
						<TechnologyCard
							image="mobile.svg"
							text="Mobile Developer"
							classNames="opacity-0 animate-fade-slide-700"
						/>
						<TechnologyCard
							image="cloud.svg"
							text="Cloud Developer"
							classNames="opacity-0 animate-fade-slide-900"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
