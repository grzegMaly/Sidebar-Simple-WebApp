import {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa";

function App() {

    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className={`bg-[#ebebeb] w-full h-screen font-[Ubuntu]`}>
            <FaBars
                onClick={() => setShowSidebar(prev => !prev)}
                size={25}
                className={`fixed top-8 right-12 text-[#e94949] cursor-pointer hover:text-black`}/>
            <div className={`fixed top-0 left-0 bg-white w-fullDzwsfver md:w-[500px] h-full transition-all duration-300 ease-linear
            ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
                <div className={`flex justify-between items-center py-4 px-6`}>
                    <img src="/logo.svg" alt="logo" className={`ml-[-50px]`}/>
                    <FaTimes
                        onClick={() => setShowSidebar(prev => !prev)}
                        size={25}
                        className={`text-2xl text-[#e94949]`}/>
                </div>
                <ul>
                    <li>
                        <a href="#" className={`block text-2xl py-4 px-6 
                        transition-all duration-300 ease-linear hover:bg-[#f8f5f5] hover:pl-7`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`block text-2xl py-4 px-6 
                        transition-all duration-300 ease-linear hover:bg-[#f8f5f5] hover:pl-7`}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`block text-2xl py-4 px-6 
                        transition-all duration-300 ease-linear hover:bg-[#f8f5f5] hover:pl-7`}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default App
