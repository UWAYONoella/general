const cont=document.getElementsByClassName("container")[0];
const n=document.getElementsByClassName("n1");
const num=Array.from(n);
const tool=document.getElementsByClassName("tools")[0];
console.log(tool);
const toolNber=document.getElementsByClassName("toolNber")[0];
const button=document.getElementById("net");
const myId=[];
let toolNumber=myId.length;
let currenttag=0;
num[currenttag].classList.add("new");

function contain(){
    tool.addEventListener("click",e=>{
        const mage=e.target.getAttribute("src");
        const ide=e.target.getAttribute("id");
        function Photos(src,id){
            this.mage=mage;
            this.id=id;
        }
        const photo=new Photos(mage,ide);
        myId.push(photo);
        // toolNumber=myId.length;
        toolNber.innerText=myId.length;
        
        
    })
}
contain();

button.addEventListener("click",(e)=>{
currenttag++;
num[currenttag].classList.add("new");
// for(let i=0;i<myId.length;i++);{
//     let nem=myId[i];
    // tool.innerHTML=`${myId[0].mage}`;

// }

})

    
