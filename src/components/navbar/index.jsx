import React from 'react'
import petrolpadi from "../../assests/image/petrolpadi.png"
import { FaBars } from 'react-icons/fa6'


const Menu =[
  {
    id:1,
    name:"Why PetrolPadi?",
    link:"/why-petrolpadi ",
    
  },
  {
    id:2,
    name:"About Us",
    link: "/about Us",
  },
  {
    id:3,
    name:"Contact Us",
    link:"/contact us"
  },
]

function Navbar()  {
  const[open, setOpen] = React.useState(false);
  const handleOpen =() => {
    setOpen(!open);

  };
  
  return (
    <nav className= 'sticky top-0 z-50 py-3py-2  backdrop-blur-lg bg-white border-b border-neutral'>
        <div className=' container px-4 mx-auto relative lg:text-sm'>
          <div className='flex justify-between items-center'>
            <div>
            <a href ='/logo'>
          <img src={petrolpadi} alt="logo" className="w-36"/>
          </a>
          </div>
          <div className='hidden lg:flex justify-between items-center gap-4'>
            <ul className='hidden lg:flex justify-between items-center gap-4'>
              {
                Menu.map((menu)=> (
                  <li key={menu.id}>
                    <a href={menu.link}className='inline-block text-xl py-4 px-4'>{menu.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
           {/* Responsive Menu for Mobile devices*/}
           <div className='lg:hidden'>
            <buttons onClick={handleOpen}>
            <FaBars className='text-3xl'/>
            </buttons>
            {/* Dropdown Menu */}
              {open && (
                  <div>
                    <ul className='bg-white space -y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
                      {Menu.map((menu)=>(
                        <li key={menu.id}>
                          <a href={menu.link} className='inline-block text-xl p-4 
                          hover:text-text
                           hover:bg-text2 w-full rounded'>{menu.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
           </div>
          </div> 
          </div>   
    </nav>
  )
}

export default Navbar