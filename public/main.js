function sendMessage(){
    let message = $("#messageInput").val();

    axios
    .post('http://localhost:3000', {
        message: message
    })
    .then((response) => {
        console.log(response);
        $("#messageInput").val("");
    })
    .catch((error) => {
        console.log(error);
    })
}