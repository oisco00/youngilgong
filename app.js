let mediaList = JSON.parse(localStorage.getItem('mediaList')||'[]');

function render(){
  let g=document.getElementById('gallery');
  g.innerHTML='';
  mediaList.sort((a,b)=>a.order-b.order);
  mediaList.forEach((m,i)=>{
    let d=document.createElement('div');
    d.innerHTML = `
    <img src="${m.url}" width="200"><br>
    순서:<input value="${m.order}" onchange="updateOrder(${i},this.value)">
    <button onclick="del(${i})">삭제</button>
    `;
    g.appendChild(d);
  });
}

function upload(){
  let files=document.getElementById('fileInput').files;
  let start=parseInt(document.getElementById('orderStart').value)||1;
  Array.from(files).forEach((f,i)=>{
    let url=URL.createObjectURL(f);
    mediaList.push({url,order:start+i});
  });
  localStorage.setItem('mediaList',JSON.stringify(mediaList));
  render();
}

function updateOrder(i,val){
  mediaList[i].order=parseInt(val);
  localStorage.setItem('mediaList',JSON.stringify(mediaList));
  render();
}

function del(i){
  mediaList.splice(i,1);
  localStorage.setItem('mediaList',JSON.stringify(mediaList));
  render();
}

render();
