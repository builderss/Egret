
/*

    //尺寸
    mySprite.width = 50;
    mySprite.height = 100;

    //缩放
    mySprite.scaleX = 2;
    mySprite.scaleY = 2;

    //旋转
    mySprite.rotation = 45;
    
    //深度
    sprcon.addChildAt( sprNew, 1 );
    sprcon.setChildIndex( spr1, 1 );

    //删除
    sprcon.removeChildAt( 2 );
    sprcon.removeChildren();

    //交换
    sprcon.swapChildren( spr1, spr2 );
    sprcon.swapChildrenAt( 0, 1 );
    
    //获取对象
        //深度
        var _spr:egret.DisplayObject = sprcon.getChildAt( 1 );
        //名称
        var _spr:egret.DisplayObject = sprcon.getChildByName( "sprite2" );

    //碰撞
        //非精确碰撞检测
        var isHit:boolean = shp.hitTestPoint( 10, 10 );
        //精确碰撞检测，测量DisplayObject中的图案是否和指定的点相交。
        var isHit:boolean = shp.hitTestPoint( 25, 25, true );
*/