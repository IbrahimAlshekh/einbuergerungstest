import Image from "next/image";
interface Props {
    passed: boolean
}
export default function QuizResult({passed}: Props){
    return(<div className={"flex justify-start items-center p-8"}>
        <Image src={passed ? '/img/passed.png' : '/img/not_passed.png'} alt={passed ? 'Quiz passed' : 'Quiz not passde'}
            width={200}
            height={0}
            className={"object-contain rotate-[-10deg]"}
       />
    </div>)
}