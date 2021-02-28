(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{390:function(t,s,a){"use strict";a.r(s);var n=a(39),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"클린-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클린-코드"}},[t._v("#")]),t._v(" 클린 코드")]),t._v(" "),a("p",[t._v("완독: 2021.1.17")]),t._v(" "),a("blockquote",[a("p",[t._v("로버트 C.마틴의 클린코드를 읽고 인상깊은 구문 정리")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("46p. 코드는 위에서 아래로 이야기처럼 읽혀야 조음. 최대한 추상화 수준이 하나인 함수를 구현해라. 위에서 아래로 프로그램을 읽으면 추상화 수준이 한 단계씩 낮아짐\n(추상화 수준이 하나 - 라는 표현에 살짝 충격. 내가 모호하게 생각하고 있던 판단 기준을 명료하게 정리함)")])]),t._v(" "),a("li",[a("p",[t._v("52p. 플래그 인수 피하기. 나는 함수 안에 여러가지를 처리할거예요~ 라 말하는거임.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFood"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFood"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderFood")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderOther")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("53p. 함수의 인수는 최대한 줄이기. 같은 개념이라면 객체로라도 묶기")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCircle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\ntype Center "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCircle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("center"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("56p. 출력 인수 피하기")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendFooter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// s에 푸터 추가인지, 푸터에 s추가인지. 함수 선언 봐야 앎.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 인수(s)를 (변경하든 해서)리턴하는건 일반적으로 어색함.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\nreport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendFooter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 상태를 변경해야 한다면 이렇게 속한 객체상태를 변경하도록 호출")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("59p. 함수는 한 번 흩어보고 넘어갈 수 있어야 함. 안 그러면 읽기 지루해지고 파악이 어려움. 한 함수에서 한 일만 하도록(e.g. 오류를 처리하는 함수는 오류만 처리해!)")])]),t._v(" "),a("li",[a("p",[t._v("주석")]),t._v(" "),a("ul",[a("li",[t._v("68p. 주석은 기껏해야 필요악. 코드로 의도를 표현하지 못할 때 사용.")]),t._v(" "),a("li",[t._v("77p. 주석이 코드 내용 그대로 중복이면 달 필요x")])])]),t._v(" "),a("li",[a("p",[t._v("139p. 메서드에서 null반환은 나중에 이를 사용하는 입장에서 매번 null체크를 해줘야하는 귀찮&위험이 있음. throw를 하거나 특수 사례 객체를 반환하셈. 이미 null반환하는 외부 라이브러리들은 한 번 감싸든지 해서 throw해라.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("직원")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("직원없음"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return null; // 안좋음")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emptyList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// java의 특수사례객체")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("테스트코드")]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"157"}},[a("li",[t._v("tc가 없다면 모든 변경이 잠정적인 버그")])])]),t._v(" "),a("li",[t._v("158p. 깨끗한 테스트 코드를 만들려면? 가독성 1등으로 중요.")]),t._v(" "),a("li",[a("ol",{attrs:{start:"158"}},[a("li",[t._v("자질구레한 사항이 너무 많으면 읽기 힘듦.")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"166"}},[a("li",[t._v("테스트 함수 하나당 한 개념만 테스트")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"217"}},[a("li",[t._v("철저한 테스트가 가능한 시스템을 만들면 더 나은 설계(낮은 결합도와 높은 응집력)가 얻어진다. 결합도가 높으면 테스트 케이스를 작성하기 어렵다")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"404"}},[a("li",[t._v("테스트케이스는 잠재적으로 깨질 만한 모든 곳을 테스트해야함")])])])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"178"}},[a("li",[t._v("'응집도' 라는 단어를 생각해본다. 위에 '추상화는 한 단계만' 처럼 내가 모호하게 느끼고만 있던 특질을 말한 단어네. A기능에 관련된 변수와 로직, 그리고 B기능에 관련된 변수와 로직이 한 클래스에 무분별하게 섞여있으면 응집도가 낮은것. 코드가 길어지더라도 이들을 분리해내자. 응집도가 높은 함수/클래스 여러개로 쪼개자.")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"376"}},[a("li",[t._v("수직분리: 변수와 함수는 사용되는 위치와 가깝게 정의한다. 수직으로 가까운 곳. 선언한 위치로부터 몇백 줄 아래에서 사용하면 안됨. -> js는 그렇게 마니 하는디. 한번 가까이 둬볼까")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"395"}},[a("li",[t._v("설정 관련 함수는 최상위에 둔다. 저차원 함수에 상수 값을 정의하면x")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"395"}},[a("li",[t._v("추이적 탐색 피하기")])]),t._v(" "),a("ul",[a("li",[t._v("= 디미터의 법칙 = 부끄럼타는 코드 작성. 한 모듈은 주변 모듈을 모를수록 좋다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" books "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unreadBooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("book")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unreadBooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUnreadBooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"399"}},[a("li",[t._v("sw 가독성의 90%는 이름이 정한다. 시간을 들여 이름을 정하고 유효하도록 유지한다")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);