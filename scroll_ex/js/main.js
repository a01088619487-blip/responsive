window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".dot");
  //console.log(sections);
  //console.log(dots);
  //Nodeltist안에 잘담겨잇는거 확인함
  sections.forEach((section, index) => {
    //console.log(section,index); section들어가잇는거확인함
    // 섹션영역이 화면위쪽에서 얼마나 떨어져있는지 확인
    // .getBoundingClientRect() 영역이 브라우저 화면의 맨위에서 얼마나 떨어져 있는지 알려주는 메서드
    const top = section.getBoundingClientRect().top;
    // console.log(top);
    // 화면 위쪽에서 가까워지면 해당 메뉴 활성화 시키기
    if( top < window.innerHeight / 2){
        dots.forEach((dot)=>{
            dot.classList.remove("active")
            
        })
        dots[index].classList.add("active")
    }
  });
});
