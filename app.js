
const seedData = window.SEED_DATA;
const STORAGE_KEY = 'youngil-jeong-clan-site-v1';

function deepClone(v){ return JSON.parse(JSON.stringify(v)); }
function loadState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved) return saved;
  }catch(e){}
  return deepClone(seedData);
}
let state = loadState();

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function money(n){
  const num = Number(n || 0);
  return new Intl.NumberFormat('ko-KR').format(num);
}

function formatDate(d){
  if(!d) return '';
  return d;
}

function setPanel(id){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.topnav button').forEach(b=>b.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
  document.querySelector(`[data-panel="${id}"]`)?.classList.add('active');
  location.hash = id;
}

function sourceBadge(v){
  if(v === 'public') return '<span class="verify public">공개자료 검증</span>';
  if(v === 'family') return '<span class="verify family">가족제공 정보</span>';
  return '<span class="verify needs_review">족보 대조 필요</span>';
}

function renderHome(){
  document.getElementById('siteTitle').textContent = state.siteTitle;
  document.getElementById('siteSubtitle').textContent = state.subtitle;

  const notables = document.getElementById('notables');
  notables.innerHTML = state.notables.map(n => `
    <div class="item">
      <div class="pill">${n.period}</div>
      <h3 style="margin-top:10px">${n.name}</h3>
      <div>${n.achievement}</div>
      <div class="small muted" style="margin-top:8px">출처 기준: ${n.source}</div>
    </div>
  `).join('');

  const wondang = document.getElementById('wondangInfo');
  wondang.innerHTML = state.wondangInfo.map(k => `
    <div class="kv"><div class="muted">${k.label}</div><div>${k.value}</div></div>
  `).join('');

  const ach = document.getElementById('myAchievements');
  ach.innerHTML = state.myAchievements.map(a=>`
    <div class="item">
      <h3>${a.title}</h3>
      <div class="muted">${a.detail}</div>
    </div>
  `).join('');

  document.getElementById('homeWarning').innerHTML =
    '안내: 공개 웹에서 바로 확인되는 정보와 사용자님이 직접 제공한 직계 정보를 구분해 표기했습니다. 2~26대 좌랑공파 세부 계대, 원당 재실 창건 연혁, 제향 인물, 문집·유물 등은 추후 족보 원문과 문중 보유 자료를 대조해 보완하는 구조입니다.';
}

function lineageArray(){
  // simple longest path using seed order
  const map = Object.fromEntries(state.treeNodes.map(n=>[n.id,n]));
  const ids = ['n1','n2','n3','n27','n28','n29','n30'].filter(id=>map[id]);
  // plus appended descendants chained from n30 or user-added
  // BFS from n29
  const childrenByParent = {};
  state.treeEdges.forEach(([a,b]) => {
    (childrenByParent[a] ||= []).push(b);
  });
  const arr = [];
  let cur = 'n1';
  const visited = new Set();
  while(cur && !visited.has(cur) && map[cur]){
    visited.add(cur); arr.push(map[cur]);
    const children = childrenByParent[cur] || [];
    cur = children[0];
  }
  return arr.length ? arr : state.treeNodes;
}

function renderTree(){
  const arr = lineageArray();
  const wrap = document.getElementById('treeView');
  wrap.innerHTML = '';
  arr.forEach((node, idx) => {
    const row = document.createElement('div');
    row.innerHTML = `
      <div class="tree-row">
        <div class="person" data-id="${node.id}">
          <div class="gen">${node.gen}</div>
          <div class="name">${node.name}</div>
          <div class="hanja">${node.hanja || ''}</div>
          <div><span class="branch">${node.branch || '미분류'}</span>${sourceBadge(node.verified)}</div>
          <div class="small muted" style="margin-top:10px">${node.note || ''}</div>
          <div class="actions" style="margin-top:12px">
            <button class="secondary" onclick="prefillDescendant('${node.id}')">하위 후손 추가</button>
            <button class="secondary" onclick="showNodeDetail('${node.id}')">상세보기</button>
          </div>
        </div>
      </div>
    `;
    wrap.appendChild(row);
    if(idx < arr.length-1){
      const c = document.createElement('div');
      c.className = 'connector';
      wrap.appendChild(c);
    }
  });

  const me = state.treeNodes.find(n=>n.name.includes('정한채'));
  if(me){
    document.getElementById('myPosition').innerHTML = `
      <div class="notice">
        <strong>나의 위치</strong><br>
        ${me.gen} · ${me.name} ${me.hanja ? '('+me.hanja+')' : ''} · ${me.branch}<br>
        상위 직계: 27대 정용범 → 28대 정병운 → 29대 정한채 → 30대 정현규
      </div>
    `;
  }
}

