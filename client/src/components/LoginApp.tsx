import React from "react";

const Login = () => {
    return(
    <div  className="md:flex flex-col content-center bg-slate-700 items-center justify-center h-screen w-full">
        <header>
            <h1 className="text-5xl mb-16 font-extrabold text-white">Login</h1>  
        </header>
        <div className="md:flex flex-col bg-slate-100 w-80 h-60 rounded-xl  items-center ;">
            <header className="md:flex mt-5">
                <h2 className=" font-bold font text-xl">Login Here</h2>
            </header>
            <div className="md:flex flex-col h-full w-full items-center">
                <input type="text" placeholder="email" className="w-56 mt-8 rounded-lg indent-5 mb-8 border-solid outline outline-offset-2 outline-1 focus:font-semibold"/>
                <input type="text" placeholder="password" className="w-56 indent-5  rounded-lg outline outline-offset-2 outline-1 
                focus:font-semibold"/>
            </div>
        </div>
    </div>
    )
}

export default Login