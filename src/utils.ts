import { window } from "vscode";
import { AdonisFile } from "./adonisjs";

export function getPascalCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getCamelCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export const invalidFileNames =
    /^(\d|\-)|[\\\s+={}\(\)\[\]"`/;,:.*?'<>|#$%^@!~&]|\-$/;

export function getPathName({ fileName, filePath, fileType }: AdonisFile) {
    const pathParts = filePath.split(fileType);

    return pathParts[1] !== undefined
        ? pathParts[1] + `\\` + getPascalCase(fileName)
        : getPascalCase(fileName);
}

export function getPathTestName({ fileName, filePath, fileType }: AdonisFile) {
    const pathParts = filePath.split("tests");

    if (pathParts[1] !== undefined) {
        const getSuite = pathParts[1].split("\\");
        const pathSuite = pathParts[1].split(getSuite[1]);

        return `${getSuite[1]} ${pathSuite[1]}\\${getCamelCase(fileName)}`;
    }
}

export function sendTextTerminal(command: string) {
    const terminal =
        window.activeTerminal ?? window.createTerminal("AdonisJs Terminal");

    return terminal.sendText(command);
}