function showNodeDetail(id){
  const node = state.treeNodes.find(n=>n.id===id);
  if(!node) return;
  const box = document.getElementById('nodeDetail');
  box.innerHTML = `
    <div class="card detailbox">
      <h3>${node.name} <span class="muted">${node.hanja || ''}</span></h3>
      <div class="kv"><div class="muted">세대</div><div>${node.gen}</div></div>
      <div class="kv"><div class="muted">분류</div><div>${node.branch || ''}</div></div>
      <div class="kv"><div class="muted">검증상태</div><div>${node.verified === 'public' ? '공개자료 검증' : node.verified === 'family' ? '가족 제공 정보' : '족보 대조 필요'}</div></div>
      <div class="kv"><div class="muted">설명</div><div>${node.note || ''}</div></div>
    </div>
  `;
}

function prefillDescendant(parentId){
  document.getElementById('parentId').value = parentId;
  document.getElementById('lineageForm').scrollIntoView({behavior:'smooth'});
}

function addDescendant(ev){
  ev.preventDefault();
  const fd = new FormData(ev.target);
  const id = 'n' + Date.now();
  const node = {
    id,
    name: fd.get('name'),
    hanja: fd.get('hanja'),
    gen: fd.get('gen'),
    branch: fd.get('branch') || '직계',
    verified: 'family',
    note: fd.get('note')
  };
  const parentId = fd.get('parentId');
  state.treeNodes.push(node);
  state.treeEdges.push([parentId, id]);
  saveState();
  renderTree();
  ev.target.reset();
  document.getElementById('parentId').value = 'n29';
  alert('하위 후손이 등록되었습니다.');
}

function renderRecords(){
  const rec = document.getElementById('receiptList');
  rec.innerHTML = state.receipts.length ? state.receipts.map(r=>`
    <div class="receipt-card">
      ${r.image ? `<img src="${r.image}" class="thumb" alt="영수증">` : `<div class="thumb" style="display:grid;place-items:center">이미지 없음</div>`}
      <div>
        <div style="display:flex;justify-content:space-between;gap:10px;align-items:center">
          <strong>${r.title || '영수증'}</strong>
          <span class="pill">${r.accountName || '미지정 계좌'}</span>
        </div>
        <div class="small muted">${formatDate(r.date)} · ${r.category || ''}</div>
        <div style="margin-top:6px">${r.memo || ''}</div>
        <div style="margin-top:8px;font-weight:800">${money(r.amount)}원</div>
      </div>
    </div>
  `).join('') : `<div class="notice">아직 등록된 영수증이 없습니다.</div>`;

  const accountSelect = document.getElementById('receiptAccount');
  const accountSelect2 = document.getElementById('entryAccount');
  const accountSelect3 = document.getElementById('csvAccount');
  const options = state.ledgerAccounts.map(a=>`<option value="${a.id}">${a.name} (${a.bank})</option>`).join('');
  [accountSelect, accountSelect2, accountSelect3].forEach(el => { if(el) el.innerHTML = options; });

  renderAccounts();
  renderLedgerTable();
}

function addReceipt(ev){
  ev.preventDefault();
  const fd = new FormData(ev.target);
  const file = fd.get('image');
  const accountId = fd.get('accountId');
  const acc = state.ledgerAccounts.find(a=>a.id===accountId);
  const base = {
    id:'r'+Date.now(),
    title:fd.get('title'),
    date:fd.get('date'),
    category:fd.get('category'),
    amount:Number(fd.get('amount')||0),
    memo:fd.get('memo'),
    accountId,
    accountName:acc ? acc.name : ''
  };
  if(file && file.size){
    const reader = new FileReader();
    reader.onload = () => {
      base.image = reader.result;
      state.receipts.unshift(base);
      saveState(); renderRecords(); ev.target.reset();
    };
    reader.readAsDataURL(file);
  } else {
    state.receipts.unshift(base);
    saveState(); renderRecords(); ev.target.reset();
  }
}

function renderAccounts(){
  const wrap = document.getElementById('accounts');
  wrap.innerHTML = '';
  state.ledgerAccounts.forEach(acc=>{
    const rows = state.ledgerEntries.filter(e=>e.accountId===acc.id);
    let bal = Number(acc.openingBalance || 0);
    rows.forEach(r => { bal += Number(r.deposit||0) - Number(r.withdraw||0); });
    const deposits = rows.reduce((s,r)=>s+Number(r.deposit||0),0);
    const withdraws = rows.reduce((s,r)=>s+Number(r.withdraw||0),0);
    const box = document.createElement('div');
    box.className = 'stat';
    box.innerHTML = `<div>${acc.name}</div>
      <div class="small muted">${acc.bank} · ${acc.number}</div>
      <div class="v">${money(bal)}</div>
      <div class="small muted">입금 ${money(deposits)} / 출금 ${money(withdraws)}</div>`;
    wrap.appendChild(box);
  });
}

