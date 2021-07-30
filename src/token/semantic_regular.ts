import { TokenColorPalette } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export class SemanticTheme {
  palette: TokenColorPalette;

  constructor(palette = "") {
    this.palette = new TokenColorPalette(palette);
  }

  #italic(theme: semanticRule): semanticRule {
    for (const k in theme) {
      if (theme[k]?.__italic) {
        theme[k] = { ...theme[k], fontStyle: "italic" };
      }
    }
    return theme;
  }

  getPaletteRules(style: string): semanticRule {
    const rules: semanticRule = {
      variable: {
        foreground: this.palette.Color03.code,
      },
      "variable.readonly": {
        foreground: this.palette.Color04.code,
      },
      property: {
        foreground: this.palette.Color05.code,
        __italic: true,
      },
      parameter: {
        foreground: this.palette.Color07.code,
        __italic: true,
      },
      function: {
        foreground: this.palette.Color01.code,
        __italic: true,
      },
      "function.declaration": {
        foreground: this.palette.Color12.code,
      },
      method: {
        foreground: this.palette.Color01.code,
        __italic: true,
      },
      "method.declaration": {
        foreground: this.palette.Color12.code,
      },
      keyword: {
        foreground: this.palette.Color02.code,
      },
      namespace: {
        foreground: this.palette.Color09.code,
        __italic: true,
      },
      class: {
        foreground: this.palette.Color09.code,
        __italic: true,
      },
      struct: {
        foreground: this.palette.Color09.code,
        __italic: true,
      },
      type: {
        foreground: this.palette.Color06.code,
      },
      operator: {
        foreground: this.palette.Color02.code,
      },
      string: {
        foreground: this.palette.Color08.code,
      },
    };

    if (style.toLowerCase() === "italic") {
      return this.#italic(rules);
    }
    return rules;
  }
}
