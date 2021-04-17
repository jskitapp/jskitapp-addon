import * as ui from "ui";
import {createRequire} from "cjs";

const require = createRequire(Deno.cwd());

const axios = require('axios');

const pid0 = ui.generateId();
const textId = ui.generateId();

//https://api.muxiaoguo.cn/api/dujitang
//https://api.muxiaoguo.cn/api/tiangourj
async function getTianGouRiJi() {
    try {
        const response = await axios.get('https://api.muxiaoguo.cn/api/tiangourj');
        console.log(JSON.stringify(response));

        if (response.data.data.comment === undefined && (typeof response.data.msg === 'string')) {
            ui.toast(response.data.msg);
            return;
        }

        let page = ui.getPage(pid0);
        page.updateNode({
            id: textId,
            text: response.data.data.comment,
        });
        ui.toast("舔狗日记已刷新～");
    } catch (error) {
        console.log(JSON.stringify(error));
        ui.toast("http 接口错误");
    }
}

const toolbarId = ui.generateId();


let nodes = [
    {
        pid: pid0,
        id: toolbarId,
        name: "flex",
        style: {
            width: "100%",
            height: "56dp",
            flexDirection: "row",
            justifyContent: "center",
        },
    },
    {
        pid: toolbarId,
        id: ui.generateId(),
        name: "text",
        style: {
            flexGrow: 1,
        },
        text: "舔狗日记",
        textSize: "17sp",
        gravity: "center",
        onClick: (name, obj) => {
            return true;
        }
    },
    {
        pid: pid0,
        id: textId,
        style: {
            flexShrink: 1,
            alignItems: "center",
            // borderColor: "blue",
            //flexDirection: "column",
            //borderWidth: "2dp",
            margin: '20dp',
        },
        name: "text",
        textSize: "17sp",
        onClick: (name, obj) => {
            getTianGouRiJi();
            return true;
        }
    },
];

ui.addPage(pid0, {
    onLoad: (p) => {
        for (const node in nodes) {
            const element = nodes[node];
            console.log(JSON.stringify(element));
            p.createNode(element);
        }
        getTianGouRiJi();
    }
});

export default pid0;
