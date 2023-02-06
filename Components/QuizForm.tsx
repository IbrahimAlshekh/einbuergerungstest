'use client'
import SelectState from "@/Components/SelectState";
import {question} from "@/Utils/Types";
import {getQuizQuestions, getStates} from "@/Utils/Functions";
import {useState} from "react";
import Question from "@/Components/Question";
import QuizResult from "@/Components/QuizResult";

export default function QuizForm() {
    const [state, setState] = useState(1);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizEnded, setQuizEnded] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState<question[]>([]);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [currentAnswer, setCurrentAnswer] = useState(false);
    const [answered, setAnswered] = useState(false);

    const startQuiz = () => {
        setQuestions(getQuizQuestions(state));
        setQuizStarted(true);
    }
    const quizEnd = () => {
        setQuizEnded(true)
    }
    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setAnswers([...answers, currentAnswer]);
        setAnswered(false)
    }
    const passed = () => answers.filter((a) => a).length >= 17

    const newStart = () => {
        setQuizStarted(false);
        setAnswered(false);
        setCurrentAnswer(false)
        setQuizEnded(false)
        setState(0);
        setCurrentQuestion(0)
        setQuestions([])
    }

    return (<div className={"p-8"}>
        <h1 className={"text-4xl font-semibold pb-4 mb-4 border-b border-gray-300"}>Übungstest</h1>
        {!quizStarted &&  <div className={"bg-slate-50 p-6 rounded-xl shadow"}>
            <h2 className={"text-lg"}>Bundesland auswählen</h2>
            <SelectState states={getStates()} state={(stateVlue) => setState(stateVlue)}/>
            <button onClick={startQuiz}
                    className={"my-4 px-4 py-2 text-white rounded-lg shadow bg-blue-600 hover:bg-blue-500"}>Übungstest
                starten
            </button>
        </div>}
        {quizStarted && !quizEnded && (<div>
            <Question key={currentQuestion} question={questions[currentQuestion]} getAnswer={(answer) => { setCurrentAnswer(answer); setAnswered(true)}} state={state} withId={false} checkEnabled={false}/>
            <div className={"flex justify-between items-center h-16"}>
                <div className={"font-semibold"}>Frage {currentQuestion + 1} von {questions.length}</div>
                {answered && <button
                    onClick={() => currentQuestion >= questions.length - 1 ? quizEnd() : nextQuestion()}
                    className={"my-4 px-8 py-2 text-white float-right rounded-lg shadow bg-blue-600 hover:bg-blue-500"}
                >
                    {currentQuestion >= questions.length - 1 ? 'Abschließen' : 'Weiter'}
                </button>}
            </div>
        </div>)}
        {quizEnded && <div className={"bg-slate-50 p-8 rounded-xl shadow"}>
            <div className={"text-4xl font-semibold mb-8"}>Ihr Ergebnis</div>
            <div>Sie haben <span className={`font-bold ${passed() ? 'text-green-600' : 'text-red-600'}`}>{answers.filter(a => a).length}</span> von <span className={"font-bold"}>{questions.length}</span> Punkte erreicht.</div>
            <div className={"my-4"}>
                {passed() ? 'Herzlichen Glückwunsch, Sie haben die Prüfung bestanden.' :
                    'Sie haben die Prüfung leider nicht bestanden, Sie müssen mindestens 17 Punkte erreichen, um die Prüfung bestehen zu können.'}
            </div>
            <QuizResult passed={passed()}/>
            <button
                onClick={() => newStart()}
                className={"my-4 px-8 py-2 text-white w-full rounded-lg shadow bg-blue-600 hover:bg-blue-500"}
            >
                Neuen Übungstest starten
            </button>
        </div>}
    </div>)
}