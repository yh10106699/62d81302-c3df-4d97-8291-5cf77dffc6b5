import React from "react";
import axios from "axios";
import "../styles/ItemList.css"

const ItemList = (props) => {
    const {curCategory} = props;
    const [list, setList] = React.useState([]);
    const itemApi = `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${curCategory}`;

    React.useEffect(() => {
        axios.get(itemApi)
            .then(res => {
                setList(res.data);
            })
            .catch(err => console.log(err));
    }, [curCategory]);

    const tableName = `Items in Category: (${curCategory})`;

    return (
        <div>
            <div>{tableName}</div>
            <table>
                <thead>
                <tr className>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {list.map(item => {
                    return (
                        <tr key={item.name} className="table-body">
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}

export default ItemList;