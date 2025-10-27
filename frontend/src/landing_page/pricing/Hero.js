import React from 'react';
function Hero() {
    return ( 
       <div className='container mt-5'>
        <div className='row text-center border-bottom mb-5'>
            <h1 className='fs-2 mt-5'>Pricing</h1>
            <p className='text-muted mb-5'>Free equity investment and flat ₹20 tready and F&O trades</p>
        </div>
        <div className='row p-4 ms-5 mt-5'>
            <div className='col-4 p-4'>
                <img src="media/images/pricingEquity.svg" style={{width:"60%"}}></img>
                <h1 style={{fontSize:"28px"}}>Free equity delivery</h1>
                <p style={{fontSize:"16px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
            </div>

            <div className='col-4 p-4'>
                <img src="media/images/intradayTrades.svg" style={{width:"60%"}}></img>
                <h1 style={{fontSize:"28px"}}>Free equity delivery</h1>
                <p style={{fontSize:"16px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
            </div>

            <div className='col-4 p-4'>
                <img src="media/images/pricingEquity.svg" style={{width:"60%"}}></img>
                <h1 style={{fontSize:"28px"}}>Free equity delivery</h1>
                <p style={{fontSize:"16px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
            </div>
            
        </div>
       </div>
     );
}

export default Hero;