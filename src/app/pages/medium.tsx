import { useEffect, useState } from "react";
import { ScreenSize, useSize } from "../hooks/useSize";
import { Article, getMediumArticles } from "@/data/article";
import Spacer from "../components/spacer";
import { redirect } from "next/navigation";

const Medium = () => {
	const deviceType = useSize();
	const [feed, setFeed] = useState<Article[] | undefined>(undefined);
	const [loading, setLoading] = useState(false)

	useEffect(() => {

		(async () => {
			setLoading(true)
			const articles = await getMediumArticles()
			setFeed(articles)
			setLoading(false)
		})()
	}, [])

	const redirectToArticle = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<div className="flex flex-col flex-1 items-center min-h-screen">
			<div
				className={`text-white ${
					deviceType == ScreenSize.MOBILE
						? "text-[40px]"
						: "text-[120px]"
				} text-start w-full p-4`}
			>
				Medium
			</div>
			<div>
				{!loading && feed === undefined ? (
					<div>There was a problem fetching the articles!</div>
				) : (
					feed && (
						<div
							className={`grid ${deviceType == ScreenSize.MOBILE ? "grid-rows-1": "grid-cols-3"} gap-4 text-black place-items-center`}
						>
							{feed?.map((item) => (
								<div
									key={item.id}
									className="flex flex-col bg-white rounded-lg p-2 m-4 cursor-pointer"
									onClick={() => redirectToArticle(item.url)}
								>
									<div className="flex flex-row">

										<div className="w-[200px] h-[100px]">
											<img src={item.image_url.length > 0 ? item.image_url : "article.svg"} className="h-full w-full rounded-md object-fit"/>
										</div>
										<div className="mx-2 h-[100px]">
											<div>{item.title}</div>
											<div className="text-gray-700 text-xs mt-2">{item.subtitle}</div>
										</div>
									</div>
									<Spacer height={5} />
									<div className="flex flex-row p-2">
										<div className="flex flex-row items-center justify-center">
											<img src="clap.svg" className="h-[24px] w-[24px]"/>
											<div className="text-xs text-gray-700 text-center align-middle mx-2">{item.claps}</div>
										</div>

										<div className="flex flex-row items-center justify-center">
											<img src="comment.svg" className="h-[24px] w-[24px]"/>
											<div className="text-xs text-gray-700 text-center align-middle mx-2">{item.responses_count}</div>
										</div>

										{item.tags.map(tag => <div className="text-xs text-gray-300 mx-2 align-middle bg-gray-900 p-2 rounded-lg">{tag}</div>)}
									</div>
								</div>
							))}
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Medium;
