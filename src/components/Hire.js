import React from 'react';
import emailjs from 'emailjs-com';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {AiOutlineUser} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlineSubject} from "react-icons/md";
import "./movtxt.css";
import "./hire.css";
const Hire= ()=>{
let [isOpen, setIsOpen] = useState(false);

function closeModal() {
  setIsOpen(false);
}

function openModal() {
  setIsOpen(true);
}
function sendEmail(e) {
  e.preventDefault();



emailjs.sendForm('service_ervi1s8', 'template_ssnc73y', e.target, 'l1s7FECDrXZSE_2RN')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
  openModal()
}
    return(
      <div className={"paracontainer"}>
    <div style={{display:'flex'}}>
            <form onSubmit={sendEmail}>
              <div className='parent'>
                       <div className='div1'>
                       <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Full Name</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <AiOutlineUser/>
                            </div>
                            <input  placeholder="Name" type="text" name="name" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                          </div>
                        </div>


                        <div className='div2'>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Email</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <HiOutlineMail />
                            </div>
                            <input type="text" name="email" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                          </div>
                        </div>
                        
                        

                        <div className='div5'>
                          <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Subject</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <MdOutlineSubject />
                            </div>
                            <input type="text" name="Subject" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="subject" />
                          </div>
                         </div>
                          <div className='div3'>
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                          <textarea name="message"id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                         </div>
                       
                        
                    </div>
                    <div >
                           <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                </form>
            </div>

            
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Message received
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your email has been sent . i will contact you as soon as possible.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
 



      </div>

    )
}


export default Hire