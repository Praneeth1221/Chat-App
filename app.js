const chatList=[];

let user="";

document.getElementById("selectUser").addEventListener("change", function () {
    user=this.value;
    console.log(this.value);
});

function sendMassage(){
    console.log("Send!!");
 let txtUserInput=document.getElementById("txtUserInput").value;



 let chatBubble="";

     chatBubble = `<div class="text-end  ms-auto mecard  text-white ">${txtUserInput}</div>`;


 chatList.push(chatBubble);
 loadchat();
 console.log(chatList);


 //--------------------------------------------------------------
 const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": txtUserInput
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB6IlQdySGYeZHSxEEQLG0N6IT33POM1ts", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    console.log(result.candidates[0].content.parts[0].text)
    chatBubble=`<div class="text-start bg-secondary text-white">${result.candidates[0].content.parts[0].text}</div>`;
    chatList.push(chatBubble);
    loadchat();
    })
  
  .catch((error) => console.error(error));
 //-------------------------------------------------------------
}
function loadchat(){
    document.getElementById("chatBox").innerHTML="";
    chatList.forEach(element=>{
        document.getElementById("chatBox").innerHTML+=element;
    })

}

document.getElementById("txtUserInput").value = "";



