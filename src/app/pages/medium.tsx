'use client';
import articles from "../../data/medium.json";
import PageLayout from "../components/PageLayout";
import SectionTitle from "../components/SectionTitle";

const Medium = () => {
	const redirectToArticle = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<PageLayout>
			<SectionTitle title="Medium" />
			
			<div className="w-full max-w-7xl p-4 lg:px-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{articles.map((item, index) => (
						<div
							key={index}
							onClick={() => redirectToArticle(item.url)}
							className="group relative bg-[#1F2937] rounded-xl overflow-hidden cursor-pointer
								transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]
								hover:-translate-y-1"
							style={{
								opacity: 0,
								animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`
							}}
						>
							{/* Content container with semi-transparent background */}
							<div className="relative z-20 p-6 bg-[#1F2937]/95 backdrop-blur-sm">
								{/* Image Banner */}
								<div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
									<img 
										src={item.image_url || 'article.svg'} 
										alt={item.title}
										className="w-full h-full object-cover transform transition-transform duration-500 
											group-hover:scale-110"
									/>
								</div>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 mb-4">
									{item.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="px-3 py-1 text-xs bg-[#111827] text-[#CBD5E1] rounded-full
												transform transition-all duration-300
												group-hover:bg-[#60A5FA] group-hover:text-white"
										>
											{tag}
										</span>
									))}
								</div>

								{/* Title */}
								<h2 className="text-white text-xl font-bold mb-3 line-clamp-2
									transform transition-all duration-300 group-hover:text-[#60A5FA]">
									{item.title}
								</h2>

								{/* Subtitle */}
								<p className="text-[#CBD5E1] text-sm mb-4 line-clamp-2">
									{item.subtitle}
								</p>

								{/* Metrics */}
								<div className="flex items-center gap-4 text-white">
									<div className="flex items-center gap-2">
										<img
											src="clap.svg"
											className="h-4 w-4 opacity-75"
											alt="claps"
										/>
										<span className="text-sm">{item.claps}</span>
									</div>
									<div className="flex items-center gap-2">
										<img
											src="comment.svg"
											className="h-4 w-4 opacity-75"
											alt="comments"
										/>
										<span className="text-sm">{item.responses_count}</span>
									</div>
									
									{/* Read More */}
									<div className="ml-auto flex items-center gap-2 text-white opacity-0 
										transform translate-x-10 transition-all duration-300 
										group-hover:opacity-100 group-hover:translate-x-0">
										<span className="text-sm font-medium">Read Article</span>
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

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

export default Medium;
