import React from "react";
import { useState } from "react";
import data from './Data'
import styles from './index.css'
import List from "./List";

function App (){
    const [people,setPeople] = useState(data)
    return(
        
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people = {people}/>
                <button onClick={()=>{
                    setPeople([])
                }}>Clear All</button>
                <button onClick={(name2,birthday2,favourite_car2,id)=>{
                    name2 = prompt('Add name: ')
                     id++
                    birthday2 = prompt('Add birthday date:')
                     favourite_car2 = prompt('Add favorite car:')
                }}>Add data</button>
            </section>
        </main>
    )
}

export default App;
