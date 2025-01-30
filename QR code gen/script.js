let qrText = document.getElementById('qrText');
let qr = 
document.getElementById('qr');
let qrImg = document.getElementById('qrImg');

function generate() {
        if (qrText.value.length > 0) {
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
























