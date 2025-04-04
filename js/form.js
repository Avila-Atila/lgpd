const headerLinks = document.querySelectorAll("header nav li");
const campos = document.querySelectorAll(".fordform");
const nome = document.getElementById("nomeid");
const termos = document.getElementById("form__privacidade__termos");
const botaoForm = document.getElementById("form__enviar");
termos.checked = false;

headerLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    headerLinks[2].firstElementChild.classList.remove("headerLink");
    link.firstElementChild.classList.add("headerLink");
  });
  link.addEventListener("mouseout", () => {
    link.firstElementChild.classList.remove("headerLink");
    headerLinks[2].firstElementChild.classList.add("headerLink");
  });
});

termos.addEventListener("change", () => {
  if (termos.checked) {
    botaoForm.classList.add("button__selecionado");
    botaoForm.removeAttribute("disabled");
  } else {
    botaoForm.classList.remove("button__selecionado");
    botaoForm.setAttribute("disabled", true);
  }
});

class contato {
  constructor(nome, email, telefone, mensagem, tipoDeMensagem, promocoes) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.mensagem = mensagem;
    this.tipoDeMensagem = tipoDeMensagem;
    this.promocoes = promocoes;
  }
  static enviarInfo(respostaForm) {
    console.table(respostaForm);
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("mensagem").value,
    form.elements.namedItem("contato").value,
    form.elements.namedItem("form__privacidade__promocoes").checked
  );
  contato.enviarInfo(data);
}

function Enviar() {
  let validar = true;
  campos.forEach((input) => {
    if (input.value === "") {
      validar = false;
    }
  });
  if (validar && termos.checked) {
    alert(
      `Obrigado sr(a) ${nome.value}, os seus dados foram encaminhados com sucesso!`
    );
  }
}
