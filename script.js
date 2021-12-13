var startBtn= document.getElementById("start-btn")



var questions= [
    
    //questions
    // 1. What does HTML stand for? Hypertext markup language
    // 2. What does CSS stand for? Casscading Style Sheet
    // 3. Where do you reference an extended style sheet in and HTML document? In the head element
    // 4. Arrays in JavaScript can be used to store:....(numbers and strings, other arrays, booleans, all of the above)
    // 5. How do you add a comment in JavaScript?...//

    {
      num: 1,
      question: "What does HTML stand for?",
      answer: "Hypertext Markup Language",
      options: [
          "",
          "",
          "",
          ""
      ]
    },
    {
        num: 2,
      quesiton: "What does CSS stand for?",
      answer: "Casscading Style Sheet",
      options: [
          "",
          "",
          "",
          ""
        ]
    },
    {
        num: 3,
        question: "Where do you reference an external style sheet in an HTML document?",
        answer: "In the head section",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        num: 4,
        question: "Arrays in JavaScript can be used to store:....",
        answer: "All of the above.",
        options: [
            "",
            "",
            "",
            "",
        ]
    },
    {
        num: 5,
        question: "How do you add a comment in JavaScript?",
        answer: "//",
        options: [
            "",
            "",
            "",
            "",
        ]
    }
]


function startQuiz() {
console.log("it worked")
var layer= document.createElement("div");
var questionText= document.createTextNode(questions [0].question)
layer.appendChild(questionText)
layer.classList.add("layer")
document.body.appendChild(layer)

}

startBtn.addEventListener("click", startQuiz)

