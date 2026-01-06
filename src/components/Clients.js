import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}
const clientImage2 = {
    height: '20rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}
const clientImage3 = {
    height: '15rem',
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
                    </div>
                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 place-items-center">
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src="./assets/logo/navigation-logo.WebP" alt="client" />                            
                        </div> 
                        <div style={clientImage2} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src="./assets/logo/i3l.WebP" alt="client" />                            
                        </div>                                            
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;