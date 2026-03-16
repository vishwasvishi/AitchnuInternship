function toggleMode(){
    document.body.classList.toggle("dark");
}

function calculateGrade(){
    let name=document.getElementById("studentName").value;
    let marks=document.querySelectorAll(".marks");
    let total=0;

    marks.forEach(m=>{
        total+=Number(m.value);
    });

    let avg=total/marks.length;
    let grade="";

    if(avg>=90) grade="Aplus";
    else if(avg>=75) grade="A";
    else if(avg>=60) grade="B";
    else if(avg>=50) grade="C";
    else grade="Fail";

    document.getElementById("gradeResult").innerHTML=
    `Name: ${name}<br>Total: ${total}<br>Average: ${avg.toFixed(2)}<br>
     Grade: <span class="badge ${grade}">${grade}</span>`;
}

function resetGrade(){
    document.getElementById("studentName").value="";
    document.querySelectorAll(".marks").forEach(m=>m.value="");
    document.getElementById("gradeResult").innerHTML="";
}

function countChars(){
    let text=document.getElementById("palInput").value;
    document.getElementById("charCount").innerText=text.length+" characters";
}

function checkPalindrome(){
    let word=document.getElementById("palInput").value;
    let reversed="";
    for(let i=word.length-1;i>=0;i--){
        reversed+=word[i];
    }
    document.getElementById("palResult").innerText=
    word===reversed ? "Palindrome" : "Not Palindrome";
}

function resetPalindrome(){
    document.getElementById("palInput").value="";
    document.getElementById("palResult").innerHTML="";
    document.getElementById("charCount").innerText="0 characters";
}

function analyzeNumber(){
    let num=Number(document.getElementById("numInput").value);
    let result=(num%2===0?"Even":"Odd")+", "+
    (num>0?"Positive":num<0?"Negative":"Zero");
    document.getElementById("numResult").innerText=result;

    let output="";
    for(let i=1;i<=num;i++){
        output+=i+" ";
    }
    document.getElementById("loopResult").innerText=output;
}

function resetNumber(){
    document.getElementById("numInput").value="";
    document.getElementById("numResult").innerHTML="";
    document.getElementById("loopResult").innerHTML="";
}

function login(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    document.getElementById("loginResult").innerText=
    (user==="admin" && pass==="12345") ?
    "Login Successful" : "Invalid Credentials";
}

function resetLogin(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("loginResult").innerHTML="";
}