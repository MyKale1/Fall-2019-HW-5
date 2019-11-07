const binUrl = 'https://jsonplaceholder.typicode.com/users' 

function showJson(jsonData) {
    const output = document.getElementById('outputUsername')

    var outPutString = "";
    jsonData.forEach(element => {
        outPutString += element.username + "<br>"
    });

    output.innerHTML = outPutString
}

async function fetchData(url) {
    const fetchResult = await fetch(url, { method: 'get' })
    const jsonData = await fetchResult.json()
    showJson(jsonData)
}

fetchData(binUrl)