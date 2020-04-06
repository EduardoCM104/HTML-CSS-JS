function scrollBatepapo() {
    const batepapochat = document.querySelector(".batepapochat");
  
    batepapochat.scrollTop = batepapochat.scrollHeight;
  }
  
  function displayMessage(msgText, msgType) {
    const panel = document.createElement("div");
    panel.setAttribute("class", msgType);
  
    const divImg = document.createElement("div");
    divImg.setAttribute("class", "user-photo");
  
    const img = document.createElement("img");
    img.src = "zoio.png";
    divImg.appendChild(img);
  
    const msg = document.createElement("p");
    msg.setAttribute("class", "chat-mensagem");
    msg.innerText = msgText;
  
    panel.appendChild(divImg);
    panel.appendChild(msg);
  
    const batepapochat = document.querySelector(".batepapochat");
    batepapochat.appendChild(panel);

  
    scrollBatepapo();
  }
  
  function botao(event) {
    event.preventDefault();

    const msgitem = document.getElementById("item").value;
    document.querySelector(".chat-mensagem").innerHTML = msgitem

    displayMessage(msgitem, "chat meu");

    document.getElementById("item").value = "";
  }
  
  const btnEnviar = document.querySelector(".chat-formulario button");
  btnEnviar.addEventListener("click", botao);
  
  window.addEventListener(
    "DOMContentLoaded",
    function () {
      scrollBatepapo();
    },
    false
  );