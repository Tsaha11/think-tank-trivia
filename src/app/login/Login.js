"use client"
import React from 'react'
<<<<<<< HEAD

import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import LoginAnimation from "./LoginAnimation.json"
import Lottie from 'lottie-react'

import { useFormik } from 'formik'
import { loginSchema } from '@/schemas/loginSchema'

const initialValues = {
    email: "",
    password: "",
}

const Login = () => {

    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (value, action) => {
            console.log(value)
            action.resetForm();
        }
    })

=======
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import { useState } from 'react'
const Login = () => {
    const [email,setEmailchange]=useState("");
    const [password,setPasswordchange]=useState("");
    const emailChange=(evn)=>{
        setEmailchange(evn.target.value);
    }
    const passwordChange=(evn)=>{
        setPasswordchange(evn.target.value);
    }
    const submitHandler=async(evn)=>{
        evn.preventDefault();
        console.log(email,password);
    }
>>>>>>> 922da22c94c5a4e4a4806c0ff05e4c9998d00ddd
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-8 col-start-3 shadow-md shadow-gray-300 flex justify-around my-5 mx-auto bg-[#F8F0E5] px-3 py-2 rounded-lg">
                    <div className="left px-3 py-2 shadow-md shadow-gray-300 w-3/4 mx-3 my-3 bg-[#F0F0F0]">
                        <h1 className="text-2xl font-bold text-center text-black">Login</h1>
                        <hr className="w-24 h-1 my-2 mx-auto bg-purple-700 text-center" />
<<<<<<< HEAD
                        <p className="text-center first-letter:text-2xl"><span className='text-black'>Doesn't have an account yet ? </span><span class="cursor-pointer font-bold underline text-purple-700 hover:text-purple-900">Sign Up</span></p>
                        <form action="#" className='flex flex-col justify-center ' >
                            <div className='flex flex-col'>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 mt-3">Email Address</label>
                                <div className="flex my-1">
                                    <span className="inline-flex items-center px-3 text-md text-gray-900 bg-gray-300 rounded-l-md">
                                        <MdEmail />
                                    </span>
                                    <input className={`rounded-none rounded-r-lg bg-gray-200 border border-gray-300  focus:outline-purple-900  text-gray-900 block  w-full text-sm p-2.5 ${errors.email && touched.email ? "border-2 border-red-600 rounded-l-md" : ""} `}
                                        placeholder="email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                { errors.email && touched.email ? <p className='text-red-600 text-xs'>{errors.email}</p> : null}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mt-3">
                                    Password</label>
                                <div className="flex my-2">
                                    <span className="inline-flex items-center px-3 text-md text-gray-900 bg-gray-300 rounded-l-md">
                                        <RiLockPasswordFill />
                                    </span>
                                    <input className={`rounded-none rounded-r-lg bg-gray-200 border border-gray-300  focus:outline-purple-900  text-gray-900 block  w-full text-sm p-2.5 ${errors.password && touched.password ? "border-2 border-red-600 rounded-l-md" : ""} `}
                                        placeholder="password"
                                        type="password"
                                        id="password"
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
=======
                        <p className="text-center first-letter:text-2xl"><span className='text-black'>Doesn't have an account yet ? </span><span Name="cursor-pointer font-bold underline text-purple-700 hover:text-purple-900">Sign Up</span></p>
                        <form action="#" onSubmit={submitHandler}>
                            <div className="my-3 mt-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                                <input type="email" id="email"
                                    className="bg-white-50 shadow-2xl shadow-purple-200 text-black text-sm rounded-lg focus:outline-purple-700 block w-full p-2.5"
                                    placeholder="andrewtate140@gmail.com" required onChange={emailChange}/>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900">
                                        Password</label>
                                    <p className="text-sm cursor-pointer underline text-purple-900 hover:text-purple-700">Forgot Passowrd?</p>
                                </div>
                                <input type="password" id="password"
                                    className="bg-gray-50 shadow-2xl shadow-purple-200 text-black text-md rounded-lg focus:outline-purple-700 block w-full p-2.5 "
                                    placeholder="••••••••••••••••••" required onChange={passwordChange}/>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:bg-cyan-950"
                                        required/>
>>>>>>> 922da22c94c5a4e4a4806c0ff05e4c9998d00ddd
                                </div>
                                { errors.password && touched.password ? <p className='text-red-600 text-xs '>{errors.password}</p> : null}
                            </div>
<<<<<<< HEAD

                            <div className='flex space-x-3'>
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value=""
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:bg-cyan-950"
                                            required />
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-slate-600">Remember
                                        me</label>
                                </div>
                                <p className="text-xs cursor-pointer underline text-purple-900 hover:text-purple-700">Forgot Passowrd?</p>
                            </div>
                            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center ">LOGIN</button>
=======
                            <button className="text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ">LOGIN</button>
>>>>>>> 922da22c94c5a4e4a4806c0ff05e4c9998d00ddd
                            <div className="flex justify-center my-2">
                                <hr className="w-20 h-px my-4 mr-3 bg-purple-500" />
                                <span className="font-bold text-purple-950">or login with</span>
                                <hr className="w-20 h-px my-4 ml-3 bg-purple-500" />
                            </div>
                            <div className="flex justify-around space-x-14">
                                <button className='text-3xl'><FcGoogle /></button>
                                <button className='text-3xl bg-white rounded-full '><FaFacebook /></button>
                            </div>
                        </form>
                    </div>
<<<<<<< HEAD
                    {/* <div class="border-2 w-2 h-3/4  bg-purple-700 my-auto"></div> */}
                    <div class="right flex justify-center items-center px-1 py-1">
                        <div>
                            {/* <Lottie className='w-72' animationData={LoginAnimation} /> */}
                            <img src="./login2.svg" alt="" />
                        </div>
=======
                    <div className="border-2 w-2 h-3/4  bg-purple-500 my-auto"></div>
                    <div className="right flex flex-col justify-center items-center px-3 py-3">
                        <div className=''><img src="./login2.svg" alt="errorLoading" /></div>                        
>>>>>>> 922da22c94c5a4e4a4806c0ff05e4c9998d00ddd
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login;