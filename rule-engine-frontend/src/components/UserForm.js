import React, { useState } from "react";

const UserForm=({ onSubmit }) =>{
    const [userData, setUser] = useState({
        age:'',
        department:'',
        income:'',
        spend:''
    });

    const handleChange=(e)=>{
        const { name, value }=e.target;
        setUser({ ...userData, [name]: value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(userData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>User Data</h3>
            <label>
                Age: <input type="number" name="age" value={userData.age} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Department: <input type="text" name="department" value={userData.department} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Income: <input type="number" name="income" value={userData.income} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Spend: <input type="number" name="spend" value={userData.spend} onChange={handleChange}/>
            </label>
            <br/>
            <button type="submit">Submit User Data</button>
        </form>
    );
}
export default UserForm;