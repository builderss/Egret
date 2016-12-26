var GamePlayer = (function (_super) {
    __extends(GamePlayer, _super);
    function GamePlayer() {
        _super.call(this);
    }
    var d = __define,c=GamePlayer,p=c.prototype;
    p.order = function () {
        var locatEvent = new LocationEvent(LocationEvent.LOCATE);
        //方案1： 传递坐标
        locatEvent._player_x = this.x;
        locatEvent._player_y = this.y;
        //方案2： 传递碰撞事件
        locatEvent.isHIT = this.isHit;
        //发送要求事件
        this.dispatchEvent(locatEvent);
    };
    return GamePlayer;
}(egret.Shape));
egret.registerClass(GamePlayer,'GamePlayer');
var LocationEvent = (function (_super) {
    __extends(LocationEvent, _super);
    function LocationEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        //解决方案1：位置检测
        this._player_x = 0;
        this._player_y = 0;
        //解决方案二：图层碰撞检测：待商榷
        this.isHIT = false;
    }
    var d = __define,c=LocationEvent,p=c.prototype;
    LocationEvent.LOCATE = "特定位置";
    return LocationEvent;
}(egret.TouchEvent));
egret.registerClass(LocationEvent,'LocationEvent');
//# sourceMappingURL=Player.js.map