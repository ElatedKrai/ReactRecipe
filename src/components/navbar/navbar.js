import React from 'react'
import '../navbar/stylenavbar.css'
import logo from '../footer/logo2.jpg'
function Navbar()
{
return (
   <div className='navbar'>
      <div className='container'>
         <div>
            <ul className='navbar_list'>
               <div className='navbar_logo'>
                  <li> <a href=''><img src={logo} /></a></li>
               </div>
               <li> <a href=''> Recipes </a></li>
               <li><a href=''> Idea </a></li>
               <li><a href=''> Contact </a></li>
            </ul>
         </div>
      </div>
   </div>
)
};

export default Navbar;