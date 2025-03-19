import {
	Android,
	Atlassian,
	Auth0,
	AWS,
	Azure,
	Bitbucket,
	C,
	CPlusPlus,
	CSS3,
	Docker,
	EC2,
	ExpressJsLight,
	Firebase,
	Flutter,
	Git,
	HTML5,
	Java,
	JavaScript,
	JSON,
	Kotlin,
	Kubernetes,
	MongoDB,
	MySQL,
	NextJs,
	NodeJs,
	OpenAI,
	PostgreSQL,
	Postman,
	React,
	Redis,
	Redux,
	TailwindCSS,
    TypeScript,
    VisualStudioCode,
} from "developer-icons";

const Skills = () => {
	return (
		<div className="flex flex-col flex-1 items-center text-black py-2">
			<div
				className={`text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16`}
			>
				Skills
			</div>
			<div className="flex flex-row flex-wrap gap-4 justify-items-start p-4 lg:px-16">
				<React />
                <Redux />
				<NextJs />
				<TailwindCSS />
				<HTML5 />
				<CSS3 />
				<NodeJs />
				<ExpressJsLight />
				<Auth0 />
				<AWS />
				<Azure />
				<EC2 />
				<Android />
				<Flutter />

                <MongoDB />
                <MySQL />
                <Redis />
                <Firebase />
                <PostgreSQL />

                <Docker />
                <Kubernetes />

                <TypeScript />
                <Kotlin />
                <JavaScript />
                <Java />
                <C />
                <CPlusPlus />

                <JSON />

                <OpenAI />

                <Git />
                <Postman />
                <Atlassian />
                <Bitbucket />
                <VisualStudioCode />
			</div>
		</div>
	);
};

export default Skills;
