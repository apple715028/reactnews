import React from "react";
import {
    Routes, Route
} from "react-router-dom";
import Loadable from "react-loadable";
import Load from '../components/loading/loading';
import Taipei from '../page/Travel/Taipei';
import Navmenu from '../page/Navmenu';

const Travel = () => {
  return (
    <div className="th_nomatch">
        旅遊  
        <Routes>
            <Route path="/Travel/Taipei" element={Taipei} />
            <Route path="/Travel/Taipei2" element={Taipei} />
        </Routes>
    </div>
  );
};

export default Travel;
