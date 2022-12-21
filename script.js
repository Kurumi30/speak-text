const text = document.getElementById("text")
const button = document.getElementById("button")
const clear = document.getElementById("clear")

button.addEventListener('click', (e) => {
    e.preventDefault()

    const voice = speechSynthesis
    const talk = new SpeechSynthesisUtterance(text.value)
    let randomVoices = Math.floor(Math.random() * 10)
    /*let language = "pt-BR" // Default language

    talk.lang = language*/
    talk.volume = 1
    talk.voice = voice.getVoices()[randomVoices]
    voice.speak(talk)

    if (text.value === "") {
        alert("Digite algo para falar!")
    }
})

clear.addEventListener("click", () => {
    if (text.value !== "") {
        clear.removeAttribute("disabled", false)
        text.value = ""
    }
})