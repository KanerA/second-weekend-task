const tasks = [
    {
        startedAt: new Date("2021-01-19:12:45"),
        finishedAt: new Date("2021-01-20:19:45"),
        tasksGiven: 20,
        tasksFinished: 10,
        topic: "HTML"
    },
    {
        startedAt: new Date("2021-01-20:09:30"),
        finishedAt: new Date("2021-01-20:11:15"),
        tasksGiven: 30,
        tasksFinished: 10,
        topic: "JavaScript"
    },
    {
        startedAt: new Date("2021-01-20:12:15"),
        finishedAt: new Date("2021-01-20:15:00"),
        tasksGiven: 3,
        tasksFinished: 2,
        topic: "Arrays"
    },
    {
        startedAt: new Date("2021-01-20:11:30"),
        finishedAt: new Date("2021-01-20:14:30"),
        tasksGiven: 5,
        tasksFinished: 1,
        topic: "Conditions"
    },
    {
        startedAt: new Date("2021-01-20:08:30"),
        finishedAt: new Date("2021-01-20:15:15"),
        tasksGiven: 2,
        tasksFinished: 2,
        topic: "Loops"
    },
    {
        startedAt: new Date("2021-01-20:09:00"),
        finishedAt: new Date("2021-01-20:14:00"),
        tasksGiven: 12,
        tasksFinished: 5,
        topic: "GitHub"
    },
    {
        startedAt: new Date("2021-01-20:12:00"),
        finishedAt: new Date("2021-01-20:13:30"),
        tasksGiven: 16,
        tasksFinished: 10,
        topic: "CSS"
    },
    {
        startedAt: new Date("2021-01-20:10:00"),
        finishedAt: new Date("2021-01-20:11:00"),
        tasksGiven: 4,
        tasksFinished: 3,
        topic: "DOM Manipulations"
    },
    {
        startedAt: new Date("2021-01-20:09:30"),
        finishedAt: new Date("2021-01-20:12:00"),
        tasksGiven: 1,
        tasksFinished: 0,
        topic: "JSON"
    },
    {
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:18:00"),
        tasksGiven: 6,
        tasksFinished: 4,
        topic: "Functions"
    }
]



// const startedAt= new Date("2021-01-20:10:00");
// const finishedAt= new Date("2021-01-20:11:00");
// console.log((finishedAt- startedAt)/3600000)

let start=0, end=0;

document.write('<div>');
document.write('<table style="width:80%">');
document.write(`<tr> <th>Topic</th> <th>start</th> <th>finished</th> <th>time on</th> <th>tasks given</th> <th>tasks finished</th> <th>Done %</th></tr>`)
for(task of tasks){
    const padZeroStart=padZero((task.startedAt.getMinutes()/60));
    const padZeroEnd=padZero((task.finishedAt.getMinutes()/60));
    //------------ find the time spent on each task --------------------//
    start = task.startedAt.getHours()+ (task.startedAt.getMinutes()/60);
    end = task.finishedAt.getHours()+ (task.finishedAt.getMinutes()/60);
    task.timeTotal= end - start;
    //------------ set the hours of start & finish ---------------------//
    let startTime="", endTime="";
    startTime= task.startedAt.getHours()+":"+ task.startedAt.getMinutes();
    endTime= task.finishedAt.getHours()+":"+ task.finishedAt.getMinutes();
    // let donePercent= Math.floor((task.tasksFinished/task.tasksGiven)*100)
    task.done= Math.floor((task.tasksFinished/task.tasksGiven)*100)+ "%";
    donePercentage= Math.floor((task.tasksFinished/task.tasksGiven)*100);

    document.write(`<tr><td>${task.topic}</td>
    <td>${startTime}${padZeroStart}</td>
    <td>${endTime}${padZeroEnd}</td>
    <td class=${checkTimeOnTask(task.timeTotal)}>${task.timeTotal}</td>
    <td>${task.tasksGiven}</td>
    <td>${task.tasksFinished}</td>
    <td class=${findPercentage(donePercentage)}>${task.done}</td></tr>`);

}

document.write('</table>');
document.write('</div>');
//----//
function findPercentage(num){
    if(num>=75){
        return "Aclass";
    }
    else if(num<50){
        return "underFifty";
    }
    else{
        return "Bclass";
    }
}

function padZero(num){
    if(num===0){
        return "0";
    }
    return "";
}

function checkTimeOnTask(num){
    console.log(num);
    if(num<2.5){
        return "low";
    } 
    else if(num< 4.5){
        return "justRight";
    }
    else{
        return "high";
    }
}


// ${padZero((task.finishedAt.getMinutes()/60))}
// ${padZero((task.startedAt.getMinutes()/60))}