let img_box = document.getElementById("img-box");
let qrImg = document.getElementById("qrImg");
let qrText= document.getElementById("qrText");
let qrButton = document.getElementById("qrButton");


qrButton.addEventListener('click',()=>{
    if(qrText.value.length>0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
        img_box.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
       
    }
    
})

