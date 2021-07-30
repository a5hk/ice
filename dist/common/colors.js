var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseColorPalette__palette, _TokenColorPalette_instances, _TokenColorPalette_setColorCode;
import chroma from "chroma-js";
export class Color {
    constructor(code, description) {
        this.code = code;
        this.description = description;
    }
    toString() {
        return [
            "",
            this.description,
            `![${this.code}](https://via.placeholder.com/23/${this.code.replace("#", "")}/?text=+)`,
            this.code,
            "",
        ].join("|");
    }
}
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha) {
    return chroma.mix("#012841", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}
class BaseColorPalette {
    constructor(p = "") {
        _BaseColorPalette__palette.set(this, void 0);
        p = p.toLowerCase();
        if (p == "pastel") {
            __classPrivateFieldSet(this, _BaseColorPalette__palette, p, "f");
        }
        else {
            __classPrivateFieldSet(this, _BaseColorPalette__palette, "", "f");
        }
    }
    get palette() {
        return __classPrivateFieldGet(this, _BaseColorPalette__palette, "f");
    }
}
_BaseColorPalette__palette = new WeakMap();
export class TokenColorPalette extends BaseColorPalette {
    constructor(p = "") {
        super(p);
        _TokenColorPalette_instances.add(this);
        this.Color01 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#86f9d2", "#86f9d2"), "Function call, Attribute name");
        this.Color02 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#d1aaf8", "#d1aaf8"), "Keyword, HTML meta tag");
        this.Color03 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, mix("c5"), mix("c5")), "Foreground, Variable");
        this.Color04 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#b3fbff", "#b3fbff"), "Constant, HTML unrecognized tag");
        this.Color05 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#2dd2ae", "#2dd2ae"), "Property, Tag ");
        this.Color06 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#4dc3fe", "#4dc3fe"), "Type");
        this.Color07 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, mix("e5"), mix("e5")), "Parameter, Argument");
        this.Color08 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#20dfd6", "#20dfd6"), "String");
        this.Color09 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#77d8f8", "#77d8f8"), "Namespace/Class/Struct, HTML style tag");
        this.Color10 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, mix("44"), mix("44")), "Comment");
        this.Color11 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, mix("aa"), mix("aa")), "Documentation comment");
        this.Color12 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#7ece98", "#7ece98"), "Function declaration, HTML link tag");
        this.Color13 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, "#a8a8ff", "#a8a8ff"), "Non variable constant, HTML custom tag");
        this.Color14 = new Color(__classPrivateFieldGet(this, _TokenColorPalette_instances, "m", _TokenColorPalette_setColorCode).call(this, mix("77"), mix("77")), "Tag punctuation");
    }
    toString() {
        return Object.values(this)
            .map((c) => c.toString())
            .join("\n");
    }
}
_TokenColorPalette_instances = new WeakSet(), _TokenColorPalette_setColorCode = function _TokenColorPalette_setColorCode(regular, pastel) {
    return this.palette == "pastel" ? pastel : regular;
};
export const workbenchColors = {
    background: mix("0"),
    background11: mix("11"),
    background22: mix("22"),
    background25: mix("25"),
    background33: mix("33"),
    background44: mix("44"),
    background55: mix("55"),
    background66: mix("66"),
    background77: mix("77"),
    background88: mix("88"),
    background99: mix("99"),
    backgroundaa: mix("aa"),
    backgroundbb: mix("bb"),
    backgroundc5: mix("c5"),
    backgroundcc: mix("cc"),
    backgrounddd: mix("dd"),
    backgrounde5: mix("e5"),
    backgroundee: mix("ee"),
    contrastBackground: "#012237",
    activeIndentGuideBackground: "#53ac53",
    editorErrorForeground: "#ff7575",
    editorInfoForeground: "#02cad4",
    progressBarBackground: "#d9d326",
    statusBarBackground: "#186d75",
    statusBarDebuggingBackground: "#9b2c2c",
    statusBarDebuggingBorder: "#770000",
    statusBarDebuggingForeground: "#fdf7f7",
    statusBarForeground: "#dee3e6",
    statusBarNoFolderBackground: "#553c9a",
    statusBarNoFolderForeground: "#ede9f6",
    statusBarRemoteBackground: "#752018",
    statusBarRemoteForeground: "#dee3e6",
    textLinkForeground: "#89B971",
    inlineValuesBackground: "#c3ab8555",
    inlineValuesForeground: mix("cc"),
};
export const terminalColors = {
    ansiBrightBlack: "#888b92",
    ansiBrightBlue: "#80bfff",
    ansiBrightCyan: "#0fa5d7",
    ansiBrightGreen: "#89b971",
    ansiBrightMagenta: "#f28ca6",
    ansiBrightRed: "#ef7b6d",
    ansiBrightWhite: "#c5c6c9",
    ansiBlack: "#353a45",
    ansiBlue: "#859dc3",
    ansiBrightYellow: "#f5d780",
    ansiGreen: "#85c3ab",
    ansiMagenta: "#c385bc",
    ansiRed: "#ff7575",
    ansiWhite: "#acaeb3",
    ansiYellow: "#d9d326",
};
