var TurretExample = (function (_super) {
    __extends(TurretExample, _super);
    function TurretExample() {
        _super.call(this);
        var self = this;
        var url = "resource/turret.tmx";
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
    var d = __define,c=TurretExample,p=c.prototype;
    return TurretExample;
}(egret.DisplayObjectContainer));
egret.registerClass(TurretExample,'TurretExample');
//# sourceMappingURL=TurretExample.js.map