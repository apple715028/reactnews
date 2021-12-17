import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Gotop from "../components/gotop/gotop";
// import Weather from "../components/weather/weather";

// import "../sass/New.scss";

const New = props => {
  const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
        React.useEffect(() => {
          const FetchData = async () => {
            try {
              const res = await fetch(url, options);
              const json = await res.json();
              setResponse(json);
            } catch (error) {
              setError(error);
            }
          };
          FetchData();
        }, []);
        return { response, error };
      };
    
  
      const res = useFetch(
        `https://newsapi.org/v2/top-headlines?country=tw&category=health&apiKey=e736dab5c31746d88b6a41123753548c`,
         {}
       );
   
  
       const res2 = useFetch(
        `https://newsapi.org/v2/top-headlines?country=tw&category=entertainment&apiKey=e736dab5c31746d88b6a41123753548c`,
         {}
       );

       const res3 = useFetch(
        `https://newsapi.org/v2/top-headlines?country=tw&category=technology&apiKey=e736dab5c31746d88b6a41123753548c`,
         {}
       );
       const res4 = useFetch(
        `https://newsapi.org/v2/top-headlines?country=tw&category=business&apiKey=e736dab5c31746d88b6a41123753548c`,
         {}
       );

      //  const res5 = useFetch(
      //   `https://gnews.io/api/v3/top-news?lang=zh-TW&country=tw&max=100&token=e736dab5c31746d88b6a41123753548c`,
      //    {}
      //  );
  
      
      if (!res.response) {
        return <div>Loading...</div>;
      }

      if(!res2.response){
        return <div>Loading...</div>;
      }
      if(!res3.response){
        return <div>Loading...</div>;
      }
      if(!res4.response){
        return <div>Loading...</div>;
      }
      // if(!res5.response){
      //   return <div>Loading...</div>;
      // }






  const health = res.response.articles;
  const  entertainment = res2.response.articles;
  const  technology = res3.response.articles;
  const business = res4.response.articles;
  // const firstnew = res5.response.articles;
  // console.log(firstnew);
  // console.log(entertainment);

  

    //切割標題文字顯示出處
   const Titlenew =(txt)=>{
      let title =txt.split("-");
      return(
        <React.Fragment>
          <span>{title[0]}</span>
          <span className="NesNames">{title[1]}</span>
        </React.Fragment>
      )
  
    }

    //沒有圖片時放入一張灰圖
    const urlimage =(image,i)=>{
      let urlimag = image == null ?'https://fakeimg.pl/350x200/?text=Noimage&font=lobster': image;
      return urlimag
    } 
  return (
    <main>
      <div className="main_content">
          <div className="th_theme"> 
            <div className="th_health">
            <h3>健康站</h3>
              <ul>
                {
                  health.map((item,i)=>{
                    return(
                      <li key={i}>
                        <a href={item.url} target="_blank">
                            <figure style={{backgroundImage:"url(" + urlimage(item.urlToImage,i)+ ")"}}></figure>
                            <p>
                              {
                                Titlenew(item.title)
                              }
                            </p>
                        </a>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
          <div className="th_technology ">
              <h3>技術</h3>
              <ul>
                {
                  technology.map((item,i)=>{
                    return(
                      <li key={i}>
                        <a href={item.url} target="_blank">
                          <figure style={{backgroundImage:"url(" +  urlimage(item.urlToImage,i) + ")"}}></figure>
                            <p>
                              {
                                Titlenew(item.title)
                              }
                            </p>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
          </div>
          <div className= "th_entertainment">
              <h3>娛樂</h3>
              <ul>
                {
                  entertainment.map((item,i)=>{
                    return(
                      <li key={i}>
                        <a href={item.url} target="_blank">
                            <figure style={{backgroundImage:"url(" +  urlimage(item.urlToImage,i) + ")"}}></figure>
                            <p>
                              {
                                Titlenew(item.title)
                              }
                            </p>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
          </div>
          <div className="th_business">
          <h3>財經</h3>
            <ul>
            {
              business.map((item,i)=>{
                return(
                  <li key={i}>
                    <a href={item.url} target="_blank">
                        <figure style={{backgroundImage:"url(" + urlimage(item.urlToImage,i)+ ")"}}></figure>
                        <p>
                          {
                            Titlenew(item.title)
                          }
                        </p>
                    </a>
                  </li>
                )
              })
            }
        </ul>
      </div>
          </div>
         
        
      </div>
      <Gotop/>
    </main>
  );

};

export default New;
