'use client'
import {state} from "@/Utils/Types";
import {useState} from "react";
import Question from "@/Components/Question";
import SelectState from "@/Components/SelectState";

interface Props {
    states: state[]
}

export function State({states}: Props) {
    const [state, setState] = useState(0);
    return (<div>
        <SelectState states={states} state={(value) => setState(value)}/>
        <div className={"flex flex-col space-y-4 md:space-y-8 pt-4"}>
        {states[state].questions.map((question) => (<Question withId={true} checkEnabled={true} key={question.id + '_' + state} state={state + 1} question={question}/>) )}
        </div>
    </div>)
}