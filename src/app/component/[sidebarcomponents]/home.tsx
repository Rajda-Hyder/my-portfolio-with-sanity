import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import image from "../image/myphoto.jpg"
import { Button } from '../section/button';
import { FileDown } from 'lucide-react';
import Link from 'next/link';


//fr means fraction
const Home = () => {
  return (
    <div className='place-items-center h-screen text-center bg-green-100'>


      <div className=' text-blue-500 text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl p-16 italic font-serif'>
        <Typewriter
          options={{
            strings: ['SYEDA RAJDA BANO'],
            autoStart: true,
            loop: true,
          }}
        /></div>
      <div data-aos="zoom-in" >
        <Image src={image} alt="Rajda"

          width={300}
          height={300} className="w-56 rounded-full border border-spacing-6 border-pink-300 p-3" />
      </div>
      <div className='text-green-500 text-center text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl p-16 font-mono'>
        <Typewriter
          options={{
            strings: ['Full Stack Developer', 'UI/UX Designer', 'Web Developer'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {/* <div className="flex flex-row-reverse ml-auto mr-10 mt-4">
        <Link href="" >
          <Button className="px-6 py-4 text-white rounded-xl">
            <FileDown className="mr-2" /> {/* Add the icon here 
            Download CV
          </Button>
        </Link>

      </div> */}

    </div>


  )
}
export default Home