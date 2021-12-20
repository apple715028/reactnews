import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Loadable from "react-loadable";
import Load from '../components/loading/loading';
import Navmenu from '../page/Navmenu';
import Home from '../page/Home';

const Jump = props => {

// const Loading = () => {
//     return <Load></Load>;
// };
// // 用react-loader包裝的Home Component
// const Home = Loadable({
//   // 要load的component，用import的方式插入componenr
//   loader() {
//     return import("../page/Home");
//   },
//   // 如果loading較慢時，要render的component
//   loading: Loading
// });
 const About = Loadable({
    loader: () => import('../page/About'),
    loading() {
        return<Load></Load>
      }
  });
  const Business = Loadable({
    loader: () => import('../page/Business'),
    loading() {
        return<Load></Load>
    }
  });
  const Entertainment = Loadable({
    loader: () => import('../page/Entertainment'),
    loading() {
        return<Load></Load>
    }
  });
  const Healthy = Loadable({
    loader: () => import('../page/Healthy'),
    loading() {
        return<Load></Load>
    }
  });
  const Science = Loadable({
    loader: () => import('../page/Science'),
    loading() {
        return<Load></Load>
    }
  });
  const Sports = Loadable({
    loader: () => import('../page/Sports'),
    loading() {
        return<Load></Load>
    }
  });
  const Technology = Loadable({
    loader: () => import('../page/Technology'),
    loading() {
        return<Load></Load>
    }
    });
  const NoMatch = Loadable({
    loader: () => import('../page/NoMatch'),
    loading() {
        return<Load></Load>
    }
  });
// // const  requireAuth=(nextState, replace)=>{
//   console.log("called"); // => Is not triggered at all 
//   if (!isLoggedIn()) {
//     replace({
//       pathname: '/Home'
//     })
//   }
// };
  return (
    <div>
       <Router>
        <div>
            <Navmenu/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About/>} />
                <Route path="/Business" element={<Business/>}></Route>
                <Route path="/Entertainment" element={<Entertainment/>}></Route>
                <Route path="/Healthy" element={<Healthy/>}></Route>
                <Route path="/Science" element={<Science/>}></Route>
                <Route path="/Sports" element={<Sports/>}></Route>
                <Route path="/Technology" element={<Technology/>}></Route>
                <Route path='*' element={<NoMatch/>}/>
            </Routes>
            </div>
      </Router>
    </div>
  );
};
//Private router function

export default Jump;


