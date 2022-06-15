// 3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];

function three(){
    result = []
    for(var i=0;i<factories.length;i++){
        r = {
            name:'',
            employees :[],
        }
        r.name = factories[i].name
        r.employees = factories[i].employees.sort()
        result.push(r)
    }
    console.log(result)
}

three()