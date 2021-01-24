const tasks = [
    {
        topic: "HTML",
        startedAt: new Date("2021-01-19:12:45"),
        finishedAt: new Date("2021-01-20:19:45"),
        tasksGiven: 20,
        tasksFinished: 10,
    },
    {
        topic: "JavaScript",
        startedAt: new Date("2021-01-20:09:30"),
        finishedAt: new Date("2021-01-20:11:15"),
        tasksGiven: 30,
        tasksFinished: 10,
    },
    {
        topic: "Arrays",
        startedAt: new Date("2021-01-20:12:15"),
        finishedAt: new Date("2021-01-20:15:00"),
        tasksGiven: 13,
        tasksFinished: 8,
        
    },
    {
        topic: "Conditions",
        startedAt: new Date("2021-01-20:11:30"),
        finishedAt: new Date("2021-01-20:14:30"),
        tasksGiven: 5,
        tasksFinished: 1,
    },
    {
        topic: "Loops",
        startedAt: new Date("2021-01-20:10:30"),
        finishedAt: new Date("2021-01-20:15:15"),
        tasksGiven: 2,
        tasksFinished: 2,
    },
    {
        topic: "GitHub",
        startedAt: new Date("2021-01-20:09:00"),
        finishedAt: new Date("2021-01-20:14:00"),
        tasksGiven: 12,
        tasksFinished: 7,
    },
    {
        topic: "CSS",
        startedAt: new Date("2021-01-20:12:00"),
        finishedAt: new Date("2021-01-20:13:30"),
        tasksGiven: 16,
        tasksFinished: 10,
    },
    {
        topic: "DOM Manipulations",
        startedAt: new Date("2021-01-20:10:00"),
        finishedAt: new Date("2021-01-20:11:00"),
        tasksGiven: 4,
        tasksFinished: 3,
    },
    {
        topic: "JSON",
        startedAt: new Date("2021-01-20:09:30"),
        finishedAt: new Date("2021-01-20:12:00"),
        tasksGiven: 1,
        tasksFinished: 1,
    },
    {
        topic: "Functions",
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:18:00"),
        tasksGiven: 6,
        tasksFinished: 4,
    }
];

// ----------------------- create header ------------------------------ //
const title = document.createElement('h1');
const titleText = document.createTextNode('Dynamic Table:');
title.appendChild(titleText);
document.body.appendChild(title);
// ------------------- create table ----------------------------------- //
let mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
// ------------------- table headers ---------------------------------- //
    tableHeaders = ['Topic', 'Start', 'Finish', 'Tasks given', 'Tasks finished', 'Time on', 'Done %'];
    let row = document.createElement("tr");
    for (header of tableHeaders) {
        let cell = document.createElement("th");
        let cellText = document.createTextNode(header);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }   
    tblBody.appendChild(row);
    
    // creating all cells
    for (task of tasks) {
        // creates a table row
        let row = document.createElement("tr");
        let start = task.startedAt.getHours()+ (task.startedAt.getMinutes()/60);
        let end = task.finishedAt.getHours()+ (task.finishedAt.getMinutes()/60);
        task.timeTotal= end - start;
        donePercentage= Math.floor((task.tasksFinished/task.tasksGiven)*100);
        task.tasksFinishedPercentage= donePercentage+ "%";

        for (prop in task) {
            let startMin = task.startedAt.getMinutes();
            let endMin = task.finishedAt.getMinutes();
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            if(prop === "startedAt"){
                if(startMin < 10){
                    startTime= task.startedAt.getHours()+":"+ padZero(startMin);
                }
                else{
                    startTime = task.startedAt.getHours()+ ":" + task.startedAt.getMinutes();
                }

                let cell = document.createElement("td");
                let cellText = document.createTextNode(startTime);
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if(prop === "finishedAt"){
                if(endMin < 10){
                    endTime= task.finishedAt.getHours()+":"+ padZero(endMin);
                }
                else{
                    endTime = task.finishedAt.getHours()+ ":" + task.finishedAt.getMinutes();
                }
                
                let cell = document.createElement("td");
                let cellText = document.createTextNode(endTime);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if(prop === "tasksFinishedPercentage"){// for done% background color
                let percentageClass = findPercentage(donePercentage);
                let cell = document.createElement("td");
                cell.classList.add(percentageClass);
                let cellText = document.createTextNode(task[prop]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if(prop === "timeTotal"){// for time-on background color
                let total = checkTimeOnTask((end-start));
                let cell = document.createElement("td");
                cell.classList.add(total);
                let cellText = document.createTextNode(task[prop]);
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else{//for every non-dynamic td's
                let cell = document.createElement("td");
                let cellText = document.createTextNode(task[prop]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    mainDiv.appendChild(tbl);
    // ----------------------------- Functions -------------------- //
    //-------- changing background by percentage ---------------------------//

function findPercentage(num){
    if(num >= 75){
        return "Aclass";
    }
    else if(num < 50){
        return "underFifty";
    }
    else{
        return "Bclass";
    }
}
    // ------- padding zero to the minutes if they are zero (i.e. 14:*00*)---//
function padZero(num){
    let temp;
    if(num===0){
        return "00";
    }
    else if(1<= num < 10){
        return (temp="0"+ num);
    }
    return "";
}
    // ------- changing background color based on hours on task ------------//
function checkTimeOnTask(num){
    if(num<2.5){
        return "low";
    } 
    else if(num< 5){
        return "justRight";
    }
    else{
        return "high";
    }
}
//------------------------------------ main branch solution ----------------------------------------------------//


// document.write('<div><table style="width:80%">');
// document.write(`<tr> <th>Topic</th> <th>start</th> <th>finished</th> <th>time on</th> <th>tasks given</th> <th>tasks finished</th> <th>Done %</th></tr>`)
// for(task of tasks){
//     const padZeroStart=padZero((task.startedAt.getMinutes()/60));
//     const padZeroEnd=padZero((task.finishedAt.getMinutes()/60));
//     //------------ find the time spent on each task --------------------//
//     let start = task.startedAt.getHours()+ (task.startedAt.getMinutes()/60);
//     let end = task.finishedAt.getHours()+ (task.finishedAt.getMinutes()/60);
//     task.timeTotal= end - start;
//     //------------ set the hours of start & finish ---------------------//
//     let startTime="", endTime="";
//     startTime= task.startedAt.getHours()+":"+ task.startedAt.getMinutes();
//     endTime= task.finishedAt.getHours()+":"+ task.finishedAt.getMinutes();
//     //------------ finding the percentage of tasks finished ------------//
    // donePercentage= Math.floor((task.tasksFinished/task.tasksGiven)*100);
    // task.tasksFinishedPercentage= donePercentage+ "%";
//     //------------ creating the table contents -------------------------//
//     document.write(`<tr><td>${task.topic}</td>
//     <td>${startTime}${padZeroStart}</td>
//     <td>${endTime}${padZeroEnd}</td>
//     <td class=${checkTimeOnTask(task.timeTotal)}>${task.timeTotal}</td>
//     <td>${task.tasksGiven}</td>
//     <td>${task.tasksFinished}</td>
//     <td class=${findPercentage(donePercentage)}>${task.tasksFinishedPercentage}</td>
//     </tr>`);
// }

// document.write('</table></י>');//closing the table
