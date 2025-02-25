import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experience from "../../data/experience.json";

const Experience = () => {
	return (
		<div className="flex flex-col flex-1 items-center text-black py-2">
			<div
				className={`text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16`}
			>
				Experience
			</div>
			<VerticalTimeline>
				{experience.map((exp, index) => (
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
						key={index}
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
