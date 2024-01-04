// 3.
fetch('https://www.youtube.com/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));