import React,{ useState } from 'react';
import UserForm from './components/UserForm';
import RuleForm from './components/RuleForm';
import EvaluateButton from './components/EvaluateButton';
import './App.css';

const App=()=> {
  const [userData, setUserData] = useState(null);
  const [rules, setRules] = useState([]);

  const handleUserSubmit = (data) =>{
    setUserData(data);
  };
  
  const handleAddRule = (rule) => {
    setRules([...rules,rule]);
  };

  return (
    <div>
      <h1>Rule Engine - Eligibility Checker</h1>
      <UserForm onSubmit={handleUserSubmit}/>
      <RuleForm onSubmit={handleAddRule}/>
      <EvaluateButton userData={userData} rules={rules}/>
      <h3>Defined Rules</h3>
      <ul>
        {rules.map((rule,index)=>(
          <li key={index}>
            {rule.attribute}{rule.operator}{rule.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;