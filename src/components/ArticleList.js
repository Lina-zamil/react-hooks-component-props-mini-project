 import Article from "./Article";

function ArticleList({ posts}){
return(
    <main>
{posts.map(el=>(<Article key={el.id} title={el.title} date={el.date} minutes={el.minutes} preview={el.preview}/> ))}
    </main>
);
}
export default ArticleList;