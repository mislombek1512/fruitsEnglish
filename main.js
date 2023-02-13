let cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(card => {
    let text  = card.children[1].childNodes[1].innerHTML;
    card.addEventListener('click', () => {
        speakText(text);
    });
});


// Speak text function
function speakText(Textspeak) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = Textspeak;
    speechSynthesis.speak(msg);
}