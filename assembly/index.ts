import { context, storage, logging, ContractPromise } from "near-sdk-as";
import { taskName_to_taskUnits_map, StubArgs } from "./model"

const TASK_UNIT_THRESHOLD = 3;
const APIROUTER_ADDRESS = "apirouter.wombat.testnet"

export class RouterApi {
  callStub(stubContractAddressString: string, accountId: string): ContractPromise {
    let args: StubArgs = { accountId };
    let promise = ContractPromise.create(stubContractAddressString, "getGreeting", args.encode(), 5000000000000);
    logging.log("STUB_CONTRACT CALLED IS : " + "(" + stubContractAddressString + ")");
    return promise;
  }
}

export function batch_task(taskName: string, taskUnits: i32): void {
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
    let router = new RouterApi();
    const stubcontract = taskName + "." + APIROUTER_ADDRESS;
    logging.log('Stub Contract Address : ' + stubcontract + " called by " + APIROUTER_ADDRESS)
    let promise = router.callStub(stubcontract, APIROUTER_ADDRESS)
    taskName_to_taskUnits_map.set(taskName, 0);
    promise.returnAsResult();
  } else {
    logging.log("Not above threshold " + TASK_UNIT_THRESHOLD.toString() + " needs " + (TASK_UNIT_THRESHOLD - taskUnits).toString());
  }
  logging.log("Reached last line of batch_task");
}
