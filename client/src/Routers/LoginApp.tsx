import React from "react";

const Login = () => {
    return(
    <div  className="flex flex-col content-center bg-slate-700 items-center justify-center h-screen w-full">
        <header>
            <h1 className="text-5xl mb-16 font-extrabold text-white">Login</h1>  
        </header>
        <div className="flex flex-col bg-slate-50 h-80 w-96 rounded-xl  items-center ;">
            <header className="flex mt-12 ">
                <h2 className="font-bold font text-xl">Welcome to my app!</h2>
            </header>
            <form className="flex flex-col h-full w-full items-center justify-center content-center space-y-7">
                <input type="text" placeholder="Email" className="w-56 rounded-lg indent-5  border-solid outline outline-offset-2 outline-1 focus:font-semibold"/>
                <input type="text" placeholder="Password" className="w-56 indent-5  rounded-lg outline outline-offset-2 outline-1 
                focus:font-semibold"/>
                <button className="border-solid outline outline-1 rounded-xl w-24 hover:bg-gray-300 p-0">Login</button>
            </form>
        </div>
        <footer><p className=" font-medium text-white">Not registered?<a className=" text-neutral-300
         font-extrabold hover:text-white ml-1" href="http://localhost:5173/Register">Sign In!</a></p></footer>
    </div>
    )
}

export default Login