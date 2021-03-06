import {useEffect} from "react";
import {useLocation} from "react-router-dom"

const ScrollTop =()=>{
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scroll({
            top:0,
            leftr:0,
        })
    }, [pathname]);

    return null
}

export default ScrollTop