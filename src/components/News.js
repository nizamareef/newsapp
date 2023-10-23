import React,{useState,useEffect} from 'react'
import Newsitems from './Newsitems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=> {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const[totalResults,setTotalresults]=useState(0)
  
  
  


  

  
  


    return (
      <>
        <h2 className='text-center' style={{margin:'80px 0px 20px'}}>Todays Top Headlines About {props.head}</h2>
          <div className="container">
            <div className="row" >
              {props.name.map((element) => {
                return <div className="col-md-3" key={element.url}>
                  <Newsitems title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 70) : " "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>

              })}
            </div>
          </div>
      </>
    )
};

export default News