const search = document.getElementById('search');
const btn = 
document.getElementById('btn');
const word = document.getElementById('word');
const wclass = document.getElementById('class');
const trans = document.getElementById('trans');
const meaning = document.getElementById('meaning');
const example = document.getElementById('example');
const result = 
document.getElementById('result');
const sound = 
document.getElementById('sound');
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";




btn.addEventListener("click", () => {
    let input = search.value;
    fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
             
        <div class="wad">
            <h1 class="word" id="word">${input}</h1>
            <i class="fa fa-volume-up" onclick="play()"></i>
        </div>
        
     
        <div class="ct">
            <p class="wclass" id="class">
                ${data[0].meanings[0].partOfSpeech}
            </p>
            <p class="trans" id="trans">
                ${data[0].phonetic}
            </p>
        </div>
        
      
        <div class="mean">
            <p class="meaning" id="meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
        </div>
        
        
        <div class="exam">
            <p class="example" id="example">
               
                ${data[0].meanings[0].definitions[0].example}
            </p>
        </div>
        `;
        
    });
})




