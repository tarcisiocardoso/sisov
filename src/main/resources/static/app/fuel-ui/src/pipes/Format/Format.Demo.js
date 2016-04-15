System.register(['angular2/core', "angular2/common", './Format', '../../directives/CodeHighlighter/CodeHighlighter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Format_1, CodeHighlighter_1;
    var FormatDemo, FORMAT_DEMO_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Format_1_1) {
                Format_1 = Format_1_1;
            },
            function (CodeHighlighter_1_1) {
                CodeHighlighter_1 = CodeHighlighter_1_1;
            }],
        execute: function() {
            FormatDemo = (function () {
                function FormatDemo() {
                    this.someNumberVar = '435.23528';
                    this.someTimestamp = 1442187616000;
                }
                FormatDemo = __decorate([
                    core_1.Component({
                        template: "\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card card-block\">\n            <h2 class=\"card-title\">Format</h2>\n            <p class=\"card-text\">Format is a custom pipe to format any string into a type by an identifying string</p>\n        </div>\n    </div>\n</div>\n\n<h3>Number/Decimal</h3>\n<p>\n    <code>someVar | format : 'number : 1.0-2'</code><br/>\n</p>\n\n<p>Input: <code>someNumberVar: string = '435.23528';</code>\n<p>Output: {{someNumberVar | format : 'number : 1.0-2'}}</p>\n<p>Number format is like this: <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>\n<ul>\n    <li> minIntegerDigits is the minimum number of integer digits to use. Defaults to 1.</li>\n    <li> minFractionDigits is the minimum number of digits after fraction. Defaults to 0.</li>\n    <li> maxFractionDigits is the maximum number of digits after fraction. Defaults to 0.</li>\n</ul>\n\n<h3>Date/DateTime</h3>\n<p>\n    <code>someTimestamp | format : 'dateTime : MMM d, y h:mm:ss a'</code><br/>\n</p>\n\n<p>Input: <code>someTimestamp: number = 1442187616000;</code>\n<p>Output: {{someTimestamp | format : 'dateTime : MMM d, y h:mm:ss a'}}</p>\n\n<div class=\"source\">\n<h3>Import</h3>\n<pre>\n<code class=\"language-javascript\" code-highlight>\nimport {FormatPipe} from 'fuel-ui/fuel-ui';\n</code>\n</pre>\n\n<h3>Getting Started</h3>\n<p>Format pipe is used to format any string into a type by an identifying string. This is good for when you know the format of the output, but don't necessarily know the input type\n</p>\n\n<h3>Usage</h3>\n<pre>\n<code class=\"language-javascript\" code-highlight>\nexport class FormatExample {\n    someNumberVar: string = '435.23528';\n    someTimestamp: number = 1442187616000;\n}\n</code>\n</pre>\n\n<pre>\n<code class=\"language-javascript\" code-highlight>\n{<pre>{</pre>someVar | format : 'number : 2'}}\n</code>\n</pre>\n\n<h3>Parameters</h3>\n<table class=\"table table-bordered table-striped\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Default</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>type</td>\n            <td>string</td>\n            <td>text</td>\n            <td>The type of data you want the input to be output as</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Data Types Supported</h3>\n<table class=\"table table-bordered table-striped\">\n    <thead>\n        <tr>\n            <th>Type</th>\n            <th>someType : x?</th>\n            <th>Input</th>\n            <th>Output</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>date</td>\n            <td>true - format of date - default: 'MMM d, y h:mm:ss a'</td>\n            <td>\"1442187616000\"</td>\n            <td>Sep 13, 2015, 7:40:16 PM</td>\n        </tr>\n        <tr>\n            <td>datetime</td>\n            <td>true - format of date - default: 'MMM d, y h:mm:ss a'</td>\n            <td>\"1442187616000\"</td>\n            <td>Sep 13, 2015, 7:40:16 PM</td>\n        </tr>\n        <tr>\n            <td>decimal</td>\n            <td>true - number formatting - default: '1.0-0'</td>\n            <td>\"1442187616000\"</td>\n            <td>1442187616000</td>\n        </tr>\n        <tr>\n            <td>number</td>\n            <td>true - number formatting - default: '1.0-0'</td>\n            <td>\"1442187616000\"</td>\n            <td>1442187616000</td>\n        </tr>\n        <tr>\n            <td>percentage</td>\n            <td>true - number formatting - default: '1.0-0'</td>\n            <td>\"1442187616000\"</td>\n            <td>\"1442187616000%\"</td>\n        </tr>\n        <tr>\n            <td>text</td>\n            <td>false</td>\n            <td>\"1442187616000\"</td>\n            <td>\"1442187616000\"</td>\n        </tr>\n    </tbody>\n</table>\n\n</div>",
                        directives: [common_1.CORE_DIRECTIVES, CodeHighlighter_1.CodeHighlighter],
                        pipes: [Format_1.FORMAT_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormatDemo);
                return FormatDemo;
            }());
            exports_1("FormatDemo", FormatDemo);
            exports_1("FORMAT_DEMO_PROVIDERS", FORMAT_DEMO_PROVIDERS = [
                FormatDemo
            ]);
        }
    }
});
//# sourceMappingURL=Format.Demo.js.map