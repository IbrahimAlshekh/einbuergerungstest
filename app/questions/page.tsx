import Question from "@/Components/Question";
import {getQuestions} from "@/Utils/Functions";

export default function Questions() {
    const questions = getQuestions();
    return (<div className={"flex flex-col space-y-8 p-8"}>
        {questions.map((question) => (<Question withId={true} checkEnabled={true} key={question.id} question={question}/>) )}
    </div>)
}