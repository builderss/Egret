class GamePlayer extends egret.Shape
{
    public isHit:boolean;

    public constructor()
    {
        super();
    }
    public order()
    {
        var locatEvent:LocationEvent = new LocationEvent(LocationEvent.LOCATE)

        //方案1： 传递坐标
        locatEvent._player_x = this.x;
        locatEvent._player_y = this.y;

        //方案2： 传递碰撞事件
        locatEvent.isHIT = this.isHit;

        //发送要求事件
        this.dispatchEvent(locatEvent)
    }
}

class LocationEvent extends egret.TouchEvent
{
    public static LOCATE:string = "特定位置";
    //解决方案1：位置检测
    public _player_x: number = 0;
    public _player_y: number = 0;

    //解决方案二：图层碰撞检测：待商榷
    public isHIT: boolean = false;

    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }
}