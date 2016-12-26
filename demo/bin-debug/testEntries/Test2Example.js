var Test2Example = (function (_super) {
    __extends(Test2Example, _super);
    function Test2Example() {
        _super.call(this);
        var self = this;
        var url = "resource/test2.tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //load complete
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(4800, 1920, data, url);
            tmxTileMap.render();
            self.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }
    var d = __define,c=Test2Example,p=c.prototype;
    return Test2Example;
}(egret.DisplayObjectContainer));
egret.registerClass(Test2Example,'Test2Example');
//# sourceMappingURL=Test2Example.js.map