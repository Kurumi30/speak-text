const text = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener('click', () => {
    const voice = speechSynthesis
    const talk = new SpeechSynthesisUtterance(text.value)

    voice.speak(talk)

    if(text.value === "") {
        alert("Insira um texto!")
    }
})