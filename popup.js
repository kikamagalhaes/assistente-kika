// Substitua "COLE_SUA_CHAVE_AQUI" pela sua API Key (aquela que começa com AIzaSy...)
// NUNCA commite uma chave real aqui. Crie sua chave em https://aistudio.google.com/apikey
// e informe por variável local ou chrome.storage (ver README).
const MINHA_API_KEY = "SUA_CHAVE_AQUI";

document.getElementById('btnAnalisar').addEventListener('click', async () => {
  const promptText = document.getElementById('prompt').value;
  const resultadoDiv = document.getElementById('resultado');

  if (!promptText) {
    resultadoDiv.innerText = "Por favor, digite o que deseja fazer.";
    return;
  }

  resultadoDiv.innerText = "Lendo a página e pensando...";

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.body.innerText
  }, async (injectionResults) => {
    
    let pageText = injectionResults[0].result;
    pageText = pageText.substring(0, 30000); 

    // URL atualizada com o modelo correto (flash-latest)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${MINHA_API_KEY}`;
    
    const payload = {
      contents: [{
        parts: [
          { text: `${promptText}\n\n--- CONTEXTO DA PÁGINA ---\n${pageText}` }
        ]
      }]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (data.error) {
        resultadoDiv.innerText = "Erro da API: " + data.error.message;
      } else {
        resultadoDiv.innerText = data.candidates[0].content.parts[0].text;
      }
    } catch (error) {
      resultadoDiv.innerText = "Erro na requisição: " + error.message;
    }
  });
});