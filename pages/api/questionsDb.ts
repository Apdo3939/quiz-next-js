import AnswerModel from "../../model/AnswerModel"
import QuestionModel from "../../model/questionModel"

const Questions: QuestionModel[] = [
    new QuestionModel(1, 'Quem foi Thomas Edson?', [
        AnswerModel.rightAnswer('Inventor Famoso'),
        AnswerModel.wrongAnswer('Ator de Holywood'),
        AnswerModel.wrongAnswer('Presidente Americano'),
        AnswerModel.wrongAnswer('Ciêntista da Atualidade'),
        AnswerModel.wrongAnswer('Cantor Internacional'),
    ]),

    new QuestionModel(2, 'O que é jerimum?', [
        AnswerModel.rightAnswer('Abóbora'),
        AnswerModel.wrongAnswer('Tomate japonês'),
        AnswerModel.wrongAnswer('Manga doce'),
        AnswerModel.wrongAnswer('Carne seca'),
        AnswerModel.wrongAnswer('Camarão'),
    ]),

    new QuestionModel(3, 'Quem foi Chacrinha?', [
        AnswerModel.rightAnswer('Aberlado barbosa'),
        AnswerModel.wrongAnswer('Ator da Globo'),
        AnswerModel.wrongAnswer('Presidente brasileiro'),
        AnswerModel.wrongAnswer('Ciêntista da Atualidade'),
        AnswerModel.wrongAnswer('Cantor de axé'),
    ]),

    new QuestionModel(4, 'O que é mexerica?', [
        AnswerModel.rightAnswer('Uma fruta'),
        AnswerModel.wrongAnswer('Laranja'),
        AnswerModel.wrongAnswer('Sobremesa de banana'),
        AnswerModel.wrongAnswer('Um tipo de bolo'),
        AnswerModel.wrongAnswer('Um animal de estimação'),
    ]),

    new QuestionModel(5, 'One moment in time?', [
        AnswerModel.rightAnswer('Uma música internacional'),
        AnswerModel.wrongAnswer('Música de Roberto Carlos'),
        AnswerModel.wrongAnswer('Musica tipica do nordeste'),
        AnswerModel.wrongAnswer('Um e-book internacional'),
        AnswerModel.wrongAnswer('Banda Internacional'),
    ]),
]

export default Questions