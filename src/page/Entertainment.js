import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useFetchData from '../components/use-fetch-data';
import Gotop from '../components/gotop/gotop';
import Load from '../components/loading/loading';
import Pagination from '../components/Pagination'
import '../scss/inner.scss';

const Business = () => {
    const { data,loading,} = useFetchData('https://newsapi.org/v2/top-headlines?country=tw&pagesize=100&category=entertainment&w&apiKey=e736dab5c31746d88b6a41123753548c');    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    // console.log(data)
    //切割標題文字顯示出處
    const Titlenew =(txt )=>{
        let title =txt.split("-");
        return(
            <span>{title[0]}</span>
        )
    }
    const Timenew =(txt )=>{
        let title =txt.split("T");
        return(
            <span>{title[0]}</span>
        )
    }


  // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
   
    // Change page
    // console.log(indexOfLastPost,indexOfFirstPost)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const Posts = () => {
        if( !loading) {
            const currentPosts = data.articles.slice(indexOfFirstPost, indexOfLastPost);
            // console.log(currentPosts);
            return   currentPosts
        }else {
            return<div><Load/></div>
        }
    }

    const Prevpage = (currentPage) => {
        currentPage == 1 ? setCurrentPage (1) :  setCurrentPage (currentPage-1);
    }
    const Nextpage = (currentPage) => {
        let maxpage = Math.ceil(data.articles.length / postsPerPage);
        currentPage == maxpage-1 ? setCurrentPage (maxpage-1) :  setCurrentPage (currentPage+1);
        // console.log(currentPage,maxpage);
    }
    return(
        <div>
        {loading && <div><Load/></div>}
        {!loading && (
          <div>
                <div className="th_businessnews">
                    <ul>
                        {Posts().map((item,i)=> (
                            <li key={i}>
                                <a href={item.url} target="_blank">
                                    <div className="news_content2">
                                        <header>
                                            <figure style={{backgroundImage:`url(${ item.urlToImage == null ? 'https://fakeimg.pl/350x200/?text=Hello' : item.urlToImage})`}}></figure>
                                        </header>
                                        <div>
                                            <h4 className="title_new">{ Titlenew(item.title)}</h4>
                                                <div className="provenance"> 
                                                    <span> {item.author} </span>
                                                    <time> 
                                                    {Timenew(item.publishedAt)}
                                                    </time>
                                                </div>
                                            <p>{ item.description}</p>
                                        </div>

                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={`${data.articles.length <= postsPerPage ? "numberpage hiddele " : "numberpage"}`}> 
                        <span className="btn_prev" onClick = {() => Prevpage(currentPage)}>←</span>
                        <Pagination
                            currentPage={currentPage}
                            postsPerPage={postsPerPage}
                            totalPosts={data.articles.length}
                            paginate={paginate}
                        />
                        <span className="btn_next" onClick = {() => Nextpage(currentPage)}>→</span>    
                    </div>
                   
                </div>
          </div>
        )}
        <Gotop/>
        </div>
    )
};
export default Business;