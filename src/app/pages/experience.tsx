import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experience from "../../data/experience.json";

const Experience = () => {
	return (
		<div className="flex flex-col flex-1 items-center text-black py-2 z-10">
			<div
				className={`text-[#60A5FA] text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16 font-bold`}
			>
				Experience
			</div>
			<VerticalTimeline>
				{experience.map((exp, index) => (
					<VerticalTimelineElement
						className="vertical-timeline-element-work"
						contentStyle={{ background: '#1F2937', color: '#CBD5E1' }}
						contentArrowStyle={{ borderRight: '7px solid #1F2937' }}
						date={`${exp.start} - ${exp.end}`}
						dateClassName="text-[#93C5FD]"
						icon={
							<img
								src={exp.icon}
								className="rounded-[50%] object-contain"
								alt="company"
							/>
						}
						iconClassName="bg-[#1F2937]"
						key={index}
					>
						<h3 className="vertical-timeline-element-title text-[#60A5FA]">
							{exp.title}
						</h3>
						<h4 className="vertical-timeline-element-subtitle text-[#93C5FD]">
							{`${exp.company}, ${exp.location}`}
						</h4>
						<p className="text-[#CBD5E1]">{exp.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
