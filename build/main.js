import ytdl from 'ytdl-core';
import { createWriteStream } from 'fs';
import { mkdir, rename } from 'fs/promises';
export class Main {
    mp4(link) {
        return new Promise(async (resolve) => {
            let validar = ytdl.validateURL(link);
            if (validar) {
                let linkVideo = await ytdl.getInfo(link);
                let videotile = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
                console.log(`Baixando o vídeo: ${videotile}...`);
                let arquivo = `${videotile}.mp4`;
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
            else {
                console.log("Link Invalido");
            }
        });
    }
    async mp3(linkmp3) {
        return new Promise(async (resolve) => {
            let validar = ytdl.validateURL(linkmp3);
            if (validar) {
                let linkVideo = await ytdl.getInfo(linkmp3);
                let videotile = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
                console.log(`Baixando o vídeo: ${videotile}...`);
                let arquivo = `${videotile}.mp3`;
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
            else {
                console.log("Link Invalido");
            }
        });
    }
}
