import * as ui from 'ui';

import page1 from './page1';
import page2 from './page2';
import page3 from './page3';

const homePageId = ui.generateId();

const tabLayoutId = ui.generateId();

const tabContentId = ui.generateId();

const nodes = [
    {
        pid: homePageId,
        id: tabContentId,
        name: "page-ref",
        style: {
            flexGrow: 1,
        },
        typeRef: page1,
    },
    {
        pid: homePageId,
        id: tabLayoutId,
        name: "flex",
        style: {
            height: "56dp",
            flexDirection: "row",
        }
    },
    {
        pid: tabLayoutId,
        id: ui.generateId(),//tab 1
        name: "text",
        style: {
            flexGrow: 1,
            borderColor: "blue",
            borderWidth: "2dp"
        },
        text: "goto page1",
        gravity: "center",
        onClick: (name, args) => {
            const p = ui.getPage(homePageId);
            p.updateNode({
                id: tabContentId,
                typeRef: page1,
            });
            return true;
        }
    },
    {
        pid: tabLayoutId,
        id: ui.generateId(),//tab 2
        name: "text",
        style: {
            flexGrow: 1,
            borderColor: "blue",
            borderWidth: "2dp"
        },
        text: "goto page2",
        gravity: "center",
        onClick: (name, args) => {
            const p = ui.getPage(homePageId);
            p.updateNode({
                id: tabContentId,
                typeRef: page2,
            });
            return true;
        }
    },
    {
        pid: tabLayoutId,
        id: ui.generateId(),//tab 3
        name: "text",
        style: {
            flexGrow: 1,
            borderColor: "blue",
            borderWidth: "2dp"
        },
        text: "goto page3",
        gravity: "center",
        onClick: (name, args) => {
            const p = ui.getPage(homePageId);
            p.updateNode({
                id: tabContentId,
                typeRef: page3,
            });
            return true;
        }
    },

];

let toasted = false;

ui.addPage(homePageId, {
    style: {
        flexDirection: "column",
        alignItems: "stretch"
    },
    onEvent: (name, args) => {
        let oldv = toasted;
        if (!oldv) {
            ui.toast('再按一次退出');
            toasted = true;
            setTimeout(() => {
                toasted = false;
            }, 3000);
        }
        return !oldv;
    },
    onLoad: (p) => {
        for (const node in nodes) {
            const element = nodes[node];
            console.log(JSON.stringify(element));
            p.createNode(element);
        }
    }
});

export default homePageId;
