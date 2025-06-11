console.log("Global object:");
console.log(typeof window !== "undefined" ? window : global); // Logs `window` in browser, `global` in Node.js

console.log("Environment-specific API:");
if (typeof document !== "undefined") {
  console.log("Running in the browser. Document API is available.");
} else if (typeof require !== "undefined") {
  console.log("Running in Node.js. Require API is available.");
}
