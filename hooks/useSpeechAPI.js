const useSpeechAPI = () =>{
  let canSpeak = false; //is Browser support Web Speech API?
  let voices = []; // List language supported by API
  if (typeof window !== "undefined") {
    canSpeak = 'speechSynthesis' in window;
    voices = window.speechSynthesis.getVoices();
  }
  return {
    canSpeak,
    voices
  }
}
export {
  useSpeechAPI
}