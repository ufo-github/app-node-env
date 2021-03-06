"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms 2019.05.12
 *
 * @description APP_NODE_ENV
 * @augments
 * @example node env-generator.js env=dev
 *
 */

// import ANE from "./src/env-generator";
// export default ANE;

const fs = require("fs");

const arges = process.argv.slice(2) || [];

console.log(`process.argv =`, process.argv);
console.log(`arges =`, arges, typeof(arges));
console.log(`arges[0] =`, arges[0], typeof(arges[0]));

let env = "";
if (!arges[0]) {
    arges[0] = "";
} else {
    env = arges[0].substr(4);
}

// const env = arges[0].substr(4);
// const env = arges[0].substr(4);

const filename = "./env.js";

const APP_NODE_ENV = (env = ``) => {
    fs.open(filename, "r", (err, fd) => {
        console.log("APP_ENV =", env);
        if (err) {
            fs.writeFile(filename, `const APP_ENV = "${env}";\nexport default APP_ENV;`, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        } else {
            fs.writeFile(filename, `const APP_ENV = "${env}";\nexport default APP_ENV;`, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        }
    });
};

// export default APP_NODE_ENV;

APP_NODE_ENV(env);

module.exports = APP_NODE_ENV;
// ES6
module.exports.default = APP_NODE_ENV;

