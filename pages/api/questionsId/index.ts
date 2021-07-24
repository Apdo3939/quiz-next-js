import { questionSort } from '../../../functions/arrays';
import questions from '../questionsDb';

export default function handler(req, res) {
    const ids = questions.map(q => q.id)
    res.status(200).json(questionSort(ids))
}