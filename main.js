import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
  "sketches/example-sequence-empty-1",
  "sketches/example-sequence-empty-2",
];

const exampleSequence = [
  "sketches/D1",
  "sketches/D2",
  "sketches/D3",
  "sketches/D4",
];

runSequence(exampleSequence);
