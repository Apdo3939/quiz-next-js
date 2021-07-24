import { questionSort } from "../functions/arrays"
import AnswerModel from "./AnswerModel"

export default class QuestionModel {
    #id: number
    #enunciate: string
    #answers: AnswerModel[]
    #isRight: boolean
    #isAnswered: boolean

    constructor(id: number, enunciate: string, answers: AnswerModel[], isRight = false, isAnswered = false) {
        this.#id = id
        this.#enunciate = enunciate
        this.#answers = answers
        this.#isRight = isRight
        this.#isAnswered = isAnswered
    }

    get id() {
        return this.#id
    }

    get enunciate() {
        return this.#enunciate
    }

    get answers() {
        return this.#answers
    }

    get isRight() {
        return this.#isRight
    }

    get isAnswered() {
        return this.#isAnswered
    }

    get answered() {
        for (let answer of this.#answers) {
            if (answer.isAnswerShow) {
                return true
            }
        }
        return false
    }

    answerWith(index: number): QuestionModel {
        const rightAnswer = this.#answers[index]?.isAnswerRight
        const answered = this.#answers.map((answer, i) => {
            const answerSelected = index === i
            const isShowAnswer = answerSelected || answer.isAnswerRight
            return isShowAnswer ? answer.show()
                : answer
        })
        return new QuestionModel(this.id, this.enunciate, answered, rightAnswer)
    }

    toSortAnswers() {
        let sortAnswers = questionSort(this.#answers)
        return new QuestionModel(this.#id, this.#enunciate, sortAnswers, this.#isRight)
    }

    toObject() {
        return {
            id: this.#id,
            enunciate: this.#enunciate,
            answers: this.#answers.map(a => a.toObject()),
            isRight: this.#isRight,
        }
    }
}