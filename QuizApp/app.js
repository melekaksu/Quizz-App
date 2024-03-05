const quizData = [
    {
      question: 'Azerbaycan bayrağının eşit genişlikteki üç yatay parçasının yukarıdan aşağıya, doğru sıralaması nasıldır?',
      a: 'Kırmızı, mavi, yeşil',
      b: 'Mavi, yeşil, kırmızı',
      c: 'Yeşil, kırmızı, mavi',
      d: 'Mavi, kırmızı, yeşil',
      correct: 'd',
    },
    {
      question: 'Hangisi atletizmde "dekatlon"da yarışan sporcuların mücadele ettikleri dallardan biri değildir?',
      a: 'Cirit atma',
      b: 'Yüzme',
      c: '100 metre koşusu',
      d: 'Sırıkla atlama',
      correct: 'b',
    },
    {
      question: 'Hangisi periyodik tabloda yer alan bir elementin kısaltması değildir?',
      a: 'A',
      b: 'I',
      c: 'O',
      d: 'U',
      correct: 'a',
    },
    {
      question: 'Hangi iki kemik baldırdadır?',
      a: 'Kürek ve leğen kemiği',
      b: 'Elmacık ve köprücük kemiği',
      c: 'Kaval ve baldır kemiği',
      d: 'Uyluk ve atlas kemiği',
      correct: 'c',
    },
    {
      question: 'Kaçkar Dağı, hangi coğrafi bölgenin en yüksek dağıdır?',
      a: 'Ege',
      b: 'Marmara',
      c: 'Akdeniz',
      d: 'Karadeniz',
      correct: 'd',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
  
      `
      }
    }
  })