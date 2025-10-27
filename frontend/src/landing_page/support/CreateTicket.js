import React from 'react';
function CreateTicket() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5 ' id='supportWrapper'>
                <h3 style={{fontWeight:"600"}}>Support Portal</h3>
                <button className='btn btn-primary fs-5 ' style={{width:"10%"}}>My Ticket</button>
                
            </div>
            <div className='row p-5'>
                <input placeholder='Eg: How do I open my account, How do i activate F&O...' className='form-control form-control-lg  text-muted" '></input>
            </div>
            
        </section>
     );
}

export default CreateTicket;