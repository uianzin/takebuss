//CADASTRO DO CLIENTE

const campoNome = document.querySelector('#nome');
const campoNascimento = document.querySelector('#nascimento');
const campoEmail = document.querySelector('#email');
const campoSenha = document.querySelector('#senha');
const btnSalvar = document.querySelector('#salvar');


btnSalvar.onclick = async () => {
  const nome = campoNome.value;
  const nascimento = campoNascimento.value;
  const email = campoEmail.value;
  const senha = campoSenha.value;

  const cliente = { nome, nascimento, email, senha };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(cliente),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
  if (chamada.status == 201) {
    alert('salvo com sucesso');
    window.location.href = 'https://takebuss.netlify.appc';
  } else {
    // tratar erro
  }
};