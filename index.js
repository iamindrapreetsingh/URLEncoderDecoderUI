const encodeBtn = document.querySelector(".encode-btn");
const decodeBtn = document.querySelector(".decode-btn");
const input = document.querySelector(".textarea-input");
const outputMsg = document.querySelector(".output-msg");
const output = document.querySelector(".textarea-output");

const encodeURI = (input) => encodeURIComponent(input);
const decodeURI = (input) => decodeURIComponent(input);

btnEvent=(input)=>{

    if(input===encodeBtn)
    {
    encodeBtn.style.backgroundColor="green";
    decodeBtn.style.backgroundColor="thistle";
    outputMsg.innerHTML = "ENCODED STRING";
    }

    else
    {
    encodeBtn.style.backgroundColor="thistle";
    decodeBtn.style.backgroundColor="green";
    outputMsg.innerHTML = "DECODED STRING";
    }
}

encodeBtn.addEventListener("click", ()=>btnEvent(encodeBtn));
decodeBtn.addEventListener("click", ()=>btnEvent(decodeBtn));
encodeBtn.addEventListener("click",()=>output.value=encodeURI(input.value));
decodeBtn.addEventListener("click",()=>output.value=decodeURI(input.value));