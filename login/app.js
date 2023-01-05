const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

var btn3 = document.querySelector('.hava_durumu');
        btn3.onclick=function(){
            window.open('indexx.html');
        }
var btn2 = document.querySelector('.kamera');
btn2.onclick=function(){
    window.open('');
}
var havadurumları = document.querySelector('.havadurumları');


var btnSelam=document.getElementById("selam");
	btnSelam.onclick=function(){
		window.close();
	}


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Günaydın mert");
    }

    else if(hr == 12) {
        speak("tünaydın mert");
    }

    else if(hr > 12 && hr <= 17) {
        speak("iyi aksamlar mert");
    }

    else {
        speak("iyi aksamlar mert");
    }
}

window.addEventListener('load', ()=>{
    speak("mert göydeniz akıllı asistan");
    speak("yardımcı olmaya hazırım");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "dedigini anlamadım lutfen tekrar söylermisin";

    if(message.includes('selam') || message.includes('selam')) {
        const finalText = "selam mert";
        speech.text = finalText;
    }

    else if(message.includes('nasılsın')) {
        const finalText = "iyiyim mert sana nasıl yardımcı olabilirim";
        speech.text = finalText;
    }

    else if(message.includes('ismin')) {
        const finalText = "benim ismim yok";
        speech.text = finalText;
    }

    else if(message.includes('google aç')) {
        window.open("https://google.com", "_blank");
        const finalText = "google açılıyor";
        speech.text = finalText;
    }

    else if(message.includes('instagram aç')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "instagram açılıyor";
        speech.text = finalText;
    }

    else if(message.includes('nedir') || message.includes('nasıl') ||message.includes('ne kadar') || message.includes('kim')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "ben senin için şunları buldum " + message;
        speech.text = finalText;
    }


    else if(message ==('domates')) {
        window.open('https://evdekilerle.com/tarif/87/domates-corbasi')
        const finalText = "domates ile ilgili tarif açılıyor";
        speech.text = finalText;
    }
    else if(message ==('biber')) {
        const finalText = "sadece biber ile ilgili tarif yok lütfen daha fazla sebze ekle";
        speech.text = finalText;
    }
    else if(message ==('domates biber')) {
        window.open('https://evdekilerle.com/tarif/70/sebze-corbasi')
        const finalText = "domates ve biber ile ilgili tarif açılıyor";
        speech.text = finalText;
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "ben senin için wikipedia da şunları buldum " + message;
        speech.text = finalText;
    }

    else if(message.includes('saat')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('tarih')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('hesap makinesi')) {
        window.open('Calculator:///')
        const finalText = "hesap makinesi açılıyor";
        speech.text = finalText;
    }

    else if(message.includes('uzantı')) {
        window.open('chrome://extensions/')
        const finalText = "uzantı";
        speech.text = finalText;
    }

    else if(message.includes('harita aç')) {
        window.open('https://www.google.com/maps')
        const finalText = "harita açılıyor";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "birkac birşey buldum " + message + " google da";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined 
    ? "Lütfen başka birşey yazınız"
    : responseObj[userInput];
  
};


const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};
