import { workspace, commands, ExtensionContext, window, Uri } from "vscode";
import { FileType } from "./adonisjs";
import { getPathName, getPathTestName, sendTextTerminal } from "./utils";

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

    let disposableMiddlewareCommand = commands.registerCommand(
        "extension.GenerateMiddleware",
        (uri: Uri) => {
            defaultCommand(
                uri,
                "Middleware",
                FileType.middleware,
                "middleware"
            );
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

    let disposableProviderCommand = commands.registerCommand(
        "extension.GenerateProvider",
        (uri: Uri) => {
            defaultCommand(uri, "Provider", FileType.provider, "provider");
        }
    );

    let disposableSeederCommand = commands.registerCommand(
        "extension.GenerateSeeder",
        (uri: Uri) => {
            defaultCommand(uri, "Seeder", FileType.seeders, "seeder");
        }
    );

    let disposableSuiteCommand = commands.registerCommand(
        "extension.GenerateSuite",
        (uri: Uri) => {
            defaultCommand(uri, "Suite", FileType.suite, "suite");
        }
    );

    let disposableTestCommand = commands.registerCommand(
        "extension.GenerateTest",
        (uri: Uri) => {
            defaultCommand(uri, "Test", FileType.test, "test");
        }
    );

    let disposableValidatorCommand = commands.registerCommand(
        "extension.GenerateValidator",
        (uri: Uri) => {
            defaultCommand(uri, "Validator", FileType.validator, "validator");
        }
    );

    let disposableViewCommand = commands.registerCommand(
        "extension.GenerateView",
        (uri: Uri) => {
            defaultCommand(uri, "View", FileType.view, "view");
        }
    );

    context.subscriptions.push(
        disposableCommandCommand,
        disposableControllerCommand,
        disposableExceptionCommand,
        disposableFactoryCommand,
        disposableListenerCommand,
        disposableMiddlewareCommand,
        disposableMigrationCommand,
        disposableModelCommand,
        disposableProviderCommand,
        disposableSeederCommand,
        disposableSuiteCommand,
        disposableTestCommand,
        disposableValidatorCommand,
        disposableViewCommand
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

                    switch (fileType) {
                        case FileType.test:
                            const getPathTest = getPathTestName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: FileType.test,
                            });

                            sendTextTerminal(
                                `node ace make:${commandName} ${getPathTest}`
                            );
                            break;
                        default:
                            const getPath = getPathName({
                                fileName: input,
                                filePath: uri.fsPath,
                                fileType: fileType,
                            });

                            sendTextTerminal(
                                `node ace make:${commandName} ${getPath}`
                            );

                            if (fileType === FileType.middleware) {
                                window.showInformationMessage(
                                    `> Open start/kernel.ts file\n
									> Register the following function as a global or a named middleware\n
									> () => import('App\\Middleware${getPath}')`
                                );
                            }
                            break;
                    }
                });
        } else {
            return window.showErrorMessage(
                `Please create ${commandName} into ${name} folder`
            );
        }
    }
}
