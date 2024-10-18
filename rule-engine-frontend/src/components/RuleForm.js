import React, { useState } from "react";

const RuleForm=({ onAddRule }) => {
    const [rule, setRule]=useState({
        attribute:'age',
        operator:'>',
        value:''
    });

    const handleChange = (e) => {
        const { name, value }=e.target;
        setRule({...rule,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        onAddRule(rule);
        setRule({ ...rule, value: ''}); //reset the value after the submission
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Rules</h3>
            <label>
                Attribute:
                <select name="attribute" value={rule.attribute} onChange={handleChange}>
                    <option value="age">Age</option>
                    <option value="department">Department</option>
                    <option value="income">Income</option>
                    <option value="spend">Spend</option>
                </select>
            </label>
            <br/>
            <label>
                Operator:
                <select name="operator" value={rule.operator} onChange={handleChange}>
                    <option value=">">{'>'}</option>
                    <option value="<">{'<'}</option>
                    <option value="=">{'='}</option>
                    <option value="!=">{'!='}</option>
                </select>
            </label>
            <br/>
            <label>
                Value:
                <input type="text" name="value" value={rule.value} onChange={handleChange}/>
            </label>
            <br/>
            <button type="submit">Add Rule</button>
        </form>
    );
    
};
export default RuleForm;