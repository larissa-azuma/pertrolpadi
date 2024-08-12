import React from 'react'
const Menu =[
    {
      id:1,
      name:"Why PetrolPadi?",
      link:"/why-petrolpadi"
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
      <nav className= 'container py-2 bg-color-bg'>
          
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
              
             </div>
            </div>    
      </nav>
    )
  }
export default scrollnav