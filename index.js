const axios = require('axios');
const text = require('./textos.js');


const makeRequest = async (content, tipoResumen) => {

  const config = {
    headers:{
      'Content-Type': 'application/json', 
      Authorization: 'Bearer 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'
    }
  };

  const body = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content":`${tipoResumen} ${content}`}],
    "temperature": 0.7
  }
  const response = await axios.post('https://api.openai.com/v1/chat/completions',body,config);
  return response.data.choices;
}


const generateSummary = async () => {
  const resumen1 = 'resumir lo siguiente';
  const resumen2 = 'resume eel siguiente texto en ideas principales:';



  const response = await makeRequest(text, resumen2);
  console.log(response[0].message.content);

}

exports.handler = async(event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: await generateSummary(),
  };
  return response;
};


