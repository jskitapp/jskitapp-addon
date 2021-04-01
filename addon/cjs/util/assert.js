// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
export class DenoStdInternalError extends Error {
    constructor(message) {
        super(message);
        this.name = "DenoStdInternalError";
    }
}
/** Make an assertion, if not `true`, then throw. */
export function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg);
    }
}
