import React from "react";
import '../recipes/styleRecipe.css'



  


const Recipe = ({title, calories, image, ingredientLines, type}) => //встановлюємо пропси, або поля, які ми будемо вставляти в функцію.
{
   return (
      <div className="container">
         <div className="container_Recipe_info">
            <div className="Recipe">
               <div className="Recipe_image">
                  <img src={image} alt=""></img> 
               </div>
               <div className="Recipe_info">
                  <div className="Recipe_title">
                     <h1>{title}</h1>
                  </div>
                  <div className="Recipe_type">
                     <h3> <a href="">{type} </a></h3>
                  </div>
                  <div className="Recipe_button">
                     <button> Show ingredients ↓</button>
                  </div>
                  <div className="Recipe_ingredients">
                     <p>{ingredientLines.join(", ")}</p>
                  </div>
                  <div className="Recipe_calories">
                     <p> Calories = {calories}</p>
                  </div>
               </div>
            {/* останній параметр пихаємо в джерело, звідки береться інформація, а не в поле для інформації */}
            </div>
         </div>   
      </div>
   );
}

export default Recipe;