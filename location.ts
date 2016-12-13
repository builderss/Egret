class MyGrid extends egret.Shape{
    public constructor(){
        super();
        this.drawGrid();
    }
    private drawGrid(){
        this.graphics.beginFill( 0x00ff00 );
        this.graphics.drawRect( 0, 0, 100, 100 );
        this.graphics.endFill();
        this.x = 400;
        this.y = 400;               
    }
}

class Display extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawGrid();
    }

    private drawGrid(){
        var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        container.x = 200;
        container.y = 200;
        this.addChild(container);

        //画一个红色的圆，添加到 container 中
        var circle: egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25,25,25);
        circle.graphics.endFill();
        container.addChild(circle);

        //给圆增加触碰事件
        circle.touchEnabled = true;

        /*  
        //点击
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP,onClick,this);
        function onClick():void{
            //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
            var targetPoint: egret.Point = container.globalToLocal(0,0);
            //重新定位圆，可以看到圆形移到了屏幕的左上角
            circle.x = targetPoint.x;
            circle.y = targetPoint.y;
        */

        /*
        //移动
        //设定2个偏移量
        var offsetX:number;
        var offsetY:number;

        //手指离开屏幕，触发 stopMove 方法
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
        circle.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
        circle.addEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);

        function startMove(e:egret.TouchEvent):void{
            //计算手指和圆形的距离
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            //手指在屏幕上移动，会触发 onMove 方法
        }

        function stopMove(e:egret.TouchEvent) {console.log(22);
            //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
        }

        function onMove(e:egret.TouchEvent):void{
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            circle.x = e.stageX - offsetX;
            circle.y = e.stageY - offsetY;
        }
        */
    }//drawGrid              
