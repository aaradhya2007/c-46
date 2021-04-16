const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1,c2,c3,c4;
var track,track2;
var players,player1,player2;





var bg,world,engine,database;
function preload(){
  bg=loadImage("bg.jpeg")
}
function setup(){

  createCanvas(displayWidth,displayHeight-200)
  
  database = firebase.database();

   engine=Engine.create();
   world=engine.world;
   game = new Game();
   game.getState();
   game.start();
   

}
function draw(){
  background(bg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  if(gameState===2){
    game.end()
  }
}