let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// load all language
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  voices.forEach((voice, i) => {
    const option = new Option(voice.name, i);
    voiceSelect.add(option);
  });
  speech.voice = voices[0];
  voiceSelect.value = 0;
};

// change voice on change option

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Listen spech on button click
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
