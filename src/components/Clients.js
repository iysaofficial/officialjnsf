import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 mb-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#101084] uppercase font-bold">Diselenggarakan Oleh</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-[#101084]'></div>
                        </div>
                        {/* <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2> */}
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2">
                        {/* <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src='./assets/logo/i3l.WebP' alt="client" />                           
                        </div> */}

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src="./assets/logo/navigation-logo.WebP" alt="client" />                            
                        </div> 
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src="./assets/logo/navigation-logo.WebP" alt="client" />                            
                        </div> 

                        {/* <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={geps} alt="client" />                            
                        </div> */}

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;