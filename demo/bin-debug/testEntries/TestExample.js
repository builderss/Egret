var TestExample = (function (_super) {
    __extends(TestExample, _super);
    function TestExample() {
        _super.call(this);
        var self = this;
        var url = "resource/map02.tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //load complete
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, url);
            tmxTileMap.render();
            self.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }
    var d = __define,c=TestExample,p=c.prototype;
    return TestExample;
}(egret.DisplayObjectContainer));
egret.registerClass(TestExample,'TestExample');
//# sourceMappingURL=TestExample.js.map