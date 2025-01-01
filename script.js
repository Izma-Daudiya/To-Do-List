const form = document.querySelector('.todo-form')
const input = document.querySelector('.todo-form input')
const todolist = document.querySelector('.todo-list')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const todo = input.value.trim()
 
  if (!todo) {
    return
  }
  input.value = ''
  const li = createElement('li')
  li.className = "todo-item"
    
  const span = createElement('span')
  span.appendChild(document.createTextNode(todo))

  const btn = createElement('button')
  btn.className = 'close'
  btn.setAttribute('aria-label', 'Remove todo');
  btn.appendChild(document.createTextNode('x'))

  btn.addEventListener('click', function () {
    li.remove()
  })    

  li.appendChild(span)
  li.appendChild(btn)

  todolist.appendChild(li)

})
function createElement(tag) {
  return document.createElement(tag);
}