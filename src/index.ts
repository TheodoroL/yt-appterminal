import {Main} from "./main.js";
import figlet from 'figlet'; 
import enquirer from "enquirer";
const youtube = new Main()

console.log(
    figlet.textSync("Youtubte Terminal", {
      font: "Big Money-sw", 
      horizontalLayout: "default",
      verticalLayout: "controlled smushing",
      width: 80,
      whitespaceBreak: true,
    })
);

while(true){
    console.log(`
      Painel de seleção 
    -------------------------------------|
    | 1 - MP3                            |       
    | 2 - MP4                            |
    | 3 - sair                           |           
    |-------------------------------------
    
    
    `)
  
    const response = await enquirer.prompt<{selecao: number}>({
      type: 'input',
      name: 'selecao',
      message: "digite um número: "
    });

    if(response.selecao == 1){
      let response = await enquirer.prompt<{link: string}>({
        type: 'input',
        name: 'link',
        message: "digite o seu link:"
      });

      await youtube.mp3(response.link);
    }
    else if(response.selecao == 2){
      let response = await enquirer.prompt<{link: string}>({
        type: 'input',
        name: 'link',
        message: "digite o seu link:"
      });

      await youtube.mp4(response.link);
    } 
    else if (response.selecao == 3){
      console.log("tenha um bom dia ^-^")
      break
    }
  }
