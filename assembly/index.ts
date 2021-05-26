import { context, storage, logging } from "near-sdk-as";
import { taskName_to_taskUnits_map } from "./model"

const TASK_UNIT_THRESHOLD = 3;

export function batch_task(taskName: string, taskUnits: i32): bool {
  // sends logs to the terminal of the contract placing call and the Near Explorer
  logging.log("-------------------------------------------------------")
  logging.log('Contract Called : ' + context.contractName + " CONTRACT_NAME")
  logging.log('Contract Signer : ' + context.predecessor + " CONTRACT_PREDECESSOR")
  logging.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -")
  logging.log("Submitted task " + taskName + " for " + taskUnits.toString())

  if (taskName_to_taskUnits_map.contains(taskName)) {
    logging.log("Above criterion")
    logging.log(taskName_to_taskUnits_map.getSome(taskName));
    taskUnits += taskName_to_taskUnits_map.getSome(taskName);
  } else {
    logging.log("Below criterion")
    taskName_to_taskUnits_map.set(taskName, taskUnits);
  }

  if (taskUnits >= TASK_UNIT_THRESHOLD) {
    logging.log("Now above threshold " + TASK_UNIT_THRESHOLD.toString() + ", executing: " + taskName);
    taskName_to_taskUnits_map.set(taskName, 0);
    return true;
  } else {
    logging.log("Not above threshold " + TASK_UNIT_THRESHOLD.toString() + " needs " + (TASK_UNIT_THRESHOLD - taskUnits).toString());
    return false;
  }
}
