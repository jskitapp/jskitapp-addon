import * as ui from 'ui';

const page3 = ui.generateId();


ui.addPage(page3, {
    style: {
        flexDirection: "column",
        alignItems: "stretch"
    },
    onLoad: (p) => {
        p.createNode({
            pid: page3,
            id: ui.generateId(),
            name: "text",
            style: {
                flexGrow: 1,
                borderColor: "blue",
                borderWidth: "2dp"
            },
            text: "page3",
            gravity: "center"
        });
    }
});

export default page3;
