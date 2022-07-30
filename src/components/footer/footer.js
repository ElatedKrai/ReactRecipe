import React from 'react'
import '../footer/styleFooter.css'
import logo from '../footer/logo.jpeg'
import Block from './footer_block/footer_block'

let firstBlockfirstName = "Twitter"
let firstBlockfirstLink = "http://twitter.com"
let firstBlocksecondName = "Instagram" 
let firstBlocksecondLink = "http://instagram.com"
let firstBlockthirdName = "Github"
let firstBlocthirdLink = "http://github.com"
let firstBlockfourName = "Facebook"
let firstBlockfourLink = "http://facebook.com"
function Footer()
{
   return (
      <footer>
         <div className='container'>
            <div className='blocks'>
               <div className='first-block'>
               <img src = {logo} alt = "logo" />
                  <div className='first-block-info'>
                     <h6> Web Application Recipe </h6>
                     <p> Web Application written on React on 20 days. <br/> With connecting API "edamam"</p>
                  </div>
               </div>
               <div className='second-block'>
                  <Block title = "Support" firstName={firstBlockfirstName} firstLink={firstBlockfirstLink} secondName={firstBlocksecondName} secondLink={firstBlocksecondLink} thirdName={firstBlockthirdName} thirdLink={firstBlocthirdLink} fourName = {firstBlockfourName} fourLink={firstBlockfourLink} />
               </div>
               <div className='third-block'>
                  <Block title = "Contact" firstName={firstBlockfirstName} firstLink={firstBlockfirstLink} secondName={firstBlocksecondName} secondLink={firstBlocksecondLink} thirdName={firstBlockthirdName} thirdLink={firstBlocthirdLink} fourName = {firstBlockfourName} fourLink={firstBlockfourLink}/>
               </div>
               <div className='four-block'>
                  <Block title = "Autor" firstName={firstBlockfirstName} firstLink={firstBlockfirstLink} secondName={firstBlocksecondName} secondLink={firstBlocksecondLink} thirdName={firstBlockthirdName} thirdLink={firstBlocthirdLink} fourName = {firstBlockfourName} fourLink={firstBlockfourLink}/>
               </div>
            </div>
         </div>
    </footer>
   )
}

export default Footer;