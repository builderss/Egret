var CuteExample = (function (_super) {
    __extends(CuteExample, _super);
    function CuteExample() {
        _super.call(this);
        var self = this;
        var url = "resource/cute.tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //load complete
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(500, 500, data, url);
            tmxTileMap.render();
            self.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }
    var d = __define,c=CuteExample,p=c.prototype;
    return CuteExample;
}(egret.DisplayObjectContainer));
egret.registerClass(CuteExample,'CuteExample');
//# sourceMappingURL=CuteExample.js.map