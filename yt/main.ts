import ytdl from 'ytdl-core';
import fs from 'fs';
import { ExecException, exec } from 'child_process';

export  class Main{
       async mp4(link:string){
        
        let validar:boolean = ytdl.validateURL(link)
        if (validar) {
            let linkVideo = await ytdl.getInfo(link);
            let videotile : string = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
            console.log(`Baixando o vídeo: ${videotile}...`);
        
            let arquivo:string = `${videotile}.mp4`;
        
            ytdl(link, {
              filter: "videoandaudio",
              quality: "highestvideo",
            }).pipe(fs.createWriteStream(arquivo)).on("finish", () => {
              let destinoPath: string = `D:\\yt-appterminal\\music\\mp4\\${arquivo}`;
        
              exec(`move "${arquivo}" "${destinoPath}"`, (error: ExecException| null, stdout, stderr) => {
                if (error) {
                  console.error(`Erro ao mover o arquivo: ${error}`);
                } else {
                  console.log("Baixado e movido com sucesso");
                }
              });
            });
          }
          else{
            console.log("Link Invalido")
          }
        
       }

    async mp3(linkmp3:string){
      let validar:boolean = ytdl.validateURL(linkmp3)
      if (validar) {
          let linkVideo = await ytdl.getInfo(linkmp3);
          let videotile : string = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
          
          let arquivo:string = `${videotile}.mp3`;
          
          ytdl(linkmp3, {
            filter: "audio",
            quality: "highestaudio",
          }).pipe(fs.createWriteStream(arquivo)).on("finish", () => {
            console.log(`Baixando o vídeo: ${videotile}...`);
            let destinoPath: string = `D:\\yt-appterminal\\music\\mp3\\${arquivo}`;
            
            exec(`move "${arquivo}" "${destinoPath}"`, (error: ExecException| null, stdout, stderr) => {
              if (error) {
                console.error(`Erro ao mover o arquivo: ${error}`);
              } else {
                console.log("Baixado e movido com sucesso");
              }
            });
          });
        }
        else{
          console.log("Link Invalido")
        }
      }

    }