import {State} from "@/Components/State";
import {getStates} from "@/Utils/Functions";

export default function States() {
    const states = getStates();
    return (<div className={"flex flex-col space-y-8 p-8"}>
        <State states={states}></State>
    </div>)
}