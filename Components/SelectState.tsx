import {state} from "@/Utils/Types";

interface Props {
    states: state[]
    state: (stateVlue: number) => void
}
export default function SelectState({states, state}:Props){
    return( <select
        className={"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}
        onChange={(e) => state(Number(e.target.value))}>
        {states.map((state) => (<option key={state.id} value={state.id-1}>{state.title}</option>))}
    </select>)
}