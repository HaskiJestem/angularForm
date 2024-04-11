interface ElementData {
    type: string,
    options?: string[]
}

export interface ProcessedElement {
    id: number,
    name: string,
    type: string,
    options?: string[]
}

export type FormElement = {
    [key: string]: ElementData;
};