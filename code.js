var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["44c5e122-11c0-497c-83cb-f52e15849ab2","c8ef52c0-4f71-40e1-b9c7-8870d5e3b5c3"],"propsByKey":{"44c5e122-11c0-497c-83cb-f52e15849ab2":{"name":"heart","sourceUrl":"assets/v3/animations/9B1ilG9N4K-4J1E4g0O0ghWzpqYfFJ7Yx_vj2djx7oM/44c5e122-11c0-497c-83cb-f52e15849ab2.png","frameSize":{"x":840,"y":859},"frameCount":1,"looping":true,"frameDelay":4,"version":"SCV0.zvaPEzS0BKOUyt5F.erQ1JjMqf0","loadedFromSource":true,"saved":true,"sourceSize":{"x":840,"y":859},"rootRelativePath":"assets/v3/animations/9B1ilG9N4K-4J1E4g0O0ghWzpqYfFJ7Yx_vj2djx7oM/44c5e122-11c0-497c-83cb-f52e15849ab2.png"},"c8ef52c0-4f71-40e1-b9c7-8870d5e3b5c3":{"name":"bones","sourceUrl":"assets/v3/animations/9B1ilG9N4K-4J1E4g0O0ghWzpqYfFJ7Yx_vj2djx7oM/c8ef52c0-4f71-40e1-b9c7-8870d5e3b5c3.png","frameSize":{"x":451,"y":171},"frameCount":1,"looping":true,"frameDelay":4,"version":"75qB884zQEqVGseW2CdPIhbxfdt0HXxX","loadedFromSource":true,"saved":true,"sourceSize":{"x":451,"y":171},"rootRelativePath":"assets/v3/animations/9B1ilG9N4K-4J1E4g0O0ghWzpqYfFJ7Yx_vj2djx7oM/c8ef52c0-4f71-40e1-b9c7-8870d5e3b5c3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//adicione velocidade para fazer o carro se mover.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
 car1.bounceOff (boundary1);
 car1.bounceOff (boundary2);
 car2.bounceOff (boundary1);
 car2.bounceOff (boundary2);
 car3.bounceOff (boundary1);
 car3.bounceOff (boundary2);
 car4.bounceOff (boundary1);
 car4.bounceOff (boundary2);
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
 if (keyDown("left")){
   sam.x = sam.x-3 ;
 }
   if (keyDown("right")){
   sam.x = sam.x+3 ;
 }
 
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  if (sam.isTouching(car1) || sam.isTouching(car2)
  ||    sam.isTouching(car3)  || sam.isTouching(car4)){
  life = life+1 ;
  sam.x = 20 ;
  sam.y = 190 ;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
