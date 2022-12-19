function setup(){
    createCanvas(1000,1000);
  
    background(0,225,225)
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);
}
function draw (){
    var x = 50;
    while (x<width-25){
        ellipse(x,height/20,50,50);
        x = x + 50;
        fill(color('green'))
    } 
}
function draw() {
    console.log("draw - framecount:" + frameCount);
    console.log("mouseX: "+ mouseX +" , mouseY" + mouseY);
    background(this. green, this.blue, this.red);
}

    if (mouseX < 100 && mouseY < 100) {
        fill(color('red'));
        ellipse(mouseX, mouseY, 50, 50);

    } else {
        fill(color('yelllow'));
        ellipse(mouseX, mouseY, 50, 50);
    }
    var total =100;
    var x =30;
    var y =30;
    function setup() {
      createCanvas(400, 400);
      ///RGB
      background(125);
    }
    
    
    function draw() {
      while(total>0){
        if(total % 10==0){
          x=30;
          y= y + 30;
        }else{
          x=x+30;
        }
        ellipse(x,y,25,25);
        total=total-1
        
      }
      
    }