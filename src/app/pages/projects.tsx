import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import projects from "../../data/projects.json";

const Projects = () => {
	return (
		<div className="flex flex-col flex-1 items-center min-h-screen text-black">
			<div
				className={`text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16`}
			>
				Projects
			</div>
			<VerticalTimeline>
				{projects.map((project, index) => (
					<VerticalTimelineElement
						className="vertical-element-timeline-work"
						date={`${project.start} - ${project.end}`}
						dateClassName="text-white"
						icon={
							<img
								src={project.icon}
								className="rounded-[50%] object-contain"
							/>
						}
						iconClassName="bg-white"
						key={index}
					>
						<h3 className="vertical-timeline-element-title ">
							{project.company}
						</h3>
						<h4 className="vertical-timeline-element-subtitle ">
							{`${project.title}, ${project.location}`}
						</h4>
						<p>{project.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
};

export default Projects;
