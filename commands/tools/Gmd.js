module.exports.config = {
 name: "Ai",
		description: "Your Bestfriend helpul Artificial Intelligence.",
 commandCategory: "ai",
 author: "Geoff(j)",
 usage: "Ai [prompt]",
 hasPrefix: false,
 coolDowns: 1
};

const axios = require('axios');

module.exports.run = async function ({api, event, args}) {
				const Gjdan = encodeURIComponent(args.join(""));
try {
	const response = await axios.get(apiUrl);
	const reply = response.data.reply;

	api.sendMessage(reply, event.threadID, event.messageID);
 } catch (error) {
	console.error("Error while parsing your request.", error.message);
	api.sendMessage("An error occured while fetching data.", event.threadID);
 }
};		

if (Gjdan) {
			return api.sendMessage(" Please Provide at least one question to proceed.",
event.threadID,event.messageID);				
				
};
				
api.sendMessage("Ai is Answering your question. Please wait for a while...", event.threadID, event.messageID); 

const apiUrl = `https://bluerepoapislasttry.onrender.com/hercai?content=${api}`;
				