import React from 'react';
import './App.css';
import CategoryList from "./components/CategoryList";
import ItemList from "./components/ItemList";

function App() {
    const [curCategory, setCurCategory] = React.useState("");

    return (
        <div className="App">
            <h3>Menu Categories</h3>
            <div className="list-wrapper">
                <CategoryList setCurCategory={setCurCategory}/>
                <div className="item-list">
                    {curCategory && <ItemList curCategory={curCategory}/>}
                </div>
            </div>
        </div>
    );
}

export default App;
