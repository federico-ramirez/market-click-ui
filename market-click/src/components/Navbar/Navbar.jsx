import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleSideBar = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className='w-full'>
            <nav className="w-screen min-h-fit h-10 grid grid-flow-col justify-items-stretch p-3 bg-violet-900 fixed top-0 z-50">
                <div className="w-fit justify-self-start p-2">
                    <p className="text-white">Market Click</p>
                </div>
                <div className="w-fit justify-self-end">
                    <button type='button' onClick={toggleSideBar} className="p-2 text-white hover:bg-violet-400 rounded-md self-center">
                        <span ><i><MenuIcon /></i></span>
                    </button>
                </div>
            </nav>
            {isVisible && (<Sidebar />)}
        </div>
    )
}

export default Navbar;