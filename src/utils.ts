import { dirname, relative } from "path";
import { Uri, Position, window } from "vscode";
import { AdonisFile } from "./adonisjs";

export function getPascalCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getCamelCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// export function getRelativePathForImport(appModule: Uri, importFile: Uri) {
//     return (
//         "./" +
//         relative(dirname(appModule.path), importFile.path)
//             .replace(/\\/g, "/")
//             .replace(".ts", "")
//     );
// }

// export function getArraySchematics(arrayType: string): RegExp {
//     return new RegExp(`${arrayType}(\\s+)?:(\\s+)?\\[`);
// }

// export function getBootstrapFunction(): RegExp {
//     return new RegExp("app.listen");
// }

// export function getLineNoFromString(
//     str: string,
//     match: RegExpExecArray
// ): Position {
//     const array = str.substring(0, match.index).split("\n");
//     const charPosition = str.split("\n")[array.length - 1].indexOf("[");
//     return new Position(array.length - 1, charPosition + 1);
// }

export const invalidFileNames =
    /^(\d|\-)|[\\\s+={}\(\)\[\]"`/;,:.*?'<>|#$%^@!~&]|\-$/;

// export function getClassName(fileName: string): string {
//     const specialCharIndex = fileName.indexOf("-");
//     if (specialCharIndex !== -1) {
//         return getPascalCase(fileName.substring(0, specialCharIndex)).concat(
//             getPascalCase(
//                 fileName.substring(specialCharIndex + 1, fileName.length)
//             )
//         );
//     } else {
//         return getPascalCase(fileName);
//     }
// }

export function getPathName({ fileName, filePath, fileType }: AdonisFile) {
    const pathParts = filePath.split(fileType);

    return pathParts[1] !== undefined
        ? pathParts[1] + `\\` + getPascalCase(fileName)
        : getPascalCase(fileName);
}

export function sendTextTerminal(command: string) {
    const terminal =
        window.activeTerminal ?? window.createTerminal("AdonisJs Terminal");

    return terminal.sendText(command);
}
