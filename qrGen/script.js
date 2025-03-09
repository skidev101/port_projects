const qrText = document.getElementById('qrText');
const qr = 
document.getElementById('qr');
const qrImg = document.getElementById('qrImg');
const btn = document.getElementById('btn');


function generate() {
        if (qrText.value !== '') {
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qr.classList.add('show');
        qrText.value = '';
        } else{
            qrText.classList.add('error');
            setTimeout( () => {
             qrText.classList.remove('error');
            }, 1000);
        }
     
}













