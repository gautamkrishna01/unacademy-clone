import React from 'react';
import Navbar from '../Components/Navbar';
import { GiFamilyHouse } from 'react-icons/gi';
import { PiExamBold } from 'react-icons/pi';
import image from '../asset/photo.jpg';
import photo from '../asset/newApp.avif';
import Footer from '../Components/Footer';

const Home = () => {
  const menus = [
    {
      icons: <GiFamilyHouse />,
      name: 'UPSC CSG-GS',
    },
    {
      icons: <PiExamBold />,
      name: 'IIT JEE',
    },
    {
      icons: <PiExamBold />,
      name: 'NEET UG',
    },
    {
      icons: <PiExamBold />,
      name: 'Banks exams',
    },
    {
      icons: <PiExamBold />,
      name: 'SSC JE & state AE exams',
    },
    {
      icons: <PiExamBold />,
      name: 'CAT & others MBA entrance tests',
    },
    {
      icons: <PiExamBold />,
      name: 'CBSE class 12',
    },
    {
      icons: <PiExamBold />,
      name: 'CA Intermediate',
    },
  ];

  const cards = [
    {
      name: 'Daily live class ',
      para: 'Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on',
    },
    {
      name: 'Practice and revise ',
      para: 'Learning isn just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision',
    },
    {
      name: 'Learn anytime, anywhere ',
      para: 'One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices',
    },
  ];

  return (
    <>
      <Navbar />
      <div className='flex justify-center    '>
        <div className=' w-full max-w-[1100px] my-[70px]'>
          <h1 className='text-4xl font-bold'>
            Crack your goal with <br /> India’s top educators
          </h1>
          <p className='my-2'>
            Over <span className='text-green-500'>10 crore</span> learners trust
            us for their preparation
          </p>
          <input
            type='text'
            placeholder='Enter your mobile Number'
            className='px-[100px] py-[20px] border border-black rounded-md my-3 text-[20px] outline-none'
          />
          <div>
            <span>We’ll send an OTP for verification</span>
          </div>
          <button className='w-[39%] bg-[#3C4953] text-white py-[20px] my-4 text-2 cursor-pointer'>
            Join for free
          </button>
          <div className='my-[60px]'>
            <h1 className='text-4xl font-bold my-3 '>
              Select your goal / exam
            </h1>
            <span>200+ exams available for your preparation</span>
            <div>
              <input
                type='text'
                placeholder='Type the goal/exam you are preparing for'
                className='px-[100px] py-[20px] border border-black rounded-md my-3 text-[20px] w-full outline-none'
              />
            </div>
            <div>
              <h1 className='text-4xl font-bold my-[20px]'>Popular goals</h1>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              {menus.map((data) => (
                <div className='w-[250px] h-[250px] border rounded-sm flex justify-center items-center flex-col my-3  '>
                  <div>
                    <span className='text-5xl  '>{data.icons}</span>
                    <span>{data.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <input
              type='text'
              placeholder='See all goals (200+)'
              className='px-[100px] py-[20px] border border-black rounded-md my-3 text-[20px] outline-none'
            />
          </div>

          <div className='flex gap-5 my-8 border py-4 shadow-md px-3'>
            <div className='left'>
              <img src={image} alt='' />
            </div>
            <div className='right'>
              <span className='text-[#4D82F7]'>INTRODUCTION</span>
              <h1 className='text-4xl my-3 text-bold'>
                Unacademy Centres for IIT JEE and NEET UG
              </h1>
              <p>
                Admissions open in Kota, Delhi, Chandigarh, Sikar, Indore and
                20+ other cities!
              </p>
              <button className=' bg-[#3C4953] text-white py-[20px] my-4 text-2 cursor-pointer px-6 rounded-md'>
                Find the center
              </button>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {cards.map((card) => (
              <div
                key={card.id}
                className='w-[300px] h-[250px] border rounded-sm flex justify-center items-center flex-col my-3 p-3'
              >
                <h1 className='text-2xl font-bold my-3'>{card.name}</h1>
                <p>{card.para}</p>
              </div>
            ))}
          </div>
          <div className='flex  space-x-3 gap-y-4  my-6 '>
            <div className='p-4 '>
              <h1 className='text-5xl font-bold '>Get the learning app</h1>
              <p className=''>
                Download lessons and learn anytime, anywhere with the Unacademy
                app
              </p>
            </div>
            <div className='right'>
              <img src={photo} className='w-[70%]' />
            </div>
          </div>
          <div className='lears flex justify-between y-4'>
            <div className='left'>
              <h1 className='text-4xl font-bold my-4'>
                Start learning with <br />
                Unacademy
              </h1>
              <p>
                Get unlimited access to structured <br /> courses & doubt
                clearing sessions
              </p>
              <button className='bg-green-600 p-5 cursor-pointer rounded-md my-4 text-white'>
                Start learning
              </button>
            </div>
            <div className='  flex flex-col gap-y-7'>
              <h2 className='text-xl '>Exam Categories</h2>
              <h1 className='font-bold text-4xl'>60+</h1>
              <h2 className='text-xl'>Daily live classes</h2>
              <h1 className='font-bold text-4xl'>1.5k</h1>
              <h2 className='text-xl'>Mins watched</h2>
              <h1 className='font-bold text-4xl'>3.2B</h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
