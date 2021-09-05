import React from 'react';
import H5 from '@material-tailwind/react/Heading5';
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultFooter=()=> {
    return (
        <>
            <footer className="relative pt-8 pb-8 bg-maincolor">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="flex flex-wrap justify-around pt-6 text-center lg:text-left ">
                        <div className="w-full px-4 mb-5 lg:w-4/12 ">
                            <span className="text-lg uppercase lg:text-2xl" >
                            <H5 color="white" >Subscribe to our channel</H5>
                            </span>
                            <div className="gap-1 mt-8 md:flex">
                            <Input
                                type="text"
                                color="lightBlue"
                                size="regular"
                                outline={false}
                                placeholder="Type your Email"
                                className="mb-12"
                            />
                             <Button
                                 buttonType="filled"
                                 size="regular"
                                 rounded={false}
                                 block={false}
                                 iconOnly={false}
                                 ripple="light"
                                 className="w-full bg-buttonColor md:w-4/12"
                                        >
                                           Subscribe
                              </Button>
                            </div>
                            
                        </div>
                        <div className="w-full px-4 lg:w-4/12 ">
                
                            <div className="flex flex-wrap items-top">
                                <div className="w-full px-4 mb-8 ml-auto md:mb-0">
                                    <span className="block mb-2 font-serif text-sm font-medium uppercase">
                                        <H5 color="white">Get In Touch</H5>
                                    </span>
                                    <p className="text-white">Phone Number</p>
                                    <div id="facebook" className="flex justify-center gap-2 lg:justify-start">
                                    <div>
                                    <a 
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 mb-3 font-normal text-blue-500 bg-white rounded-full shadow-md outline-none place-items-center align-center focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     <FontAwesomeIcon icon={["fas", "phone"]} size="1x" />
                                     <i className="fas fa-phone-square-alt"></i>
                                </a>
                                    </div>
                                    <div>
                                        <p className="pt-2 text-white">+250788787878</p>
                                    </div>
                                </div>
                                <p className="text-white">Email</p>
                                <div id="facebook" className="flex justify-center gap-2 lg:justify-start">
                                    <div>
                                    <a 
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 mb-3 font-normal text-blue-500 bg-white rounded-full shadow-md outline-none place-items-center align-center focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />
                                     <i className="fas fa-phone-square-alt"></i>
                                </a>
                                    </div>
                                    <div>
                                        <p className="pt-2 text-white">info@intercore.com</p>
                                    </div>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-4/12">
                                    <span className="block mb-2 font-serif text-sm font-medium text-white uppercase">
                                    <H5 color="white">Find Us On</H5>
                                    </span>
                            <div className="justify-center mt-6 mb-8 jugap-2 md:justify-start md:mb-0 to-blue-500 ">
                                <div id="facebook" className="flex justify-center gap-2 lg:justify-start">
                                    <div>
                                       <a 
                                            href="#"
                                            className="flex items-center justify-center w-10 h-10 mb-3 font-normal text-blue-500 bg-white rounded-full shadow-md outline-none place-items-center align-center focus:outline-none"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="1x" />
                                     
                                        </a>
                                    </div>
                                    <div >
                                        <p className="pt-2 text-white">Facebook</p>
                                    </div>
                                </div>
                               
                                <div id="twitter" className="flex justify-center gap-2 mr-4 lg:justify-start">
                                    <div>
                                    <a 
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 mb-3 font-normal text-blue-500 bg-white rounded-full shadow-md outline-none place-items-center align-center focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
                                     
                                </a>
                                    </div>
                                    <div>
                                        <p className="pt-2 text-white"> Twitter</p>
                                    </div>
                                </div>

                                <div id="youtube" className="flex justify-center gap-2 lg:justify-start">
                                    <div>
                                    <a 
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 mb-3 font-normal text-blue-500 bg-white rounded-full shadow-md outline-none place-items-center align-center focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     <FontAwesomeIcon icon={["fab", "youtube"]} size="1x" />
                                     
                                </a>
                                    </div>
                                    <div>
                                        <p className="pt-2 text-white">YouTube</p>
                                    </div>
                                </div>
                                <div id="linkedin" className="flex justify-center gap-2 lg:justify-start">
                                    <div>
                                    <a 
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 mb-3 font-normal text-blue-500 bg-white rounded-full shadow-md outline-none place-items-center align-center focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
                                     
                                </a>
                                    </div>
                                    <div>
                                        <p className="pt-2 text-white">linkedIn</p>
                                    </div>
                                </div>
                            </div>
                                </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center justify-center md:justify-between">
                        <div className="w-full px-4 mx-auto text-center md:w-6/12">
                            <div className="py-1 text-sm font-medium text-white">
                                Copyright © {new Date().getFullYear()}  Intercore Group LTD | Designed By{' '}
                                <a
                                    href="#"
                                    className="text-white transition-all hover:text-gray-900"
                                >
                                    Nishimwe Elysee
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default DefaultFooter;