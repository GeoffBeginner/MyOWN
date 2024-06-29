module.exports = function ({ dstryr, event }) {
  try {
    // Send a confirmation message
    dstryr.sendMessage('Restarting...', event.threadID);

dstryr.sendMessage('Restarting on the way....', event.threadID);

    // Listen for user's response
    dstryr.listen((response) => {
      // Check if the response is 'yes' (case-insensitive)
      if (response.body.toLowerCase() === 'yes') {
        // Send a message indicating the restart
        dstryr.sendMessage('Restarting the Node.js process. 🌐', event.threadID);

        // Wait for 10 seconds before exiting the process
        setTimeout(() => {
          // Exit the process with code 1
          process.exit(1);
        }, 5000);
      } else {
        // Send a message if the user doesn't confirm
        dstryr.sendMessage('Restart process aborted. ✖️', event.threadID);
      }
    });
  } catch (error) {
    console.error(error);
    dstryr.sendMessage('Sorry, an error occurred while processing your request. 🥴', event.threadID);
  }
};
