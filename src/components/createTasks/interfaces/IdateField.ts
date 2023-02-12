import { Idisabled } from "./Idisabled";

export interface IdateField extends Idisabled{
    value?: Date | null,
    onChange?: (date: Date | null)=> void 
}