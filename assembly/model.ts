import { context, storage, logging, PersistentUnorderedMap } from "near-sdk-as";

@nearBindgen
export class Task {
    taskName: string;
    constructor(public task: string) {
        this.taskName = task;
    }
}

export const taskName_to_taskUnits_map = new PersistentUnorderedMap<string, i32>("taskName_to_taskUnits_map");
