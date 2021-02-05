import * as ui from 'ui';

const page2 = ui.generateId();

ui.addPage(page2, {
    style: {
        flexDirection: "column",
        alignItems: "stretch"
    },
    onLoad: (p) => {
        p.createNode({
            pid: page2,
            id: ui.generateId(),
            name: "text",
            style: {
                flexGrow: 1,
                borderColor: "yellow",
                borderWidth: "2dp"
            },
            text: "page2",
            gravity: "center"
        });
    }
});

export default page2;
