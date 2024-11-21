const chatList=[];

function sendMassage(){
    console.log("Send!!");
 let txtUserInput=document.getElementById("txtUserInput").value;

 let chatBubble=`<h3>${txtUserInput}</h3>`;
 chatList.push(chatBubble);
 loadchat();
 console.log(chatList);
}
function loadchat(){
    document.getElementById("chatBox").innerHTML="";
    chatList.forEach(element=>{
        document.getElementById("chatBox").innerHTML+=element;
    })

}