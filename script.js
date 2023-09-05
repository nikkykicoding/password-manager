function maskPassword(pass){
let str=""
for (let index = 0; index < pass.length; index++) {
   str+= "*"
    
}
return str

}


//login to fill the table
function copyText(txt){
navigator.clipboard.writeText(txt).then(
    () => {
document.getElementById("alert").style.display="inline"

        setTimeout(() => {
document.getElementById("alert").style.display="none"
            
        }, 2000);


    },
    () =>{ 

        alert("failed"+txt)
    },
    



);
}
const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}'s password`)
    showpassword()

}






const showpassword = () => {



let tb = document.querySelector("table")
let data= localStorage.getItem("passwords")
if(data == null){

tb.innerHTML ="No Data To Show"
}
else{
    tb.innerHTML = `<tr>
    <th>WEBSITE</th>
    <th>USERNAME</th>
    <TH>PASSWORD</TH>
    <TH>DELETE</TH>

</tr>`
    let arr = JSON.parse(data);
   
    let str= ""
    for(let index = 0; index< arr.length;index++){
       const element = arr[index];
    



str +=`<tr>
<td>${element.website} <img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
<td>${element.username}<img onclick="copyText('${element.username}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
<td>${maskPassword(element.password)}<img onclick="copyText('${element.password}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
<td><button class="btnsn" onclick="deletePassword('${element.website}')">delete</button></td>



</tr>`
    }

tb.innerHTML = tb.innerHTML + str
website.value=""
username.value=""
password.value=""

}
}



console.log("working");
showpassword()
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Clicked")
    console.log(username.value, password.value)
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords == null)
    {
        let json=[]
        json.push({website:website.value,username:username.value,password: password.value})
        
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    else{
        let json=JSON.parse(localStorage.getItem("passwords"))
        json.push({website:website.value,username:username.value,password:password.value})
       
        localStorage.setItem("passwords",JSON.stringify(json))

    }
    showpassword()
})



