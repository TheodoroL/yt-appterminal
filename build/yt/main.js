"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
class Main {
    async mp4(link) {
        let validar = ytdl_core_1.default.validateURL(link);
        if (validar) {
            let linkVideo = await ytdl_core_1.default.getInfo(link);
            let videotile = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
            console.log(`Baixando o vídeo: ${videotile}...`);
            let arquivo = `${videotile}.mp4`;
            (0, ytdl_core_1.default)(link, {
                filter: "videoandaudio",
                quality: "highestvideo",
            }).pipe(fs_1.default.createWriteStream(arquivo)).on("finish", () => {
                let destinoPath = `D:\\yt-appterminal\\music\\mp4\\${arquivo}`;
                (0, child_process_1.exec)(`move "${arquivo}" "${destinoPath}"`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro ao mover o arquivo: ${error}`);
                    }
                    else {
                        console.log("Baixado e movido com sucesso");
                    }
                });
            });
        }
        else {
            console.log("Link Invalido");
        }
    }
    async mp3(linkmp3) {
        let validar = ytdl_core_1.default.validateURL(linkmp3);
        if (validar) {
            let linkVideo = await ytdl_core_1.default.getInfo(linkmp3);
            let videotile = linkVideo.videoDetails.title.replace(/[\/:*?"<>|]/g, '');
            console.log(`Baixando o vídeo: ${videotile}...`);
            let arquivo = `${videotile}.mp3`;
            (0, ytdl_core_1.default)(linkmp3, {
                filter: "audio",
                quality: "highestaudio",
            }).pipe(fs_1.default.createWriteStream(arquivo)).on("finish", () => {
                let destinoPath = `D:\\yt-appterminal\\music\\mp3\\${arquivo}`;
                (0, child_process_1.exec)(`move "${arquivo}" "${destinoPath}"`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro ao mover o arquivo: ${error}`);
                    }
                    else {
                        console.log("Baixado e movido com sucesso");
                    }
                });
            });
        }
        else {
            console.log("Link Invalido");
        }
    }
}
exports.Main = Main;
