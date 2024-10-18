const express = require('express');
const { parseRule }=require('../utils/ruleParser');
const router=express.Router();

router.post('/create_rule',(req,res)=>{
    const { ruleString }=req.body;
    const ast=parseRule(ruleString);

    res.json({ ast });
});

router.post('/combine_rules',(req,res)=>{
    const { rules }=req.body;
    let combinedAST=null;

    rules.forEach(rule => {
        const ast=parseRule(rule);
        if(combinedAST){
            combinedAST=new Node('operator',combinedAST,ast,'AND');
        }else{
            combinedAST=ast;
        }
    });
    res.json({ combinedAST });
});

router.post('/evaluate_rule',(req,res)=>{
    const { ast, userData }=req.body;
    const evaluateAST=(node, userData)=>{
        if(node.type==='operator'){
            const leftResult = evaluateAST(node.left, userData);
            const rightResult = evaluateAST(node.right, userData);

            if (node.value === 'AND') return leftResult && rightResult;
            if (node.value === 'OR') return leftResult || rightResult;
        }
        else if (node.type === 'operand') {
            // Evaluate the condition based on userData
            const [attribute, operator, value] = node.value.split(' ');
            const userValue = userData[attribute];
      
            switch (operator) {
              case '>':
                return userValue > Number(value);
              case '<':
                return userValue < Number(value);
              case '=':
                return userValue == value;
              case '!=':
                return userValue != value;
              default:
                return false;
            }
        }
        return false;
    };
    const result = evaluateAST(ast, userData);
    res.json({ eligible: result });
});

module.exports=router;