new Vue({
    el: '#app',
    data: {
        totalQuestions: 10,
        answeredQuestions:0,
        answer: "",
        factor: 10,
        firstFactor: 1,
        secondFactor:1,
        gameIsRunning: false,
        turns: [],
        progress: 0,
        answerTime: 0
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.answeredQuestions = 0;
            this.turns = [];
            this.calcFactors();
            this.answerTime = Math.floor(Date.now() / 100);
        },

        calcFactors: function () {
            this.firstFactor = Math.floor(Math.random() * this.factor) + 1;
            this.secondFactor = Math.floor(Math.random() * this.factor) + 1;
        },

        giveUp: function () {
            this.gameIsRunning = false;
        },

        checkDone: function() {
            if (((this.firstFactor * this.secondFactor).toString().length === this.answer.toString().length) && (this.answer !== "")) {
                this.checkIfCorrect();
            }
        },

        checkIfCorrect: function() {

            var isCorrect;
            if ((this.firstFactor * this.secondFactor) == this.answer) {
                isCorrect = true;
            }
            else {
                isCorrect = false;
            }
            this.turns.push({
                correct: isCorrect,
                answer: this.answer,
                firstFactor: this.firstFactor,
                secondFactor: this.secondFactor,
                correctAnswer: this.firstFactor * this.secondFactor,
                answerTime: ((Math.floor(Date.now() / 100) - this.answerTime) / 10)
            });
            console.log("answeredQuestions: " + this.answeredQuestions + " totalQuestions: " + this.totalQuestions);
            this.nextCycle();
        },
        
        nextCycle: function() {
            console.log('prog början:' + this.progress)
            this.answeredQuestions++;
            this.calcFactors();
            this.answer = "";      
            this.progress = (this.answeredQuestions / this.totalQuestions) * 100;
            this.answerTime = this.answerTime = Math.floor(Date.now() / 100);
            if (this.answeredQuestions == this.totalQuestions) {
                this.gameIsRunning = false;
            }
            console.log('prog efter:' + this.progress) 
        }
    }
});

dM4?!-AhVldJs@