function Article ({ title,date="January 1, 1970",minutes, preview} ){

   function getEmoji(minutes){
       let time= (minutes<30)? 5:10;
       let displayedShape=(minutes<30)? '☕' : '🍱';
       let emoji="";
       for (let i=0;i<minutes;i+=time){
        emoji+=displayedShape;
       }
       return `•${emoji} ${minutes}  min read`
    }

return(
    <article>
        <h3>{title}</h3>
        <small>{date}  {getEmoji(minutes)}</small>
        <p>{preview}</p>
    </article>
);
}
export default Article;
