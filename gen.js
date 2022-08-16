const cont=document.getElementsByClassName("container");
const n=document.getElementsByClassName("n1");
const num=Array.from(n);
const tools=document.getElementsByClassName("tools");
const font=document.getElementsByClassName("font");
const button=document.getElementById("net");
const myId=[];
const toolNumber=myId.length;
const currenttag=0;
num[currenttag].classList.add("new");
console.log(num);
function contain(){
    tools.addEventListener("click",(e)=>{
        const mage=e.target.getAttribute("src");
        const id=e.target.getAttribute("id");
        function Photos(src,id){
            this.src=src;
            this.id=id;
        }
        const photo=new Photos(src,id);
        myId.push(photo);
        toolNumber=myId.length;
        tools.innerText=myId;
        
    })
}
contain();
button.addEventListener("click",(e)=>{
currenttag++;
num[currenttag].classList.add("new");
tools.innerHTML="";
})

    
