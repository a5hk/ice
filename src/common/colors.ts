import chroma from "chroma-js";

export class Color {
  code: string;
  description: string;

  constructor(code: string, description: string) {
    this.code = code;
    this.description = description;
  }

  toString(): string {
    return [
      "",
      this.description,
      `![${this.code}](https://via.placeholder.com/23/${this.code.replace("#", "")}/?text=+)`,
      this.code,
      "",
    ].join("|");
  }
}

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string): string {
  return chroma.mix("#012841", "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

class BaseColorPalette {
  #_palette: string;

  get palette() {
    return this.#_palette;
  }

  constructor(p = "") {
    p = p.toLowerCase();

    if (p == "pastel") {
      this.#_palette = p;
    } else {
      this.#_palette = "";
    }
  }
}

export class TokenColorPalette extends BaseColorPalette {
  Color01 = new Color(this.#setColorCode("#86f9d2", "#86f9d2"), "Function call, Attribute name");
  Color02 = new Color(this.#setColorCode("#d1aaf8", "#d1aaf8"), "Keyword, HTML meta tag");
  Color03 = new Color(this.#setColorCode(mix("c5"), mix("c5")), "Foreground, Variable");
  Color04 = new Color(this.#setColorCode("#b3fbff", "#b3fbff"), "Constant, HTML unrecognized tag");
  Color05 = new Color(this.#setColorCode("#2dd2ae", "#2dd2ae"), "Property, Tag ");
  Color06 = new Color(this.#setColorCode("#4dc3fe", "#4dc3fe"), "Type");
  Color07 = new Color(this.#setColorCode(mix("e5"), mix("e5")), "Parameter, Argument");
  Color08 = new Color(this.#setColorCode("#20dfd6", "#20dfd6"), "String");
  Color09 = new Color(this.#setColorCode("#77d8f8", "#77d8f8"), "Namespace/Class/Struct, HTML style tag");
  Color10 = new Color(this.#setColorCode(mix("44"), mix("44")), "Comment");
  Color11 = new Color(this.#setColorCode(mix("aa"), mix("aa")), "Documentation comment");
  Color12 = new Color(this.#setColorCode("#7ece98", "#7ece98"), "Function declaration, HTML link tag");
  Color13 = new Color(this.#setColorCode("#a8a8ff", "#a8a8ff"), "Non variable constant, HTML custom tag");
  Color14 = new Color(this.#setColorCode(mix("77"), mix("77")), "Tag punctuation");

  constructor(p = "") {
    super(p);
  }

  toString(): string {
    return Object.values(this)
      .map((c) => c.toString())
      .join("\n");
  }

  #setColorCode(regular: string, pastel: string): string {
    return this.palette == "pastel" ? pastel : regular;
  }
}

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

  activeIndentGuideBackground: /* .... */ "#53ac53",
  editorErrorForeground: /* .......... */ "#ff7575",
  editorInfoForeground: /* ........... */ "#02cad4",
  progressBarBackground: /* .......... */ "#d9d326",
  statusBarBackground: /* ............ */ "#186d75",
  statusBarDebuggingBackground: /* ... */ "#9b2c2c",
  statusBarDebuggingBorder: /* ....... */ "#770000",
  statusBarDebuggingForeground: /* ... */ "#fdf7f7",
  statusBarForeground: /* ............ */ "#dee3e6",
  statusBarNoFolderBackground: /* .... */ "#553c9a",
  statusBarNoFolderForeground: /* .... */ "#ede9f6",
  statusBarRemoteBackground: /* ...... */ "#752018",
  statusBarRemoteForeground: /* ...... */ "#dee3e6",
  textLinkForeground: /* ............. */ "#89B971",
  inlineValuesBackground: /* ......... */ "#c3ab8555",
  inlineValuesForeground: /* ......... */ mix("cc"),
};

export const terminalColors = {
  ansiBrightBlack: /* ..... */ "#888b92", // background88
  ansiBrightBlue: /* ...... */ "#80bfff",
  ansiBrightCyan: /* ...... */ "#0fa5d7",
  ansiBrightGreen: /* ..... */ "#89b971",
  ansiBrightMagenta: /* ... */ "#f28ca6",
  ansiBrightRed: /* ....... */ "#ef7b6d",
  ansiBrightWhite: /* ..... */ "#c5c6c9", // backgroundc5
  ansiBlack: /* ........... */ "#353a45", // background33
  ansiBlue: /* ............ */ "#859dc3",
  ansiBrightYellow: /* .... */ "#f5d780",
  ansiGreen: /* ........... */ "#85c3ab",
  ansiMagenta: /* ......... */ "#c385bc",
  ansiRed: /* ............. */ "#ff7575",
  ansiWhite: /* ........... */ "#acaeb3",
  ansiYellow: /* .......... */ "#d9d326",
};
