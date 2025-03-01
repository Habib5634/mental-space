'use client';

const MeditationSection = () => {
    return (
        <section className="container mx-auto px-4 py-12 text-center">
            {/* Section Title */}
            <div className="mb-8">
                <p className="text-white bg-blue px-4 py-1 rounded-full inline-block text-sm font-semibold">
                    Explore Our Resources
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray mt-4">
                    Comprehensive Tools <br /> to Improve Your <span className="text-pink">Mental Wellness</span>
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Discover the range of solutions we offer to support your mental health, from expert-led guidance
                    to practical daily tools that fit your lifestyle.
                </p>
            </div>

            {/* Content Grid */}
            <div className="p-10 flex flex-col gap-8  min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img src="/assets/medetation.png" alt="Meditation" className="rounded-lg shadow-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray">Find the Right Meditation for Any Moment</h3>
                        <p className="text-gray-600 mt-2">
                            Whether you're looking for relaxation, focus, or better sleep, our guided meditations are designed to meet your needs.
                        </p>

                        {/* Meditation Categories */}
                        <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Relaxation Meditations</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Sleep Support</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Stress Management</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Focus & Productivity</li>
                        </ul>

                        {/* Button */}
                        <div className="mt-6">
                            <button className="bg-blue text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-opacity-90 transition">
                                Explore Meditations &rarr;
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                   

                    {/* Text Content */}
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray">Find the Right Meditation for Any Moment</h3>
                        <p className="text-gray-600 mt-2">
                            Whether you're looking for relaxation, focus, or better sleep, our guided meditations are designed to meet your needs.
                        </p>

                        {/* Meditation Categories */}
                        <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Relaxation Meditations</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Sleep Support</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Stress Management</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Focus & Productivity</li>
                        </ul>

                        {/* Button */}
                        <div className="mt-6">
                            <button className="bg-blue text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-opacity-90 transition">
                                Explore Meditations &rarr;
                            </button>
                        </div>
                    </div>

                     {/* Image */}
                     <div className="flex justify-center">
                        <img src="/assets/medetation2.png" alt="Meditation" className="rounded-lg shadow-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img src="/assets/medetation3.png" alt="Meditation" className="rounded-lg shadow-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray">Find the Right Meditation for Any Moment</h3>
                        <p className="text-gray-600 mt-2">
                            Whether you're looking for relaxation, focus, or better sleep, our guided meditations are designed to meet your needs.
                        </p>

                        {/* Meditation Categories */}
                        <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Relaxation Meditations</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Sleep Support</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Stress Management</li>
                            <li className="flex items-center gap-2"><span className="text-pink">&#10003;</span> Focus & Productivity</li>
                        </ul>

                        {/* Button */}
                        <div className="mt-6">
                            <button className="bg-blue text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-opacity-90 transition">
                                Explore Meditations &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeditationSection;
