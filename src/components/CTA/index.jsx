import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


const navigation = [
    {twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
]
export default function Example() {
    return (
        <div className="bg-gray-700 rounded-xl">
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">We are exploring ways to make trading NEAR NFTs more fun</span>
                    <span className="block">and seamless for you, and we are open to your suggestions.</span>
                </h2>
                
                {navigation.map((item) => (
                <div className='flex mt-5 gap-4 justify-center items-center'>
                    <a href={item.twitter} target='_blank'><FaTwitter className="p-2 border rounded-full" size={40} /></a>
                    <a href={item.facebook} target='_blank'><FaFacebook className="p-2 border rounded-full" size={40} /></a>
                    <a href={item.linkedin} target='_blank'><FaLinkedin className="p-2 border rounded-full" size={40} /></a>
                </div>
                ))}
                <div className="mt-8 flex justify-center">

                    <div className="inline-flex rounded-md shadow">

                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border text-base font-bold rounded-full text-white bg-brand1"
                        >
                            Request a Feature
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}