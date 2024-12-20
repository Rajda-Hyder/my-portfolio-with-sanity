"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact(){
  
  return (
  
    <section className="text-gray-600 body-font relative bg-green-100 h-auto min-h-screen p-6">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14481.523196161732!2d67.0259807!3d24.8508406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Karachi!5e0!3m2!1sen!2s!4v1731427390911!5m2!1sen!2s"
          style={{ filter: "contrast(1.2) opacity(0.4)" }}
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
            Governer House,Karachi,Sindh
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=rajdahyder@gmail.com"  target="_blank" style={{display:"inline-flex"}}>
                <Image src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" width={300} height={300} style={{ width: '24px', height: '24px', marginRight: '8px' }} />rajdahyder@gmail.com
            </Link>

            
            <Link href="https://wa.me/+923333862809" target="_blank" style={{display:"inline-flex"}}>
                <Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="whatsapp" width={300} height={300} style={{ width: '24px', height: '24px', marginRight: '8px' }} />Whatsapp
            </Link>

          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-green-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Contact Us
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
        Let’s start a conversation—your questions, ideas, and feedback are always welcome!
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div>
        <button
        onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rajdahyder@gmail.com", "_blank")}
        className="text-white bg-indigo-500 border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        Submit Here
      </button>

        <p className="text-xs text-gray-500 mt-3">
        Get in touch, and let’s make something amazing together!
        </p>
        {/* button */}
        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                                <Link href={"#"}>HOME</Link>
                            </button>

      </div>
    </div>
  </section>
  
  )
}
