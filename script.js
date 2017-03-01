
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  //permite crear los textos
  let p = document.createElement('p');
  //guarda los textos que son creados
  const words = document.querySelector('.words');
  words.appendChild(p);
  //función para guardar voz en un array
  recognition.addEventListener('result', e => {
    console.log(e.results);
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      //función para reconocer voz a texto
      p.textContent = transcript;      
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });
  recognition.addEventListener('end', recognition.start);
  recognition.start();