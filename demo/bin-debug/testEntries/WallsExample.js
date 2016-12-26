var WallsExample = (function (_super) {
    __extends(WallsExample, _super);
    function WallsExample() {
        _super.call(this);
        var self = this;
        var url = "resource/perspective_walls.tmx";
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
    var d = __define,c=WallsExample,p=c.prototype;
    return WallsExample;
}(egret.DisplayObjectContainer));
egret.registerClass(WallsExample,'WallsExample');
//# sourceMappingURL=WallsExample.js.map