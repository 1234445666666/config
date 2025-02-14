document.addEventListener('DOMContentLoaded', function() {
    const toDo = document.querySelector('.to__do');
    const toDoList = document.querySelector('#to__do__list');
    const toDoInput = document.querySelector('#to__do');
    const addToDoButton = document.querySelector('#add__to__do');
    const removeAllButton = document.querySelector('#remove__all__to__do');
  
    addToDoButton.addEventListener('click', () => {
      if (toDoInput.value.trim()) {
        createTodoItem(toDoInput.value.trim());
        toDoInput.value = '';
      } else {
        alert('Введите задачу');
      }
    });
  
    removeAllButton.addEventListener('click', () => {
      while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
      }
    });
  
    function createTodoItem(text) {
      const todoItem = document.createElement('div');
      todoItem.className = 'to__do-list-item';
      
      const taskText = document.createElement('span');
      taskText.textContent = text;
      
      const iconDone = document.createElement('span');
      iconDone.className = 'icon icon-done';
      
      const iconDelete = document.createElement('span');
      iconDelete.className = 'icon icon-delete';
      
      todoItem.append(taskText, iconDone, iconDelete);
      toDoList.append(todoItem);
  
      iconDone.addEventListener('click', () => {
        todoItem.classList.toggle('completed');
      });
  
      iconDelete.addEventListener('click', () => {
        toDoList.removeChild(todoItem);
      });
    }
  });