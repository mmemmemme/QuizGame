const quiz = [
  {
    question : "ゲーム市場、最も売れたゲーム機は次のうちどれ？" ,
    answers : [
      "PS3",
      "PS2",
      "NDDS",
      "NDSwitch"
    ],
    correct : "NDDS"
  }, {
    question : "あ" ,
    answers : [
      "い",
      "う",
      "え",
      "お"
    ],
    correct : "え"
  }, {
    question : "か" ,
    answers : [
      "き",
      "く",
      "け",
      "こ"
    ],
    correct : "き"
  }, {
    question : "さ" ,
    answers : [
      "し",
      "す",
      "せ",
      "そ"
    ],
    correct : "そ"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

document.getElementById("js-question").textContent = quiz[quizIndex].question ;

const $button = document.getElementsByTagName("button") ;
const buttonLength = $button.length ;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question ;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;  
  }
}
setupQuiz ();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！！！！") ;
    score++;
    } else {
    window.alert("残念！！！") ;
    }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz ();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => { 
    clickHandler(e);
  });
  handleIndex++;
}

