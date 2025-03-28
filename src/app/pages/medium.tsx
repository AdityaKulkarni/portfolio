import Spacer from "../components/spacer";
import articles from "../../data/medium.json";

const Medium = () => {

	const redirectToArticle = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="flex flex-col flex-1 items-center ">
			<div
				className={`text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16`}
			>
				Medium
			</div>
			<div>
				<div
					className={`grid grid-rows-1 lg:grid-cols-2 gap-2 text-black place-items-center p-4 lg:px-16`}
				>
					{articles.map((item, index) => (
						<div
							key={index}
							className="flex flex-col bg-white rounded-lg p-2 m-4 cursor-pointer"
							onClick={() => redirectToArticle(item.url)}
						>
							<div className="flex flex-row">
								<div className="w-[200px] h-[100px] md:w-[150px]">
									<img
										src={
											item.image_url.length > 0
												? item.image_url
												: "article.svg"
										}
										className="h-full w-full rounded-md object-fit"
										alt="article"
									/>
								</div>
								<div className="mx-2 h-[100px] overflow-hidden">
									<div>{item.title}</div>
									<div className="text-gray-700 text-xs mt-2">
										{item.subtitle}
									</div>
								</div>
							</div>
							<Spacer height={5} />
							<div className="flex flex-row p-2 flex-wrap gap-2">
								<div className="flex flex-row items-center justify-between">
									<img
										src="clap.svg"
										className="h-[24px] w-[24px]"
										alt="claps"
									/>
									<div className="text-xs text-gray-700 text-center align-middle mx-2">
										{item.claps}
									</div>
								</div>

								<div className="flex flex-row items-center">
									<img
										src="comment.svg"
										className="h-[24px] w-[24px]"
										alt="comments"
									/>
									<div className="text-xs text-gray-700 text-center align-middle mx-2">
										{item.responses_count}
									</div>
								</div>
								{item.tags.map((tag, index) => (
									<div
										key={index}
										className="flex text-xs text-gray-300 mx-1 align-middle bg-gray-900 p-2 rounded-lg"
									>
										{tag}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Medium;
