import { Idisabled } from "./Idisabled";
import React from "react";

export interface Itextfield extends Idisabled{
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void;
}