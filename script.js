let tasks=[];


function updateClock(){

let now=new Date();


document.getElementById("time")
.innerText =
now.toLocaleTimeString();



document.getElementById("date")
.innerText =
now.toDateString();


}


setInterval(updateClock,1000);

updateClock();



function addTask(){


let input =
document.getElementById("task");


if(input.value=="")
return;



tasks.push(input.value);


render();


input.value="";


}



function render(){


let list =
document.getElementById("list");


list.innerHTML="";


tasks.forEach((task,index)=>{


list.innerHTML +=
`
<li>
${task}

<button onclick="removeTask(${index})">
X
</button>

</li>
`;

});


document.getElementById("count")
.innerText=tasks.length;


}



function removeTask(i){

tasks.splice(i,1);

render();

}




async function findUser(){


let username =
document.getElementById("username")
.value;



let res =
await fetch(
`https://api.github.com/users/${username}`
);


let data =
await res.json();



document.getElementById("profile")
.innerHTML=

`

<h3>${data.name}</h3>

<p>
Followers:
${data.followers}
</p>


<p>
Repositories:
${data.public_repos}
</p>


<a href="${data.html_url}">
View Profile
</a>

`;

}
