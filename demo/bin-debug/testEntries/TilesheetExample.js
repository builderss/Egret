var TilesheetExample = (function (_super) {
    __extends(TilesheetExample, _super);
    function TilesheetExample() {
        _super.call(this);
        var self = this;
        var url = "resource/tilesheet.tmx";
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
    var d = __define,c=TilesheetExample,p=c.prototype;
    return TilesheetExample;
}(egret.DisplayObjectContainer));
egret.registerClass(TilesheetExample,'TilesheetExample');
//# sourceMappingURL=TilesheetExample.js.map