const text = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener('click', () => {
    const voice = speechSynthesis
    const talk = new SpeechSynthesisUtterance(text.value)
    let language = "pt-BR" // Default language

    talk.lang = language
    voice.speak(talk)

    if(text.value === "") {
        alert("Digite algo para falar!")
    }
})