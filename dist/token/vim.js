import { TokenColorPalette } from "../common/colors.js";
const palette = new TokenColorPalette();
export function vimColoring() {
    const head = `highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="nightcoder"

highlight Normal guifg=${palette.Color03.code} guibg=#030917

`;
    return (head +
        vRules
            .map((r) => {
            return r.groups
                .map((g) => `highlight ${g} ${r.style ? "cterm=" + r.style + " gui=" + r.style : ""} guifg=${r.fg}`)
                .join("\n");
        })
            .join("\n"));
}
const vRules = [
    { fg: palette.Color10.code, groups: ["Comment"], style: "italic" },
    { fg: palette.Color08.code, groups: ["String", "Character"] },
    { fg: palette.Color13.code, groups: ["Number", "Boolean", "Float"] },
    { fg: palette.Color04.code, groups: ["Constant"] },
    { fg: palette.Color01.code, groups: ["Function"] },
    { fg: palette.Color09.code, groups: ["Identifier"] },
    { fg: palette.Color04.code, groups: ["Operator"] },
    { fg: palette.Color02.code, groups: ["Statement", "PreProc"] },
    { fg: palette.Color06.code, groups: ["Type"] },
    { fg: palette.Color05.code, groups: ["Tag"] },
    { fg: palette.Color13.code, groups: ["Special"] },
];