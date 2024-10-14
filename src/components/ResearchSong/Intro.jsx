import React from 'react';
import soundimg from '../images/sound.png'

function Intro() {
    return (
        <section className="bg-black text-white p-6 rounded-lg shadow-lg">
            <div className="container mx-auto">
                <div className="w-full py-8">
                    <img src={soundimg} alt="soundimg" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Introduction</h1>
                <p className="text-lg mb-4">
                In today's rapidly advancing technological era, people are constantly seeking tools that enhance productivity and simplify daily life. One of the popular technologies is the creation of ambient sounds, which are beneficial in creating a relaxing atmosphere, reducing stress, and improving focus for work or learning. Luna AI is an intelligent assistant developed to generate ambient sounds that meet users' various needs, whether it's natural sounds, raindrops, or ocean waves.
                </p>

                <h2 className="text-2xl font-semibold mb-2">1. The Importance of Ambient Sounds in Daily Life</h2>
                <ul className="mb-4">
                    <li>Ambient sounds have a significant impact on our mental and physical well-being. These background sounds can help us feel calm, relaxed, and are useful for meditation or improving work performance. Creating the right atmosphere through ambient sounds is becoming increasingly popular across various sectors, such as working from home, exercising, or engaging in concentration-intensive activities.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">2. Luna AI and Ambient Sound Creation</h2>
                <ul className=" mb-4">
                    <li>Luna AI uses advanced sound processing technology in combination with machine learning to generate diverse ambient sounds tailored to the specific needs of users. Luna can generate real-time sounds and allow users to select or customize the sounds to match their desired atmosphere, such as:</li>
                    <ul>
                        <li className='list-disc list-inside'>Nature sounds (forests, waterfalls)</li>
                        <li className='list-disc list-inside'>Raindrops</li>
                        <li className='list-disc list-inside'>Ocean waves</li>
                        <li className='list-disc list-inside'>City sounds (cafés, tram sounds)</li>
                    </ul>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">The Use of AI Technology in Sound Generation</h2>
                <div className="text-lg">
                <p>Luna utilizes deep learning to analyze existing sounds from various sources, then generates similar ambient sounds. Luna can:</p>
                <ul>
                    <li className='list-disc list-inside'>Analyze the type of sound users want</li>
                    <li className='list-disc list-inside'>Create new, unique ambient sounds</li>
                    <li className='list-disc list-inside'>Adjust the volume, frequency, and other sound elements to suit the user's desired atmosphere</li>
                </ul>
                </div>
            </div>
        </section>
    );
}

export default Intro;