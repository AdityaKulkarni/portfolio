import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experience from "../../data/experience.json";
import { ScreenSize, useSize } from "../hooks/useSize";

const Experience = () => {
	const deviceType = useSize();

	return (
		<div className="flex flex-col flex-1 items-center min-h-screen text-black py-2">
			<div
				className={`text-white ${
					deviceType == ScreenSize.MOBILE
						? "text-[40px]"
						: "text-[120px]"
				} text-start w-full p-4`}
			>
				Experience
			</div>
			<VerticalTimeline>
				{experience.map((exp) => (
					<VerticalTimelineElement
						className="vertical-element-timeline-work"
						date={`${exp.start} - ${exp.end}`}
						dateClassName="text-white"
						icon={
							<img
								src={exp.icon}
								className="rounded-[50%] object-contain"
							/>
						}
						iconClassName="bg-white"
					>
						<h3 className="vertical-timeline-element-title ">
							{exp.title}
						</h3>
						<h4 className="vertical-timeline-element-subtitle ">
							{`${exp.company}, ${exp.location}`}
						</h4>
						<p>{exp.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
