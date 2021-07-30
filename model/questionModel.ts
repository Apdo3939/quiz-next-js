import { questionSort } from "../functions/arrays"
import AnswerModel from "./AnswerModel"

export default class QuestionModel {
    #id: number
    #enunciate: string
    #answers: AnswerModel[]
    #isRight: boolean

    constructor(id: number, enunciate: string, answers: AnswerModel[], isRight = false) {
        this.#id = id
        this.#enunciate = enunciate
        this.#answers = answers
        this.#isRight = isRight
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

    get noAnswered() {
        return !this.answered
    }

    get answered() {
        for (let answer of this.#answers) {
            if (answer.isAnswerShow) {
                return true
            }
        }
        return false
    }

    static createObj(obj: QuestionModel): QuestionModel {
        const answers = obj.answers.map(answer => AnswerModel.createObj(answer))
        return new QuestionModel(obj.id, obj.enunciate, answers, obj.isRight)
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
            answered: this.answered,
            isRight: this.#isRight,
            answers: this.#answers.map(a => a.toObject()),
        }
    }
}