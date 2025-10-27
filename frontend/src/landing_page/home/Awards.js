import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-2 p-4'>
            <div className='row '>
                <div className='col-6 p-5'>
                <h2> Trust with confidence</h2>
                    <p>
                     <h4 className='mt-5'>Customer-first always </h4> 
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br /> lakh crores of equity 
                    investments, making us India’s <br /> largest broker; contributing to 15% of daily 
                    retail <br />     
                    exchange volumes in India.</p>
                    </p>

                    <p ><h4 className='mt-4'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br /> notifications. High quality 
                    apps 
                    that you use at your <br /> pace, the way you like. Our philosophies.</p></p>

                    <p><h4 className='mt-4'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments <br />in 30+ fintech startups 
                    offer 
                    you tailored services<br /> specific to your needs.</p></p>

                    <p><h4 className='mt-4'>Do better with money </h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just<br /> facilitate 
                    transactions, but 
                    actively help you do better<br /> with your money.</p>
                    </p>
                
                </div>
                <div className='col-6 p-5'>     
                <img  className="" src='media/images/ecosystem.png' style={{width:"100%"}}></img>
                <div className='text-center mt-4'>
                    <a className='me-5' style={{textDecoration:"none"}}>Explore our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                </div>
                
                <div className='text-center mb-5'> 
                    <img src='media/images/pressLogos.png'></img>
                </div>
            </div>

        </div>
     );
}

export default Awards;