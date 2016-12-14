
//发光
var color:number = 0x33CCFF;        /// 光晕的颜色，十六进制，不包含透明度
var alpha:number = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
var blurX:number = 35;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
var blurY:number = 35;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
var strength:number = 2;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
var quality:number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
var inner:boolean = false;            /// 指定发光是否为内侧发光，暂未实现
var knockout:boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
var glowFilter:egret.GlowFilter = new egret.GlowFilter( color, alpha, blurX, blurY,
    strength, quality, inner, knockout );
img.filters = [ glowFilter ];

//色彩
var hero:egret.Bitmap = new egret.Bitmap();
hero.texture = RES.getRes("hero_png");
this.addChild(hero);
//颜色矩阵数组
var colorMatrix = [
    0.3,0.6,0,0,0,
    0.3,0.6,0,0,0,
    0.3,0.6,0,0,0,
    0,0,0,1,0
];
var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
hero.filters = [colorFlilter];

//模糊
var hero:egret.Bitmap = new egret.Bitmap();
hero.texture = RES.getRes("hero_png");
this.addChild(hero);
var blurFliter = new egret.BlurFilter( 1 , 1);
hero.filters = [blurFliter];

//投影
var distance:number = 6;           /// 阴影的偏移距离，以像素为单位
var angle:number = 45;              /// 阴影的角度，0 到 360 度
var color:number = 0x000000;        /// 阴影的颜色，不包含透明度
var alpha:number = 0.7;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
var blurX:number = 16;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
var blurY:number = 16;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
var strength:number = 0.65;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
var quality:number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
var inner:boolean = false;            /// 指定发光是否为内侧发光，暂未实现
var knockout:boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
var dropShadowFilter:egret.DropShadowFilter =  new egret.DropShadowFilter( distance, angle, color, alpha, blurX, blurY,
    strength, quality, inner, knockout );
    img.filters = [ dropShadowFilter ];
