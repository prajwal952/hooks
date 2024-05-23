import React from 'react';
import ReactLoading from 'react-loading';
 
const Pageloder = ({ type, color }) => {
    // <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />

    return (
        <div className="page-loader">
        <div className="spinner-border text-warning" style={{width: '4rem', height: '4rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    );
    };
 
export default Pageloder;