// import $ from "jsdom/lib/jsdom/living/fetch/header-list";

const from = "GBP",
    to = "EUR",
    value = "19999.95";

$.get('https://openexchangerates.org/api/convert/' + value + '/' + from + '/' + to, {app_id: '903952a57cc14eebbeab713b501081dc'}, function(data) {
    console.log(data);
});



// const url = 'https://openexchangerates.org/api/convert/' + value + '/' + from + '/' + to, {app_id: '903952a57cc14eebbeab713b501081dc'}

const options = {method: 'GET', headers:{accept: 'application/json'}};

const getData = async () =>{
    try {
        const response = await fetch(url, options)
        let result = await response.json()
        console.log(result);
    }catch (error){
        console.log(error.message)
    }
}

getData()