import { VSCodeWebview } from "@stack-spot/vscode-async-webview-backend";

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Bridge } from "./Bridge";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("Congratulations, your extension is now active!");

  // Create a new webview
  const webview = new VSCodeWebview({
    type: "myExtension",
    path: "packages/webview",
    title: "My Extension",
    bridgeFactory: (webview) => new Bridge(webview),
    context,
  });

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("myExtension.start", () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    // show the webview
    webview.show();
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
