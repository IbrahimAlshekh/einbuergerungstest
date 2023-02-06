export interface question {
    id: number
    text: string
    options: option[]
    answer: number
    img: boolean
    type: questionTypes
}

export enum questionTypes {
    CHECK_BOX, RADIO_BUTTON
}

interface option {
    id: number,
    text: string
}

export interface state {
    id: number
    title: string
    questions: question[]
}