function addAccount(ev){
  ev.preventDefault();
  const fd = new FormData(ev.target);
  state.ledgerAccounts.push({
    id:'acc'+Date.now(),
    name:fd.get('name'),
    bank:fd.get('bank'),
    number:fd.get('number'),
    openingBalance:Number(fd.get('openingBalance')||0)
  });
  saveState();
  renderRecords();
  ev.target.reset();
}

function addLedgerEntry(ev){
  ev.preventDefault();
  const fd = new FormData(ev.target);
  state.ledgerEntries.unshift({
    id:'e'+Date.now(),
    accountId:fd.get('accountId'),
    date:fd.get('date'),
    desc:fd.get('desc'),
    withdraw:Number(fd.get('withdraw')||0),
    deposit:Number(fd.get('deposit')||0),
    balance:Number(fd.get('balance')||0),
    note:fd.get('note'),
    evidence:''
  });
  saveState();
  renderRecords();
  ev.target.reset();
}

function renderLedgerTable(){
  const body = document.getElementById('ledgerBody');
  body.innerHTML = '';
  state.ledgerEntries.forEach(e=>{
    const acc = state.ledgerAccounts.find(a=>a.id===e.accountId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${e.date || ''}</td>
      <td>${acc ? acc.name : ''}</td>
      <td>${e.desc || ''}</td>
      <td>${money(e.deposit||0)}</td>
      <td>${money(e.withdraw||0)}</td>
      <td>${e.balance ? money(e.balance) : '-'}</td>
      <td>${e.note || ''}</td>
    `;
    body.appendChild(tr);
  });
}

function importCsv(ev){
  ev.preventDefault();
  const accountId = document.getElementById('csvAccount').value;
  const file = document.getElementById('csvFile').files[0];
  if(!file){ alert('CSV 파일을 선택하세요.'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || '').trim();
    const lines = text.split(/\r?\n/).filter(Boolean);
    if(lines.length < 2){ alert('CSV 내용이 부족합니다.'); return; }
    const header = lines[0].split(',').map(s=>s.trim().toLowerCase());
    const idx = {
      date: header.indexOf('date'),
      desc: header.indexOf('desc'),
      withdraw: header.indexOf('withdraw'),
      deposit: header.indexOf('deposit'),
      balance: header.indexOf('balance'),
      note: header.indexOf('note')
    };
    let added = 0;
    for(let i=1;i<lines.length;i++){
      const cols = lines[i].split(',').map(s=>s.trim());
      state.ledgerEntries.push({
        id:'e'+Date.now()+i,
        accountId,
        date: cols[idx.date] || '',
        desc: cols[idx.desc] || '',
        withdraw: Number((cols[idx.withdraw] || '0').replace(/,/g,'')),
        deposit: Number((cols[idx.deposit] || '0').replace(/,/g,'')),
        balance: Number((cols[idx.balance] || '0').replace(/,/g,'')),
        note: cols[idx.note] || ''
      });
      added++;
    }
    saveState();
    renderRecords();
    alert(`CSV ${added}건을 불러왔습니다.`);
    document.getElementById('csvForm').reset();
  };
  reader.readAsText(file, 'utf-8');
}

function exportData(){
  const blob = new Blob([JSON.stringify(state,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'youngil-jeong-site-data.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function resetData(){
  if(!confirm('저장된 데이터 전체를 초기화할까요?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = deepClone(seedData);
  renderAll();
}


const mediaState = {
  items: [],
  folderName: ''
};

function isImageFile(name=''){
  return /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(name);
}
function isVideoFile(name=''){
  return /\.(mp4|webm|ogg|mov|m4v)$/i.test(name);
}
function guessMediaTitle(name=''){
  const clean = name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
  if(/묘사|묘제|제향|봉행/i.test(clean)) return clean.replace(/혼사/gi, '묘사');
  return clean;
}
function classifyMediaTitle(title=''){
  if(/묘사|묘제|제향|봉행/i.test(title)) return '묘사 기록';
  if(/재실|원당/i.test(title)) return '재실 기록';
  if(/벌초|묘역/i.test(title)) return '묘역 관리';
  return '문중 기록';
}
function buildMediaItem(file, src){
  const type = isVideoFile(file.name) ? 'video' : 'image';
  return {
    name: file.name,
    title: guessMediaTitle(file.name),
    type,
    category: classifyMediaTitle(file.name),
    size: file.size || 0,
    src
  };
}
function mediaBytes(bytes){
  const n = Number(bytes || 0);
  if(n >= 1024*1024) return (n / (1024*1024)).toFixed(1) + 'MB';
  if(n >= 1024) return (n / 1024).toFixed(1) + 'KB';
  return n + 'B';
}
function renderMediaSummary(){
  const wrap = document.getElementById('mediaSummary');
  if(!wrap) return;
  const imgs = mediaState.items.filter(i=>i.type==='image').length;
  const vids = mediaState.items.filter(i=>i.type==='video').length;
  const total = mediaState.items.reduce((s,i)=>s+Number(i.size||0),0);
  wrap.innerHTML = `
    <div class="stat"><div class="v">${mediaState.items.length}</div><div>전체 파일</div></div>
    <div class="stat"><div class="v">${imgs}</div><div>사진</div></div>
    <div class="stat"><div class="v">${vids}</div><div>영상</div></div>
    <div class="stat"><div class="v">${mediaBytes(total)}</div><div>${mediaState.folderName ? mediaState.folderName : '현재 선택 자료'}</div></div>
  `;
}
function renderMediaGallery(){
  const wrap = document.getElementById('mediaGallery');
  if(!wrap) return;
  if(!mediaState.items.length){
    wrap.innerHTML = `<div class="notice">아직 불러온 사진·영상이 없습니다. 위의 <strong>폴더 선택</strong> 또는 <strong>파일 여러 개 선택</strong>을 이용하세요.</div>`;
    renderMediaSummary();
    return;
  }
  wrap.innerHTML = mediaState.items.map(item => `
    <div class="media-card">
      <div class="media-preview">
        ${item.type === 'image'
          ? `<a href="${item.src}" target="_blank" rel="noreferrer"><img src="${item.src}" alt="${item.title}"></a>`
          : `<video controls preload="metadata"><source src="${item.src}"></video>`}
      </div>
      <div class="media-body">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
          <strong>${item.title}</strong>
          <span class="pill">${item.category}</span>
        </div>
        <div class="small muted" style="margin-top:8px">${item.name}</div>
        <div class="small muted" style="margin-top:4px">${item.type === 'image' ? '사진' : '영상'} · ${mediaBytes(item.size)}</div>
      </div>
    </div>
  `).join('');
  renderMediaSummary();
}
async function pickMediaFolder(){
  if(!window.showDirectoryPicker){
    alert('이 브라우저는 폴더 선택 기능을 지원하지 않습니다. 아래의 "파일 여러 개 선택" 버튼을 사용하세요.');
    return;
  }
  try{
    const dirHandle = await window.showDirectoryPicker();
    const items = [];
    for await (const entry of dirHandle.values()){
      if(entry.kind !== 'file') continue;
      if(!(isImageFile(entry.name) || isVideoFile(entry.name))) continue;
      const file = await entry.getFile();
      items.push(buildMediaItem(file, URL.createObjectURL(file)));
    }
    items.sort((a,b)=>a.name.localeCompare(b.name, 'ko'));
    mediaState.items = items;
    mediaState.folderName = dirHandle.name || '선택 폴더';
    renderMediaGallery();
    setPanel('panel-media');
  }catch(err){
    if(err && err.name !== 'AbortError'){
      alert('폴더를 불러오지 못했습니다.');
      console.error(err);
    }
  }
}
function handleMediaFiles(ev){
  const files = Array.from(ev.target.files || []).filter(file => isImageFile(file.name) || isVideoFile(file.name));
  mediaState.items = files.map(file => buildMediaItem(file, URL.createObjectURL(file)))
    .sort((a,b)=>a.name.localeCompare(b.name, 'ko'));
  mediaState.folderName = '선택 파일';
  renderMediaGallery();
  setPanel('panel-media');
}

function renderSources(){
  const wrap = document.getElementById('sourceList');
  wrap.innerHTML = window.SOURCE_LIST.map((s, i)=>`
    <a href="${s.url}" target="_blank" rel="noreferrer">
      <strong>${i+1}. ${s.title}</strong><br>
      <span class="small muted">${s.desc}</span>
    </a>
  `).join('');
}

function renderAll(){
  renderHome();
  renderTree();
  renderRecords();
  renderSources();
  renderMediaGallery();
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.topnav button').forEach(btn=>{
    btn.addEventListener('click', ()=> setPanel(btn.dataset.panel));
  });
  document.getElementById('lineageForm').addEventListener('submit', addDescendant);
  document.getElementById('receiptForm').addEventListener('submit', addReceipt);
  document.getElementById('accountForm').addEventListener('submit', addAccount);
  document.getElementById('entryForm').addEventListener('submit', addLedgerEntry);
  document.getElementById('csvForm').addEventListener('submit', importCsv);
  document.getElementById('exportBtn').addEventListener('click', exportData);
  document.getElementById('resetBtn').addEventListener('click', resetData);
  document.getElementById('pickFolderBtn')?.addEventListener('click', pickMediaFolder);
  document.getElementById('mediaFileInput')?.addEventListener('change', handleMediaFiles);
  renderAll();
  const initial = location.hash.replace('#','') || 'panel-home';
  setPanel(initial);
});
