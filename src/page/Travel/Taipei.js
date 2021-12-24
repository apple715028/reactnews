import React from "react";
// import '../scss/NoMatch.scss';
import useFetchData from '../../components/use-fetch-data';
import Gotop from '../../components/gotop/gotop';
import Load from '../../components/loading/loading';
import '../../scss/inner.scss';
const Taipei = () => {
  // const { data,loading} = useFetchData('https://www.travel.taipei/open-api/zh-tw/Events/News');    
  // console.log(data)
  return (
    <div className="th_travel">
        <h2>最新消息</h2> 
    </div>
  );
};

export default Taipei;
