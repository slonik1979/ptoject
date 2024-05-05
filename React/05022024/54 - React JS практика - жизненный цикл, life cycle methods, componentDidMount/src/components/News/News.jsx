
const Newss = (props) => {
  return (
    <div>{props.news}</div>
  )
}

const News = () => {
    const news = [
      {id: 1, news: 'Россия'},
      {id: 1, news: 'Украина'},
      {id: 1, news: 'Япония'}
    ]
    const newsElements = news.map( (n) => {
      return (
        <Newss id={n.id} news={n.news}/>
      )
     }
    )
    return (
     
         <div>
      {newsElements}
          </div>
      
    )
   
  };
  
  export default News;