const socket = io('https://crchattest2.herokuapp.com/')
const messageContainer = document.getElementById('message-container')
const roomContainer = document.getElementById('room-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

if (messageForm != null) {
  const name = prompt('What is your name?')
  appendMessage('You joined')
  socket.emit('new-user', roomName, name)

  messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', roomName, message)
    messageInput.value = ''
  })
}

socket.on('room-created', room => {
  const roomElement = document.createElement('div')
  roomElement.innerText = room
  const roomLink = document.createElement('a')
  roomLink.href = `/${room}`
  roomLink.innerText = 'join'
  roomContainer.append(roomElement)
  roomContainer.append(roomLink)
})

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`,connected = false, disconnected = false)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`,connected = true, disconnected = false)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`,connected = false, disconnected = true)
})

function appendMessage(message, connected, disconnected) {
  const messageElement = document.createElement('button')
  if(connected == true){
    messageElement.setAttribute('id','connected')
  }
  else if(disconnected == true){
    messageElement.setAttribute('id','disconnected')
  }
  else {
  messageElement.setAttribute('id','message')
  }
  messageElement.innerText = message
  messageContainer.append(messageElement)
}