import './App.css';
import Navbar from './components/Navbar';
import { useState,useEffect } from 'react';
import News from './components/News';
import business from './components/data/business.json'
import general from './components/data/news.json'
import entertainment from './components/data/entertainment.json'
import health from './components/data/health.json'
import sports from './components/data/sports.json'
import technology from './components/data/technology.json'
import science from './components/data/science.json'
import {BrowserRouter as Router,Route,
  Routes} from "react-router-dom";
 

function App() {
  const [articles, setArticles] = useState([]);
  const [articles1,setArticles1] = useState([]);
  const [articles2,setArticles2] = useState([]);
  const [articles3,setArticles3] = useState([]);
  const [articles4,setArticles4] = useState([]);
  const [articles5,setArticles5] = useState([]);
  const [articles6,setArticles6] = useState([]);


  useEffect(() => {
    setArticles(general.articles)
    setArticles1(business.articles)
    setArticles2(entertainment.articles)
    setArticles3(health.articles)
    setArticles4(science.articles)
    setArticles5(sports.articles)
    setArticles6(technology.articles)
  }, []);

  return (<>
  
  <Router>
    <Navbar/>
    <Routes>
        <Route path='/NewsApp-React' element={<News name={articles} head="General" />}/>      
        <Route path="business" element={<News name={articles1} head="Business" />}/>
        <Route path="entertainment" element={<News name={articles2} head="Entertainment"/>}/>
        <Route path="health" element={<News name={articles3} head="Health" />}/>
        <Route path="science" element={<News name={articles4} head="Science" />}/>
        <Route path="NewsApp-React" element={<News />}/>
        <Route path="sports" element={<News name={articles5} head="Sports" />}/>
        <Route path="technology" element={<News name={articles6} head="Technology"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
