var SewersExample = (function (_super) {
    __extends(SewersExample, _super);
    function SewersExample() {
        _super.call(this);
        var self = this;
        var url = "resource/sewers.tmx";
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
    var d = __define,c=SewersExample,p=c.prototype;
    return SewersExample;
}(egret.DisplayObjectContainer));
egret.registerClass(SewersExample,'SewersExample');
//# sourceMappingURL=SewersExample.js.map