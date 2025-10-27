import React from 'react';
function Eduction() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-2 text-center' >
                <img src='media/images/education.svg' style={{width:"60%"}}></img>
                </div>

                <div className='col-6 mt-5 '>
                    <h1 className='fs-4'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering 
                    everything from the basics to advanced trading.</p>
                <a className='p-2 fs-5' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in 
                    India for all your 
                    market related queries.</p>
                <a className='p-2 fs-5'style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

            </div>
        </div>
     );
}

export default Eduction;