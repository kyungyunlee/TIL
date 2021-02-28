(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{543:function(e,v,_){"use strict";_.r(v);var l=_(39),t=Object(l.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"indexeddb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[e._v("#")]),e._v(" IndexedDB")]),e._v(" "),_("ul",[_("li",[e._v("클라에서 많은 양의 구조화된 데이터를 인덱스를 이용해 높은 성능으로 검색가능하게 해주는 API")]),e._v(" "),_("li",[e._v("작은 양의 데이터를 저장하는데 유용")]),e._v(" "),_("li",[e._v("key로 index된 객체를 저장하고 검색하게 해줌.")]),e._v(" "),_("li",[e._v("database에 만드는 모든 변경은 transactions안에서 일어남.")]),e._v(" "),_("li",[e._v("webSQL database의 대안.")]),e._v(" "),_("li",[e._v("대부분 비동기 - 값을 return 하는것으로 데이터를 주지 않음\n"),_("ul",[_("li",[e._v("대신 callback function을 전달해야 함.")]),e._v(" "),_("li",[e._v("동기적인 수단을 통해 디비에 저장하거나 조회하지 않고, “요청”한다. 그리고 그 operation이 완료되었을때 DOM event를 통해 통지받음.")]),e._v(" "),_("li",[e._v("그리고 받은 event의 타입은 그게 성공했는지 아닌지를 알려줌.")]),e._v(" "),_("li",[e._v("모든곳에 requests를 사용함.")]),e._v(" "),_("li",[e._v("result가 사용가능하게 되었을때 알리기 위해 DOM events를 사용함.\n"),_("ul",[_("li",[e._v("DOM events는 언제나 타입 프로퍼티 가짐(인덱스드디비에서 대체로 success또는 error로 set 됨)")])])])])]),e._v(" "),_("li",[e._v("용어\n"),_("ul",[_("li",[e._v("database\n"),_("ul",[_("li",[e._v("정보의 한 repository.")]),e._v(" "),_("li",[e._v("하나 이상의 object stores로 구성")]),e._v(" "),_("li",[e._v("name과 version을 가져야 함.\n"),_("ul",[_("li",[e._v("하나의 db가 만들어질때 디폴트 버전은 1. 주어진 순간에 각 디비는 오직 하나의 version가짐.")])])])])]),e._v(" "),_("li",[e._v("object store\n"),_("ul",[_("li",[e._v("db에 데이터가 저장되는 메커니즘.")]),e._v(" "),_("li",[e._v("키밸류 쌍인 records를 영구적으로 잡는다.")]),e._v(" "),_("li",[e._v("key 오름차순 정렬")]),e._v(" "),_("li",[e._v("디비에서 유일한 name을 가져야 함.")]),e._v(" "),_("li",[e._v("선택적으로 key generator와 key path를 가질 수 있음")])])]),e._v(" "),_("li",[e._v("version\n"),_("ul",[_("li",[e._v("처음은 integer1")]),e._v(" "),_("li",[e._v("version바꾸는법: 현재보다 큰걸로 여는거.")])])]),e._v(" "),_("li",[e._v("database connection\n"),_("ul",[_("li",[e._v("db를 여는것에 생성되는 오퍼레이션. 한 디비는 동시에 여러개의 커넥션을 가질 수 있다.")])])]),e._v(" "),_("li",[e._v("transaction\n"),_("ul",[_("li",[e._v("특정 디비에 대한 데이터access와 modification operation의 원자적이고 견고한 집합.")]),e._v(" "),_("li",[e._v("디비에서의 읽기 변경 모두모두 transaction안에서 일어나야 함.")]),e._v(" "),_("li",[e._v("세가지 모드:  readwrite, readonly, versiononchange")])])]),e._v(" "),_("li",[e._v("request\n"),_("ul",[_("li",[e._v("db에 읽고 쓰기를 행하는 오퍼레이션")]),e._v(" "),_("li",[e._v("모든 리퀘스트는 읽기 아니면 쓰기")])])]),e._v(" "),_("li",[e._v("index\n"),_("ul",[_("li",[e._v("하나의 인덱스는 다른 object store의 records를 찾기위한 specialized object store")])])]),e._v(" "),_("li",[e._v("key\n"),_("ul",[_("li",[e._v("object store는 1. key generator 2.key path 3.명시적지정된value 중 하나로부터 key를 이끌어낼 수 있다.")]),e._v(" "),_("li",[e._v("object store의 각 record는 같은 store내에서 유일한 key가져야 함.")]),e._v(" "),_("li",[e._v("타입: string, date, float, array")]),e._v(" "),_("li",[e._v("index를 사용해 object store에서 records찾을 수 있다.")])])]),e._v(" "),_("li",[e._v("key generator\n"),_("ul",[_("li",[e._v("정렬 sequence로 새 키들을 생성하기 위한 매커니즘")])])])])]),e._v(" "),_("li",[e._v("기본 패턴\n"),_("ul",[_("li",[_("ol",[_("li",[e._v("디비를 연다")])])]),e._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[e._v("객체 저장소(object store)생성")])])]),e._v(" "),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[e._v("트랜젝션(transaction)시작하고 데이터를 추가하거나 읽어들이는 등의 디비작업 요청")])])]),e._v(" "),_("li",[_("ol",{attrs:{start:"4"}},[_("li",[e._v("DOM 이벤트리스너를 사용해 요청이 완료될때까지 기다림")])])]),e._v(" "),_("li",[_("ol",{attrs:{start:"5"}},[_("li",[e._v("(요청 객체에서 찾을 수 있는)결과를 가지고 무언가를 함.")])])])])]),e._v(" "),_("li",[e._v("저장소를 생성하고 사용\n"),_("ul",[_("li",[e._v("if(!window.indexDB){window.alert(“인덱스디비 지원안해용”);")]),e._v(" "),_("li",[e._v("디비열기\n"),_("ul",[_("li",[e._v("var request = window.indexedDB.open(“MyTestDatabase”, 3);")]),e._v(" "),_("li",[e._v("저 이름이 있으면 열고 없으면 만든다.")]),e._v(" "),_("li",[e._v("open request는 open()함수를 호출하고 success나 error값을 이벤트로 들고있는 IDBOpenRequest object를 반환한다.")]),e._v(" "),_("li",[e._v("뒤에 3 쓰면 디비버전 3스키마를 업데이트한다는 말.\n"),_("ul",[_("li",[e._v("최신버전이 아니면 onupgradeneeded를 부른다. 여기는 versionchange transaction이 있음.")])])]),e._v(" "),_("li",[e._v("핸들러 다루기\n"),_("ul",[_("li",[e._v("request.onerror = function(event) { //Do something with request.errorCode!};")]),e._v(" "),_("li",[e._v("request.onsuccess = function(event) {// Do something with request.result!};\n"),_("ul",[_("li",[e._v("다 석세스되면, 석세스이벤트(type property가 success로 set된 DOM event)가 발생한다.")])])])])]),e._v(" "),_("li",[e._v("에러 다루기")])])]),e._v(" "),_("li",[e._v("디비의 버전 생성/업데이트\n"),_("ul",[_("li",[e._v("onupgradeneeded 핸들러를 implement해야함.")]),e._v(" "),_("li",[e._v("versionchange transaction의 일부분임")])])]),e._v(" "),_("li",[e._v("디비 구조화\n"),_("ul",[_("li",[e._v("인덱스드디비는 테이블 대신 object stores를 사용.")]),e._v(" "),_("li",[e._v("tc\n"),_("ul",[_("li",[e._v("the_name이라는 디비를 만들었다.")]),e._v(" "),_("li",[e._v("onupgradeneeded에서\n"),_("ul",[_("li",[e._v("db = event.target.result 넣고")]),e._v(" "),_("li",[e._v("customers라는 오브젝트스토어 만듦\n"),_("ul",[_("li",[e._v("키패스는 ssn")]),e._v(" "),_("li",[e._v("name이라는 인덱스 만듦")]),e._v(" "),_("li",[e._v("email이라는 인덱스 만듦")])])])])]),e._v(" "),_("li",[e._v("customerData라는 딕셔너리가 들어있는 배열을 오브젝트스토어에 하나씩 넣어준다.")])])]),e._v(" "),_("li",[e._v("onupgradeneeded는 대비의 구조를 바꿀 수 있는 유일한 곳이다.\n"),_("ul",[_("li",[e._v("여기서 오브젝트스토어를 만들거나 지울수 있다.")])])]),e._v(" "),_("li",[e._v("오브젝트스토어는 createObjectStore()로 만듦\n"),_("ul",[_("li",[e._v("customers라는 오브젝트 스토어 만들고, 각각의 오브젝트들이 스토어에 유일하게 존재할 수 있는 키패스(SSN, 주민번호)를 지정한다.")])])])])]),e._v(" "),_("li",[e._v("데이터를 추가하고 지우기\n"),_("ul",[_("li",[e._v("디비에 뭔 짓 하기 전에 transaction을 시작해야함.")]),e._v(" "),_("li",[e._v("트랜잭션은 db object로부터 나옴.")]),e._v(" "),_("li",[e._v("디비에 데이터 추가\n"),_("ul",[_("li",[e._v('var transaction = db.transaction(["customers"], "readwrite”);')]),e._v(" "),_("li",[e._v("transaction()함수는 3개의 인자를 가지고(2개는 옵션) transaction object를 반환한다.")]),e._v(" "),_("li",[e._v("[“customers”] :트랜젝션이 있는?  오브젝트스토어들의 리스트.all object stores를 쓰려면 빈칸으로 해도 됨.")]),e._v(" "),_("li",[e._v("“readwrite”안쓰면 “readonly”로 됨.")]),e._v(" "),_("li",[e._v("트랜잭션의 라이프타임을 알아야 함.")]),e._v(" "),_("li",[e._v("트랜잭션은 3가지 타입의 DOM event(error, abort, complete)를 받음.\n"),_("ul",[_("li",[e._v("에러 나면 위에 error()로 가겠지.")])])])])]),e._v(" "),_("li",[e._v("디비에 데이터 삭제")])])]),e._v(" "),_("li",[e._v("디비에 데이터 가져오기\nhttps://developer.mozilla.org/ko/docs/IndexedDB/Using_IndexedDB")])])]),e._v(" "),_("li",[e._v("IndexedDB\n"),_("ul",[_("li",[e._v("사용자의 브라우저에 데이터를 영구적으로 저장할 수 있는 방법 중 하나.")]),e._v(" "),_("li",[e._v("온라인/오프라인 둘다 가능.")])])])]),e._v(" "),_("h2",{attrs:{id:"refer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[e._v("#")]),e._v(" Refer")]),e._v(" "),_("p",[e._v("https://developer.mozilla.org/ko/docs/IndexedDB\nhttps://developer.mozilla.org/ko/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB")])])}),[],!1,null,null,null);v.default=t.exports}}]);