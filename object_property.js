const students = [
    {id:21 ,name:'omar sani'},
    {id:22 ,name:'manna'},
    {id:34 ,name:'moyori'},
    {id:74 ,name:'dipjol'}

]
const names = students.map(s => s.name);
const ids =  students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const biggerone = students.find(s => s.id>30);
//console.log(names);
console.log(biggerone);

