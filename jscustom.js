// 禁止调试
(function noDebuger() {
    function testDebuger() {
        var d = new Date();
        debugger;
        if (new Date() - d > 10) {
            document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" target="_blank" style="color:#4285f4;">点击返回</a>试试吧~</div>';
            return true;
        }
        return false;
    }
    function start() {
        while (testDebuger()) {
            testDebuger();
        }
    }
    if (!testDebuger()) {
        window.onblur = function () {
            setTimeout(function () {
                start();
            }, 500)
        }
    }else {
        start();
    }
})();
