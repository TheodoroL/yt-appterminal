

import {Main} from "./yt/main"
import readlineSync from 'readline-sync'
import figlet from 'figlet'

const youtube = new Main()



console.log(
    figlet.textSync("Youtube Terminal", {
      font: "Big Money-sw", 
      horizontalLayout: "default",
      verticalLayout: "controlled smushing",
      width: 80,
      whitespaceBreak: true,
    }));
while(true){
    console.log(`
      Painel de seleção 
    -------------------------------------|
    | 1 - MP3                            |       
    | 2 - MP4                            |
    | 3 - sair                           |           
    |-------------------------------------
    
    
    `)
  
    let selecao : number = parseInt(readlineSync.question("digite um número: "))
    if(selecao == 1){
      let link:string = readlineSync.question("digite o seu link:")
      youtube.mp3(link)
  
    }
    else if(selecao ==2){
      let link2:string = readlineSync.question("digite o seu link:")
       youtube.mp4(link2)?.then(
        ()=> console.log("oquei")
       )
       .catch(()=>{console.log("erro")})
  
    } 
    else if (selecao == 3){
      console.log("tenha um bom dia ^-^")
      break
    }
  
  
  }  


  





