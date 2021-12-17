import React, { useState, useEffect } from "react";

import "../../components/gotop/gotop.scss";

const Gotop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
      };


    const scrollToTop=() =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    window.addEventListener('scroll', checkScrollTop)

    
    return (
        <a  className="scroll" onClick={scrollToTop} style ={{  display: showScroll ? 'inline-block' : 'none',}}>
            <span className="arrow-up">
                Top
            </span>
        </a>
    );
};

export default Gotop;
