//加载
class BitmapTest extends egret.DisplayObjectContainer{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    }
    private onGroupComplete()
    {
        var img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("bgImage");
        this.addChild(img);
    }
}

//填充方式
    //拉伸
    img.width *= 2;
    img.height *= 3;
    //重复
    img.fillMode = egret.BitmapFillMode.REPEAT;

//混合模式
    //覆盖
    img.blendMode = egret.BlendMode.NORMAL;
    //叠加
    img.blendMode = egret.BlendMode.ADD;
    //擦出
    img.blendMode = egret.BlendMode.ERASE;