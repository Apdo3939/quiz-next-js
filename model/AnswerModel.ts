export default class AnswerModel {
    #valueAnswer: string
    #isAnswerRight: boolean
    #isAnswerShow: boolean

    constructor(valueAnswer: string, isAnswerRight: boolean, isAnswerShow = false) {
        this.#valueAnswer = valueAnswer
        this.#isAnswerRight = isAnswerRight
        this.#isAnswerShow = isAnswerShow
    }

    static rightAnswer(valueAnswer: string){
        return new AnswerModel(valueAnswer, true)
    }

    static wrongAnswer(valueAnswer: string){
        return new AnswerModel(valueAnswer, false)
    }

    get valueAnswer() {
        return this.#valueAnswer
    }

    get isAnswerRight() {
        return this.#isAnswerRight
    }

    get isAnswerShow() {
        return this.#isAnswerShow
    }

    toObject(){
        return{
            valueAnswer : this.#valueAnswer,
            isAnswerRight : this.#isAnswerRight,
            isAnswerShow : this.#isAnswerShow
        }
    }

}