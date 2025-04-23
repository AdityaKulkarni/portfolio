'use client';
import { useState } from 'react';
import SectionTitle from "../components/SectionTitle";
import PageLayout from "../components/PageLayout";
import { 
	React, NodeJs, ExpressJsLight, MongoDB, PostgreSQL, AWS, Docker, Kubernetes,
	Flutter, Git, Atlassian, Bitbucket, VisualStudioCode, OpenAI,
	TypeScript, JavaScript, C, CPlusPlus, JSON,
	Redux,
	NextJs,
	TailwindCSS,
	HTML5,
	CSS3,
	MySQL,
	Redis,
	Auth0,
	Azure,
	EC2,
	Firebase,
	Android,
	Kotlin,
	Java,
	Postman
} from 'developer-icons';

const skillsData = [
	// Frontend
	{ Icon: React, name: 'React', category: 'frontend' },
	{ Icon: Redux, name: 'Redux', category: 'frontend' },
	{ Icon: NextJs, name: 'Next.js', category: 'frontend' },
	{ Icon: TailwindCSS, name: 'Tailwind CSS', category: 'frontend' },
	{ Icon: HTML5, name: 'HTML5', category: 'frontend' },
	{ Icon: CSS3, name: 'CSS3', category: 'frontend' },
	{ Icon: TypeScript, name: 'TypeScript', category: 'frontend' },
	{ Icon: JavaScript, name: 'JavaScript', category: 'frontend' },
	
	// Backend
	{ Icon: NodeJs, name: 'Node.js', category: 'backend' },
	{ Icon: ExpressJsLight, name: 'Express', category: 'backend' },
	{ Icon: MongoDB, name: 'MongoDB', category: 'backend' },
	{ Icon: PostgreSQL, name: 'PostgreSQL', category: 'backend' },
	{ Icon: MySQL, name: 'MySQL', category: 'backend' },
	{ Icon: Redis, name: 'Redis', category: 'backend' },
	{ Icon: Auth0, name: 'Node.js', category: 'backend' },
	
	// Cloud
	{ Icon: AWS, name: 'AWS', category: 'cloud' },
	{ Icon: Azure, name: 'Azure', category: 'cloud' },
	{ Icon: EC2, name: 'EC2', category: 'cloud' },
	{ Icon: Docker, name: 'Docker', category: 'cloud' },
	{ Icon: Kubernetes, name: 'Kubernetes', category: 'cloud' },
	{ Icon: Firebase, name: 'Firebase', category: 'cloud' },
	
	{ Icon: Android, name: 'Android', category: 'mobile' },
	{ Icon: Flutter, name: 'Flutter', category: 'mobile' },
	{ Icon: Kotlin, name: 'Kotlin', category: 'mobile' },
	{ Icon: Java, name: 'Java', category: 'mobile' },
	
	// Tools
	{ Icon: Git, name: 'Git', category: 'tools' },
	{ Icon: Postman, name: 'Postman', category: 'tools' },
	{ Icon: Atlassian, name: 'Atlassian', category: 'tools' },
	{ Icon: Bitbucket, name: 'Bitbucket', category: 'tools' },
	{ Icon: VisualStudioCode, name: 'VS Code', category: 'tools' },
	{ Icon: OpenAI, name: 'OpenAI', category: 'tools' },
	
	// Languages
	{ Icon: TypeScript, name: 'TypeScript', category: 'languages' },
	{ Icon: JavaScript, name: 'JavaScript', category: 'languages' },
	{ Icon: C, name: 'C', category: 'languages' },
	{ Icon: CPlusPlus, name: 'C++', category: 'languages' },
	{ Icon: JSON, name: 'JSON', category: 'languages' },
];

const Skills = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredSkills = selectedCategory === 'All' 
		? skillsData 
		: skillsData.filter(skill => skill.category.toLowerCase() === selectedCategory.toLowerCase());

	return (
		<PageLayout>
			<SectionTitle title="Skills" />

			<div className="w-full max-w-7xl px-4 lg:px-16">
				<div className="flex flex-wrap gap-4 mb-8 justify-center">
					{['All', 'Frontend', 'Backend', 'Cloud', 'Mobile', 'Tools', "Languages"].map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-6 py-2 rounded-full transition-all duration-300
								${selectedCategory === category 
									? 'bg-[#60A5FA] text-white' 
									: 'bg-[#1F2937] text-[#CBD5E1] hover:bg-[#374151] hover:text-white'}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Skills Grid */}
				<div className="bg-[#1F2937]/50 rounded-2xl p-8 backdrop-blur-sm">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
						{filteredSkills.map((skill, index) => (
							<div
								key={skill.name}
								className="group flex flex-col items-center gap-3 transform transition-all duration-300
									hover:scale-110"
								style={{
									opacity: 0,
									animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`
								}}
							>
								<div className="w-16 h-16 flex items-center justify-center 
									bg-[#111827] rounded-xl p-3 transform transition-all duration-300 
									group-hover:bg-[#374151] group-hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]">
									<skill.Icon className="w-full h-full" />
								</div>
								<span className="text-[#CBD5E1] text-sm text-center group-hover:text-white">
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Skills;
