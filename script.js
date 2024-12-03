const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generatebtn=document.getElementById('generatebtn');
const downloadbtn=document.getElementById('downloadbtn');
const qrContanier=document.querySelector('.qr-body');

let size=sizes.value;
generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(qrText.value.length>0){
        generateQrcode();
    }
    else{
            alert("Enter the text or URL to generate your QR Code");
    }
    
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();

});
downloadbtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img!==null){
        let imgAtrr=img.getAttribute('src');
        downloadbtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);

    }
});
function isEmptyInput(){
   // if(qrText.value.length>0){
      //  generateQrcode();
   // }
   
   //else{
        //  alert("Enter the text or URL to generate your QR Code");
   // }
    qrText.value.length > 0 ? generateQrcode():alert("Enter the text or URL to generate your QR Code");
}
function generateQrcode(){
    qrContanier.innerHTML="";
    const qrLink = `http://localhost:3000/product/${productId}`; 
    new QRCode(qrContanier,{
        text:qrText.value,height:size,width:size,colorLight:"#fff",colorDark:"#000",
    });

}