import * as assert from "assert";
import { window } from "vscode";
import { FileType } from "../../adonisjs";
import { getPathName } from "../../utils";

suite("Utils Test Suite", () => {
    window.showInformationMessage("Start utils tests.");

    test("should match a valid path name", () => {
        assert.equal(
            getPathName({
                fileName: "Test",
                filePath:
                    "C:\\Users\\caiol\\Documents\\adonisjs_files\\adonisjs-files\\app\\Controllers\\Http\\TestFolder",
                fileType: FileType.controller,
            }),
            "\\TestFolder\\Test"
        );
    });

    test("should match a not valid path name", () => {
        assert.notEqual(
            getPathName({
                fileName: "Fail",
                filePath:
                    "C:\\Users\\caiol\\Documents\\adonisjs_files\\adonisjs-files\\app\\Controllers\\Http\\FailFolder",
                fileType: FileType.controller,
            }),
            "Fail"
        );
    });
});
