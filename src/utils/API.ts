export type QuestionImport = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string[]
}

export type Quiz = QuestionImport & {
    answers: string[];
}

export const ApiCall = async(amount: number, difficulty: string):Promise<Quiz[]>=>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const {results} = await (await fetch (endpoint)).json()
    return results.map((key:any) => ({
        ...key,
        answers: [...key.incorrect_answers, key.correct_answer]
    })
    )
}