import React, { useState, useEffect } from 'react';

function CrudOperation() {
    const [id, setId] = useState(null);
    const [userData, setUserData] = useState([]);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // useEffect(() => {
    //     const savedData = JSON.parse(localStorage.getItem("UserInfo"));
    //     if (savedData) {
    //         setUserData(savedData);
    //     }
    // }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        });
    }

    const saveData = () => {
        if (id === null) {
            const updatedData = [...userData, data];
            setUserData(updatedData);
            localStorage.setItem("UserInfo", JSON.stringify(updatedData));
        } else {
            const updatedData = userData.map((item, index) => index === id ? data : item);
            setUserData(updatedData);
            localStorage.setItem("UserInfo", JSON.stringify(updatedData));
            setId(null);
        }
        setData({ name: "", email: "", password: "" });
    }

    const editData = (index) => {
        const itemToEdit = userData[index];
        setData(itemToEdit);
        setId(index);
    }

    return (
        <>
            <form action="#">
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='Name' />
                <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='Email' />
                <input type="password" name="password" value={data.password} onChange={handleChange} placeholder='Password' />
                <button type="button" onClick={saveData}>{id === null ? "Save Data" : "Update Data"}</button>
            </form>
            <ul>
                {userData.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.email} -{item.password}
                        <button type="button" onClick={() => editData(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CrudOperation;
