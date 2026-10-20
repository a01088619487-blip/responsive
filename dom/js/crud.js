// html 요소가져오기
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#tasckInput");
const taskList = document.querySelector("#taskList");
const count = document.querySelector("#count");
// 저장하는 느낌만 잘참고하긔..
// 할일 데이터를 저장하는 배열
let tasks = [
  {
    id: 1,
    text: "HTML 공부하기",
    done: false,
  },
  {
    id: 2,
    text: "CSS 공부하기",
    done: false,
    //done으로통해 완료되엇는지 안되어잇는지 확인하는
    // id,text,done은 약속키가 아니라 임시키이다
  },
];

//다음에 사용할 id 번호
let nextId = 3;

// C,R,U,D 핵심 기능!

// R - 화면에 목록 읽기or출력 (Read)
function renderTasks() {
  // console.log("read"); 출력 확인 완
  // 기존 화면을 비우기(초기화)
  // #taskList 전체를 초기화 시키겟다!!
  taskList.innerHTML = "";
  //  배열의 데이터를 하나씩 화면에 출력
  tasks.forEach((task) => {
    // forEach가 하나씩 꺼내서 쓰는거
    //console.log(task); // 확인완 스크린샷 2026-10-20 100710
    const liE = document.createElement("li");
    //console.log(li);  // 확인완
    // tasks ID 갯수 만큼 갯수가 생긴다 스크린샷 2026-10-20 100858

    // 할일 내용
    const spanE = document.createElement("span");
    spanE.className = "task-text";
    // panE.className = "task-text";=> <span class="task-text"></span> 이걸 taskList에 작성하겟다
    spanE.textContent = task.text;
    // 급 이해력 떨어짐 여기서부터...
    // console.log(span); // 스크린샷 2026-10-20 100858

    // 완료여부[false에 따라서..]에 따라 클래스 추가
    if (task.done) {
      spanE.classList.add("done");
    }
    // 완료 체크 버튼
    const checkBtn = document.createElement("button");
    //console.log(checkBtn);//스크린샷 2026-10-20 103250
    checkBtn.textContent = task.done ? "완료 취소" : "완료";
    //done 조건이.. task.done 참이면? 첫번째 칸에 오는게 참에대한내용인 완료취소 (삼항연산자)
    // 거짓에 대한 내용이면 "완료"로 나온다
    //console.log(checkBtn); //스크린샷 2026-10-20 103556

    //완료 체크 버튼 클릭시 함수
    checkBtn.addEventListener("click", () => {
      task.done = !task.done;
      //console.log(task.done);//완료버튼 누르면 콘솔에 "true로 바뀜"
      // 두번 누르면 "false"바뀜
      // checkBtn.textContent=task.done ? "완료 취소":"완료"
      // 이걸 이제 화면에 출력되게
      renderTasks(); // 스크린샷 2026-10-20 115634
      //renderTasks 화면 출력함수 재사용중~
    });

    //U - 수정 (Update)
    // 수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit-btn";
    //console.log(editBtn);//스크린샷 2026-10-20 104010
    // List는 더하고 뺄수잇는 속성 NAME은.. 네임정하는거?

    //수정버튼 클릭시 함수
    editBtn.addEventListener("click", () => {
      const nextText = prompt("수정할 내용을 입력하세요.", task.text);
      //수정을 누르면 수정된 팝업창이 뜬다 그리고 task안의 텍스트 를 수정가능
      //사용자가 내용을 입력하고 [확인]을 누르면, 그 입력한 텍스트 문자열이 코드 속으로 들어옴 (위 코드에서는 nextText라는 변수에 저장)
      //[취소]를 누르면 null이라는 값이 반환
      //"수정할 내용을 입력하세요"라는 안내 문구와 함께, 기존 할 일 내용(task.text)이 미리 적혀 있는 입력 팝업 창을 띄우고, 사용자가 새로 입력한 내용을 nextText에 담겠다는 뜻
      //console.log(nextText);확인
      // 여기까지는 콘솔에서 까지만 수정이됨
      // task.text = nextText
      if (nextText !== null && nextText.trim() !== "") {
        task.text = nextText;
      } //이거 해석..

      //화면에 보여지게도 해야함
      renderTasks(); //스크린샷 2026-10-20 120504
    });

    // D - 삭제 (Delete)
    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";
    //console.log(deleteBtn); //스크린샷 2026-10-20 104229

    //삭제버튼 클릭시 함수
    deleteBtn.addEventListener("click", () => {
      const ok = confirm("정말 삭제 할까요?"); //삭제알림
      console.log(ok); //스크린샷 2026-10-20 121426
      // 확인 하면 true 아니요 두르면 false
      if (ok) {
        tasks = tasks.filter((item) => {
          // filter검색하는걸 필터링하겟다
          // fulter :현재 삭제하려는 할 일을 제외하고 나머지만 남기기
          return item.id !== task.id; // ? 이해 또 안된다용
        }); //return을 안넣으면 리스트가 다 사라짐
        // return - 결과를 돌려준다
        renderTasks();
      }
    });

    // 버튼을 담을 영역
    //li안에 span으로 할일 내용을 만들엇음 그옆에  따로 만들 영역 버튼
    const actions = document.createElement("div");
    //console.log(actions);//스크린샷 2026-10-20 104412
    actions.className = "actions";
    //console.log(actions);//스크린샷 2026-10-20 104412
    actions.append(checkBtn, editBtn, deleteBtn);
    //console.log(actions);//스크린샷 2026-10-20 104608

    // 목록에 내용과 버튼 넣기
    liE.append(spanE, actions);
    //const liE = document.createElement("li"); 만들엇기때문에 'liE'
    // const spanE = document.createElement("span");만들엇기때문에'spanE'
    //console.log(liE);//스크린샷 2026-10-20 104943
    taskList.append(liE); //스크린샷 2026-10-20 105041
    //taskList를 더해라 누구를? liE를 !!
    //그렇게 되면 버튼 완료,수정,삭제 버튼이 나온다~
  });

  // 전체 갯수와 완료 갯수
  const doneCount = tasks.filter((task) => {
    // console.log(task); //스크린샷 2026-10-20 124207
    return task.done;
  }).length;
  console.log(doneCount); //  tasks의 done이 true 이면 카운트가 들어감
  count.textContent = `전체 ${tasks.length}개 / 완료 ${doneCount}개`;
}

