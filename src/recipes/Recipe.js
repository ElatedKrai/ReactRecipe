import React from "react";
import '../recipes/styleRecipe.css'


// function MassiveIngredints()
// {
// ingredientLines.pop("");
// for (let i = 0; i < ingredientLines.lenght; i++)
// {
//    // if()
//    (ingredientLines)
      
// }
// }
  


const Recipe = ({title, calories, image, ingredientLines}) => //встановлюємо пропси, або поля, які ми будемо вставляти в функцію.
{
   return (
      <div className="container">
         <div className="container_Recipe_info">
               <div className="Recipe">
                  <img src={image} alt=""></img> 
                  <div className="Recipe_info">
                  <h1>{title}</h1>
               
                  <div className="ingredients">
                  {/* <ul>{ingredients.map(ingredient => (<li>{ingredient.text}</li>))}</ul> */}
                     <p>
                        {
                              
                        }
                     </p>
                  </div>
                  <div className="calories_info">
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