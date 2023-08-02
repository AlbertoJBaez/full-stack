import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import QueryModel from './QueryModel/QueryModel';
import { useState } from 'react';
 
const steps = [
  {
    id: '1',
    component: <QueryModel method='get'/>,
    trigger: 'question'
  }, {
      id: 'question',
      user: true,
      trigger: 'response',
  }, {
      id: 'response',
      component: <QueryModel method='post' questionParam={true}/>,
      trigger: '2',
  }, {
    id: '2',
    message: '¿Tienes otra pregunta?',
    trigger: '3'
  }, {
    id: '3',
    options: [
      { value: 1, label: 'Si', trigger: 'anotherQuestion' },
      { value: 2, label: 'No', trigger: '4' }
    ],
  }, {
    id: '4',
    message: 'gracias por visitarnos',
    trigger: 'question'
  }, {
    id: 'anotherQuestion',
    message: '¿Cuál es tu pregunta?',
    trigger: 'question'
  }
];

// Creating our own theme
const theme = {
    background: '#fff',
    headerBgColor: '#069a8e',
    headerFontSize: '20px',
    botBubbleColor: '#e5e6e6',
    headerFontColor: 'white',
    botFontColor: '#11181c',
    userBubbleColor: '#e5e6e6',
    userFontColor: '#11181c',
};
 
// Set some properties of the bot
const config = {
    botAvatar: '../../../../public/assets/Favicon_Fav.png',
    userAvatar: '../../../../public/assets/Logo_Fav User.png',
    floating: true,
};

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  return (
    <article>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Habla con nosotros"
            steps={steps}
            opened={isChatbotOpen}
            handleEnd={() => setIsChatbotOpen(false)}
            toggleFloating={() => setIsChatbotOpen(!isChatbotOpen)}
            placeholder='Escribe aquí tu mensaje'
            {...config}
          />
        </ThemeProvider>
    </article>
  );
};

export default Chatbot;