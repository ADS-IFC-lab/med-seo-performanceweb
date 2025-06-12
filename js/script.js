const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  document.getElementById('nav').classList.toggle('active');
  document.getElementById('main-content').classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


const todasQuestoes = [
  {
    enunciado: "O que significa SEO?",
    alternativas: [
      "a) Um código usado secreto para desenvolvedores.",
      "b) Um conjunto de técnicas para melhorar a visibilidade de um site.",
      "c) Um formato de design gráfico para páginas web.",
      "d) Um sistema de proteção contra vírus."
    ],
    correta: "b) Um conjunto de técnicas para melhorar a visibilidade de um site."
  },
  {
    enunciado: "Por que um site rápido é importante para o SEO?",
    alternativas: [
      "a) Porque aumenta o consumo de dados dos visitantes.",
      "b) Porque evita que o site saia do ar.",
      "c) Porque reduz a necessidade de atualizações frequentes.",
      "d) Porque melhora a experiência do usuário e o ranqueamento no Google."
    ],
    correta: "d) Porque melhora a experiência do usuário e o ranqueamento no Google."
  },
  {
    enunciado: "O que são palavras-chave?",
    alternativas: [
      "a) Termos usados para otimizar um site nos mecanismos de busca.",
      "b) Senhas usadas para acessar conteúdos privados.",
      "c) Links que direcionam para outras páginas.",
      "d) Códigos ocultos no HTML."
    ],
    correta: "a) Termos usados para otimizar um site nos mecanismos de busca."
  },
  {
    enunciado: "Qual a função da meta tag &ltmeta name=\"description\"&gt?",
    alternativas: [
      "a) Exibir um aviso para o usuário ao acessar o site.",
      "b) Melhorar a experiência do usuário sem impactar o SEO.",
      "c) Definir a descrição da página para os mecanismos de busca.",
      "d) Aumentar o desempenho do site reduzindo seu tempo de carregamento."
    ],
    correta: "c) Definir a descrição da página para os mecanismos de busca."
  },
  {
    enunciado: "Qual dessas práticas ajuda a melhorar o SEO de um site?",
    alternativas: [
      "a) Criar títulos bem estruturados e usar palavras-chave relevantes.",
      "b) Escrever textos sem formatação e sem títulos.",
      "c) Utilizar imagens pesadas e sem descrição.",
      "d) Evitar qualquer forma de link interno ou externo."
    ],
    correta: "a) Criar títulos bem estruturados e usar palavras-chave relevantes."
  },
  {
    enunciado: "Qual é a função da tag '<code>&lt;title&gt;</code>'?",
    alternativas: [
      "a) Exibir o título da página na aba do navegador e influenciar o SEO.",
      "b) Criar um botão de ação para o usuário.",
      "c) Definir um subtítulo na página.",
      "d) Deixar o site mais rápido."
    ],
    correta: "a) Exibir o título da página na aba do navegador e influenciar o SEO."
  },
  {
    enunciado: "Qual dos elementos abaixo define um parágrafo em HTML?",
    alternativas: [
      "a) < h1 >",
      "b) < div >",
      "c) < p >",
      "d) < meta >"
    ],
    correta: "c) < p >"
  },
  {
    enunciado: "O que são links internos?",
    alternativas: [
      "a) Links que conectam diferentes páginas dentro do mesmo site.",
      "b) Links que levam para sites externos.",
      "c) Links ocultos que não aparecem na página.",
      "d) Códigos de formatação usados no HTML."
    ],
    correta: "a) Links que conectam diferentes páginas dentro do mesmo site."
  },
  {
    enunciado: "Qual alternativa define corretamente a hierarquia de títulos em HTML?",
    alternativas: [
      "a) < h3 >, < h2 >, < h1 >",
      "b) < h1 >, < h2 >, < h3 >",
      "c) < h2 > , < h1 >, < h3 >",
      "d) < h4 >, < h3 >, < h2 >"
    ],
    correta: "b) < h1 >, < h2 >, < h3 >"
  },
  {
    enunciado: "Como o Google “lê” uma página HTML?",
    alternativas: [
      "a) Ele analisa o código e identifica os elementos de estrutura e conteúdo.",
      "b) Ele apenas verifica a velocidade do carregamento.",
      "c) Ele só considera imagens e vídeos.",
      "d) Ele não consegue interpretar o código HTML."
    ],
    correta: "a) Ele analisa o código e identifica os elementos de estrutura e conteúdo."
  },
  {
    enunciado: "Qual das opções abaixo é uma boa prática para melhorar o carregamento de um site?",
    alternativas: [
      "a) Reduzir o tamanho das imagens e otimizar o código.",
      "b) Utilizar imagens pesadas e aumentar a quantidade de scripts.",
      "c) Usar vídeos de alta resolução sem compressão.",
      "d) Evitar qualquer tipo de estrutura organizada no HTML."
    ],
    correta: "a) Reduzir o tamanho das imagens e otimizar o código."
  },
  {
    enunciado: "O que é cache?",
    alternativas: [
      "a) Um sistema que armazena temporariamente elementos do site para carregamento mais rápido.",
      "b) Um código que impede que os usuários acessem a página.",
      "c) Um método de criptografia de dados.",
      "d) Uma técnica para remover imagens de um site."
    ],
    correta: "a) Um sistema que armazena temporariamente elementos do site para carregamento mais rápido."
  },
  {
    enunciado: "Qual ferramenta pode ser usada para testar a velocidade de um site?",
    alternativas: [
      "a) PageSpeed Insights.",
      "b) Netbeans.",
      "c) Visual Studio Code.",
      "d) Excel."
    ],
    correta: "a) PageSpeed Insights."
  },
  {
    enunciado: "Qual das opções abaixo NÃO ajuda a melhorar a performance de um site?",
    alternativas: [
      "a) Compressão de imagens e otimização de código.",
      "b) Utilização de scripts pesados sem necessidade.",
      "c) Aplicação de cache.",
      "d) Redução do tempo de resposta do servidor."
    ],
    correta: "b) Utilização de scripts pesados sem necessidade."
  },
  {
    enunciado: "Qual dessas práticas melhora o desempenho do site?",
    alternativas: [
      "a) Reutilizar código CSS externo e reduzir requisições ao servidor.",
      "b) Adicionar animações pesadas em todas as páginas.",
      "c) Usar imagens sem otimização e aumentar o número de plugins.",
      "d) Escolher servidores de qualidade para hospedar o site."
    ],
    correta: "a) Reutilizar código CSS externo e reduzir requisições ao servidor."
  }
];


let perguntasSelecionadas = [];
let perguntaAtual = 0;
let pontuacao = 0;

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function iniciarQuiz() {
  perguntasSelecionadas = embaralhar([...todasQuestoes]).slice(0, 5);
  perguntaAtual = 0;
  pontuacao = 0;
  document.getElementById("resultado").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (perguntaAtual >= perguntasSelecionadas.length) {
    mostrarResultado();
    return;
  }

  const q = perguntasSelecionadas[perguntaAtual];

  const div = document.createElement("div");
  div.className = "questao active";

  div.innerHTML = `
    <p class="enunciado-questao">${q.enunciado}</p>
    <div class="opcoes-resposta">
      ${q.alternativas.map((alt) => `
        <label>
          <input type="radio" name="resposta" value="${alt}">
          ${alt}
        </label>
      `).join("")}
    </div>
    <div class="controles-quiz">
      <button onclick="proximaPergunta()">Próximo</button>
    </div>
  `;

  container.appendChild(div);
}

function proximaPergunta() {
  const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
  if (!respostaSelecionada) {
    alert("Por favor, selecione uma resposta!");
    return;
  }

  if (respostaSelecionada.value === perguntasSelecionadas[perguntaAtual].correta) {
    pontuacao++;
  }

  perguntaAtual++;
  mostrarPergunta();
}

function mostrarResultado() {
  document.getElementById("quiz-container").style.display = "none";
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
  document.getElementById("pontuacao-final").textContent = `${pontuacao} de ${perguntasSelecionadas.length}`;
}

function reiniciarQuiz() {
  iniciarQuiz();
}

window.onload = iniciarQuiz;

