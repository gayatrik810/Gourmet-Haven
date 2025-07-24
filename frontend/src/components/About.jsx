import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 px-6">
        <div className="container mx-auto glass rounded-xl p-8">
            <h2 className="playfair text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" alt="Restaurant Interior" className="rounded-xl"/>
                </div>
                <div>
                    <p className="text-lg mb-6">Founded in 2010, Gourmet Haven has been serving exquisite culinary experiences to food enthusiasts. Our passionate team of chefs creates memorable dishes using the finest ingredients.</p>
                    <div className="grid grid-cols-2 gap-6 text-center">
                        <div className="glass p-4 rounded-xl">
                            <h3 className="text-2xl font-bold mb-2">10+</h3>
                            <p>Years of Excellence</p>
                        </div>
                        <div className="glass p-4 rounded-xl">
                            <h3 className="text-2xl font-bold mb-2">4.8</h3>
                            <p>Customer Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;