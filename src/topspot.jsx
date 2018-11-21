import React from 'react';

export default props => (
    <div className="row">    
        <div className='well col-md-12'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a className="btn btn-primary btn-lg text-white" target="_blank" role="button" aria-pressed="true" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>Open in Google Maps</a>
        </div>
    </div>
);