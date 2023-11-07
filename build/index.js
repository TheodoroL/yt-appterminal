"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./yt/main");
const readline_sync_1 = __importDefault(require("readline-sync"));
const figlet_1 = __importDefault(require("figlet"));
const youtube = new main_1.Main();
async function main() {
    console.log(figlet_1.default.textSync("Youtube Terminal", {
        font: "Big Money-sw",
        horizontalLayout: "default",
        verticalLayout: "controlled smushing",
        width: 80,
        whitespaceBreak: true,
    }));
    while (true) {
        console.log(`
      Painel de seleção 
    -------------------------------------|
    | 1 - MP3                            |       
    | 2 - MP4                            |
    | 3 - sair                           |           
    |-------------------------------------
    
    
    `);
        let selecao = parseInt(readline_sync_1.default.question("digite um número: "));
        if (selecao == 1) {
            let link = readline_sync_1.default.question("digite o seu link:");
            await youtube.mp3(link);
        }
        else if (selecao == 2) {
            let link2 = readline_sync_1.default.question("digite o seu link:");
            await youtube.mp4(link2);
        }
        else if (selecao == 3) {
            console.log("tenha um bom dia ^-^");
            break;
        }
    }
}
main();
