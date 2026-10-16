// deper 없이 사용하는법
window.addEventListener("load", () => {
  // console.log("hi"); 콘솔확인완
  // 윈도우 다읽고 난 다음에 실행하라
  const open = document.querySelector("#open");
  const closBtn = document.querySelector("#close");
  const detail = document.querySelector("#detail");

  // console.log(open);
  //   상세 설명 보기
  open.addEventListener("click", () => {
    detail.style.display = "block";
    open.style.display = "none";
  });
  // 상세설명 닫기
  // closBtn.addEventListener("click" ,() =>{
  //     detail.style.display ="none";
  //     open.style.display = "block";
  //     open.style.backgroundColor ="red";
    //   open.style.color ="white";
  // })

  // if 조건문 닫기용 도 가능!!!
  closBtn.addEventListener("click", () => {
    if (detail.style.display === "block") {
      detail.style.display = "none";
      open.style.display = "block";
      open.style.backgroundColor ="red";
      open.style.color ="white";
    }
  });
});
