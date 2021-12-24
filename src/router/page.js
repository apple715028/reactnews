import { Routes, Route,NavLink } from 'react-router-dom';
import Taipei from '../page/Travel/Taipei';
const Travel = () => {
  return (
    <div>
      <h1>旅遊</h1>
      <Routes>
        {/* The component will show here if the current URL matches the path */}
        <Route path="/Travel/Taipei" component={Taipei} />

        </Routes>
    </div>
  );
};