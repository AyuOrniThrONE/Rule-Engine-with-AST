const Node=require('../models/Node');

function parseRule(ruleString){
    const tokens = ruleString.split(' ');
    const stack = [];

    for(let token of tokens){
        if(token=='AND' || token=='OR'){
            const right=stack.pop()
            const left=stack.pop;
            stack.push(new Node('operator',left,right,token));
        }else if(token==='>'||token==='<'||token === '=' || token === '!='){
            const left=stack.pop();
            const right=tokens.shift();
            stack.push(new Node('operand',left,null,`${token} ${right}`));
        }else{
            stack.push(new Node('operand',null,null,token));
        }
    }
    return stack.pop();
}
module.exports={ parseRule };