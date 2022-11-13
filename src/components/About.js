import React from "react";
import "./movtxt.css";
import "./navbar.css";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function About() {
  return (
    <div>
        <div className="movtxt" >
        <div className="static-txts">A </div>
        <ul className="dynamic-txts" >
        <li><span>Devoloper</span></li>
        <li><span>Designer</span></li>
        <li><span>College Student</span></li>
        <li><span>FreeLancer</span></li>
        </ul>
        </div>
        <div className={"paracontainer"}>
        <div class="flex flex-col space-y-4 ...">
         <header className="para1">
         <span style={{fontFamily:"'Bebas Neue', cursive"}}class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
         Hello! 
         </span>
         </header>
         </div>
         <div className="parag" >
         <p className="para">Am Gouaidia Seif Eddine  </p> 
         <p className="para">a front end developer,Designer,college student </p> 
         <p className="para">and a Freelancer located in Annaba Algeria.</p>
         </div>

       
       </div>
       <div style={{
          
            display:"flex",
            flexWrap:"wrap",
            paddingLeft:"3%",
            paddingRight:"10%",
            placeContent: "left",
            marginTop:"1%"
            }}>
      <div style={{
            backgroundColor:'#ffffff40',
            width:"60rem",
            borderRadius: '1rem',
            padding: '1.2rem',
            marginLeft: '2rem',
            marginTop: '1rem'}}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-25">
                <span>Education</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                bla bla bla bla.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>More about me</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                bla bla bla bla.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Expeirence</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                ibhzeafhhzefèyazbfoDJZE9UJ
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>

    
    
    </div>
  );
}

export default About;