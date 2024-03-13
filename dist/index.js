"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const connection_1 = require("./connection");
// Reuse the ioredis instance
const myQueue = new bullmq_1.Queue('bullQueue', { connection: connection_1.connection });
async function addJobs() {
    await myQueue.add('bullQueue', { color: 'red' }, { removeOnComplete: true, removeOnFail: true, delay: 5000 });
    await myQueue.add('bullQueue', { color: 'yellow p' }, { removeOnComplete: true, removeOnFail: true, priority: 1 });
}
async function main() {
    await addJobs();
}
main(); // Call the async function
