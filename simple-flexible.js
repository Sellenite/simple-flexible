/* rem等比放大方案 */
/* initial-scale=1.0的情况下，PC端的chrome浏览器调试最低字体是12px，移动端能更小 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // 320按照iphone5的尺寸修改，100为rem基准，
            // 现在在iphone5的情况下1rem=100px，将所有量到的尺寸除以100即可
            // 如果是iPhone6尺寸就改成375，其他尺寸同理
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);