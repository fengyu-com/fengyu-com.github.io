dg.showModal();
function 加密(str){
  const list = [
    ()=>(Math.ceil(Math.random()*3)),
    ()=>(Math.ceil(Math.random()*3)+3),
    ()=>(Math.ceil(Math.random()*3)+6)
  ];
  let result = "";
  let i = 0;
  for(let s of str.split("")){
    result+=i>0?list[2]():"";
    for(let ss of s.charCodeAt().toString(2)){
      result+=list[Number(ss)]();
    }
    i++;
  }
  return result;
}
function 解密(str){
  const list="000111222";
  let temp = "";
  let result = "";
  for(let s of str.split("")){
    temp+= list[Number(s)-1];
  }
  for(let s of temp.split("2")){
    result+=String.fromCharCode(parseInt(s,2));
  }
  return result;
}
