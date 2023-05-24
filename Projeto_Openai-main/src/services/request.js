require("dotenv").config();


const OPENAI_API_KEY = "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";
function fetchAPI(msg){
    const options = {
        method: "POST",
        headers: {
            Accept : "application/json",
            "Content-Type": "application/json",
            Authorization : "Bearer" + OPENAI_API_KEY,
            
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: msg}],
            max_tokens: 100,
        })
    }
    try {
        console.log(options);
        return fetch("https://api.openai.com/v1/chat/completions", options)
            .then(response => response.json())
            .then(data => (data))
    } catch (error) {
        console.error(error);
    }
}

module.exports = fetchAPI