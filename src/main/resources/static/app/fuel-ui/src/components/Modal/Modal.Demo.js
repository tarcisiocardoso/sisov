System.register(['angular2/core', './Modal', '../../directives/CodeHighlighter/CodeHighlighter'], function(exports_1, context_1) {
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
    var core_1, Modal_1, CodeHighlighter_1;
    var ModalDemo, MODAL_DEMO_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Modal_1_1) {
                Modal_1 = Modal_1_1;
            },
            function (CodeHighlighter_1_1) {
                CodeHighlighter_1 = CodeHighlighter_1_1;
            }],
        execute: function() {
            ModalDemo = (function () {
                function ModalDemo() {
                    this.closeText = "Cancel";
                }
                ModalDemo = __decorate([
                    core_1.Component({
                        template: "\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card card-block\">\n            <h2 class=\"card-title\">Modal</h2>\n            <p class=\"card-text\">Modal is a custom component to display a popup</p>\n        </div>\n    </div>\n</div>\n\n<button class=\"btn btn-primary\" (click)=\"modal.showModal()\">Toggle Modal</button>\n<modal #modal\n    modalTitle=\"Modal Title\"\n    closeButton=\"true\"\n    closeOnUnfocus=\"true\">\n    <div class=\"modal-body\">\n        <ul>\n            <li>Testing 1</li>\n            <li>Testing 2</li>\n            <li>Testing 3</li>\n        </ul>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.closeModal()\">\n            <i class=\"fa fa-chevron-left\"></i> Go Back\n        </button>\n    </div>\n</modal>\n\n<div class=\"source\">\n<h3>Import</h3>\n<pre>\n<code class=\"language-javascript\" code-highlight>\nimport {Modal} from 'fuel-ui/fuel-ui';\n</code>\n</pre>\n\n<h3>Getting Started</h3>\n<p>Modal is a custom element to create a popup</p>\n\n<h3>Usage</h3>\n<pre>\n<code class=\"language-markup\" code-highlight>\n&lt;button class=&quot;btn btn-primary&quot; (click)=&quot;modal.showModal()&quot;&gt;Toggle Modal&lt;/button&gt;\n&lt;modal #modal\n    modalTitle=&quot;Modal Title&quot;\n    closeButton=&quot;true&quot;\n    closeOnUnfocus=&quot;true&quot;&gt;\n    &lt;div class=&quot;modal-body&quot;&gt;\n        &lt;ul&gt;\n            &lt;li&gt;Any&lt;/li&gt;\n            &lt;li&gt;Html&lt;/li&gt;\n            &lt;li&gt;Here&lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;modal-footer&quot;&gt;\n        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; (click)=&quot;modal.closeModal()&quot;&gt;\n            &lt;i class=&quot;fa fa-chevron-left&quot;&gt;&lt;/i&gt; Go Back\n        &lt;/button&gt;\n    &lt;/div&gt;\n&lt;/modal&gt;\n</code>\n</pre>\n\n<h3>Attributes</h3>\n<table class=\"table table-bordered table-striped\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Default</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>closeOnUnfocus</td>\n            <td>boolean</td>\n            <td>true</td>\n            <td>Closes the opened modal when the user clicks off of it</td>\n        </tr>\n        <tr>\n            <td>closeButton</td>\n            <td>boolean</td>\n            <td>true</td>\n            <td>Option to display an 'X' close button in the corner of the modal</td>\n        </tr>\n        <tr>\n            <td>modalTitle</td>\n            <td>string</td>\n            <td>null</td>\n            <td>Text to display in modal header</td>\n        </tr>\n    </tbody>\n</table>\n\n</div>",
                        directives: [Modal_1.MODAL_PROVIDERS, CodeHighlighter_1.CodeHighlighter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalDemo);
                return ModalDemo;
            }());
            exports_1("ModalDemo", ModalDemo);
            exports_1("MODAL_DEMO_PROVIDERS", MODAL_DEMO_PROVIDERS = [
                ModalDemo
            ]);
        }
    }
});
//# sourceMappingURL=Modal.Demo.js.map