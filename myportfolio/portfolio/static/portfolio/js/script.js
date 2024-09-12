function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
        strings: ["I am passionate about software development and fascinated by the possibilities of AI, I am a developer with a Master’s in Computer Science. My expertise lies in Java-based application development, Machine Learning, and Cloud Technologies. I have a thirst for learning new technologies and am enthusiastic about exploring the frontiers of AI. Notably, I was honored with the Best Student Prize for my innovative contribution to the Bring Down Counterfeiting Challenge 2023.."],
        typeSpeed: 13,
        backSpeed: 25,
        startDelay: 1000,
        loop: false,
        showCursor: true
    });
});

function toggleChatbot() {
  var chatbotWindow = document.getElementById('chatbotWindow');
  if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
    chatbotWindow.style.display = 'block';
  } else {
    chatbotWindow.style.display = 'none';
  }
}

function sendMessage() {
  var input = document.getElementById('chatbotInput');
  var messages = document.getElementById('chatbotMessages');
  var message = input.value.trim();

  if (message !== '') {
    var userMessage = document.createElement('p');
    userMessage.textContent = 'You: ' + message;
    messages.appendChild(userMessage);

    var botMessage = document.createElement('p');
    botMessage.textContent = 'Bot: ' + getBotResponse(message);
    messages.appendChild(botMessage);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
}

function getBotResponse(message) {
  var responses = {
    'hello': 'Hello! How can I help you today?',
    'hi': 'Hi there! What can I do for you?',
    'how are you': 'I am just a bot, but I am doing great! How about you?',
    'is this guy good at python?': 'Yes, he is skilled in Python with several projects showcasing his expertise.'
  };

  return responses[message.toLowerCase()] || 'I am sorry, I do not understand that.';
}

