let intervalId = null;

document.addEventListener('keydown', function(e) {
    //Stop when the "Enter" key is pressed
    if (e.code === 'Enter') {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }

    //If it is running already, stop it
    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    //Funtime
    intervalId = setInterval(() => {
        const simulatedEvent = new KeyboardEvent('keydown', {
            key: e.key,
            code: e.code,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(simulatedEvent);
    }, 100);  //Repeat every 100ms
});
