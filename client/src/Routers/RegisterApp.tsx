import React from "react";
import { render } from "react-dom";

const Register =  () =>    {
    return(
        <div className="flex flex-col justify-center items-center w-screen bg-slate-700 h-screen space-y-20">
            <header className=" font-extrabold text-white text-5xl">
                <h2>Register</h2>
            </header>
            <form className="flex flex-col justify-center space-y-10 items-center bg-slate-50 h-80 w-96 rounded-xl" action="">
                <input className="border-solid outline outline-1 rounded-xl w-56 h-7 indent-5" placeholder="Username" type="text" />
                <input className="border-solid outline outline-1 rounded-xl w-56 h-7 indent-5" placeholder="Password" type="text" />
                <input className="border-solid outline outline-1 rounded-xl w-56 h-7 indent-5" type="text"  placeholder="ConfirmPassword" />
                <button className="border-solid outline outline-1 rounded-xl w-24" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register