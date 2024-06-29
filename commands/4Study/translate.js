const axios = require('axios');

module.exports = async function ({ dstryr, event, parameters }) {
  try {
    // Check if parameters are empty
    if (parameters.length === 0) {
      dstryr.sendMessage('hey you. Do you want to translate some word or any English?. But before that you must type the correct following to executed. ', event.threadID);
      return; // Exit the function early
    }

    const textToTranslate = parameters.join(' ');
    const apiUrl = 'https://api.popcat.xyz/translate?to=en&text=' + encodeURIComponent(textToTranslate);

    const response = await axios.get(apiUrl);

    const translatedText = response.data.translated;

    // Create a message with original content and its English translation
    const message = `Translate for: ${textToTranslate}\nEnglish: ${translatedText}`;

    dstryr.sendMessage(message, event.threadID);
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('Were very sorry, your request has been stop some reason why is the API are causing error on your inputs.', event.threadID);
  }
};
