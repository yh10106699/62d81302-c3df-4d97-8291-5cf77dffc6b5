import React from "react";
import axios from "axios";
import "../styles/CategoryList.css"

const CategoryList = (props) => {
    const [category, setCategory] = React.useState([]);
    const categoryApi = `http://stream-restaurant-menu-svc.herokuapp.com/category`;
    React.useEffect(() => {
        axios.get(categoryApi)
            .then(res => {
                setCategory(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const handleClick = (shortName) => {
        props.setCurCategory(shortName);
    }
    return (
        <div>
            <ul>
                {category.map(c => {
                    const name = c.name;
                    const shortName = c.short_name;
                    return (
                        <li className="list" key = {name + shortName} onClick={() => handleClick(shortName)}>
                            {name} -({shortName})
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategoryList;