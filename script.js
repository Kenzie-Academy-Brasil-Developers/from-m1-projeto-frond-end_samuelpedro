const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

// está função esta renderizando meus cards/tarefas na tela e estou percorrendo por ela para renderizar as tarefas na tela
function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let card = createCard(taskList[i], tasks, renderElements);
    htmlList.appendChild(card);
  }
}

function addlistTaks() {
  let addButton = document.querySelector("#btnSubmit");
  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.querySelector("#input_title");
    let inputtype = document.querySelector("#input_priority");
    let title = input.value;
    let type = inputtype.value;
    let task = { titulo: title, tipo: type };

    // Verificar se a tarefa já existe na lista
    if (!tasks.some((t) => t.titulo === task.titulo)) {
      tasks.push(task);
      renderElements(tasks);
    } else {
      alert("Esta tarefa já existe na lista.");
    }
  });
}
addlistTaks();

function createCard(taskInfo, tasks, renderElements) {
  // Criando elementos necessários
  const itemList = document.createElement("li");
  const boxContainer = document.createElement("div");
  const spanElement = document.createElement("span");
  const textParagraph = document.createElement("p");

  // Criando botão para deletar tarefa
  const deleteButton = document.createElement("button");

  // Adicionando icone ao botão
  deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  // Adicionando o titulo da tarefa como texto do paragrafo
  textParagraph.innerText = taskInfo.titulo;

  // Adicionando um evento de clique ao botão
  deleteButton.addEventListener("click", function () {
    // Procura o objeto referente ao item no array de tasks
    let index = tasks.indexOf(taskInfo);

    if (index !== -1) {
      // Se o objeto foi encontrado no array
      // Remove o objeto do array de tasks
      tasks.splice(index, 1);
      // Atualiza a lista de tarefas exibidas na tela
      renderElements(tasks);
    }
  });

  // div.appendChild(li) e // Adicionando span e paragrafo a div
  itemList.appendChild(spanElement);
  boxContainer.appendChild(textParagraph);
  boxContainer.appendChild(spanElement);
  boxContainer.appendChild(textParagraph);

  // Adicionando a div e o botão de deletar ao list item
  itemList.appendChild(boxContainer);
  itemList.appendChild(deleteButton);

  // selecionando o botão de adicionar tarefas e criando um evento de adicionar tarefas

  // verificando e adicionando as classes as tarefas ja existentes e as que foram adicionadas
  if (taskInfo.tipo === "Urgente") {
    spanElement.classList.add("span-urgent");
  } else if (taskInfo.tipo === "Prioritário") {
    spanElement.classList.add("span-priority");
  } else {
    spanElement.classList.add("span-normal");
  }

  return itemList;
}
renderElements(tasks);
