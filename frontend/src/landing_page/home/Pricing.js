import React from 'react';
function Pricing() {
    return ( 
       <div className='container me-2'>
        <div className='row'>
            <div className='col-4 mt-5'>
                <h1 className='mb-3 fs-4'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees 
                and no hidden charges. </p>
                <a>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-2 ms-5' >
                <img src='media/images/pricing0.svg' style={{width:"70%"}} className='mt-5'></img>
                <p className='ms-5 text-muted'>free accout <br/>opening</p> 
            </div>
            <div className='col-2'>
                <img src='media/images/pricing0.svg' style={{width:"70%"}} className='mt-5'></img>
                <p className='ms-5 text-muted'>Free equity delivery and direct mutual funds</p> 
            </div><div className='col-2'>
                <img src='media/images/othertrades.svg' style={{width:"70%"}} className='mt-5'></img>
                <p className='ms-5 text-muted'>Intraday and F&O</p> 
            </div>
            

        </div>
       </div>
     );
}

export default Pricing;