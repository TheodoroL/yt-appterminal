import ytdl from 'ytdl-core';
import { createWriteStream  } from 'fs';
import { mkdir, rename } from 'fs/promises';

export  class Main{
      mp4(link:string): Promise<void> {
        return new Promise(async resolve => {  
          let validar:boolean = ytdl.validateURL(link);

          if (validar) {
              let linkVideo = await ytdl.getInfo(link);
              let videotile : string = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
              console.log(`Baixando o vídeo: ${videotile}...`);
              let arquivo:string = `${videotile}.mp4`;
              ytdl(link, {
                filter: "videoandaudio",
                quality: "highestvideo",
              }).pipe(createWriteStream(arquivo)).on("finish", async () => {
                  await mkdir("downloads/mp4", { recursive: true });
                  await rename(arquivo, `downloads/mp4/${arquivo}`);

                  console.log("Vídeo baixado com sucesso");
                  resolve();
              });
            }
            else{
              console.log("Link Invalido")
            }
        });
       }

    async mp3(linkmp3:string): Promise<void> {
      return new Promise(async resolve => {
        let validar:boolean = ytdl.validateURL(linkmp3)
        if (validar) {
            let linkVideo = await ytdl.getInfo(linkmp3);
            let videotile : string = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
            console.log(`Baixando o vídeo: ${videotile}...`);
            let arquivo:string = `${videotile}.mp3`;
            ytdl(linkmp3, {
              filter: "audio",
              quality: "highestaudio",
            }).pipe(createWriteStream(arquivo)).on("finish", async () => {
                  await mkdir("downloads/mp3", { recursive: true });
                  await rename(arquivo, `downloads/mp3/${arquivo}`);

                  console.log("Vídeo baixado com sucesso");
                  resolve();
            });
          }
          else{
            console.log("Link Invalido")
          }
        });
      }
    }