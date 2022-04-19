const mylink = 'entry.html';
const windowname = 'welcome';

function popup(mylink, windowname) {
    if (!window.focus) return true;
    let href;
    if (typeof (mylink) == 'string') href = mylink;
    else href = mylink.href;
    window.open(href, windowname, 'type=fullWindow,fullscreen,resizeable=yes,scrollbars=yes');
    return false;
}

