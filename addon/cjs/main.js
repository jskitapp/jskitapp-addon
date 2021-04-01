import * as jsk from 'jsk';
import { File, FileReader } from 'file';

class PermissionDenied extends Error {
    constructor(message) {
        super(message);
        this.name = "PermissionDenied";
    }
};

global.Deno = {
    build: {
        os: "android"
    },
    cwd: jsk.cwd,
    statSync: (path) => {
        const file = new File(path);

        const isF = file.isFile();
        return {
            isFile: isF
        };
    },
    errors: {
        PermissionDenied: PermissionDenied
    },
    readFileSync(path) {
        const file = new File(path);
        let wreader = new FileReader(file);
        let str = wreader.readString();
        wreader.close();
        return str;
    },
    core: {
        evalContext: (content, fileName) => {
            let result = undefined;
            let error = undefined;
            try {
                result = jsk.evalContext(content, fileName);
            } catch (e) {
                error = e;
            }
            return [result, error];
        }
    }
};
