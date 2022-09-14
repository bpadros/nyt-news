import React from 'react';
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import swAlert from '@sweetalert/with-react'
import '../styles/results.css'
const Results = () => {

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('keyword')

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        // const endpoint =  `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${keyword}&api-key=UztxfFUHuc7X2IkLL4FAC2ZLEguEWING`
        // const endpoint =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=UztxfFUHuc7X2IkLL4FAC2ZLEguEWING`
        const endpoint =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=UztxfFUHuc7X2IkLL4FAC2ZLEguEWING`
        
        axios.get(endpoint)
        .then(response=>{
            const reviewsArray = response.data.response.docs
            // const img = response.data.response.docs
            console.log(reviewsArray)
            setArticles(reviewsArray)
        })
        .catch(error => console.log(error))
    },[])


    return (
        <>
         <h2>Buscaste : <em> {keyword}</em></h2>
        <div>
           {
            articles.map((oneArticle,index)=>{
                    return <div key={index} className='container mb-4 noticia'>
                    <div className='row'>
                    <div className='col-4'>
                    <img src= {`http://www.nytimes.com/${oneArticle.multimedia[0].url}`} alt="" />
                    </div>
                   <div className='col-8'>
                   <h2>{oneArticle.headline.print_headline}</h2>
                    <p>{oneArticle.abstract}</p>
                    
                    <p>{oneArticle.lead_paragraph}</p>
                    <p>{oneArticle.pub_date.substring(0,10)}  {oneArticle.section_name} <small>{oneArticle.byline.original}</small>  <button>Add to favourites</button></p>
                   
                   </div>
                    
                    
                    {/* <h2>URL:{oneArticle.multimedia[0].url}</h2> */}
                    
               
                 
                    </div>
                     </div>
                })
            }
         
        </div>
        </>
    );
};

export default Results;




//  {/* <h2>Buscaste : <em> {keyword}</em></h2>
//         <div className='row'>
//            {
//                 reviews.map((oneReview,index)=>{
//                     return <div key={index} className='col-4'>
//                     <h1>{oneReview.display_title}</h1>
                  
//                     <p>Rating :{oneReview.mpaa_rating}</p>
//                     <p>Date updated : {oneReview.date_updated}</p>
//                     <p>{oneReview.headline}</p>
//                     <p>{oneReview.link.suggested_link_text}</p>
//                     <p>Summary: {oneReview.summary_short.substring(0,100)}...</p>
//                     <a href={oneReview.link.url}  target='_blank' rel='noreferrer'>Read</a>
//                    <button>Add to favourites</button>
                    
                
//                      </div>
//                 })
//             }
         
//         </div> */}