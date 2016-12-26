var MapExample = (function (_super) {
    __extends(MapExample, _super);
    function MapExample() {
        _super.call(this);
        var self = this;
        var url = "resource/map.tmx";
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
    var d = __define,c=MapExample,p=c.prototype;
    return MapExample;
}(egret.DisplayObjectContainer));
egret.registerClass(MapExample,'MapExample');
//# sourceMappingURL=MapExample.js.map