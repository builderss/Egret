var DesertExample = (function (_super) {
    __extends(DesertExample, _super);
    function DesertExample() {
        _super.call(this);
        var self = this;
        var url = "resource/desert.tmx";
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
    var d = __define,c=DesertExample,p=c.prototype;
    return DesertExample;
}(egret.DisplayObjectContainer));
egret.registerClass(DesertExample,'DesertExample');
//# sourceMappingURL=DesertExample.js.map