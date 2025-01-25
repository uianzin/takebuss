const URL = 'https://back-end-takebuss.onrender.com/cadastro/';
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoSenha = document.querySelector('#senha');
const btnSalvar = document.querySelector('#salvar');


btnSalvar.onclick = async () => {
  const nome = campoNome.value;
  const email = campoEmail.value;
  const senha = campoSenha.value;
 

  const usuario = { nome, email, senha };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
  console.log("usuario" , usuario)
  if (chamada.status == 201) {
    alert('salvo com sucesso');
    window.location.href = 'https://uianzin.github.io/takebuss/login';
  } else {
    // tratar erro
  }
};
