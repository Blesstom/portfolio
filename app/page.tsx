import Image from 'next/image'
import profilepic from '../public/images/profilepic.jpg'
import kuditip from '../public/images/kuditip.png'
import paga from '../public/images/paga.png'
import microsoft from '../public/images/microsoft.png'
import netflix from '../public/images/netflix.png'
import Recentwork from '../public/images/Recentwork1.jpeg'
import Recentwork2 from '../public/images/Recentwork2.jpeg'
import Link from 'next/link'


export default function Home() {
  const reviews = [
    {
      comment: `The development process was well thought out — our app has been performant and stable, making it much easier for us to manage with limited resources. I'd definitely recommend working with Timmy!`,
      name: 'COLLIN STEVENS',
      organization: 'USAHELLO'
    },
    {
      comment: `The service we received balanced Timmy's great development skills alongside an ability to understand what would be the most appropriate solution for our marketplace.`,
      name: 'DANIEL BYRES',
      organization: 'VETZONE'
    }, 
  ]

  const works = [
    {
      image: kuditip,
      project: 'Kuditip Website',
      Description: 'Project description',
      link: ''
    },
    {
      image: paga,
      project: 'Paga Website Redesign',
      Description: 'Project description' 
    },
    {
      image: microsoft,
      project: 'Microsoft Website Cloning',
      Description: 'Project description' 
    },
    {
      image: netflix,
      project: 'Netflix Website Cloning',
      Description: 'Project description' 
    },
    {
      image: Recentwork2,
      project: 'Project',
      Description: 'Project description' 
    },
    {
      image: Recentwork,
      project: 'Project',
      Description: 'Project description' 
    }
  ]
  return (
  <div className='p-5'>
    <nav className='flex gap-5 items-center mb-20'>
      <Image src={profilepic} alt=''
        className='w-[50px] h-[50px] rounded-full'/>
      <h2>Olaboade Thomas Blessing</h2>
      <div className='flex gap-5 ml-auto'>
        <a href="" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Work</h5></a>
        <a href="" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Resume</h5></a>
        <a href="" className='no-underline decoration-[#50d71e] "bg-black hover:bg-rgb(0, 102, 255)'><h5>Stack</h5></a>
      </div>
    </nav>
    <div className='m-auto w-3/4 text-left rounded-[10px] bg-[#2bafe734] shadow-lg shadow-black-500/40'>
      <div className="leading-5 p-5 text-black">
        <h1 className='mb-2.5 font-extrabold'>Hi, I'm Thomas.</h1>
        <p className='text-[14px] font-normal'>A skilled and creative frontend developer from Nigeria with 2years of experience in web development. Known for designing and implementing user-friendly, responsive, and visually appealing websites and web applications. Proficient in a range of frontend technologies and frameworks. Passionate about creating seamless user experiences and staying updated on the latest industry trends..</p>
      </div>
    </div>

    <section className='w-fit m-auto text-center grid grid-cols-2 gap-y-8 gap-x-10 my-20'>
      {
        reviews && reviews.map((review, i) => 
        <div className='w-[400px] text-center' key={i}>   
          <p className='text-[13px]'>{review.comment}</p>
          <h6 className='text-[blue]'>{review.name} — {review.organization}</h6>
        </div>)
      }
    </section>

    <hr className='border-black my-5'/>

    <div className='mt-2.5 text-center'>
      <h2 className='text-[rgb(45, 6, 3)] font-semibold text-[1rem]'>STACK</h2>
      <div className='flex justify-evenly pt-5'>
        <p className='text-[rgb(0, 0, 2)] font-bold'>JAVASCRIPT</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>REACT.JS</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>ANGULAR</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>NEXT.JS</p>
        <p className='text-[rgb(0, 0, 2)] font-bold'>NODE.JS</p>
      </div>
    </div>

    <hr className='border-black my-3'/>
    
    <div className='items-center mt-10'>
      <h2 className='text-center font-semibold text-[1.5rem]'>Projects</h2>
      <div className='gap-x-10 gap-y-6 mt-7 grid grid-cols-3'>
        { 
          works && works.map((work, i) => 
          <Link href={`${work.link}`}>
            <div
            className='w-[90%] m-auto hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:w-full rounded-b-lg pointer-events-auto' 
            key={i}
            >
              <Image src={work.image} alt=''
                className='w-full rounded-lg hover:rounded-none'
              />
              <div className='pl-1'>
                <h3 className='text-[#000]'>{work.project}</h3>
                <p className='text-[gray]'>{work.Description}</p>
              </div>
            </div> 
          </Link>)
        }
      </div>
    </div>
   

        <hr className='border-black my-5'/>

    <div className='my-14 w-full flex justify-around'>
      <div className='w-2/5 leading-10'>
        <h1 className='text-lg font-semibold'>So why work with me?</h1>
        <p className='text-sm leading-6'>With a keen interest in computer science, my unique strength lies in problem-solving. I excel at dissecting unconventional and imaginative concepts, devising strategies to bring them to fruition.

        After years of operating independently, I possess agility and the ability to swiftly adapt. I've successfully introduced expansive, internationally recognized projects, each with the imperative need for seamless operation from day one, which underscores my appreciation for reliability and performance.
                    
        Moreover, I pride myself on being an effective communicator and collaborator. I recognize that the 'how' isn't always the primary concern; what truly matters is a job well executed and delivered punctually</p>
      </div>
      <div>
        <Image src={profilepic} alt=''
          className='w-[320px] h-[310px] mt-2 rounded-ss-[600px] rounded-se-[0px] rounded-ee-[600px] rounded-es-[600px]'/>
      </div>
    </div>
        
    <hr className='border-black my-5'/>
      
    <section className='pt-5 justify-around flex'>
      <div className='w-3/6'>
        <h2 className='font-semibold text-[1.5rem]'>Let's Chat</h2>
        <p className='text-[20px] font-medium'>Need an experienced frontend developer to help out? Send me an email to discuss in more detail. Alternatively connect with me elsewhere on the web →</p>
      </div>
      <div className='p-5'>
          <a href="" className='no-underline text-black'><p className='text-[20px] leading-[30px] font-medium'>LinkedIn</p></a>
          <a href="" className='no-underline text-black'><p className='text-[20px] leading-[30px] font-medium'>Twitter</p></a>
          <a href="" className='no-underline text-black'><p className='text-[20px] leading-[30px] font-medium'>Email</p></a>
      </div>
      <div className='p-5'>
        <a href="" className='no-underline text-black'><p className='text-[20px] leading-[30px] font-medium'>Github</p></a>
        <a href="" className='no-underline text-black'><p className='text-[20px] leading-[30px] font-medium'>Instagram</p></a>
        <a href="" className='no-underline text-black'><p className='text-[20px] leading-[30px] font-medium'>Facebook</p></a>
      </div>

    </section>

   
  </div>
  )
}
