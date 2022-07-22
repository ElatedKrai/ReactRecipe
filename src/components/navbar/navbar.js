import React from 'react'
import '../navbar/stylenavbar.css'
function Navbar()
{
return (
   <div className='navbar'>
      <div className='container'>
         <div>
            <ul className='navbar_list'>
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