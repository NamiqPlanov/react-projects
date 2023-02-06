import React from "react";
import Data from "./Data";



const List = ({people})=>{
    return (
      <>
        {people.map((person)=>{
            const {id,name,birthday,favourite_car}= person
            return(
                <div>
                    <h2 className="h3">{name}</h2>
                    <h5>{id}</h5>
                    <p>{birthday}</p>
                    <p>{favourite_car}</p>
                    <div className="break"></div>
                </div>

            )
        })}
        </>
    
    )
}
export default List