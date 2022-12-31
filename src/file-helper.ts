import { window } from "vscode";
import { AdonisFile } from "./adonisjs";
import { getPascalCase } from "./utils";

// export async function createCommandFile({
//     fileName,
//     filePath,
//     fileType,
// }: AdonisFile) {
//     const pathParts = filePath.split(fileType);
//     const terminal =
//         window.activeTerminal ?? window.createTerminal("AdonisJs Terminal");

//     terminal.sendText(
//         `node ace make:controller ${
//             pathParts[1] !== undefined
//                 ? pathParts[1] + `\\` + getPascalCase(fileName)
//                 : getPascalCase(fileName)
//         }`
//     );
// }
