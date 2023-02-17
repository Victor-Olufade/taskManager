import { ItaskHeader } from "./ItaskHeader";
import { ItaskDescription } from "./ItaskDescription";
import { ItaskFooter } from "./ItaskFooter";


export interface Itask extends ItaskHeader, ItaskDescription, ItaskFooter{
    priority?: string,
}