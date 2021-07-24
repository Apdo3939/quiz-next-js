import questions from '../questionsDb';

export default function handler(req, res) {
    const id = +req.query.id
    const questionSelection = questions.filter(q => q.id === id)
    if (questionSelection.length === 1) {
        const questionSelected = questionSelection[0].toSortAnswers()
        res.status(200).json(questionSelected.toObject())
    }
    else {
        res.status(204).send()
    }
}