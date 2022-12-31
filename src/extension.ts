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
            defaultCommand(uri, "Command", FileType.command, "command");
        }
    );

    let disposableControllerCommand = commands.registerCommand(
        "extension.GenerateController",
        (uri: Uri) => {
            defaultCommand(
                uri,
                "Controller",
                FileType.controller,
                "controller"
            );
        }
    );

    let disposableExceptionCommand = commands.registerCommand(
        "extension.GenerateException",
        (uri: Uri) => {
            defaultCommand(uri, "Exception", FileType.exceptions, "exception");
        }
    );

    let disposableFactoryCommand = commands.registerCommand(
        "extension.GenerateFactory",
        (uri: Uri) => {
            defaultCommand(uri, "Factory", FileType.factories, "factory");
        }
    );

    let disposableListenerCommand = commands.registerCommand(
        "extension.GenerateListener",
        (uri: Uri) => {
            defaultCommand(uri, "Listener", FileType.listener, "listener");
        }
    );

    let disposableMigrationCommand = commands.registerCommand(
        "extension.GenerateMigration",
        (uri: Uri) => {
            defaultCommand(uri, "Migrations", FileType.migrations, "migration");
        }
    );

    let disposableModelCommand = commands.registerCommand(
        "extension.GenerateModel",
        (uri: Uri) => {
            defaultCommand(uri, "Models", FileType.models, "model");
        }
    );

    context.subscriptions.push(
        disposableCommandCommand,
        disposableControllerCommand,
        disposableExceptionCommand,
        disposableFactoryCommand,
        disposableListenerCommand,
        disposableMigrationCommand,
        disposableModelCommand
    );
}

export function deactivate() {}

function defaultCommand(
    uri: Uri,
    name: string,
    fileType: FileType,
    commandName: string
) {
    if (workspace === undefined) {
        return window.showErrorMessage("Please select a workspace first");
    } else {
        if (uri.fsPath.includes(fileType)) {
            window
                .showInputBox({
                    placeHolder: `Please enter ${name} name`,
                })
                .then((input) => {
                    if (input === undefined) {
                        return;
                    }

                    const getPath = getPathName({
                        fileName: input,
                        filePath: uri.fsPath,
                        fileType: fileType,
                    });

                    sendTextTerminal(`node ace make:${commandName} ${getPath}`);
                });
        } else {
            return window.showErrorMessage(
                `Please create ${commandName} into ${name} folder`
            );
        }   
    }
}
