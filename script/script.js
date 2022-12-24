  /**@type{HTMLCanvasElement} */

  const canvas = document.getElementById('canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');
  const totalrows = 20;
  const totalcol = 20;
  const tile = {
      w:canvas.width/totalrows,
      h:canvas.height/totalcol
  }
  function Randomize() {
      const randomeMap=[];
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for(let i = 0;i<=totalcol;i++){
      let mr = []
  
      for(let j = 0; j<=totalrows;j++){
        let rx = Math.floor(Math.random()*3)
        if(rx<2){
          rx =0
        }
        else{
          rx=1
        }
          mr.push(rx)
  
          
      }
      randomeMap.push(mr)
  }
  
  for(let i = 1;i<=totalcol;i++){
  
      for(let j = 1; j<=totalrows;j++){
          if (randomeMap[i][j]==1){
  
              ctx.fillRect(j*tile.w,i*tile.h,tile.w,tile.h)
          }
          
      }
  }
  }
  
  
  
  Randomize()
  