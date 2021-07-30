highlight clear
if exists("syntax_on")
  syntax reset
endif

if has("termguicolors")
  set termguicolors
endif

set background=dark
let colors_name="nightcoder"

highlight Normal guifg=#c5ced4 guibg=#030917

highlight Comment cterm=italic gui=italic guifg=#456174
highlight String  guifg=#20dfd6
highlight Character  guifg=#20dfd6
highlight Number  guifg=#a8a8ff
highlight Boolean  guifg=#a8a8ff
highlight Float  guifg=#a8a8ff
highlight Constant  guifg=#b3fbff
highlight Function  guifg=#86f9d2
highlight Identifier  guifg=#77d8f8
highlight Operator  guifg=#b3fbff
highlight Statement  guifg=#d1aaf8
highlight PreProc  guifg=#d1aaf8
highlight Type  guifg=#4dc3fe
highlight Tag  guifg=#2dd2ae
highlight Special  guifg=#a8a8ff