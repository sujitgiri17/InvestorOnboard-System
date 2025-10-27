import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-1'>
            <div className='row text-center'>
                    <img src='media/images/homeHero.png' alt='HeroImage' className='mb-5'></img>
                    <h1 className='mt-5 fs-9'>Invest in everything</h1>
                    <p className='fs-9'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"20%" , margin: "0 auto"}}>Sign up for free </button>
            </div>
        </div>
     );
}

export default Hero;