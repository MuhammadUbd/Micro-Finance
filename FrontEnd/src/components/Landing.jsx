import React from 'react'
// import land from "/assets/images/girl.jpg"
import { Button } from 'antd'
import img from "/assets/images/center.jpg"
import img2 from "/assets/images/center2.jpg"
import img3 from "/assets/images/final.jpg"
// console.log(land)
const LandPage = () => {
    // console.log(mainImg)
    return (
        <div className="p-2 my-2 relative w-full">
            <div className="w-full flex flex-col rounded-lg">
                <div className="w-full flex gap-3">
                    <div className="w-[36%] flex flex-col gap-3">
                        <div className="center-image ">
                            <img className="object-contain rounded-md" src={img} alt="" />
                        </div>
                        <div className="center-image">
                            <img className="object-contain rounded-md" src={img3} alt="" />
                        </div>
                    </div>
                    <div className="w-[64%]">
                        <div className="center-image">
                            <img className="object-contain rounded-md" src={img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5">
                    <h1 className="text-2xl font-bold text-center mb-4 my-6">The Rise of AI: How It's Reshaping Our World</h1>
                    <p className="text-xs leading-relaxed text-justify max-w-[450px] m-auto">
                        Artificial Intelligence (AI) has transitioned from a futuristic concept to a transformative force that is reshaping every corner of our lives. In our homes, AI powers virtual assistants like Alexa and Google Home, streamlining tasks and making everyday life more convenient. In industries like healthcare, AI-driven systems are revolutionizing diagnostics, enabling early detection of diseases with unparalleled accuracy. From personalized learning experiences in education to AI-powered chatbots providing round-the-clock customer service, the influence of AI is far-reaching and continues to grow.
                        <br />
                        <br />
                        However, the rapid advancement of AI is not without its challenges. Ethical concerns around data privacy and security are more relevant than ever, as companies collect and analyze vast amounts of personal data. The fear of job displacement looms large as automation takes over roles traditionally filled by humans, forcing industries to rethink workforce dynamics. Additionally, debates around the fairness of AI algorithms and their potential biases underscore the importance of ensuring that these technologies are developed responsibly and inclusively.
                        <br />
                        <br />
                        Despite these challenges, the potential of AI is immense and undeniable. As we navigate this new era, the focus must shift toward harnessing AI for societal good. Collaborative efforts between governments, businesses, and researchers are crucial to creating policies and technologies that balance innovation with accountability. The question isn't whether AI will change the world—it already is—but how we can ensure that its evolution benefits everyone. By addressing its risks thoughtfully, we can embrace AI as a tool that empowers humanity and drives progress in ways we never imagined.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LandPage



{/* <div className='parent w-[100%] flex gap-10'>
    <div className="w-[50%] flex flex-col gap-3 my-2">
        <div className='flex flex-col gap-0'>
            <h1 className='font-bold leading-10 w-[380px] text-[38px] h-[120px]'>DISCOVER INSIGHTS, INSPIRE CHANGES</h1>
            <p className='text-gray-500'>Your go-to platform for stories, tips, and expert opinions across [specific niche or categories]. Explore, learn, and grow with us.</p>
            <div className='flex gap-5 my-5'>
                <Button className='w-[170px] rounded-3xl my-2 bg-zinc-300'>Read Our Blogs</Button>
                <Button className='w-[160px] rounded-3xl my-2 bg-zinc-300'>Start Exploring</Button>
            </div>
        </div>
        <div className='flex py-5 gap-5'>
            <span className='font-semibold text-2xl'>200+
                <p className='font-normal text-[12px] text-gray-400'>International Brand</p>
            </span>
            <span className='font-semibold text-2xl'>2000+
                <p className='font-normal text-[12px] text-gray-400'>High-Qualtiy Product</p>
            </span>
            <span className='font-semibold text-2xl'>30000+
                <p className='font-normal text-[12px] text-gray-400'>Happy Customers</p>
            </span>
        </div>
    </div>
    <div className="w-[50%] border-black">
        <img src={land} className='w-[450px] h-[550px] rounded-md object-cover' alt="image" />
    </div>
</div> */}