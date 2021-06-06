<template >
  <div class="">
    <canvas id="canvas" width="800" height="800"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.drawFun();
  },
  methods: {
    drawFun() {
      /** @type {HTMLCanvasElement} */
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.strokeRect(0, 0, 800, 800);

      let bombCoordinate = [] // 所有炸弹的坐标
      let airCoordinate = [] // 飞机的坐标

      // 炸弹
      let bomb = {
        x: 100,
        y: 0,
        vy: 2,
        draw() {
          ctx.fillRect(this.x, this.y, 30, 60);
        },
        // 绘制爆炸图片
        drawBlast(c){
          let blastImg = new Image()
          blastImg.src = require('@/assets/images/canvas/bomb.png')
          blastImg.onload = function(){
            ctx.drawImage(blastImg, c.x-70, c.y-50, 100, 100)
          }
        }
      };

      // 飞机
      let air = {
        x: 100,
        y: 600,
        vx: 3,
        vy: 3,
        draw() {
          ctx.fillRect(this.x, this.y, 60, 60);
        },
      };

      // 绘制炸弹动画
      function drawBomb(bSum) {
        // 过滤掉上一个步骤绘制的坐标
        bombCoordinate = bombCoordinate.filter(({x, y}) => x != bomb.x && y != bomb.y)
        ctx.clearRect(bomb.x, bomb.y - bomb.vy, 30, 60);
        bomb.draw();
        bomb.y += bomb.vy;
        bombCoordinate.push({x:bomb.x, y:bomb.y})
        let bc = window.requestAnimationFrame(drawBomb);

        /**
         * 炸弹和飞机碰撞
         * 循环判断炸弹的坐标点是否在飞机坐标内部
         * 
         * 炸弹的所有顶点坐标 (bomb.x, bomb.y) (bomb.x+30, bomb.y) (bomb.x+30, bomb.y+60) (bomb.x, bomb.y+60)
         * 飞机的所有顶点 (air.x, air.y) (air.x+60, air.y) (air.x+60, air.y+60) (air.x, air.y+60)
         * */
        let bombApex = [{x:bomb.x, y:bomb.y}, {x:bomb.x+30, y:bomb.y}, {x:bomb.x+30, y:bomb.y+60}, {x:bomb.x, y:bomb.y+60}]
        let airApex = [{x:air.x, y:air.y}, {x:air.x+60, y:air.y}, {x:air.x+60, y:air.y+60}, {x:air.x, y:air.y+60}]

        let isCollide = false // 是否碰撞
        bombApex.forEach(item =>{
          if((air.x < item.x && item.x < air.x+60) && (air.y < item.y && item.y < air.y+60)) {
            isCollide = true
            bomb.drawBlast(item)
          }
        })
        
        // 炸弹飞出画布停止运动
        if (bomb.y + bomb.vy - 60 > canvas.height || isCollide) window.cancelAnimationFrame(bc);
      }

      // 绘制飞机动画
      function drawAir() {
        airCoordinate = airCoordinate.filter(({x, y}) => x != air.x && y != air.y)
        ctx.clearRect(air.x, air.y, 60, 60);
        air.draw();
        air.y += air.vy;
        airCoordinate.push({x:air.x, y:air.y})
      }

      // 移动飞机
      function moveAir(){
        
      }

      bomb.draw();
      drawAir();
      drawBomb();
    },
  },
};
</script>
<style lang="less">
</style>