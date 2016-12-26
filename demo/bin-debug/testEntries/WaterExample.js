var WaterExample = (function (_super) {
    __extends(WaterExample, _super);
    function WaterExample() {
        _super.call(this);
        var self = this;
        var url = "resource/isometric_grass_and_water.tmx";
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
    var d = __define,c=WaterExample,p=c.prototype;
    return WaterExample;
}(egret.DisplayObjectContainer));
egret.registerClass(WaterExample,'WaterExample');
//# sourceMappingURL=WaterExample.js.map