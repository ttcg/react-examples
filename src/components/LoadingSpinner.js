import React from 'react';
import Delay from 'react-delay';
import './LoadingSpinner.css';

const LoadingSpinner = (props) =>  (
    props.loading ?
    <Delay wait={1000}>
        <div className="modal-loading">
            <div className="modal-content">
                <i className="fa fa-spinner fa-spin" /> Loading...
            </div>
        </div>
    </Delay>
    : null
);

export default LoadingSpinner;