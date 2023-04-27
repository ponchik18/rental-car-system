function showRequest(message){
    document.getElementById('request').value=message;

}

function changeCarStatus(event, car_id){
    let selectedOption = event.target.value;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({car_id: car_id, status: selectedOption})
    };
    fetch('/admin/updateCarStatus', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}