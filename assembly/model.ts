import { context, storage, logging, PersistentUnorderedMap } from "near-sdk-as";

@nearBindgen
export class StubArgs {
    accountId: string;
}


// @nearBindgen
// export class Task {
//     taskName: string;
//     LookupContractMap: Map<string, string>;
//     constructor(public task: string) {
//         this.taskName = task;
//         this.LookupContractMap.set("", "hello world")
//     }
// }

export const taskName_to_taskUnits_map = new PersistentUnorderedMap<string, i32>("taskName_to_taskUnits_map");
