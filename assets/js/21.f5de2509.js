(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{371:function(t,s,a){"use strict";a.r(s);var e=a(39),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dft-and-digital-filters-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dft-and-digital-filters-review"}},[t._v("#")]),t._v(" DFT and digital filters review")]),t._v(" "),a("ul",[a("li",[t._v("Linear time-invariant (LTI) system")]),t._v(" "),a("li",[t._v("FIR / IIR Filters")]),t._v(" "),a("li",[t._v("Convolution")]),t._v(" "),a("li",[t._v("Impulse response")]),t._v(" "),a("li",[t._v("Frequency response")])]),t._v(" "),a("h2",{attrs:{id:"dft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dft"}},[t._v("#")]),t._v(" DFT")]),t._v(" "),a("p",[t._v("What are the frequency components of an audio file?")]),t._v(" "),a("p",[t._v("Window size and frequency resolution")]),t._v(" "),a("h2",{attrs:{id:"digital-filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#digital-filters"}},[t._v("#")]),t._v(" Digital filters")]),t._v(" "),a("p",[t._v("We want to design filters in a certain way. Instead of trial and error, how can we mathematically analyze filters to obtain intended filter design?")]),t._v(" "),a("h2",{attrs:{id:"etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etc"}},[t._v("#")]),t._v(" ETC")]),t._v(" "),a("h3",{attrs:{id:"harmonics-and-octaves"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#harmonics-and-octaves"}},[t._v("#")]),t._v(" Harmonics and octaves")]),t._v(" "),a("p",[t._v("Octaves are just a special case of harmonics, where they are the power of 2 (2,4,8,16,...) multiples of the fundamental frequency.")]),t._v(" "),a("p",[t._v("Harmonics refer to all the multiples (2,3,4,5,...) of the fundamental.")]),t._v(" "),a("p",[t._v("ex. A = 110 Hz")]),t._v(" "),a("p",[t._v("1, "),a("strong",[t._v("2")]),t._v(", 3, "),a("strong",[t._v("4")]),t._v(", 5, 6, 7, "),a("strong",[t._v("8")])]),t._v(" "),a("p",[t._v("110, "),a("strong",[t._v("220")]),t._v(", 330, "),a("strong",[t._v("440")]),t._v(" , 550, 660, 770, "),a("strong",[t._v("880")]),t._v(", ...")]),t._v(" "),a("p",[t._v("A2, "),a("strong",[t._v("A3")]),t._v(", E3, "),a("strong",[t._v("A4")]),t._v(", C#4, E4, G4, "),a("strong",[t._v("A5")]),t._v(", ....")]),t._v(" "),a("p",[t._v("The bold number are the octaves of A=110Hz.")]),t._v(" "),a("h3",{attrs:{id:"frequencies-in-a-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequencies-in-a-scale"}},[t._v("#")]),t._v(" Frequencies in a scale")]),t._v(" "),a("p",[t._v("There are 12 notes in a western musical scale. (C, C#, D, D#, E, F...)")]),t._v(" "),a("p",[t._v("As seen from above, an octave is referred to the same note, but double the frequency of the given note.")]),t._v("\nfreq_{octave} = 2 \\cdot freq_{original} \\\\\n\n"),a("p",[t._v("Between octaves, there are 12 notes and we want to have equal distance between these notes.")]),t._v(" "),a("p",[t._v("This is why between each adjacent note in a scale, the frequency is "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mrow",[a("mn",[t._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),a("mn",[t._v("1")]),a("mn",[t._v("2")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{1/12}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8879999999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8879999999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("/")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" times the previous one ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[t._v("2")]),a("mrow",[a("mo",[t._v("(")]),a("mn",[t._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),a("mn",[t._v("1")]),a("mn",[t._v("2")]),a("mo",[t._v(")")]),a("mo",[t._v("∗")]),a("mn",[t._v("1")]),a("mn",[t._v("2")])],1)],1),a("mo",[t._v("=")]),a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{(1/12)*12} = 2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8879999999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8879999999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("/")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mbin"},[t._v("∗")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),t._v(").")])])}),[],!1,null,null,null);s.default=n.exports}}]);