import React, {useState} from "react";
import '../recipes/styleRecipe.css'

const Recipe = ({title, calories, image, ingredientLines, type, url}) => //встановлюємо пропси, або поля, які ми будемо вставляти в функцію.
{

   const [isHide, setHide] = useState(false);
   const increment = () => {
      setHide(!isHide);
   };

   return (
      <div className="Recipe">
         <div className="container_Recipe_info">
            <div className="Recipe">
               <div className="Recipe_image">
               <div className="Recipe_background_image">
                     <img src={image} alt=""></img> 
               </div>
               </div>
               <div className="Recipe_info">
                  <div className="Recipe_title">
                     <h1> <a href={url}>{title} </a></h1>
                  </div>
                  <div className="Recipe_type">
                     <h3> <a href={url}>{type} </a></h3>
                  </div>
                  <div className="Recipe_button">
                     <button onClick={increment}> Show ingredients ↓</button>
                  </div>
                  <div className={isHide ? "Recipe_ingredients" : 'Recipe_ingredients_hide'}>
                     <p>{ingredientLines.join(", ")}</p>
                  </div>
                  <div className={isHide ? "Recipe_calories_hide" : "Recipe_calories"}>
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