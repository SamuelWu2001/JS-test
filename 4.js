// 4. Count total hours worked in 1 day ? // => 39
const day = "2020-10-13 ";

const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60 },
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];
function four(){
    time = []
    var totalTime = 0
    for(var i=0;i<employeeType.length;i++){
        timedelta = ((stringToDate(day+employeeType[i].work_end).getTime()-stringToDate(day+employeeType[i].work_begin).getTime())/3600000<=0)?24+(stringToDate(day+employeeType[i].work_end).getTime()-stringToDate(day+employeeType[i].work_begin).getTime())/3600000:(stringToDate(day+employeeType[i].work_end).getTime()-stringToDate(day+employeeType[i].work_begin).getTime())/3600000
        time.push(timedelta)
    }
    for(var i=0;i<employees.length;i++){
        totalTime += time[employees[i].type-1]
    }
    console.log(totalTime)
}

function stringToDate(strDate) {
    var tempStrs = strDate.split(" ");

    var dateStrs = tempStrs[0].split("-");
    var year = parseInt(dateStrs[0], 10);
    var month = parseInt(dateStrs[1], 10) - 1;
    var day = parseInt(dateStrs[2], 10);

    var timeStrs = tempStrs[1].split(":");
    var hour = parseInt(timeStrs [0], 10);
    var minute = parseInt(timeStrs[1], 10);
    var second = parseInt(timeStrs[2], 10);

    var date = new Date(year, month, day, hour, minute, second);
    return date;
}

four()