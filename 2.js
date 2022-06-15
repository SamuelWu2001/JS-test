// 2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]

const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];

function two(){
    result = []
    for (var i=0;i<factories.length;i++){
        for(var j=0;j<factories[i].employees.length;j++){
            var findout = false
            for(var k=0;k<result.length;k++){
                if(result[k].name === factories[i].employees[j]){
                    result[k].count++
                    findout = true
                    break
                }
            }
            if(!findout){
                r = {
                    name : factories[i].employees[j],
                    count : 1,
                }
                result.push(r)
            }
        }
    }
    console.log(result)
}

two()