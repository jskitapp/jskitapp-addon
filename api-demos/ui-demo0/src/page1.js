import * as ui from 'ui';

const page1 = ui.generateId();

ui.addPage(page1, {
    style: {
        flexDirection: "column",
        alignItems: "stretch"
    },
    onLoad: (p) => {
        p.createNode({
            pid: page1,
            id: ui.generateId(),
            name: "text",
            style: {
                flexGrow: 1,
                borderColor: "red",
                borderWidth: "2dp"
            },
            text: "page1",
            gravity: "center"
        });
    }
});

export default page1;
