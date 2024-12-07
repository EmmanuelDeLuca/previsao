const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionTempoInfos = document.querySelector("#tempo-info")

form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!input || !sectionTempoInfos) return;

    const localizacao = input.value;

    if (localizacao.length < 3) {
        alert("O Local precisa pelo menos ter 3 letras")
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=b09267a8035c4f0a1fd003baa8f4946a&lang=pt_br&units=metric`)
    
    const dados = await response.json();

    console.log(dados)

    const infos = {
        temperatura: Math.round(dados.main.temp),
        local: String(dados.name),
        icon: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    };

    sectionTempoInfos.innerHTML = `
        <div class="tempo-dados">
            <h2>${infos.local}</h2>

            <span>${infos.temperatura}°C</span>
        </div>
            
        <img src="${infos.icon}">
    `;
    } catch(err) {
        console.log("Deu um erro na obtenção dos dados da API", err)
    }
    
})