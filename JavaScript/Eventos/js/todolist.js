(function () {
  'use strict';

  //ARMAZENAR O DOM EM VARIAVEIS
  const itemInput = document.getElementById('item-input');
  const todoAddForm = document.getElementById('todo-add');
  const ul = document.getElementById('todo-list');
  const lis = ul.getElementsByTagName('li');

  let arrTasks = getSavedData();

  // function addEventLi(li) {
  //     li.addEventListener("click", function () {
  //         console.log(this)
  //     })
  // }

  function getSavedData() {
    let tasksData = localStorage.getItem('tasks');
    tasksData = JSON.parse(tasksData);
    console.log(tasksData);
    return tasksData && tasksData.length
      ? tasksData
      : [
          {
            name: 'task 1',
            createAt: Date.now(),
            completed: true,
          },
          {
            name: 'task 2',
            createAt: Date.now(),
            completed: false,
          },
        ];
  }

  //CRIOU O ITEM TASKS PARA SER CHAMADO NA FUNÇÃO SAVEDDATA
  //QUANDO FOI CRIADO ELE PRECISOU SER CONVERTIDO PARA STRING, CASO CONTRÁRIO NÃO SERVIRIA PRA NADA
  function setNewData() {
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
  }

  setNewData();

  // RECEBE UM OBJETO E RETORNA UMA LI PREPARADA
  // PRA INCLUIR NA UL
  function generateLiTask(obj) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const checkButton = document.createElement('button');
    const editButton = document.createElement('i');
    const deleteButton = document.createElement('i');

    li.className = 'todo-item';

    checkButton.className = 'button-check';
    checkButton.innerHTML = `
            <i class="fas fa-check ${
              obj.completed ? '' : 'displayNone'
            }" data-action="checkButton"></i>`;
    checkButton.setAttribute('data-action', 'checkButton');

    li.appendChild(checkButton);

    p.className = 'task-name';
    p.textContent = obj.name;
    li.appendChild(p);

    editButton.className = 'fas fa-edit';
    editButton.setAttribute('data-action', 'editButton');
    li.appendChild(editButton);

    const containerEdit = document.createElement('div');
    containerEdit.className = 'editContainer';
    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'editInput';
    inputEdit.value = obj.name;

    containerEdit.appendChild(inputEdit);
    const containerEditButton = document.createElement('button');
    containerEditButton.className = 'editButton';
    containerEditButton.textContent = 'Edit';
    containerEditButton.setAttribute('data-action', 'containerEditButton');
    containerEdit.appendChild(containerEditButton);
    const containerCancelButton = document.createElement('button');
    containerCancelButton.className = 'cancelButton';
    containerCancelButton.textContent = 'Cancel';
    containerCancelButton.setAttribute('data-action', 'containerCancelButton');
    containerEdit.appendChild(containerCancelButton);

    li.appendChild(containerEdit);

    deleteButton.className = 'fas fa-trash-alt';
    deleteButton.setAttribute('data-action', 'deleteButton');
    li.appendChild(deleteButton);

    // addEventLi(li)
    return li;
  }

  // LIMPA TODA UL E RENDERIZA AS LI'S NOVAMENTE DEPENDENDO
  // DO RESULTADO DA FUNÇÃO GENERATELITASK
  function renderTasks() {
    ul.innerHTML = '';
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
    });
  }

  // ADICIONA UMA TAREFA (OBJETO) NA ARRAY TASKS
  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });

    setNewData();
  }

  // USANDO O DATAACTION PARA PEGAR O ATRIBUTO DO ELEMENTO CLICADO
  // ATRAVÉS DESSE ATRIBUTO VAMOS VER SE ELE EXISTE NO OBJETO ACTIONS
  // SE EXISTIR VAMOS CHAMAR A FUNÇÃO OBJ[PROP]() DESSA FORMA.
  function clickedUl(e) {
    const dataAction = e.target.getAttribute('data-action');
    console.log(e.target);
    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi.nodeName !== 'LI') {
      currentLi = currentLi.parentElement;
    }
    const currentLiIndex = [...lis].indexOf(currentLi);

    const actions = {
      editButton: function () {
        const editContainer = currentLi.querySelector('.editContainer');

        [...ul.querySelectorAll('.editContainer')].forEach((container) => {
          container.removeAttribute('style');
        });

        editContainer.style.display = 'flex';
      },
      deleteButton: function () {
        arrTasks.splice(currentLiIndex, 1);
        console.log(arrTasks);
        renderTasks();
        setNewData();
        // currentLi.remove()
        // currentLi.parentElement.removeChild(currentLi)
      },
      containerEditButton: function () {
        const val = currentLi.querySelector('.editInput').value;
        arrTasks[currentLiIndex].name = val;
        renderTasks();
        setNewData();
      },
      containerCancelButton: function () {
        currentLi.querySelector('.editContainer').removeAttribute('style');

        currentLi.querySelector('.editInput').value =
          arrTasks[currentLiIndex].name;
      },
      checkButton: function () {
        arrTasks[currentLiIndex].completed =
          !arrTasks[currentLiIndex].completed;

        // if (arrTasks[currentLiIndex].completed) {
        //     currentLi.querySelector(".fa-check").classList.remove("displayNone")
        // } else {
        //     currentLi.querySelector(".fa-check").classList.add("displayNone")
        // }
        setNewData();
        renderTasks();
      },
    };

    if (actions[dataAction]) {
      actions[dataAction]();
    }
  }

  //CRIA UM OBJETO NOVO A PARTIR DA PROPRIEDADE NAME QUE É O VALOR DO INPUT DO FORMULARIOE  DEPOIS ATUALIZA A TELA COM RENDERTASKS
  // DEPOIS LIMPA O VALOR E OCLOCA O FOCUS NO INPUT
  todoAddForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(itemInput.value);
    // ul.innerHTML += `
    //     <li class="todo-item">
    //         <p class="task-name">${itemInput.value}</p>
    //     </li>
    // `
    addTask(itemInput.value);
    renderTasks();

    itemInput.value = '';
    itemInput.focus();
  });

  ul.addEventListener('click', clickedUl);

  // TEM QUE SER CHAMADA PRA PODER RENDERIZAR AS LI'S QUE JA VEM DA ESTRUTURA DE DADOS ARRAY TASKS
  renderTasks();
})();
