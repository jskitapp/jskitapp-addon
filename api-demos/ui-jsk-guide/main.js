import * as ui from "ui";
import MdViewer from './mdviewer';
import { File, FileReader } from 'file';

let mdViewer = new MdViewer();

let toasted = false;

const file = new File('./README.md');

mdViewer.setMarkdown(new FileReader(file).readString());
mdViewer.setTitle("JSKit APP Guide");
mdViewer.setOnBackPressed(() => {
    let oldv = toasted;
    if (!oldv) {
        ui.toast('再按一次退出');
        toasted = true;
        setTimeout(() => {
            toasted = false;
        }, 3000);
    }
    return !oldv;
});

mdViewer.setLinkResolver((link) => {
    console.log("on link:", link);
    if(link.startsWith('./')){
        ui.toast("此链接类型暂未支持，只可在编辑器中打开")
        return true;
    }
    return false;
})

ui.loadPage({
    id: mdViewer.getPageId()
})

