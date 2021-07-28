const useSpeechAPI = () => {
  let canSpeak = false // is Browser support Web Speech API?
  // eslint-disable-next-line no-undef
  let voices: SpeechSynthesisVoice[] = [] // List language supported by API
  if (typeof window !== 'undefined') {
    canSpeak = 'speechSynthesis' in window
    voices = window.speechSynthesis.getVoices()
  }
  return {
    canSpeak,
    voices
  }
}
export { useSpeechAPI }
