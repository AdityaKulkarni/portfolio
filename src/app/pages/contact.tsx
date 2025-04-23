import { GitHubLight, Google, Instagram, LinkedIn } from "developer-icons";
import SectionTitle from "../components/SectionTitle";
import PageLayout from "../components/PageLayout";

const Contact = () => {
	return (
		<PageLayout>
			<SectionTitle title="Contact" />

			<div className="w-full max-w-7xl px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Contact Info Card */}
				<div className="card-base p-8 backdrop-blur-sm">
					<h2 className="text-accent text-2xl font-semibold mb-6">Let&apos;s Connect</h2>
					
					{/* Email */}
					<div className="flex items-center gap-4 mb-6 group">
						<div className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center
							group-hover:bg-[#60A5FA] transition-colors duration-300">
							<svg className="w-6 h-6 text-secondary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div className="flex flex-col">
							<span className="text-secondary text-sm">Email</span>
							<a href="mailto:kulkarniaditya1997@gmail.com" 
								className="text-primary hover:text-accent transition-colors duration-300">
								kulkarniaditya1997@gmail.com
							</a>
						</div>
					</div>

					{/* Phone */}
					<div className="flex items-center gap-4 mb-6 group">
						<div className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center
							group-hover:bg-[#60A5FA] transition-colors duration-300">
							<svg className="w-6 h-6 text-secondary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div className="flex flex-col">
							<span className="text-secondary text-sm">Phone</span>
							<a href="tel:+1-408-393-6393" 
								className="text-primary hover:text-accent transition-colors duration-300">
								+1-408-393-6393
							</a>
						</div>
					</div>

					{/* Resume */}
					<div className="flex items-center gap-4 group">
						<div className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center
							group-hover:bg-[#60A5FA] transition-colors duration-300">
							<svg className="w-6 h-6 text-secondary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<div className="flex flex-col">
							<span className="text-secondary text-sm">Resume</span>
							<a href="https://drive.google.com/file/d/1Km6isBO9T0p54wP0fMVDLz4xguIeMBrJ/view?usp=sharing" 
								target="_blank"
								className="text-primary hover:text-accent transition-colors duration-300">
								Download CV
							</a>
						</div>
					</div>
				</div>

				{/* Social Links Card */}
				<div className="card-base p-8 backdrop-blur-sm">
					<h2 className="text-accent text-2xl font-semibold mb-6">Social Media</h2>
					
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
						{/* LinkedIn */}
						<a href="https://www.linkedin.com/in/adityakulkarni1997/" 
							target="_blank"
							className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-[#111827]
								hover:bg-[#0A66C2] transition-all duration-300"
						>
							<LinkedIn className="w-8 h-8" />
							<span className="text-secondary text-sm group-hover:text-white">LinkedIn</span>
						</a>

						{/* GitHub */}
						<a href="https://github.com/AdityaKulkarni" 
							target="_blank"
							className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-[#111827]
								hover:bg-[#24292E] transition-all duration-300"
						>
							<GitHubLight className="w-8 h-8" />
							<span className="text-secondary text-sm group-hover:text-white">GitHub</span>
						</a>

						{/* Instagram */}
						<a href="https://www.instagram.com/adi_kulkarni97/?hl=en" 
							target="_blank"
							className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-[#111827]
								hover:bg-[#E4405F] transition-all duration-300"
						>
							<Instagram className="w-8 h-8" />
							<span className="text-secondary text-sm group-hover:text-white">Instagram</span>
						</a>

						{/* Google */}
						<a href="https://g.dev/AdityaKulkarni" 
							target="_blank"
							className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-[#111827]
								hover:bg-[#4285F4] transition-all duration-300"
						>
							<Google className="w-8 h-8" />
							<span className="text-secondary text-sm group-hover:text-white">Google Dev</span>
						</a>

						{/* Medium */}
						<a href="https://medium.com/@kulkarniaditya1997" 
							target="_blank"
							className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-[#111827]
								hover:bg-[#000000] transition-all duration-300"
						>
							<img src="medium.svg" alt="Medium" className="w-8 h-8" />
							<span className="text-secondary text-sm group-hover:text-white">Medium</span>
						</a>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Contact;