// C - 새 데이터 추가 (Create)
// [내가 입력하 내용을 let tasks에 목록추가]
// 추가 하게되면 taskForm이 인식이 됨!! taskForm이 제출하는 기능이 포함되어잇음
taskForm.addEventListener("submit", (e) => {
  // 사용자가 입력하는 값이 새로고침하면서 없어지는게 있음 그래서
  // 이벤트중에 새로고침하는 기능을 막아줘야함 그래서 ()=>{}중 ()에'E'를 넣어줌
  // 그래서 리셋기능이 없는곳엔 e를 안넣어줘도됨
  //  form과 a태그에 많은곳에서 새로고침 기능이있다
  // form제출시 페이지가 새로고침 되는 기능을 방지
  e.preventDefault(); //이걸로 해서 기능을 막아줌!!
  const text = taskInput.value.trim();
  // trim 이 없으면 빈공간도 내용으로 인식하기 때문에 trim 꼭 필수
  console.log(text); //스크린샷 2026-10-20 113549
  // 빈 내용을 등록하지 않음
  if (text === "") {
    alert("할 일을 입력하세요."); //스크린샷 2026-10-20 113619
    // 공백을 넣어도 알림창을 떠라 까지는 입력이 되엇지만
    // Return이라는 속성을 추가해야지 됨 안그러면 'renderTasks'진행
    // 되면서 객체가 추가가됨
    return; //종료
  }

  // 배열에 새 객체 추가
  //처음 화면 출력 에 대한 내용
  //let tasks  객체 형식으로 추가할거다
  tasks.push({
    id: nextId, // 위에 다음 번호 아이디만들어놧움!
    text: text, //유저가 작성한 텍스트를 넣겟다
    done: false,
  }); //배열에 넣어라 무엇을 ->{객체}가 들어가겟다
  console.log(tasks); //스크린샷 2026-10-20 114301
  nextId++; //++을 해야 아이디가 그다음 4,5,6으로 바뀐다
  //스크린샷 2026-10-20 114502
  // 입력창 지우기 리셋~
  taskInput.value = ""; //추가하면 입력창에 글자없어짐

  // 변경된 (추가된)배열을 화면에 출력
  renderTasks();
  //우리가 만들어둔 renderTasks 함수가 있어서 이거롤 재사용 함
  // 화면 출력 함수 재사용중
});

// renderTasks(); 이 기능을 작성해야 콘솔에 나옴
renderTasks();
