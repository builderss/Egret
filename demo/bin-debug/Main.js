var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        var self = this;
        var url = "resource/village.tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //load complete
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, url);
            tmxTileMap.render();
            self.addChild(tmxTileMap);
            var tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, url);
            tmxTileMap.x = 100;
            tmxTileMap.y = 100;
            tmxTileMap.render();
            self.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
        //TMXUtils.create(2000, 2000,url,this);
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
}(egret.Sprite));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map