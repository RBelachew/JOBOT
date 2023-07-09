import React from "react";
import { Link } from 'react-router-dom';

import "./Options.css";

const MoreInfo = (props) => {

    function moreInfo(){
        return (
            <div>
                For more information click <Link to="../../../about">here</Link>
            </div>
            );
    }

    function selfJobSearch(){
        return (
            <div>
                To self job search click <Link to="/jobs">here</Link>
            </div>
            );
    }

    return (
        (props.node.getSelected().field==="Other")?moreInfo():selfJobSearch()
    );
};

export default MoreInfo;

