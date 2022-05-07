const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
gerarBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

gerarBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if(!qrValue) return; // Se o campo estiver vazio, então retorne daqui
  gerarBtn.innerText = "Gerando QR Code...";
  
  // Pegando o QR Code do valor que o usuário digita usando qrserver api e passando o retorno da api para o src da imagem
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  
  qrImg.addEventListener("load", () => { // quando a imagem do QR code for carregada
    wrapper.classList.add("active");
    gerarBtn.innerText = "Gerar QR Code";
  })
  
});

qrInput.addEventListener("keyup", () => {
  if(!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
