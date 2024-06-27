import {React,useEffect,useState} from 'react'
import {Link,NavLink} from 'react-router-dom'


export default function Header() {

    const [scrolltopdata, setscrolltopdata] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('scrolled-header');
            }
        });
    }, [])


return (
  
    <header className={`fixed top-0 left-0 w-full flex justify-center h-[56px] ${scrolltopdata}`}  >
     
        <div className='content lg:w-[1069px] w-full  h-full pl-2 pr-2 flex justify-between'>

               <div className='lg:hidden text-white text-xl h-full flex justify-center items-center font-bold ml-2' >
                    Menü 
                    <div className='ml-2'>

                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                     </svg>
                    </div>
               </div>

                <div className='logo flex justify-center items-center '>
                    <img src="/logo.png" alt="Prime Video Logo"  className='h-6' />
                </div>
                <ul className='header-menu text-white flex lg:flex hidden '>                    
                    <li className='text-md h-full font-semibold border-b-2 border-white  flex justify-center items-center p-4 hover:bg-[#191e25]'><NavLink>Anasayfa</NavLink></li>
                    <li className='text-md h-full font-semibold text-[#ffffffb9] flex justify-center   items-center p-4 hover:bg-[#191e25]'><NavLink>Filmler</NavLink></li>
                    <li className='text-md h-full font-semibold text-[#ffffffb9] flex justify-center  items-center p-4 hover:bg-[#191e25]'><NavLink>TV Dizileri</NavLink></li>
                    <li className='text-md h-full font-semibold text-[#ffffffb9] flex justify-center   items-center p-4 hover:bg-[#191e25]'><NavLink>Kategoriler</NavLink></li>
                    <li className='text-md h-full font-semibold text-[#ffffffb9] flex justify-center  items-center p-4 hover:bg-[#191e25]'><NavLink>Bana Özel </NavLink></li>
                </ul>

                <div className='flex'>
                    
                    <div className="text-[#ffffffb9] h-full flex justify-center items-center mr-2 p-1 hover:bg-[#191e25] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    </div>
                    <div className='profile flex justify-center items-center h-full hover:bg-[#191e25] p-2 pl-3 pr-3 cursor-pointer'>
                            <span className='mr-3 text-white font-semibold text-[#ffffffb9] lg:flex hidden '>yusuf cengiz</span>
                            <img src="https://m.media-amazon.com/images/G/01/digital/video/merch/TV/UAP_2022_PVProfileImageCircle_256x256_Airondir_DarkOrange.png" alt="" className='w-10 h-10' />
                    </div>


                </div>

        </div>


    </header>

  )
}
