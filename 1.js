
// 1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]

const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];

function one(){
    result = []
    for(var i=0;i<factories.length;i++){
        r = {
            name : '',
            count : 0,
        }
        r.name = factories[i].name
        r.count = factories[i].employees.length
        result.push(r)
    }
    console.log(result)
}

one()