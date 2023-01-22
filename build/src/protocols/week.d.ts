import { Set } from "./set";
export declare type Week = {
    id?: number;
    sets?: Omit<Set, "weekid">[];
};
