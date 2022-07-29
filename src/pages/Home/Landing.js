import React from 'react';
import BuketGirl from "../../assets/image/bucketgirl.png"

const Landing = () => {
    return (
        <div>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div >
                        <p
                        data-aos="fade-right" 
                        data-aos-delay='200'
                        data-aos-duration='1000' 
                        className='text-xl'>Best Quality</p>
                        <h1 
                        data-aos="fade-right" 
                        data-aos-delay='400'
                        data-aos-duration='1000' 
                        class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p 
                        data-aos="fade-right" 
                        data-aos-delay='600'
                        data-aos-duration='1000' 
                        class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button 
                        data-aos='zoom-in' 
                        data-aos-delay='1100'
                        class="btn btn-primary">Get Started</button>
                    </div>

                    <div 
                    data-aos="fade-left"
                    data-aos-delay='600'
                    data-aos-duration='1000'
                    className='h-[60vh] shrink-0'>
                        <img src={BuketGirl} class="h-full " alt='bucket girl img' />
                    </div>

                </div>
            </div>
            <div className='rounded-2xl relative z-20 mx-auto bg-base-200 mt-[-40px] shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <button className='btn btn-primary mt-5'>Get</button>

            </div>
        </div>
    );
};

export default Landing;