import React ,{ useEffect, useState ,useContext,createContext} from 'react'
import './App.css';
import Header from './components/Header';
import NewsHeadlines from './components/NewsHeadlines';
import NoNewComponent from './components/NoNewComponent';


function App() {
  var [url, setUrl] = useState("https://newsapi.org/v2/top-headlines?country=gb&apiKey=15b1ea3c48914ad08226be4179b25c79") 
  var [newsData, setNewsData] = useState([])

  useEffect(() => {
    getNews(); 
  },[url])

  const getNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setNewsData(data.articles);
  }

  return (
    <React.Fragment>    
      <Header url={setUrl}/>           
      <div className="newLines">
        
      {newsData.map(news=><NewsHeadlines key={news.title} headline={news}></NewsHeadlines>)}
      {newsData.length==0 &&  <NoNewComponent></NoNewComponent>}
 </div>
    </React.Fragment>
  );
}

export default App;
