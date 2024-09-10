var e=Object.defineProperty,t=(t,i,s)=>((t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s)(t,"symbol"!=typeof i?i+"":i,s);import{p as i}from"./phaser-C2_wa_Fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=""+new URL("logo-BvUlwMDO.png",import.meta.url).href;class o extends i.Scene{constructor(){super("Boot")}preload(){this.load.image("logo",s)}create(){this.scene.start("Loading")}}const a=new class{constructor(){t(this,"gameTitle"),t(this,"gameWidth"),t(this,"gameHeight"),t(this,"textStyles"),t(this,"playerSpeed"),t(this,"fadeInOutTime"),t(this,"joystickThreshold"),this.gameTitle="My CV",this.gameWidth=320,this.gameHeight=152,this.playerSpeed=50,this.joystickThreshold=.2,this.fadeInOutTime=1e3,this.textStyles=[],this.textStyles.push({fontFamily:"Orbitron",fontSize:"100px",color:"#FFE500",fontStyle:"bold"})}},l=""+new URL("tilemap-CFV29V3S.png",import.meta.url).href,r=""+new URL("frame-DKYb3lJ0.png",import.meta.url).href,n=""+new URL("button-DW7CW5Tm.png",import.meta.url).href,p={questions:[{question:"When did he start his studies?",answers:["2001","2006","2011"],correct:1},{question:"Which chiral molecule did he study?",answers:["CDBrFI","Water","CHBrClF"],correct:0},{question:"From which Greek word does the word 'chiral' come from?",answers:["Foot","Head","Hand"],correct:2},{question:"When did he start to do customer support for titration applications?",answers:["2002","2011","2014"],correct:2},{question:"What did he manage as a product manager starting in 2018?",answers:["Software","Farm","Amusement Park"],correct:0},{question:"What can be measured in wine using titration?",answers:["Color","Acidity","Temperature"],correct:1},{question:"What does he do in his free time?",answers:["Cycling","Weight Lifting","Game Dev."],correct:2},{question:"What kind of competitions does he join in his free time?",answers:["Olympics","Game Jams","Bake Offs"],correct:1},{question:"How much does a curling stone weigh?",answers:["20 kg","22 kg","25 kg"],correct:0}]},h=""+new URL("key-CiZk7-Ig.png",import.meta.url).href,d=""+new URL("confirmation_003-Byks6epN.ogg",import.meta.url).href,m=""+new URL("confirmation_003-CLE9iT4P.mp3",import.meta.url).href,c=""+new URL("error_006-BS1JCrA_.ogg",import.meta.url).href,u=""+new URL("error_006-BTImWG8A.mp3",import.meta.url).href,y=""+new URL("switch_007-ClyXYS0U.ogg",import.meta.url).href,g=""+new URL("switch_007-B_BrfvGZ.mp3",import.meta.url).href,v=""+new URL("click_003-D6abkdg4.ogg",import.meta.url).href,b=""+new URL("click_003-2cutQWVm.mp3",import.meta.url).href,w=""+new URL("footstep_grass_000_new-oeCbhBgQ.ogg",import.meta.url).href,f=""+new URL("footstep_grass_000_new-DqmZwLkH.mp3",import.meta.url).href,x=""+new URL("Soundtrack-DDYfpdH9.ogg",import.meta.url).href,k=""+new URL("Soundtrack-bh9QTrIS.mp3",import.meta.url).href,T=""+new URL("minogram_6x10-DTDHrpY2.png",import.meta.url).href,E=""+new URL("minogram_6x10-BW1a4pJc.xml",import.meta.url).href,D={compressionlevel:-1,height:19,infinite:!1,layers:[{data:[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,50,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],height:19,id:2,name:"Background",opacity:1,type:"tilelayer",visible:!0,width:40,x:0,y:0},{data:[2,3,3,3,3,4,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,1,2,3,7,3,7,3,3,3,3,3,3,4,14,41,34,41,41,16,1,1,1,14,41,41,29,41,41,29,41,41,29,41,41,29,41,41,29,41,16,1,14,30,19,0,19,30,41,41,41,41,41,16,14,0,0,0,0,16,13,1,1,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,1,14,0,31,0,31,0,0,0,0,0,0,16,14,0,0,0,0,16,1,1,1,14,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,16,13,14,0,0,0,0,0,0,0,0,0,0,16,14,0,0,0,0,16,1,1,1,14,0,0,0,83,0,0,0,0,0,0,0,0,0,0,0,0,16,1,14,0,0,0,0,0,0,0,0,0,0,16,14,0,0,0,0,16,1,1,1,14,0,0,0,0,0,0,0,0,0,0,0,0,83,0,0,0,16,1,26,27,27,27,27,27,27,27,6,0,0,16,14,0,0,0,0,16,1,25,1,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,3,3,3,3,3,7,3,3,3,18,0,0,16,14,0,0,0,0,16,1,1,1,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,41,41,9,41,41,19,41,41,41,60,0,0,16,14,0,0,0,0,16,1,1,1,14,0,0,0,0,0,0,5,27,27,27,27,6,0,0,0,0,0,0,0,33,0,0,31,0,0,0,0,0,0,16,14,0,0,0,0,16,1,1,1,14,0,0,0,0,0,0,16,1,1,1,1,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,14,0,0,0,0,17,3,3,3,18,0,0,0,0,0,0,16,1,25,1,1,14,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,16,14,0,0,0,0,58,41,21,41,60,0,0,0,0,0,0,16,1,1,1,1,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,14,0,0,0,0,0,0,33,0,0,0,0,83,0,0,0,16,1,1,1,13,14,64,0,0,0,5,27,27,27,27,27,27,27,6,0,0,0,0,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,3,3,3,3,18,76,0,0,0,16,1,13,1,1,1,1,1,14,0,0,0,0,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,29,41,41,30,60,0,0,0,0,16,1,1,1,1,1,1,25,14,0,0,83,0,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,3,3,3,3,3,3,3,18,0,0,0,0,16,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,73,74,0,0,0,0,0,0,0,58,41,41,41,41,41,41,41,60,0,0,0,0,16,14,83,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],height:19,id:3,name:"Castle",opacity:1,type:"tilelayer",visible:!0,width:40,x:0,y:0},{draworder:"topdown",id:5,name:"Interaction",objects:[{gid:100,height:16,id:3,name:"hobbies",properties:[{name:"dialogText",type:"string",value:'"Ah, wondering how the alchemist spends his free time? When not immersed in his craft, he plays music and conjures his own worlds through web game development / game jams. He even battles on the icy fields of curling.\n\nDid you know a curling stone weighs nearly 20 kg?"'},{name:"dialogTitle",type:"string",value:"Hobbies"}],rotation:0,type:"",visible:!0,width:16,x:560,y:208},{gid:85,height:16,id:2,name:"experience",properties:[{name:"dialogText",type:"string",value:'"Ah, curious about the alchemist’s deeds? In 2014, he devised potent titration applications and supported customers. By 2018, he became the product manager of a laboratory software.\n\nDid you know that titration can be used to measure the acidity of wine?"'},{name:"dialogTitle",type:"string",value:"Experience"}],rotation:0,type:"",visible:!0,width:16,x:288,y:128},{gid:113,height:16,id:7,name:"education",properties:[{name:"dialogText",type:"string",value:"\"Ah, yes, the alchemist! Rumor has it he earned his Bachelor and Master of Science in Chemistry between 2006 and 2011, all while dabbling in wild experiments with a mysterious chiral molecule called CDBrFI.\n\nDid you know the term 'chiral' actually comes from the Greek word for hand, 'cheir'?\""},{name:"dialogTitle",type:"string",value:"Education"}],rotation:0,type:"",visible:!0,width:16,x:16,y:208},{gid:86,height:16,id:4,name:"player",rotation:0,type:"",visible:!0,width:16,x:32,y:48},{gid:110,height:16,id:8,name:"quizmaster",properties:[{name:"dialogText",type:"string",value:"Quiz"},{name:"dialogTitle",type:"string",value:"Quiz"}],rotation:0,type:"",visible:!0,width:16,x:496,y:48},{gid:10,height:16,id:10,name:"exit",rotation:0,type:"",visible:!0,width:16,x:496,y:32},{height:16,id:11,name:"virtualKeyCheckZone",rotation:0,type:"",visible:!0,width:64,x:16,y:160}],opacity:1,type:"objectgroup",visible:!0,x:0,y:0}],nextlayerid:6,nextobjectid:12,orientation:"orthogonal",renderorder:"right-down",tiledversion:"1.10.2",tileheight:16,tilesets:[{columns:12,firstgid:1,image:"../images/tilemap.png",imageheight:186,imagewidth:203,margin:0,name:"Tiny Dungeon",spacing:1,tilecount:132,tileheight:16,tiles:[{id:0,properties:[{name:"collision",type:"bool",value:!1}]},{id:1,properties:[{name:"collision",type:"bool",value:!0}]},{id:2,properties:[{name:"collision",type:"bool",value:!0}]},{id:3,properties:[{name:"collision",type:"bool",value:!0}]},{id:4,properties:[{name:"collision",type:"bool",value:!0}]},{id:5,properties:[{name:"collision",type:"bool",value:!0}]},{id:6,properties:[{name:"collision",type:"bool",value:!0}]},{id:7,properties:[{name:"collision",type:"bool",value:!0}]},{id:8,properties:[{name:"collision",type:"bool",value:!0}]},{id:9,properties:[{name:"collision",type:"bool",value:!1}]},{id:10,properties:[{name:"collision",type:"bool",value:!1}]},{id:11,properties:[{name:"collision",type:"bool",value:!1}]},{id:12,properties:[{name:"collision",type:"bool",value:!1}]},{id:13,properties:[{name:"collision",type:"bool",value:!0}]},{id:14,properties:[{name:"collision",type:"bool",value:!0}]},{id:15,properties:[{name:"collision",type:"bool",value:!0}]},{id:16,properties:[{name:"collision",type:"bool",value:!0}]},{id:17,properties:[{name:"collision",type:"bool",value:!0}]},{id:18,properties:[{name:"collision",type:"bool",value:!0}]},{id:19,properties:[{name:"collision",type:"bool",value:!0}]},{id:20,properties:[{name:"collision",type:"bool",value:!0}]},{id:21,properties:[{name:"collision",type:"bool",value:!1}]},{id:22,properties:[{name:"collision",type:"bool",value:!1}]},{id:23,properties:[{name:"collision",type:"bool",value:!1}]},{id:24,properties:[{name:"collision",type:"bool",value:!1}]},{id:25,properties:[{name:"collision",type:"bool",value:!0}]},{id:26,properties:[{name:"collision",type:"bool",value:!0}]},{id:27,properties:[{name:"collision",type:"bool",value:!0}]},{id:28,properties:[{name:"collision",type:"bool",value:!0}]},{id:29,properties:[{name:"collision",type:"bool",value:!0}]},{id:30,properties:[{name:"collision",type:"bool",value:!1}]},{id:31,properties:[{name:"collision",type:"bool",value:!0}]},{id:32,properties:[{name:"collision",type:"bool",value:!1}]},{id:33,properties:[{name:"collision",type:"bool",value:!0}]},{id:34,properties:[{name:"collision",type:"bool",value:!1}]},{id:35,properties:[{name:"collision",type:"bool",value:!1}]},{id:36,properties:[{name:"collision",type:"bool",value:!1}]},{id:37,properties:[{name:"collision",type:"bool",value:!1}]},{id:38,properties:[{name:"collision",type:"bool",value:!1}]},{id:39,properties:[{name:"collision",type:"bool",value:!1}]},{id:40,properties:[{name:"collision",type:"bool",value:!0}]},{id:41,properties:[{name:"collision",type:"bool",value:!0}]},{id:42,properties:[{name:"collision",type:"bool",value:!1}]},{id:43,properties:[{name:"collision",type:"bool",value:!0}]},{id:44,properties:[{name:"collision",type:"bool",value:!0}]},{id:45,properties:[{name:"collision",type:"bool",value:!1}]},{id:46,properties:[{name:"collision",type:"bool",value:!1}]},{id:47,properties:[{name:"collision",type:"bool",value:!1}]},{id:48,properties:[{name:"collision",type:"bool",value:!1}]},{id:49,properties:[{name:"collision",type:"bool",value:!1}]},{id:50,properties:[{name:"collision",type:"bool",value:!1}]},{id:51,properties:[{name:"collision",type:"bool",value:!1}]},{id:52,properties:[{name:"collision",type:"bool",value:!1}]},{id:53,properties:[{name:"collision",type:"bool",value:!1}]},{id:54,properties:[{name:"collision",type:"bool",value:!0}]},{id:55,properties:[{name:"collision",type:"bool",value:!0}]},{id:56,properties:[{name:"collision",type:"bool",value:!0}]},{id:57,properties:[{name:"collision",type:"bool",value:!0}]},{id:58,properties:[{name:"collision",type:"bool",value:!0}]},{id:59,properties:[{name:"collision",type:"bool",value:!0}]},{id:60,properties:[{name:"collision",type:"bool",value:!0}]},{id:61,properties:[{name:"collision",type:"bool",value:!0}]},{id:62,properties:[{name:"collision",type:"bool",value:!0}]},{id:63,properties:[{name:"collision",type:"bool",value:!0}]},{id:64,properties:[{name:"collision",type:"bool",value:!0}]},{id:65,properties:[{name:"collision",type:"bool",value:!0}]},{id:66,properties:[{name:"collision",type:"bool",value:!0}]},{id:67,properties:[{name:"collision",type:"bool",value:!0}]},{id:68,properties:[{name:"collision",type:"bool",value:!0}]},{id:69,properties:[{name:"collision",type:"bool",value:!0}]},{id:70,properties:[{name:"collision",type:"bool",value:!0}]},{id:71,properties:[{name:"collision",type:"bool",value:!0}]},{id:72,properties:[{name:"collision",type:"bool",value:!0}]},{id:73,properties:[{name:"collision",type:"bool",value:!0}]},{id:74,properties:[{name:"collision",type:"bool",value:!0}]},{id:75,properties:[{name:"collision",type:"bool",value:!0}]},{id:76,properties:[{name:"collision",type:"bool",value:!0}]},{id:77,properties:[{name:"collision",type:"bool",value:!0}]},{id:78,properties:[{name:"collision",type:"bool",value:!0}]},{id:79,properties:[{name:"collision",type:"bool",value:!0}]},{id:80,properties:[{name:"collision",type:"bool",value:!0}]},{id:81,properties:[{name:"collision",type:"bool",value:!0}]},{id:82,properties:[{name:"collision",type:"bool",value:!0}]},{id:83,properties:[{name:"collision",type:"bool",value:!0}]},{id:84,properties:[{name:"collision",type:"bool",value:!0}]},{id:85,properties:[{name:"collision",type:"bool",value:!0}]},{id:86,properties:[{name:"collision",type:"bool",value:!0}]},{id:87,properties:[{name:"collision",type:"bool",value:!0}]},{id:88,properties:[{name:"collision",type:"bool",value:!0}]},{id:89,properties:[{name:"collision",type:"bool",value:!0}]},{id:90,properties:[{name:"collision",type:"bool",value:!0}]},{id:91,properties:[{name:"collision",type:"bool",value:!0}]},{id:92,properties:[{name:"collision",type:"bool",value:!0}]},{id:93,properties:[{name:"collision",type:"bool",value:!0}]},{id:94,properties:[{name:"collision",type:"bool",value:!0}]},{id:95,properties:[{name:"collision",type:"bool",value:!0}]},{id:96,properties:[{name:"collision",type:"bool",value:!0}]},{id:97,properties:[{name:"collision",type:"bool",value:!0}]},{id:98,properties:[{name:"collision",type:"bool",value:!0}]},{id:99,properties:[{name:"collision",type:"bool",value:!0}]},{id:100,properties:[{name:"collision",type:"bool",value:!0}]},{id:101,properties:[{name:"collision",type:"bool",value:!0}]},{id:102,properties:[{name:"collision",type:"bool",value:!0}]},{id:103,properties:[{name:"collision",type:"bool",value:!0}]},{id:104,properties:[{name:"collision",type:"bool",value:!0}]},{id:105,properties:[{name:"collision",type:"bool",value:!0}]},{id:106,properties:[{name:"collision",type:"bool",value:!0}]},{id:107,properties:[{name:"collision",type:"bool",value:!0}]},{id:108,properties:[{name:"collision",type:"bool",value:!0}]},{id:109,properties:[{name:"collision",type:"bool",value:!0}]},{id:110,properties:[{name:"collision",type:"bool",value:!0}]},{id:111,properties:[{name:"collision",type:"bool",value:!0}]},{id:112,properties:[{name:"collision",type:"bool",value:!0}]},{id:113,properties:[{name:"collision",type:"bool",value:!0}]},{id:114,properties:[{name:"collision",type:"bool",value:!0}]},{id:115,properties:[{name:"collision",type:"bool",value:!0}]},{id:116,properties:[{name:"collision",type:"bool",value:!0}]},{id:117,properties:[{name:"collision",type:"bool",value:!0}]},{id:118,properties:[{name:"collision",type:"bool",value:!0}]},{id:119,properties:[{name:"collision",type:"bool",value:!0}]},{id:120,properties:[{name:"collision",type:"bool",value:!0}]},{id:121,properties:[{name:"collision",type:"bool",value:!0}]},{id:122,properties:[{name:"collision",type:"bool",value:!0}]},{id:123,properties:[{name:"collision",type:"bool",value:!0}]},{id:124,properties:[{name:"collision",type:"bool",value:!0}]},{id:125,properties:[{name:"collision",type:"bool",value:!0}]},{id:126,properties:[{name:"collision",type:"bool",value:!0}]},{id:127,properties:[{name:"collision",type:"bool",value:!0}]},{id:128,properties:[{name:"collision",type:"bool",value:!0}]},{id:129,properties:[{name:"collision",type:"bool",value:!0}]},{id:130,properties:[{name:"collision",type:"bool",value:!0}]},{id:131,properties:[{name:"collision",type:"bool",value:!0}]}],tilewidth:16}],tilewidth:16,type:"map",version:"1.10",width:40};class K extends i.Scene{constructor(){super("Loading")}init(){this.add.sprite(a.gameWidth/2,a.gameHeight/2,"logo").setScale(.25,.255),this.add.text(a.gameWidth/2,.2*a.gameHeight,"CLOWNGAMING",{fontSize:"30px",color:"#FFFF00",fontStyle:"bold"}).setOrigin(.5),this.add.text(a.gameWidth/2,.73*a.gameHeight,"Loading",{fontSize:"10px",color:"#27FF00"}).setOrigin(.5);const e=this.add.graphics(),t=.3*a.gameWidth,i=.1*t,s=a.gameWidth/2-t/2,o=.8*a.gameHeight-i/2;e.setPosition(s,o),e.fillStyle(16119285,1),e.fillRect(0,0,t,i);const l=this.add.graphics();l.setPosition(s,o),this.load.on("progress",(function(e){l.clear(),l.fillStyle(2621184,1),l.fillRect(0,0,e*t,i)}),this)}preload(){this.load.image("tileMap",l),this.load.image("frame",r),this.load.image("button",n),this.load.image("virtualKey",h),this.load.spritesheet("spriteSheet",l,{frameWidth:16,frameHeight:16,spacing:1}),this.load.audio("wrong",[c,u]),this.load.audio("right",[d,m]),this.load.audio("talk",[y,g]),this.load.audio("click",[v,b]),this.load.audio("walk",[w,f]),this.load.audio("music",[x,k]),this.load.bitmapFont("minogram",T,E),this.load.tilemapTiledJSON("mainLevel",D),this.load.json("questions",p)}create(){const e=Array(23).fill(85);let t=[86];this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers("spriteSheet",{frames:t.concat(e,t)}),frameRate:10,repeat:-1}),this.anims.create({key:"walk",frames:this.anims.generateFrameNumbers("spriteSheet",{frames:[87,88]}),frameRate:5,repeat:-1}),this.scene.start("Game")}}class O extends i.Physics.Arcade.Sprite{constructor(e,i,s){super(e,i,s,"spriteSheet",85),t(this,"speed"),t(this,"walkSound"),this.walkSound=this.scene.sound.add("walk",{loop:!0,volume:.2}),e.physics.add.existing(this),this.setCollideWorldBounds(!0),this.speed=a.playerSpeed,this.body.setSize(12,15),this.body.setOffset(2,1)}update(){super.update(),0!==this.body.velocity.x||0!==this.body.velocity.y?(this.anims.play("walk",!0),this.walkSound.isPlaying||this.walkSound.play()):(this.anims.play("idle",!0),this.walkSound.stop())}move(e,t=1){switch(e){case"up":this.setVelocityY(-this.speed*t);break;case"down":this.setVelocityY(this.speed*t);break;case"left":this.setVelocityX(-this.speed*t);break;default:this.setVelocityX(this.speed*t)}}}class S extends i.Physics.Arcade.Image{constructor(e,i,s,o,a,l){super(e,i,s,"spriteSheet",112),t(this,"characterName"),t(this,"dialogTitle"),t(this,"dialogText"),"experience"===o?this.setFrame(84):"hobbies"===o?this.setFrame(99):"quizmaster"===o&&this.setFrame(109),this.characterName=o,this.dialogTitle=a,this.dialogText=l,e.physics.add.existing(this),this.setImmovable(!0)}getDialogTitle(){return this.dialogTitle}getDialogText(){return this.dialogText}}let W=class extends i.Scene{constructor(){super("Game"),t(this,"player"),t(this,"map"),t(this,"castle"),t(this,"keys"),t(this,"characters"),t(this,"gameOver"),t(this,"exit"),t(this,"eventEmitter"),t(this,"virtualKeyPressed",{up:!1,down:!1,left:!1,right:!1}),t(this,"virtualKeyUsed",!1),t(this,"virtualKeyCheckZone")}create(){this.gameOver=!1,this.eventEmitter=new Phaser.Events.EventEmitter,this.setupEventListeners(),this.scene.launch("GameUI",{eventEmitter:this.eventEmitter}),this.cameras.main.fadeIn(a.fadeInOutTime),this.setupWorld(),this.setupObjects(),this.addKeys(),this.setupVirtualKeys(),this.addSounds(),this.cameras.main.once("camerafadeincomplete",(()=>{this.showDialog("My little CV Game","Welcome, adventurer! Talk to the three inhabitants of this dungeon to learn more about me. Your goal: Escape by giving the cyclops the correct answer.\nGood luck, and have fun!\n\nMove: WASD, arrow keys or virtual touch arrow buttons\nDialogs: SPACE / ENTER or touch / mouse.")}))}update(e,t){this.gameOver||(this.player.setVelocity(0),this.keys.DOWN.isDown||this.keys.S.isDown||this.virtualKeyPressed.down?this.player.move("down"):(this.keys.UP.isDown||this.keys.W.isDown||this.virtualKeyPressed.up)&&this.player.move("up"),this.keys.LEFT.isDown||this.keys.A.isDown||this.virtualKeyPressed.left?this.player.move("left"):(this.keys.RIGHT.isDown||this.keys.D.isDown||this.virtualKeyPressed.right)&&this.player.move("right")),this.player.update(),this.characters.forEach((e=>{this.physics.collide(this.player,e)&&("quizmaster"===e.characterName?(this.sound.get("talk").play(),this.eventEmitter.emit("showQuizDialog"),this.pauseGameScene()):(this.sound.get("talk").play(),this.showDialog(e.getDialogTitle(),e.getDialogText())))})),this.physics.overlap(this.player,this.virtualKeyCheckZone)&&(this.virtualKeyUsed||(console.log("virtual keys not used"),this.eventEmitter.emit("hideVirtualKeys"),this.eventEmitter.emit("deactivateVirtualKeys")))}addKeys(){this.keys=this.input.keyboard.addKeys("DOWN, S, UP, W, LEFT, A, RIGHT, D")}setupVirtualKeys(){this.eventEmitter.on("virtualKeyDown",(e=>{this.virtualKeyUsed||(this.virtualKeyUsed=!0),"right"===e?this.virtualKeyPressed.right=!0:"left"===e?this.virtualKeyPressed.left=!0:"up"===e?this.virtualKeyPressed.up=!0:"down"===e&&(this.virtualKeyPressed.down=!0)})),this.eventEmitter.on("virtualKeyUp",(e=>{"right"===e?this.virtualKeyPressed.right=!1:"left"===e?this.virtualKeyPressed.left=!1:"up"===e?this.virtualKeyPressed.up=!1:"down"===e&&(this.virtualKeyPressed.down=!1)}))}setupWorld(){var e;this.map=this.make.tilemap({key:"mainLevel"});const t=this.map.addTilesetImage("Tiny Dungeon","tileMap");this.map.createLayer("Background",t),this.castle=this.map.createLayer("Castle",t),null==(e=this.castle)||e.setCollisionByProperty({collision:!0}),this.physics.world.bounds.width=this.map.widthInPixels,this.physics.world.bounds.height=this.map.heightInPixels,this.cameras.main.setBounds(0,0,this.physics.world.bounds.width,this.physics.world.bounds.height)}setupObjects(){var e,t;const i=this.map.getObjectLayer("Interaction").objects,s=i.filter((e=>"player"===e.name))[0];this.player=this.add.existing(new O(this,s.x,s.y)).setOrigin(0,1).setDepth(2),this.cameras.main.startFollow(this.player,!0,1,1),this.physics.add.collider(this.player,this.castle),this.characters=[],["education","experience","hobbies","quizmaster"].forEach((e=>{const t=i.filter((t=>t.name===e))[0],s=t.properties,o=s.filter((e=>"dialogTitle"===e.name))[0].value,a=s.filter((e=>"dialogText"===e.name))[0].value,l=this.add.existing(new S(this,t.x,t.y,e,o,a)).setOrigin(0,1);this.characters.push(l)}));const o=i.filter((e=>"exit"===e.name))[0];this.exit=this.physics.add.image(o.x,o.y,"spriteSheet",9).setOrigin(0,1).setDepth(1),null==(e=this.exit.body)||e.setSize(20,16),null==(t=this.exit.body)||t.setOffset(-2,1),this.eventEmitter.once("exit",(()=>{this.player.setVelocity(0),this.eventEmitter.emit("hideVirtualKeys"),this.gameOver=!0,this.cameras.main.fadeOut(a.fadeInOutTime)})),this.cameras.main.once("camerafadeoutcomplete",(()=>{this.scene.stop("GameUI"),this.scene.start("GameOver")}));const l=i.filter((e=>"virtualKeyCheckZone"===e.name))[0];this.virtualKeyCheckZone=this.add.zone(l.x,l.y,l.width,l.height).setOrigin(0,1),this.physics.add.existing(this.virtualKeyCheckZone,!0)}setupEventListeners(){this.eventEmitter.on("dialogClosed",(()=>{this.scene.resume(),this.eventEmitter.emit("showVirtualKeys")})),this.eventEmitter.on("answerCorrect",(()=>{this.sound.play("right"),this.characters.filter((e=>"quizmaster"===e.characterName))[0].destroy(),this.player.setPosition(496,50),this.physics.add.overlap(this.player,this.exit,(()=>{this.eventEmitter.emit("exit")})),this.showDialog("Correct!",'"Well done! You\'ve answered correctly \n\nThe path is now open, go forth!"')})),this.eventEmitter.on("answerWrong",(()=>{this.sound.play("wrong"),this.player.setPosition(528,64),this.showDialog("Wrong!",'"Wrong answer! You shall not pass!\n\nTry again if you dare!"')}))}addSounds(){this.sound.get("talk")||this.sound.add("talk"),this.sound.get("click")||this.sound.add("click"),this.sound.get("right")||this.sound.add("right"),this.sound.get("wrong")||this.sound.add("wrong"),null==this.sound.get("music")&&this.sound.add("music"),this.sound.get("music").isPlaying||this.sound.get("music").play({volume:.9,loop:!0})}showDialog(e,t){this.eventEmitter.emit("showDialog",e,t),this.sound.get("talk").play(),this.pauseGameScene()}pauseGameScene(){this.player.setVelocity(0),this.player.walkSound.stop(),this.virtualKeyPressed={up:!1,down:!1,left:!1,right:!1},this.scene.pause()}};class C extends i.Scene{constructor(){super("GameOver")}create(){this.cameras.main.fadeIn(a.fadeInOutTime),this.cameras.main.once("camerafadeincomplete",(()=>{const e=this.add.bitmapText(a.gameWidth/2,.9*a.gameHeight,"minogram","Click anywhere or any key to restart the game.",10).setOrigin(.5,.5).setTint(7748406).setAlpha(0);this.tweens.add({targets:e,alpha:1,duration:500}),this.input.keyboard.on("keydown",(()=>{this.scene.start("Game")})),this.input.on("pointerdown",(()=>{this.scene.start("Game")}))})),this.cameras.main.setBackgroundColor("#eaa56c"),this.add.bitmapText(a.gameWidth/2,.25*a.gameHeight,"minogram","THE END",30).setOrigin(.5,.5).setTint(2501444),this.add.bitmapText(a.gameWidth/2,.5*a.gameHeight,"minogram","Thank you for playing my little CV game!",20).setOrigin(.5,.5).setTint(7748406).setMaxWidth(.9*a.gameWidth)}}class L extends i.GameObjects.Container{constructor(e,s){super(e,0,0),t(this,"frame"),t(this,"title"),t(this,"text"),t(this,"textColor"),t(this,"eventEmitter"),this.setVisible(!1),this.eventEmitter=s,this.textColor=7748406,this.frame=new i.GameObjects.Image(e,0,0,"frame").setOrigin(0,0).setDepth(3),this.title=new i.GameObjects.BitmapText(e,a.gameWidth/2,.08*a.gameHeight,"minogram","Title",20).setOrigin(.5,0).setDepth(4).setTint(this.textColor),this.text=new i.GameObjects.BitmapText(e,.025*a.gameWidth,.22*a.gameHeight,"minogram","Text",10).setOrigin(0,0).setDepth(4).setTint(this.textColor),this.text.maxWidth=.95*a.gameWidth,this.add([this.frame,this.title,this.text])}showDialog(e,t){this.scene.sound.get("walk").stop(),this.title.setText(e),this.text.setText(t),this.setVisible(!0)}hideDialog(){this.eventEmitter.emit("dialogClosed"),this.setVisible(!1)}}class P extends L{constructor(e,s){super(e,s),t(this,"button"),t(this,"buttonText"),this.button=new i.GameObjects.Image(e,a.gameWidth/2,.85*a.gameHeight,"button").setOrigin(.5,.5).setDepth(4),this.buttonText=new i.GameObjects.BitmapText(e,this.button.x,this.button.y+1,"minogram","OK",10).setOrigin(.5,.5).setDepth(5).setTint(this.textColor),this.add([this.button,this.buttonText]),this.button.setInteractive(),this.button.on("pointerdown",(()=>{this.scene.sound.get("click").play(),this.hideDialog()}))}}class I extends L{constructor(e,s){super(e,s),t(this,"answerButtons"),t(this,"answerTexts"),t(this,"questions"),t(this,"usedQuestions"),t(this,"introText"),this.introText="None shall pass unless you prove your knowledge of the alchemist! Answer my question correctly, or remain trapped!",this.answerButtons=[],this.answerTexts=[];for(let t=0;t<3;t++){const s=new i.GameObjects.Image(e,59+98*t,.8*a.gameHeight,"button").setOrigin(.5,.5).setDepth(4);s.setInteractive(),s.on("pointerdown",(()=>{this.emit("answerSelected",t)})),this.answerButtons.push(s);const o=new i.GameObjects.BitmapText(e,this.answerButtons[t].x,this.answerButtons[t].y+1,"minogram","Answer"+t,10).setOrigin(.5,.5).setDepth(5).setTint(this.textColor);this.answerTexts.push(o),this.add([s,o])}this.questions=this.loadQuestions("questions"),this.usedQuestions=[]}showQuizDialog(){const e=this.pickQuestions();this.answerTexts.forEach(((t,i)=>{t.setText(e.answers[i])})),this.once("answerSelected",(t=>{this.hideDialog(),e.correct===t?this.eventEmitter.emit("answerCorrect"):this.eventEmitter.emit("answerWrong")})),this.showDialog("Quiz",'"'+this.introText+"\n\n"+e.question+'"')}loadQuestions(e){return this.scene.cache.json.get(e).questions}pickQuestions(){const e=this.questions.filter(((e,t)=>!this.usedQuestions.includes(t)));if(0===e.length)return this.usedQuestions.length=0,this.questions[i.Math.Between(0,this.questions.length-1)];const t=e[i.Math.Between(0,e.length-1)];return this.usedQuestions.push(this.questions.indexOf(t)),t}}class G extends i.GameObjects.Image{constructor(e,i,s,o,a){super(e,i,s,"virtualKey"),t(this,"eventEmitter"),t(this,"activeKey",!0),this.setOrigin(.5,.5),this.setInteractive(),this.setAlpha(.5),this.eventEmitter=a,"left"===o?this.angle=180:"up"===o?this.angle=-90:"down"===o&&(this.angle=90),this.on("pointerdown",(()=>{this.eventEmitter.emit("virtualKeyDown",o)})),this.on("pointerup",(()=>{this.eventEmitter.emit("virtualKeyUp",o)})),this.on("pointerout",(()=>{this.eventEmitter.emit("virtualKeyUp",o)})),this.eventEmitter.on("hideVirtualKeys",(()=>{this.setVisible(!1)})),this.eventEmitter.on("showVirtualKeys",(()=>{this.activeKey&&this.setVisible(!0)})),this.eventEmitter.on("activateVirtualKeys",(()=>{this.activeKey=!0})),this.eventEmitter.on("deactivateVirtualKeys",(()=>{this.activeKey=!1}))}}class U extends i.Scene{constructor(){super("GameUI"),t(this,"dialog"),t(this,"quizDialog"),t(this,"eventEmitter")}init(e){this.eventEmitter=e.eventEmitter}create(){this.dialog=this.add.existing(new P(this,this.eventEmitter)),this.quizDialog=this.add.existing(new I(this,this.eventEmitter)),this.eventEmitter.on("showDialog",((e,t)=>{this.dialog.showDialog(e,t),this.eventEmitter.emit("hideVirtualKeys")})),this.eventEmitter.on("showQuizDialog",(()=>{this.quizDialog.showQuizDialog(),this.eventEmitter.emit("hideVirtualKeys")})),this.input.keyboard.addKey("Enter").on("down",(()=>{this.spaceEnterKey()})),this.input.keyboard.addKey("Space").on("down",(()=>{this.spaceEnterKey()})),this.addVirtualKeys()}update(e,t){}spaceEnterKey(){this.dialog.visible&&(this.sound.get("click").play(),this.dialog.hideDialog())}addVirtualKeys(){const e={x:.86*a.gameWidth,y:.7*a.gameHeight},t=.2*a.gameHeight;this.add.existing(new G(this,e.x+t,e.y,"right",this.eventEmitter)),this.add.existing(new G(this,e.x-t,e.y,"left",this.eventEmitter)),this.add.existing(new G(this,e.x,e.y-t,"up",this.eventEmitter)),this.add.existing(new G(this,e.x,e.y+t,"down",this.eventEmitter))}}const B={title:a.gameTitle,type:Phaser.AUTO,width:a.gameWidth,height:a.gameHeight,parent:"game-container",backgroundColor:"#000000",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[o,K,W,U,C],physics:{default:"arcade",arcade:{debug:!1}},pixelArt:!0};new i.Game(B);
