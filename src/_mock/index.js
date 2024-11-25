import { setupWorker } from "msw/browser";

import demoMockApi from "./handlers/_demo";
import orgMockApi from "./handlers/_org";
import userMockApi from "./handlers/_user";

const handlers = [...userMockApi, ...orgMockApi, ...demoMockApi];
const worker = setupWorker(...handlers);

// console.log(`worker setup...`)
console.log(`worker api url: [mock user]`, JSON.stringify(userMockApi[2]))
console.log(`worker api url: [mock org]`, JSON.stringify(orgMockApi[1]))
console.log(`worker api url: [mock demo]`, JSON.stringify(demoMockApi[1]))

export default worker;
