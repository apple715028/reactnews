import React from 'react';
import useFetchData from '../components/use-fetch-data';
import Gotop from '../components/gotop/gotop';
import Load from '../components/loading/loading';
import '../scss/Home.scss';

const Home = () => {
    const { data,loading,} = useFetchData('https://newsapi.org/v2/top-headlines?country=tw&apiKey=e736dab5c31746d88b6a41123753548c');    
    return(
        <div>
        {loading && <div><Load/></div>}
        {!loading && (
          <div>
                <div className="th_news">
                    <ul>
                    {
                        data.articles.map((item,i)=>{
                        return(
                            <li key={i}>
                            <a href={item.url} target="_blank">
                                <div className="news_content">
                                    <header>
                                        <figure style={{backgroundImage:`url(${ item.urlToImage == null ? 'https://fakeimg.pl/350x200/?text=Hello' : item.urlToImage})`}}></figure>
                                    </header>
                                    <div>
                                        <p className="title_new">
                                            { 
                                                item.title
                                            }
                                        </p>
                                    </div>

                                </div>
                            </a>
                            </li>
                        )
                        })
                    }
                    </ul>
                </div>
          </div>
        )}
        <Gotop/>
        </div>
    )
}
export default Home;