"use client";

import CommonProps from "../common/CommonProps";
import TechnologyCard from "../components/TechnologyCard";
import { ScreenSize, useSize } from "../hooks/useSize";

interface IIntroduction extends CommonProps {}

const Introduction = () => {
	const deviceType = useSize();

	return (
		<div
			className={`flex ${
				deviceType == ScreenSize.MOBILE ? "flex-col" : "flex-row"
			} flex-1 items-center min-h-screen px-24`}
		>
			<div className=" flex items-center justify-center min-w-[40%]">
				<img
					src="/aditya.jpeg"
					className={`${
						deviceType == ScreenSize.MOBILE ? "mt-24" : "h-[80vh]"
					} rounded-xl opacity-0 animate-fade`}
				/>
			</div>

			<div className="flex flex-col flex-1 min-h-screen items-center justify-center gap-20 mx-12">
				<div className="flex items-center justify-center">
					<h1
						className={`text-white ${
							deviceType == ScreenSize.MOBILE
								? "text-[40px]"
								: "text-[140px]"
						} font-bold`}
					>
						Aditya Kulkarni
					</h1>
				</div>
				<div className="flex items-center justify-center text-justify tracking-widest">
					<h1
						className={`text-white ${
							deviceType == ScreenSize.MOBILE
								? "text-xs w-screen px-4"
								: "text-md"
						} font-bold`}
					>
						Detail-oriented software engineer with experience in
						full-stack development and freelancing as an Android
						developer. Skilled in designing scalable solutions using
						ReactJS, NodeJS, Kotlin, and AWS. Proficient in building
						user focused applications and optimizing workflows
						through innovative design. Strong foundation in data
						structures, algorithms, and database management, with
						expertise in cloud computing and microservices
						architecture. Proven ability to enhance productivity and
						streamline processes across diverse projects. Driven to
						contribute to impactful software solutions while
						exploring modern technologies.
					</h1>
				</div>
				<div
					className={`flex ${
						deviceType == ScreenSize.MOBILE
							? "flex-col"
							: "flex-row"
					} items-center justify-center gap-10`}
				>
					<div className="flex flex-row gap-10 items-center justify-center">
						<TechnologyCard
							deviceType={deviceType}
							image="frontend.svg"
							text="Frontend Developer"
							classNames="opacity-0 animate-fade-slide-300"
						/>
						<TechnologyCard
							deviceType={deviceType}
							image="backend.svg"
							text="Backend Developer"
							classNames="opacity-0 animate-fade-slide-500"
						/>
					</div>
					<div className="flex flex-row gap-10 items-center justify-center">
						<TechnologyCard
							deviceType={deviceType}
							image="mobile.svg"
							text="Mobile Developer"
							classNames="opacity-0 animate-fade-slide-700"
						/>
						<TechnologyCard
							deviceType={deviceType}
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
