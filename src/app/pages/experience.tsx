'use client';
import ExperienceCard from "../components/ExperienceCard";
import experience from "../../data/experience.json";
import SectionTitle from "../components/SectionTitle";
import PageLayout from "../components/PageLayout";

const Experience = () => {
	return (
		<PageLayout>
			<SectionTitle title="Experience" />

			<div className="flex flex-col gap-8 w-full p-4 lg:px-16 z-10">
				{experience.map((exp, index) => (
					<ExperienceCard key={index} {...exp} index={index} />
				))}
			</div>

			{/* Add keyframe animation */}
			<style jsx global>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</PageLayout>
	);
};

export default Experience;
