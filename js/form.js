const campos = document.querySelectorAll(".fordform");
const nome = document.getElementById("nomeid");
const termos = document.getElementById("form__privacidade__termos");
const botaoForm = document.getElementById("form__enviar");
termos.checked = false;

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
  constructor(nome, email, cpf, sobrenome, telefone, tipoDeContato, promocoes) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.tipoDeContato = tipoDeContato;
    this.promocoes = promocoes;
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value,
    form.elements.namedItem("form__privacidade__promocoes").checked
  );
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
    document.getElementById("formulario").reset();
  }
}
