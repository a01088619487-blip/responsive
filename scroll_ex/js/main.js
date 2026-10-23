window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".dot");
  //console.log(sections);
  //console.log(dots);
  //Nodeltist안에 잘담겨잇는거 확인함

  // gotop기능
  const gotopBtn = document.querySelector("#goTop");
  // console.log(document.documentElement.scrollTop);
  // 스크린샷 2026-10-23 094334 스크롤할때마다 높이가 찍힘
  // 이걸해보는이유가 언제쯤에서 높이를 정하면 좋을지 높이를 알수있다
  // 난 750이 좋으니 750으로 해야징
  if (document.documentElement.scrollTop > 750){
    gotopBtn.classList.add("active");
  }else{
    gotopBtn.classList.remove("active")
  }
// gotop버튼 클릭시 위로가기 함수
gotopBtn.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    // behavior:"smooth" 
    // 이걸 쓸려면 css /* 스크롤 행동 */
//html{ scroll-behavior: smooth;}  이걸 빼야함
  })
})
  sections.forEach((section, index) => {
    //console.log(section,index); section들어가잇는거확인함
    // 섹션영역이 화면위쪽에서 얼마나 떨어져있는지 확인
    // .getBoundingClientRect() 영역이 브라우저 화면의 맨위에서 얼마나 떨어져 있는지 알려주는 메서드
    const top = section.getBoundingClientRect().top;
    // console.log(top);
    // 화면 위쪽에서 가까워지면 해당 메뉴 활성화 시키기
    if (top < window.innerHeight / 2) {
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      dots[index].classList.add("active");
    }
  });
});
