export default class AnswerModel {
    #valueAnswer: string
    #isAnswerRight: boolean
    #isAnswerShow: boolean

    constructor(valueAnswer: string, isAnswerRight: boolean, isAnswerShow: boolean) {
        this.#valueAnswer = valueAnswer
        this.#isAnswerRight = isAnswerRight
        this.#isAnswerShow = isAnswerShow
    }

    static rightAnswer(valueAnswer: string) {
        return new AnswerModel(valueAnswer, true, false)
    }

    static wrongAnswer(valueAnswer: string) {
        return new AnswerModel(valueAnswer, false, false)
    }

    static createObj(obj: AnswerModel): AnswerModel {
        return new AnswerModel(obj.valueAnswer, obj.isAnswerRight, obj.isAnswerShow)
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

    show() {
        return new AnswerModel(this.valueAnswer, this.isAnswerRight, true)
    }

    toObject() {
        return {
            valueAnswer: this.#valueAnswer,
            isAnswerRight: this.#isAnswerRight,
            isAnswerShow: this.#isAnswerShow
        }
    }

}