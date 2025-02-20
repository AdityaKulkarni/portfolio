import axios from "axios";

interface Top10Articles {
	top_articles: string[];
}

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	responses_count: number;
	reading_time: number;
	topics: string[];
	tags: string[];
	claps: number;
	voters: number;
	url: string;
	image_url: string;
}

const HOST = "medium2.p.rapidapi.com";
const GET_TOP_10_ARTICLES = `https://${HOST}/user/${process.env.NEXT_PUBLIC_MEDIUM_USER_ID}/top_articles`;
const GET_ARTICLE_INFO = (articleId: string) =>
	`https://${HOST}/article/${articleId}`;

const headers = {
	"x-rapidapi-key": process.env.NEXT_PUBLIC_MEDIUM_API_KEY,
	"x-rapidapi-host": HOST,
};

export const getMediumArticles = async () => {
	const articles = localStorage.getItem("articles");

	if (
		!articles ||
		(articles &&
			Math.round(
				(new Date().getTime() -
					new Date(JSON.parse(articles).date).getTime()) /
					(1000 * 60 * 60 * 24)
			) > 30)
	) {
	
        try{
            const top10Articles = await axios.get<Top10Articles>(GET_TOP_10_ARTICLES, {
                headers
            })

            if(top10Articles.data.top_articles && top10Articles.data.top_articles.length > 0){
                const articles: Article[] = []
                for(var i = 0; i < 9; i++){
                    const articleInfo = await axios.get<Article>(GET_ARTICLE_INFO(top10Articles.data.top_articles[i]), {
                        headers
                    }).then(res => {
                        if(res.data){
                            articles.push(res.data)
                        }
                    })
                }
                localStorage.setItem("articles", JSON.stringify({date: Date(), articles}))
                return Promise.resolve(articles)
            }else{
                return Promise.resolve(undefined)
            }
        }catch(e: any){
            console.log("e: ", e)
            return Promise.reject(undefined)
        }
    }else{
        console.log("from storage")
        return Promise.resolve(JSON.parse(articles).articles)
    }
};
