import React from "react";

const EvaluateButton = ({ userData, rules })=>{
    const handleEvaluate = ()=>{
        const data ={ user: userData,rules};

        fetch('https://localhost:3000/evaluate',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json()'},
            body: JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((result) => {
            alert(`Eligibility Result: ${result.eligible ? 'Eligible' : 'Not Eligible'}`);
          })
          .catch((error) => console.error('Error:', error));
    };
    
    return <button onClick={handleEvaluate}>Evaluate Eligibility</button>;
};

export default EvaluateButton;