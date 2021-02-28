(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(t,a,s){"use strict";s.r(a);var _=s(39),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hobbycoding을-hobbycoding으로-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hobbycoding을-hobbycoding으로-만들기"}},[t._v("#")]),t._v(" hobbycoding을 hobbycoding으로 만들기")]),t._v(" "),s("h2",{attrs:{id:"django-프로젝트-시작하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-프로젝트-시작하기"}},[t._v("#")]),t._v(" django 프로젝트 시작하기")]),t._v(" "),s("ul",[s("li",[t._v("가상환경 세팅(virtualenv, autoenv)")]),t._v(" "),s("li",[t._v("장고 설치 "),s("code",[t._v("pip install django")])]),t._v(" "),s("li",[t._v("hobbycoding 프로젝트 개설\n"),s("ul",[s("li",[s("code",[t._v("django-admin.py startproject hobbycoding")])]),t._v(" "),s("li",[t._v("하면 현재 위치에 hobbycoding이란 장고 프로젝트 루트 폴더가 만들어짐.")])])]),t._v(" "),s("li",[t._v("서버 돌리기\n"),s("ul",[s("li",[s("code",[t._v("./manage.py runserver")])])])]),t._v(" "),s("li",[t._v("bower, grunt로 의존성 관리\n"),s("ul",[s("li",[t._v("https://milooy.wordpress.com/2016/01/20/django-bower-grunt/")])])]),t._v(" "),s("li",[t._v("디비 동기화\n"),s("ul",[s("li",[s("code",[t._v("./manage.py migrate")])])])]),t._v(" "),s("li",[t._v("슈퍼유저 만들기\n"),s("ul",[s("li",[s("code",[t._v("./manage.py createsuperuser")])])])]),t._v(" "),s("li",[t._v("앱 만들기\n"),s("ul",[s("li",[s("code",[t._v("./manage.py startapp meetup")])])])]),t._v(" "),s("li",[s("code",[t._v("requirements.txt")]),t._v("만들기\n"),s("ul",[s("li",[t._v("django랑 Pillow넣어둠")])])]),t._v(" "),s("li",[s("code",[t._v("pip install -r requirements.txt")])]),t._v(" "),s("li",[t._v("meetup 모델 만들기\n"),s("ul",[s("li",[s("code",[t._v("model.py")]),t._v("에 모델 짜기")])])]),t._v(" "),s("li",[s("code",[t._v("settings.py")]),t._v("의 "),s("code",[t._v("INSTALLED_APPS")]),t._v("에 "),s("code",[t._v("meetup")]),t._v("추가하기")]),t._v(" "),s("li",[t._v("만든 모델 디비 마이그레이션\n"),s("ul",[s("li",[s("code",[t._v("./manage.py makemigrations")])])])]),t._v(" "),s("li",[t._v("meetup의 "),s("code",[t._v("admin.py")]),t._v("에 밋업 모델 등록하기\n"),s("ul",[s("li",[s("code",[t._v("from meetup.models import Meetup")])]),t._v(" "),s("li",[s("code",[t._v("admin.site.register(Meetup)")])])])])]),t._v(" "),s("h2",{attrs:{id:"static파일-관리하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static파일-관리하기"}},[t._v("#")]),t._v(" static파일 관리하기")]),t._v(" "),s("p",[t._v("settings.py에 static url이 기본으로 명시되어있다.\n웹 페이지에서 사용할 정적 파일의 최상위 URL경로.\n이 최상위 경로 자체는 실제 파일이나 디렉토리가 아니며, URL로만 존재하는 단위.\n이용자 마음대로 정해도 무방.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("STATIC_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/static/'")]),t._v("\n")])])]),s("p",[t._v("이는 템플릿에서 "),s("code",[t._v("static")]),t._v("이란 워드로 호출해서 쓸 수 있다.\n앱마다(혹은 최상위에 하나) "),s("code",[t._v("static")]),t._v("디렉토리를 만들어서 그 안에 필요한 스태틱파일들을 미리 넣어준다.(아닌가? 자동으로 static디렉토리는 읽어오는건가?)")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" load staticfiles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#스태틱파일 불러오기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{% static "')]),t._v("my_app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("myexample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" %}"')]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My image"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("code",[t._v("static asset")]),t._v("을 별도로 추가해 줄 수도 있다.\n"),s("code",[t._v("bower")]),t._v("로 추가해준 컴퍼넌트 디렉토리를 "),s("code",[t._v("components")]),t._v("라는 워드로 추가해줬다.\n"),s("code",[t._v("./manage.py findstatic")]),t._v("을 하면 "),s("code",[t._v("STATICFILES_DIRS")]),t._v("에 설정한 경로에서 지정한 정적 파일을 찾음.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("STATICFILES_DIRS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"components"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bower_components"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("STATIC_ROOT")]),t._v("는 django프로젝트에서 사용하는 모든 정적 파일을 한 곳에 모아넣는 경로.\n"),s("code",[t._v("./manage.py collectstatic")]),t._v("명령어로 한 곳에 모은다.\n각 django앱 디렉터리에 있는 static디렉터리랑 STATICFILES_DIR에 지정된 경로에 있는 모든 파일을 모음.\n개발과정(settings.py의 DEBUG가 True)에선 "),s("code",[t._v("STATIC_ROOT")]),t._v("설정은 작용 않으며, 실 서비스 배포를 위한 설정 항목.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("STATIC_ROOT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"collected_static"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("개발 단계에서 정적 파일을 제공하려면 "),s("code",[t._v("static")]),t._v("함수를 import하고 urlpatterns에 추가한다.\n이는 DEBUG=True인 경우에만 동작.\n근데 static file은 이런 처리 안해도 개발 단계에선 잘 제공됨(django app중 "),s("code",[t._v("django.contrib.staticfiles")]),t._v("가 해줌). media file은 urls.py에서 처리해줘야함.")]),t._v(" "),s("p",[t._v("정리하자면, 정적 파일이 있는 경로를 "),s("code",[t._v("STATICFILES_DIRS")]),t._v("에 지정하면 개발 단계에선 더 신경쓸 것이 없다.")]),t._v(" "),s("h2",{attrs:{id:"media-file관리하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media-file관리하기"}},[t._v("#")]),t._v(" Media file관리하기")]),t._v(" "),s("p",[t._v("이용자가 웹에서 업로드한 정적 파일.\n미리 준비해두고 제공하는 static file과 달리 언제 어떤 파일이 추가될 지 모르므로 "),s("code",[t._v("findstatic")]),t._v("이나 "),s("code",[t._v("collectstatic")]),t._v("같은 명령어는 media file에 대해선 무방함.")]),t._v(" "),s("p",[s("code",[t._v("MEDIA_ROOT")]),t._v("는 업로드가 끝난 파일을 배치할 최상위 경로를 지정하는 설정 항목. STATIC_ROOT보다 STATICFILES_DIR이랑 더 비슷하다.\n"),s("code",[t._v("MEDIA_URL")]),t._v("은 STATIC_URL이랑 비슷.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("MEDIA_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/media/'")]),t._v("\nMEDIA_ROOT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"media"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#혹은 이렇게")]),t._v("\n\nMEDIA_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/uploads/'")]),t._v("\nMEDIA_ROOT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uploaded_files'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("그리고 urls.py에도 추가해준다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("urlpatterns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" static"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MEDIA_URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document_root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MEDIA_ROOT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("이는 models.py에서 uploade_to에서 이렇게 쓸 수 있다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Photo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    image_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImageField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("upload_to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y/%m/%d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),s("p",[t._v("http://blog.hannal.com/2015/04/start_with_django_webframework_06/\nhttp://intersnipe.blogspot.kr/2015/02/django-media-file-local-s3.html")]),t._v(" "),s("h2",{attrs:{id:"user-model-확장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-model-확장"}},[t._v("#")]),t._v(" User Model 확장")]),t._v(" "),s("p",[t._v("http://initialkommit.github.io/2015/05/28/extending-the-existing-user-model/\nhttps://www.caktusgroup.com/blog/2013/08/07/migrating-custom-user-model-django/")]),t._v(" "),s("h2",{attrs:{id:"todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),s("ul",[s("li",[t._v("meetup 모델 짜기")]),t._v(" "),s("li",[t._v("migrations폴더랑 db는 gitignore에 추가해야하나?")]),t._v(" "),s("li",[t._v("메인화면, 밋업 만들기, 밋업 리스트, 밋업 디테일 사이클 만들기")]),t._v(" "),s("li",[t._v("http://www.getmdl.io/index.html 적용하기")])]),t._v(" "),s("h2",{attrs:{id:"done"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[t._v("#")]),t._v(" DONE")]),t._v(" "),s("ul",[s("li",[t._v("grunt, bower로 구조잡기")]),t._v(" "),s("li",[t._v("static file, media file이해하기")])]),t._v(" "),s("h2",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" MODEL")]),t._v(" "),s("ul",[s("li",[t._v("meetup\n"),s("ul",[s("li",[t._v("모임 주최자")]),t._v(" "),s("li",[t._v("모임이름")]),t._v(" "),s("li",[t._v("모임 디테일 정보")]),t._v(" "),s("li",[t._v("관심보인 사람 목록")]),t._v(" "),s("li",[t._v("모임 장소")]),t._v(" "),s("li",[t._v("댓글")]),t._v(" "),s("li",[t._v("모임 태그")])])]),t._v(" "),s("li",[t._v("User\n"),s("ul",[s("li",[t._v("썸네일")]),t._v(" "),s("li",[t._v("닉네임")]),t._v(" "),s("li",[t._v("이메일")]),t._v(" "),s("li",[t._v("비번")])])])]),t._v(" "),s("h2",{attrs:{id:"기능-명세"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기능-명세"}},[t._v("#")]),t._v(" 기능 명세")]),t._v(" "),s("ul",[s("li",[t._v("auth\n"),s("ul",[s("li",[t._v("가입\n"),s("ul",[s("li",[t._v("종류\n"),s("ul",[s("li",[t._v("그냥 가입")]),t._v(" "),s("li",[t._v("페이스북 가입")])])]),t._v(" "),s("li",[t._v("필드\n"),s("ul",[s("li",[t._v("필수\n"),s("ul",[s("li",[t._v("이메일(중복x)")]),t._v(" "),s("li",[t._v("닉네임(중복x)")]),t._v(" "),s("li",[t._v("pw")]),t._v(" "),s("li",[t._v("이메일 인증(activate)")])])]),t._v(" "),s("li",[t._v("추후 입력(선택)\n"),s("ul",[s("li",[t._v("domain(태그식)(e.g. angular, javascript)")]),t._v(" "),s("li",[t._v("사용자 썸네일")])])])])])])]),t._v(" "),s("li",[t._v("로그인\n"),s("ul",[s("li",[t._v("자동로그인(checkbox)")])])]),t._v(" "),s("li",[t._v("로그아웃")]),t._v(" "),s("li",[t._v("탈퇴")])])]),t._v(" "),s("li",[t._v("메인화면\n"),s("ul",[s("li",[t._v("하코 주최")]),t._v(" "),s("li",[t._v("다가오는 하코 리스트\n"),s("ul",[s("li",[t._v("관심 달기(하트)")])])])])]),t._v(" "),s("li",[t._v("하코 디테일\n"),s("ul",[s("li",[t._v("썸네일")]),t._v(" "),s("li",[t._v("주최자 정보")]),t._v(" "),s("li",[t._v("관심 달기(하트)\n"),s("ul",[s("li",[t._v("하트 한 사람들이 보인다.")])])]),t._v(" "),s("li",[t._v("모임 정보\n"),s("ul",[s("li",[t._v("모임 날짜")]),t._v(" "),s("li",[t._v("모임장소")]),t._v(" "),s("li",[t._v("태그")])])]),t._v(" "),s("li",[t._v("댓글 달기")]),t._v(" "),s("li",[t._v("공유\n"),s("ul",[s("li",[t._v("페북")]),t._v(" "),s("li",[t._v("트위터")])])]),t._v(" "),s("li",[t._v("페북 좋아요 달기")]),t._v(" "),s("li",[t._v("수정")]),t._v(" "),s("li",[t._v("삭제")])])]),t._v(" "),s("li",[t._v("하코 주최\n"),s("ul",[s("li",[t._v("하코 썸네일")]),t._v(" "),s("li",[t._v("모임 정보 (디테일이랑 같음)")]),t._v(" "),s("li",[t._v("페북에 함께 올리기(?)")])])]),t._v(" "),s("li",[t._v("나\n"),s("ul",[s("li",[t._v("내가 주최한 하코 리스트")]),t._v(" "),s("li",[t._v("관심 표한 하코 리스트\n"),s("ul",[s("li",[t._v("다가오는 하코")]),t._v(" "),s("li",[t._v("지나간 하코")])])]),t._v(" "),s("li",[t._v("내정보\n"),s("ul",[s("li",[t._v("썸네일")]),t._v(" "),s("li",[t._v("ID")]),t._v(" "),s("li",[t._v("PW 변경")]),t._v(" "),s("li",[t._v("닉네임 변경")]),t._v(" "),s("li",[t._v("페이스북 연동")])])])])]),t._v(" "),s("li",[t._v("기타\n"),s("ul",[s("li",[t._v("검색")]),t._v(" "),s("li",[t._v("채팅 달까?")]),t._v(" "),s("li",[t._v("로고\n"),s("ul",[s("li",[t._v("하비코딩 + 고래상어")])])]),t._v(" "),s("li",[t._v("도메인\n"),s("ul",[s("li",[t._v("hobbycoding.do")])])])])])]),t._v(" "),s("h2",{attrs:{id:"사이트맵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사이트맵"}},[t._v("#")]),t._v(" 사이트맵")]),t._v(" "),s("ul",[s("li",[t._v("상단 네비게이션\n"),s("ul",[s("li",[t._v("로고")]),t._v(" "),s("li",[t._v("[비로그인]로그인")]),t._v(" "),s("li",[t._v("[비로그인]회원가입")]),t._v(" "),s("li",[t._v("[로그인완료]내 정보\n"),s("ul",[s("li",[t._v("내가 주최한 hoco")]),t._v(" "),s("li",[t._v("내가 참석한 hoco")]),t._v(" "),s("li",[t._v("설정")]),t._v(" "),s("li",[t._v("로그아웃")])])]),t._v(" "),s("li",[t._v("주최하기")])])]),t._v(" "),s("li",[t._v("메인\n"),s("ul",[s("li",[t._v("위에 작게 사이트 설명 영역 (http://codepen.io/ 참고)")]),t._v(" "),s("li",[t._v("다가오는 hoco 리스트")])])]),t._v(" "),s("li")]),t._v(" "),s("ul",[s("li",[t._v("내가 주최한 hoco")]),t._v(" "),s("li",[t._v("관심 hoco\n"),s("ul",[s("li",[t._v("다가오는")]),t._v(" "),s("li",[t._v("지나간")])])])]),t._v(" "),s("h2",{attrs:{id:"모델-짜기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#모델-짜기"}},[t._v("#")]),t._v(" 모델 짜기")]),t._v(" "),s("p",[t._v("유저 >-< 호코 -< 댓글")]),t._v(" "),s("ul",[s("li",[t._v("한 유저당 여러 호코 만들기")]),t._v(" "),s("li",[t._v("한 유저당 여러 호코 참여하기")]),t._v(" "),s("li",[t._v("한 호코당 여러 댓글")]),t._v(" "),s("li")])])}),[],!1,null,null,null);a.default=v.exports}}]);