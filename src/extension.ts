import {
    workspace,
    commands,
    ExtensionContext,
    window,
    Uri,
    languages,
} from "vscode";
import { FileType } from "./adonisjs";
// import { createCommandFile } from "./file-helper";
import { getPathName, sendTextTerminal } from "./utils";

export function activate(context: ExtensionContext) {
    let disposableCommandCommand = commands.registerCommand(
        "extension.GenerateCommand",
        (uri: Uri) => {
            if (workspace === undefined) {
                return window.showErrorMessage(
                    "Please select a workspace first"
                );
            } else {
                if (uri.fsPath.includes("commands")) {
                    window
                        .showInputBox({
                            placeHolder: "Please enter Command name",
                        })
                        .then((input) => {
                            if (input === undefined) {
                                return;
                            }

                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.command,
                            });

                            sendTextTerminal(
                                `node ace make:command ${getPath}`
                            );
                        });
                } else {
                    return window.showErrorMessage(
                        "Please make a command into Commands folder"
                    );
                }
            }
        }
    );

    let disposableControllerCommand = commands.registerCommand(
        "extension.GenerateController",
        (uri: Uri) => {
            if (workspace === undefined) {
                return window.showErrorMessage(
                    "Please select a workspace first"
                );
            } else {
                if (uri.fsPath.includes("app\\Controllers")) {
                    window
                        .showInputBox({
                            placeHolder: "Please enter Controller name",
                        })
                        .then((input) => {
                            if (input === undefined) {
                                return;
                            }

                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.controller,
                            });

                            sendTextTerminal(
                                `node ace make:controller ${getPath}`
                            );
                        });
                } else {
                    return window.showErrorMessage(
                        "Please make a controller into Controllers folder"
                    );
                }
            }
        }
    );

    let disposableExceptionCommand = commands.registerCommand(
        "extension.GenerateException",
        (uri: Uri) => {
            if (workspace === undefined) {
                return window.showErrorMessage(
                    "Please select a workspace first"
                );
            } else {
                if (uri.fsPath.includes("app\\Exceptions")) {
                    window
                        .showInputBox({
                            placeHolder: "Please enter Exception name",
                        })
                        .then((input) => {
                            if (input === undefined) {
                                return;
                            }

                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.exceptions,
                            });

                            sendTextTerminal(
                                `node ace make:exception ${getPath}`
                            );
                        });
                } else {
                    return window.showErrorMessage(
                        "Please make a exception into Exceptions folder"
                    );
                }
            }
        }
    );

    let disposableFactoryCommand = commands.registerCommand(
        "extension.GenerateFactory",
        (uri: Uri) => {
            if (workspace === undefined) {
                return window.showErrorMessage(
                    "Please select a workspace first"
                );
            } else {
                if (uri.fsPath.includes("database\\factories")) {
                    window
                        .showInputBox({
                            placeHolder: "Please enter Factory name",
                        })
                        .then((input) => {
                            if (input === undefined) {
                                return;
                            }

                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.factories,
                            });

                            sendTextTerminal(
                                `node ace make:factory ${getPath}`
                            );
                        });
                } else {
                    return window.showErrorMessage(
                        "Please make a factory into Factories folder"
                    );
                }
            }
        }
    );

    let disposableMigrationCommand = commands.registerCommand(
        "extension.GenerateMigration",
        (uri: Uri) => {
            if (workspace === undefined) {
                return window.showErrorMessage(
                    "Please select a workspace first"
                );
            } else {
                if (uri.fsPath.includes("database\\migrations")) {
                    window
                        .showInputBox({
                            placeHolder: "Please enter Migration name",
                        })
                        .then((input) => {
                            if (input === undefined) {
                                return;
                            }

                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.migrations,
                            });

                            sendTextTerminal(
                                `node ace make:migration ${getPath}`
                            );
                        });
                } else {
                    return window.showErrorMessage(
                        "Please make a migration into Migrations folder"
                    );
                }
            }
        }
    );

    let disposableModelCommand = commands.registerCommand(
        "extension.GenerateModel",
        (uri: Uri) => {
            if (workspace === undefined) {
                return window.showErrorMessage(
                    "Please select a workspace first"
                );
            } else {
                if (uri.fsPath.includes("app\\Models")) {
                    window
                        .showInputBox({
                            placeHolder: "Please enter Model name",
                        })
                        .then((input) => {
                            if (input === undefined) {
                                return;
                            }

                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.models,
                            });

                            sendTextTerminal(`node ace make:model ${getPath}`);
                        });
                } else {
                    return window.showErrorMessage(
                        "Please make a model into Models folder"
                    );
                }
            }
        }
    );

    context.subscriptions.push(
        disposableCommandCommand,
        disposableControllerCommand,
        disposableExceptionCommand,
        disposableFactoryCommand,
        disposableMigrationCommand,
        disposableModelCommand
    );
}

export function deactivate() {}
