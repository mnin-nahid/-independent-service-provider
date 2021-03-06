import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (   
        <div style={{height: 500}} className='w-100 d-flex justify-content-center align-items-center'>
              <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default Loading;     