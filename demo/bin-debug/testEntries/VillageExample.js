var VillageExample = (function (_super) {
    __extends(VillageExample, _super);
    function VillageExample() {
        _super.call(this);
        var self = this;
        var url = "resource/village.tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //load complete
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, this);
            tmxTileMap.x = -200;
            tmxTileMap.render();
            self.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }
    var d = __define,c=VillageExample,p=c.prototype;
    return VillageExample;
}(egret.DisplayObjectContainer));
egret.registerClass(VillageExample,'VillageExample');
//# sourceMappingURL=VillageExample.js.map