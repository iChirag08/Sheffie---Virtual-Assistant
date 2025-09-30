let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak);
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    if(hours>=0 && hours <12 ){
        speak("Good Morning Chirag")
    }
    else if(hours >=12 && hours<16){
        speak("Good Afternoon Chirag")
    }
    else{
        speak("Good Evening Chirag")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.speechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript)

}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(transcript){
    btn.style.display="flex"
    voice.style.display="none"
    if(transcript.includes("Hello") || transcript.includes("hey")){
        speak("Hello Chirag , what can i help you?")
    }
    else if(transcript.includes("Who are you"))
        speak("I am Sheifee a virtual Assistant,created by Chirag")
    else if(transcript.includes("Open YouTube")){
        speak("Opening YouTube")
        window.open("https://www.youtube.com/")
    }
    else if(transcript.includes("Who is Madhu")){
        speak("Madhu bala is your mom")
    }
    else if(transcript.includes("Who is Janam Singh")){
        speak("Janam singh is your dad")
    }
    else if(transcript.includes("Love you")){
        speak("Love you too darling")
    }
    else if(transcript.includes("Who is Saksham")){
        speak("Saksham is your  big brother")
    }
    else if(transcript.includes("Who is cute girl")){
        speak("Sania is the cute girl")
    }
    else if(transcript.includes("Who is Chirag")){
        speak("Chirag is the creator of this virtual assistant")
    }
    else if(transcript.includes("Open Google")){
        speak("Opening Google")
        window.open("https://www.google.co.in/")
    }
    else if(transcript.includes("Open Instagram")){
        speak("Opening Instagram")
        window.open("https://www.instagram.com/")
    }
    else if(transcript.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak("Sir, the time is "+time)
    }
    else if(transcript.includes("date")){
        let day=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak("Sir, the date is "+day)
    }
    else{
        let finalText="This is what i found on internet regarding"+transcript.replace("Shafi","") || transcript.replace("sheifee","")
        speak(finalText)
        speak(`This is what i found on internet regarding ${transcript.replace("Sheifee","") }`)
        window.open(`https://www.google.com/search?q= ${transcript}`)
    }

}