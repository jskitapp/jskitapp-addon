import * as ui from "ui";

class MdViewer {
    #rootId;
    #toolbarId;
    #titleId;
    #mdViewId;
    #nodes;
    #onBackPressed;
    constructor() {
        this.#rootId = ui.generateId();
        this.#toolbarId = ui.generateId();
        this.#titleId = ui.generateId();
        this.#mdViewId = ui.generateId();
        this.#nodes = [
            {
                pid: this.#rootId,
                id: this.#toolbarId,
                name: "flex",
                style: {
                    width: "100%",
                    height: "56dp",
                    flexDirection: "row",
                    justifyContent: "center",
                },
            },
            {
                pid: this.#toolbarId,
                id: this.#titleId,
                name: "text",
                style: {
                    flexGrow: 1,
                },
                textSize: "17sp",
                gravity: "center",
                onClick: (name, obj) => {

                    return true;
                }
            },
            {
                pid: this.#rootId,
                id: this.#mdViewId,
                style: {
                    flexShrink: 1,
                    alignItems: "center",
                    borderColor: "blue",
                    flexDirection: "column",
                    borderWidth: "2dp"
                },
                name: "md-view",
            },
        ];


        ui.addPage(this.#rootId, {
            onEvent: (name, args) => {
                let cb = this.#onBackPressed;
                if (cb !== undefined) {
                    return cb();
                }
                return false;
            },
            onLoad: (p) => {
                for (const node in this.#nodes) {
                    const element = this.#nodes[node];
                    console.log(JSON.stringify(element));
                    p.createNode(element);
                }
            }
        });
    }

    setOnBackPressed(action) {
        this.#onBackPressed = action;
    }

    setLinkResolver(resolver) {
        let cb = (name, args) => {
            return resolver(args.link);
        };
        this.#nodes[2].linkResolver = cb;
        const p = ui.getPage(this.#rootId);
        p.updateNode({
            id: this.#mdViewId,
            linkResolver: cb,
        })
    }

    getPageId() {
        return this.#rootId;
    }

    setMarkdown(md) {
        this.#nodes[2].md = md;
        const p = ui.getPage(this.#rootId);
        p.updateNode({
            id: this.#mdViewId,
            md: md,
        })
    }

    setTitle(title) {
        this.#nodes[1].text = title;
        const p = ui.getPage(this.#rootId);
        p.updateNode({
            id: this.#titleId,
            text: title,
        })
    }

    finalRelease() {
        ui.removePage(this.#rootId);
    }
}

export default MdViewer;

