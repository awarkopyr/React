/* eslint-disable no-unused-vars */
import React from 'react'
import { Form } from 'react-router-dom'

function Register() {
    return (

        <div>
            <form className="w-2/3 mx-auto my-auto ">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-black/10 rounded-l-lg px-3 py-4 mx-4 my-4  outline-none duration-150 bg-white/20"
                    required
                />
                <input
                    type="text"
                    placeholder="User name"
                    className="w-full border border-black/10 rounded-l-lg px-3 py-4 mx-4 my-4 outline-none duration-150 bg-white/20"
                    required
                />
                <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="w-full border border-black/10 rounded-l-lg px-3 py-4 mx-4 my-4 outline-none duration-150 bg-white/20"
                    required
                />
                <div className='flex w-full mx-auto my-auto'>
                    <input
                        type="text"
                        placeholder="Password"
                        className="w-full border border-black/10 rounded-l-lg px-3 py-4 mx-4 my-auto outline-none duration-150 bg-white/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="retype your password"
                        className="w-full border border-black/10 rounded-l-lg px-3 py-4 mx-4 my-auto outline-none duration-150 bg-white/20"
                        required
                    />
                </div>
                <input type="file" className='w-full border border-black/10 rounded-l-lg px-3 py-4 mx-4 my-4 outline-none duration-150 bg-white/20'
                    required />
                <button type="submit" className="rounded-r-lg px-3 py-1 my-3 bg-green-600 text-white shrink-0">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Register