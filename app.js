
const STORAGE_KEY = 'youngil-jeong-clan-site-v3';
const MEDIA_STORAGE_KEY = 'youngil-jeong-media-admin-v1';

const defaultData = {
  siteTitle: '연일정씨 사정공파 · 좌랑공계 문중 홈페이지',
  subtitle: '지주사공파 · 사정공파(2파) · 좌랑공계 · 원당 재실 · 기록 아카이브',
  branchIntro: '나는 연일정씨 지주사공파(대파) → 사정공파(중파·2파) → 좌랑공계(소파)의 29대손입니다.',
  clanBranches: [
    { title: '1파 · 도정공파', desc: '첫째 계통으로 이어지는 문중의 큰 갈래' },
    { title: '2파 · 사정공파', desc: '둘째 계통이며, 본 홈페이지의 중심 계통' },
    { title: '3파 · 사의공파', desc: '셋째 계통으로 이어지는 문중의 주요 분파' },
    { title: '4파 · 감무공파', desc: '넷째 계통으로 이어지는 문중의 전통 갈래' },
    { title: '5파 · 지국공파', desc: '다섯째 계통으로 이어지는 문중의 한 축' }
  ],
  warHeroes: [
    { title: '사도(思道)', desc: '임진왜란 당시 의병으로 일어나 가문의 충의를 실천한 6의사 중 첫째' },
    { title: '사덕(思德)', desc: '나라의 위기 앞에 형제들과 함께 의병으로 참여한 둘째' },
    { title: '사신(思信)', desc: '형제와 함께 전공을 세운 셋째 의사' },
    { title: '사제(思悌)', desc: '넷째 정사제(鄭思悌)로, 전공을 세워 호조참판에 추증된 가문의 대표 인물' },
    { title: '사효(思孝)', desc: '나라와 가문을 위해 몸을 바친 다섯째 의사' },
    { title: '사충(思忠)', desc: '6형제의 의로운 정신을 함께 완성한 여섯째 의사' }
  ],
  legacyStory: [
    { title: '정사제(鄭思悌)', body: '연일정씨 6의사 가운데 넷째이며, 임진왜란 때 큰 공을 세워 호조참판에 추증된 충의의 상징적 인물입니다.' },
    { title: '경주 최씨와의 인연', body: '정사제 공의 따님은 경주 최씨의 명장 최진립 장군에게 출가하여 두 명문의 인연을 잇는 가교가 되었습니다.' },
    { title: '최부자집의 기틀', body: '정사제 공의 따님은 친정에서 배운 근검절약과 현명한 살림으로 최씨 집안을 일으켜 세웠고, 최부자집의 나눔과 절제의 철학이 그 내조에서 비롯되었다는 이야기가 전합니다.' }
  ],
  lineageTimeline: [
    { gen: '22대', name: '정장휴', hanja: '鄭長休' },
    { gen: '23대', name: '정유종', hanja: '鄭裕宗' },
    { gen: '24대', name: '정치문', hanja: '鄭致文' },
    { gen: '25대', name: '정진규', hanja: '鄭鎭圭' },
    { gen: '26대', name: '정국주', hanja: '鄭國柱' },
    { gen: '27대', name: '정용범', hanja: '鄭龍範' },
    { gen: '28대', name: '정병운', hanja: '鄭炳雲' },
    { gen: '29대', name: '정한채', hanja: '鄭翰埰' },
    { gen: '30대', name: '정현규', hanja: '鄭賢圭' }
  ],
  heritageMessage: '연일정씨 사정공파는 충(忠)의 실천, 효(孝)의 계승, 나눔의 가풍을 함께 간직한 가문입니다. 임진왜란의 의병 정신과 최부자집의 기틀을 세운 생활 철학은 본 문중의 품격과 교육, 그리고 여성의 내조와 가풍의 엄정함을 상징적으로 보여줍니다.',

  treeNodes: [
    { id: 'n1', name: '정종은', hanja: '鄭宗殷', gen: '1대', branch: '시조', verified: 'public', note: '신라 태종무열왕대 인물로 전해지는 영일정씨 시조. 초기 계대는 대동보와 공파보를 대조하며 보완 필요.' },
    { id: 'n2', name: '정습명', hanja: '鄭襲明', gen: '중시조', branch: '지주사공계', verified: 'public', note: '고려 전기 예부시랑·한림학사·추밀원지주사 등을 지낸 문신. 영일정씨 주요 중시조로 전승됨.' },
    { id: 'n3', name: '좌랑공계 계보 연결 구간', hanja: '', gen: '2~21대', branch: '좌랑공계', verified: 'needs_review', note: '초기 계대는 공파보와 대동보의 대조를 통해 계속 보완할 수 있는 구간입니다.' },
    { id: 'n22', name: '정장휴', hanja: '鄭長休', gen: '22대', branch: '직계', verified: 'family', note: '사용자 제공 직계 계보의 시작 구간.' },
    { id: 'n23', name: '정유종', hanja: '鄭裕宗', gen: '23대', branch: '직계', verified: 'family', note: '22대 정장휴에서 이어지는 직계 조상.' },
    { id: 'n24', name: '정치문', hanja: '鄭致文', gen: '24대', branch: '직계', verified: 'family', note: '23대 정유종에서 이어지는 직계 조상.' },
    { id: 'n25', name: '정진규', hanja: '鄭鎭圭', gen: '25대', branch: '직계', verified: 'family', note: '24대 정치문에서 이어지는 직계 조상.' },
    { id: 'n26', name: '정국주', hanja: '鄭國柱', gen: '26대', branch: '직계', verified: 'family', note: '25대 정진규에서 이어지는 직계 조상.' },
    { id: 'n27', name: '정용범', hanja: '鄭龍範', gen: '27대', branch: '직계', verified: 'family', note: '사용자 제공 직계 조상 정보. 할아버지.' },
    { id: 'n28', name: '정병운', hanja: '鄭炳雲', gen: '28대', branch: '직계', verified: 'family', note: '진량읍 선화리 거주. 1931.10.26(음) 출생, 2009.11.11(음) 별세. 진량새마을금고 설립 및 이사장 역임.' },
    { id: 'n29', name: '정한채', hanja: '鄭翰埰', gen: '29대', branch: '직계', verified: 'family', note: '1961.02.06 출생. 현 (주)동양정보시스템 대표.' },
    { id: 'n30', name: '정현규', hanja: '鄭賢圭', gen: '30대', branch: '직계', verified: 'family', note: '경상북도교육청 기록연구사 재임. 정한채의 자(子)로 이어지는 30대 직계 후손.' }
  ],
  treeEdges: [['n1','n2'],['n2','n3'],['n3','n22'],['n22','n23'],['n23','n24'],['n24','n25'],['n25','n26'],['n26','n27'],['n27','n28'],['n28','n29'],['n29','n30']],
  notables: [
    { name: '정종은(鄭宗殷)', period: '신라', achievement: '영일정씨 시조로 전승' },
    { name: '정습명(鄭襲明)', period: '고려', achievement: '예부시랑·한림학사·추밀원지주사, 왕실 사부 역할' },
    { name: '정몽주(鄭夢周)', period: '고려 말', achievement: '문하찬성사·예문관제학, 고려의 절신이자 외교가·학자' },
    { name: '정보(鄭保)', period: '조선 전기', achievement: '감찰·예안현감, 정몽주의 손자' },
    { name: '정세필(鄭世弼)', period: '조선 전기', achievement: '경상좌도병마절도사, 영일정씨 족보 편찬 관련 인물' }
  ],
  directPeople: [
    { title: '22대 정장휴(鄭長休)', body: '사용자 제공 직계 계보의 기준점으로 기록된 조상.' },
    { title: '23대 정유종(鄭裕宗)', body: '22대 정장휴에서 이어지는 직계 조상.' },
    { title: '24대 정치문(鄭致文)', body: '23대 정유종에서 이어지는 직계 조상.' },
    { title: '25대 정진규(鄭鎭圭)', body: '24대 정치문에서 이어지는 직계 조상.' },
    { title: '26대 정국주(鄭國柱)', body: '25대 정진규에서 이어지는 직계 조상.' },
    { title: '27대 정용범(鄭龍範)', body: '직계 할아버지. 추후 출생지, 생몰년, 공적, 문중 활동을 추가 입력할 수 있도록 확장 가능.' },
    { title: '28대 정병운(鄭炳雲)', body: '진량읍 선화리 거주. 1931.10.26(음) 출생, 2009.11.11(음) 별세. 진량새마을금고 설립 및 이사장 역임.' },
    { title: '29대 정한채(鄭翰埰)', body: '1961.02.06 출생. 현 (주)동양정보시스템 대표. 문중 홈페이지에서 직계 위치와 공적을 함께 기록.' },
    { title: '30대 정현규(鄭賢圭)', body: '경상북도교육청 기록연구사 재임. 29대 정한채에서 이어지는 30대 직계 후손으로 문중 기록과 가계 계승의 현재 축을 이룸.' }
  ],
  myAchievements: [
    { title: '대한민국명장', detail: '정보처리 분야 국내 최고 수준의 기술력을 바탕으로 국가 발전에 기여한 공로를 인정받아 대통령 명의의 명장 선정.' },
    { title: '우수숙련기술인', detail: '산업현장 실무경험과 숙련기술 전승 성과를 인정받아 고용노동부 장관이 임명.' },
    { title: '대한민국산업현장교수', detail: '기업 현장 코칭, 스마트공장 구축, DX/AI 교육 및 전문 컨설팅 활동 수행.' }
  ],
  wondangInfo: [
    { label: '위치', value: '경상북도 영천시 북안면 원당리 일대' },
    { label: '의미', value: '재실은 선대 봉사를 위해 제향 전 준비와 문중 모임을 위한 공간' },
    { label: '기록 방향', value: '재실 유래, 편액, 제향일, 중수 연혁, 사진, 동영상을 계속 누적 가능' },
    { label: '보완 항목', value: '창건연도, 제향 대상, 중수 연혁, 원당리 입향 내력은 문중 자료 대조 후 추가' }
  ],
  externalLinks: [
    { title: '포은공파 홈페이지', url: 'http://www.yuniljung.com/', desc: '포은공파 포천공계 19대손 정덕화 운영 사이트' },
    { title: '판결사공파 중앙화수회 카페', url: 'https://cafe.daum.net/yoonilj', desc: '판결사공파 중앙화수회 카페 정태식 운영 사이트' }
  ],
  sourceList: [
    { title: '영일정씨 족보 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0037647', desc: '영일정씨 대동보의 성격, 시조 정종은, 중시조 정습명·정극유, 편찬 이력' },
    { title: '정습명 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0050486', desc: '고려 전기 문신, 영일정씨 관련 주요 인물' },
    { title: '정몽주 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0050190', desc: '고려 말 충신이자 학자' },
    { title: '재실 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0049022', desc: '재실의 정의와 기능' },
    { title: '경주시립도서관 족보자료 열람', url: 'https://jokbo.gyeongju.go.kr/bbs/board.php?bo_table=familytree&page=11', desc: '영일정씨 좌랑공파보 열람 목록 참고' }
  ],
  ledgerAccounts: [
    { id: 'acc1', name: '문중 운영계좌', bank: '은행명 입력', number: '계좌번호 입력', openingBalance: 0 }
  ],
  ledgerEntries: [],
  receipts: []
};

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
function sortMediaItems(items=[]) {
  return [...items].sort((a,b) => {
    const ao = Number(a.order || 0);
    const bo = Number(b.order || 0);
    if (ao !== bo) return ao - bo;
    return String(a.file || '').localeCompare(String(b.file || ''), 'ko');
  });
}
function normalizeMediaList(list=[]) {
  return sortMediaItems(list.map((item, index) => ({
    id: item.id || `m${Date.now()}_${index}_${Math.random().toString(36).slice(2,8)}`,
    type: item.type || inferMediaType(item.file || ''),
    file: item.file || '',
    title: item.title || titleFromFileName(item.file || ''),
    url: item.url || (item.file ? `media/${item.file}` : ''),
    order: Number(item.order || index + 1),
    source: item.source || 'local',
    preview: item.preview || ''
  })).filter(item => item.type !== 'other'));
}
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(defaultData);
    const parsed = JSON.parse(raw);
    return {
      ...clone(defaultData),
      ...parsed,
      treeNodes: parsed.treeNodes || clone(defaultData.treeNodes),
      treeEdges: parsed.treeEdges || clone(defaultData.treeEdges),
      directPeople: parsed.directPeople || clone(defaultData.directPeople),
      myAchievements: parsed.myAchievements || clone(defaultData.myAchievements),
      externalLinks: parsed.externalLinks || clone(defaultData.externalLinks),
      ledgerAccounts: parsed.ledgerAccounts || clone(defaultData.ledgerAccounts),
      ledgerEntries: parsed.ledgerEntries || [],
      receipts: parsed.receipts || []
    };
  } catch {
    return clone(defaultData);
  }
}
function loadManagedMedia() {
  try {
    const raw = localStorage.getItem(MEDIA_STORAGE_KEY);
    if (!raw) return null;
    return normalizeMediaList(JSON.parse(raw));
  } catch {
    return null;
  }
}
let state = loadData();
let managedMedia = loadManagedMedia();

function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function saveManagedMedia() { localStorage.setItem(MEDIA_STORAGE_KEY, JSON.stringify(managedMedia || [])); }

function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }
function money(v){ return Number(v || 0).toLocaleString('ko-KR'); }
function escapeHtml(str=''){ return str.replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }

function initNav() {
  qsa('.navbtn').forEach(btn => btn.addEventListener('click', () => {
    qsa('.navbtn').forEach(b => b.classList.remove('active'));
    qsa('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    qs('#' + btn.dataset.panel).classList.add('active');
  }));
}

function renderHome() {
  qs('#siteTitle').textContent = state.siteTitle;
  qs('#siteSubtitle').textContent = state.subtitle;

  const branchIntro = qs('#branchIntro');
  if (branchIntro) branchIntro.innerHTML = escapeHtml(state.branchIntro || '');

  const branchList = qs('#branchList');
  if (branchList) branchList.innerHTML = (state.clanBranches || []).map(i => `<div class="item"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.desc)}</div></div>`).join('');

  const lineageTimeline = qs('#lineageTimeline');
  if (lineageTimeline) lineageTimeline.innerHTML = (state.lineageTimeline || []).map(i => `<div class="timeline-item"><div class="timeline-badge">${escapeHtml(i.gen)}</div><div><strong>${escapeHtml(i.name)}${i.hanja ? ' (' + escapeHtml(i.hanja) + ')' : ''}</strong></div></div>`).join('');

  const warHeroes = qs('#warHeroes');
  if (warHeroes) warHeroes.innerHTML = (state.warHeroes || []).map(i => `<div class="item"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.desc)}</div></div>`).join('');

  const legacyStory = qs('#legacyStory');
  if (legacyStory) legacyStory.innerHTML = (state.legacyStory || []).map(i => `<div class="story-panel"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.body)}</div></div>`).join('');

  const heritageMessage = qs('#heritageMessage');
  if (heritageMessage) heritageMessage.innerHTML = escapeHtml(state.heritageMessage || '');

  qs('#wondangInfo').innerHTML = state.wondangInfo.map(i => `<div class="item"><strong>${escapeHtml(i.label)}</strong><div class="muted">${escapeHtml(i.value)}</div></div>`).join('');
  qs('#notables').innerHTML = state.notables.map(i => `<div class="item"><strong>${escapeHtml(i.name)} <span class="muted">${escapeHtml(i.period)}</span></strong><div>${escapeHtml(i.achievement)}</div></div>`).join('');
  qs('#directPeople').innerHTML = state.directPeople.map(i => `<div class="person-card"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.body)}</div></div>`).join('');
  qs('#myAchievements').innerHTML = state.myAchievements.map(i => `<div class="person-card"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.detail)}</div></div>`).join('');
  qs('#externalLinks').innerHTML = state.externalLinks.map(i => `<div class="source-item"><a href="${i.url}" target="_blank" rel="noreferrer">${escapeHtml(i.title)}</a><div class="muted">${escapeHtml(i.desc || '')}</div></div>`).join('');
  qs('#sourceList').innerHTML = state.sourceList.map(i => `<div class="source-item"><a href="${i.url}" target="_blank" rel="noreferrer">${escapeHtml(i.title)}</a><div class="muted">${escapeHtml(i.desc)}</div></div>`).join('');
}

function renderTree() {
  const nodes = state.treeNodes;
  const verifyLabel = { public: '공개자료 검증', family: '가족 제공 정보', needs_review: '족보 대조 필요' };
  const treeView = qs('#treeView');
  treeView.innerHTML = nodes.map(n => `
    <div class="node" data-id="${n.id}">
      <strong>${escapeHtml(n.gen)} ${escapeHtml(n.name)} ${n.hanja ? '(' + escapeHtml(n.hanja) + ')' : ''}</strong>
      <div>${escapeHtml(n.branch)} <span class="verify ${n.verified}">${verifyLabel[n.verified] || ''}</span></div>
      <small>${escapeHtml(n.note)}</small>
    </div>
  `).join('');
  qs('#myPosition').innerHTML = '<strong>현재 기준 위치:</strong> 22대 정장휴 → 23대 정유종 → 24대 정치문 → 25대 정진규 → 26대 정국주 → 27대 정용범 → 28대 정병운 → 29대 정한채 → 30대 정현규로 이어지는 직계 구조';

  qsa('.node').forEach(nodeEl => nodeEl.addEventListener('click', () => {
    const node = nodes.find(n => n.id === nodeEl.dataset.id);
    qs('#nodeDetail').innerHTML = `<div class="item"><strong>${escapeHtml(node.gen)} ${escapeHtml(node.name)} ${node.hanja ? '(' + escapeHtml(node.hanja) + ')' : ''}</strong><div class="muted">${escapeHtml(node.branch)}</div><div class="mt-12">${escapeHtml(node.note)}</div></div>`;
  }));
}

function initLineageForm() {
  qs('#lineageForm').addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const id = 'u' + Date.now();
    const parentId = fd.get('parentId');
    const node = {
      id,
      name: String(fd.get('name') || '').trim(),
      hanja: String(fd.get('hanja') || '').trim(),
      gen: String(fd.get('gen') || '').trim(),
      branch: String(fd.get('branch') || '').trim() || '직계',
      verified: 'family',
      note: String(fd.get('note') || '').trim() || '사용자 추가 후손 정보'
    };
    state.treeNodes.push(node);
    state.treeEdges.push([parentId, id]);
    saveData();
    e.target.reset();
    renderTree();
    alert('후손 정보가 등록되었습니다.');
  });
}

function fillAccountSelectors() {
  const options = state.ledgerAccounts.map(a => `<option value="${a.id}">${escapeHtml(a.name)} (${escapeHtml(a.bank)})</option>`).join('');
  ['#entryAccount','#receiptAccount','#csvAccount'].forEach(sel => { qs(sel).innerHTML = options; });
}

function renderAccounts() {
  qs('#accounts').innerHTML = state.ledgerAccounts.map(a => {
    const related = state.ledgerEntries.filter(e => e.accountId === a.id);
    const lastBalance = related.length ? Number(related[related.length - 1].balance || 0) : Number(a.openingBalance || 0);
    return `<div class="stat"><div class="v">${money(lastBalance)}</div><div>${escapeHtml(a.name)}</div><div class="muted">${escapeHtml(a.bank)} / ${escapeHtml(a.number)}</div></div>`;
  }).join('');
}

function renderLedger() {
  const nameById = Object.fromEntries(state.ledgerAccounts.map(a => [a.id, a.name]));
  const rows = [...state.ledgerEntries].sort((a,b) => String(a.date).localeCompare(String(b.date)));
  qs('#ledgerBody').innerHTML = rows.map(r => `
    <tr>
      <td>${escapeHtml(r.date)}</td>
      <td>${escapeHtml(nameById[r.accountId] || '')}</td>
      <td>${escapeHtml(r.desc)}</td>
      <td>${money(r.deposit)}</td>
      <td>${money(r.withdraw)}</td>
      <td>${money(r.balance)}</td>
      <td>${escapeHtml(r.note || '')}</td>
    </tr>
  `).join('') || `<tr><td colspan="7" class="muted">등록된 거래가 없습니다.</td></tr>`;
}

function renderReceipts() {
  qs('#receiptList').innerHTML = state.receipts.map(r => `
    <div class="receipt-card">
      <strong>${escapeHtml(r.title)}</strong>
      <div class="muted">${escapeHtml(r.date)} · ${escapeHtml(r.category || '')}</div>
      <div class="mt-12">금액: ${money(r.amount)}원</div>
      <div class="muted">${escapeHtml(r.memo || '')}</div>
      ${r.image ? `<img src="${r.image}" alt="${escapeHtml(r.title)}">` : ''}
    </div>
  `).join('') || '<div class="muted">등록된 영수증이 없습니다.</div>';
}

function computeRunningBalance(accountId, openingBalance) {
  const list = state.ledgerEntries.filter(e => e.accountId === accountId).sort((a,b) => String(a.date).localeCompare(String(b.date)));
  let bal = Number(openingBalance || 0);
  for (const row of list) {
    if (row.balance && Number(row.balance) !== 0) {
      bal = Number(row.balance);
    } else {
      bal += Number(row.deposit || 0) - Number(row.withdraw || 0);
      row.balance = bal;
    }
  }
}

function initLedgerForms() {
  qs('#accountForm').addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.ledgerAccounts.push({
      id: 'acc' + Date.now(),
      name: String(fd.get('name')).trim(),
      bank: String(fd.get('bank')).trim(),
      number: String(fd.get('number')).trim(),
      openingBalance: Number(fd.get('openingBalance') || 0)
    });
    saveData();
    e.target.reset();
    fillAccountSelectors(); renderAccounts(); renderLedger();
  });

  qs('#entryForm').addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const accountId = String(fd.get('accountId'));
    const acc = state.ledgerAccounts.find(a => a.id === accountId);
    state.ledgerEntries.push({
      accountId,
      date: String(fd.get('date')),
      desc: String(fd.get('desc')),
      deposit: Number(fd.get('deposit') || 0),
      withdraw: Number(fd.get('withdraw') || 0),
      balance: Number(fd.get('balance') || 0),
      note: String(fd.get('note') || '')
    });
    computeRunningBalance(accountId, acc?.openingBalance || 0);
    saveData();
    e.target.reset();
    fillAccountSelectors(); renderAccounts(); renderLedger();
  });

  qs('#receiptForm').addEventListener('submit', async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const imageFile = fd.get('image');
    let image = '';
    if (imageFile && imageFile.size) image = await fileToDataURL(imageFile);
    state.receipts.unshift({
      accountId: String(fd.get('accountId')),
      date: String(fd.get('date')),
      title: String(fd.get('title')),
      category: String(fd.get('category') || ''),
      amount: Number(fd.get('amount') || 0),
      memo: String(fd.get('memo') || ''),
      image
    });
    saveData();
    e.target.reset();
    renderReceipts();
  });

  qs('#csvForm').addEventListener('submit', async e => {
    e.preventDefault();
    const file = qs('#csvFile').files[0];
    const accountId = qs('#csvAccount').value;
    const acc = state.ledgerAccounts.find(a => a.id === accountId);
    if (!file || !accountId) return alert('계좌와 CSV 파일을 선택해 주세요.');
    const text = await file.text();
    const lines = text.split(/\r?\n/).filter(Boolean);
    const rows = lines.slice(1).map(line => line.split(','));
    for (const cols of rows) {
      state.ledgerEntries.push({
        accountId,
        date: cols[0] || '',
        desc: cols[1] || '',
        withdraw: Number(cols[2] || 0),
        deposit: Number(cols[3] || 0),
        balance: Number(cols[4] || 0),
        note: cols[5] || ''
      });
    }
    computeRunningBalance(accountId, acc?.openingBalance || 0);
    saveData();
    renderAccounts(); renderLedger();
    alert('CSV 불러오기가 완료되었습니다.');
  });

  qs('#exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'youngil-jeong-site-data.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });

  qs('#resetBtn').addEventListener('click', () => {
    if (!confirm('저장된 데이터 전체를 초기화하시겠습니까?')) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(MEDIA_STORAGE_KEY);
    state = loadData();
    managedMedia = null;
    renderAll();
  });
}

function fileToDataURL(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function inferMediaType(name) {
  const lower = String(name || '').toLowerCase();
  if (/(png|jpg|jpeg|gif|webp)$/i.test(lower)) return 'image';
  if (/(mp4|webm|ogg|mov)$/i.test(lower)) return 'video';
  return 'other';
}

function titleFromFileName(name) {
  return String(name || '')
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function loadBaseMediaItems() {
  try {
    const res = await fetch('media.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('media.json 없음');
    const list = await res.json();
    return normalizeMediaList(list.map((item, index) => ({
      ...item,
      order: Number(item.order || index + 1),
      url: item.url || `media/${item.file}`,
      source: 'local'
    })));
  } catch (err) {
    return [];
  }
}

function getActiveMediaItems(baseItems=[]) {
  return normalizeMediaList((managedMedia && managedMedia.length ? managedMedia : baseItems).map((item, index) => ({
    ...item,
    order: Number(item.order || index + 1)
  })));
}

function updateMediaStatus(message) {
  const status = qs('#mediaStatus');
  if (status) status.textContent = message;
}

function renderAdminMediaList(items) {
  const wrap = qs('#adminMediaList');
  if (!wrap) return;
  if (!items.length) {
    wrap.innerHTML = '<div class="muted">등록된 사진·영상이 없습니다.</div>';
    return;
  }
  wrap.innerHTML = items.map(item => {
    const preview = item.type === 'video'
      ? `<video controls preload="metadata"><source src="${item.preview || item.url}"></video>`
      : `<img src="${item.preview || item.url}" alt="${escapeHtml(item.title)}" loading="lazy">`;
    return `
      <div class="admin-item" data-id="${item.id}">
        <div class="admin-preview">${preview}</div>
        <div class="admin-fields">
          <label>순서번호<input type="number" class="media-order-input" data-id="${item.id}" value="${Number(item.order || 0)}" min="1"></label>
          <label>제목<input type="text" class="media-title-input" data-id="${item.id}" value="${escapeHtml(item.title)}"></label>
          <div class="admin-meta">파일명: ${escapeHtml(item.file)}</div>
          <div class="admin-actions">
            <button type="button" class="secondary media-delete-btn" data-id="${item.id}">삭제</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  qsa('.media-order-input').forEach(input => input.addEventListener('change', e => {
    const item = managedMedia.find(m => m.id === e.target.dataset.id);
    if (!item) return;
    item.order = Number(e.target.value || 0);
    managedMedia = sortMediaItems(managedMedia);
    saveManagedMedia();
    renderMediaGallery();
    renderAdminMediaList(managedMedia);
  }));

  qsa('.media-title-input').forEach(input => input.addEventListener('change', e => {
    const item = managedMedia.find(m => m.id === e.target.dataset.id);
    if (!item) return;
    item.title = e.target.value.trim() || titleFromFileName(item.file);
    saveManagedMedia();
    renderMediaGallery();
  }));

  qsa('.media-delete-btn').forEach(btn => btn.addEventListener('click', e => {
    const id = e.target.dataset.id;
    managedMedia = managedMedia.filter(item => item.id !== id);
    managedMedia = sortMediaItems(managedMedia).map((item, idx) => ({ ...item, order: idx + 1 }));
    saveManagedMedia();
    renderMediaGallery();
    renderAdminMediaList(managedMedia);
  }));
}

async function renderMediaGallery() {
  const baseItems = await loadBaseMediaItems();
  if (!managedMedia || !managedMedia.length) managedMedia = getActiveMediaItems(baseItems);
  const items = getActiveMediaItems(baseItems);
  const gallery = qs('#mediaGallery');
  gallery.innerHTML = items.map(item => {
    const media = item.type === 'video'
      ? `<video controls preload="metadata"><source src="${item.preview || item.url}"></video>`
      : `<img src="${item.preview || item.url}" alt="${escapeHtml(item.title)}" loading="lazy">`;
    return `
      <article class="media-card">
        <div class="media-frame">${media}</div>
        <div class="media-body">
          <strong>${escapeHtml(item.title)}</strong>
          <div class="media-meta">순서 ${Number(item.order || 0)} · 파일명: ${escapeHtml(item.file || '')}</div>
        </div>
      </article>
    `;
  }).join('') || '<div class="muted">표시할 사진·영상이 없습니다.</div>';
  renderAdminMediaList(items);
  updateMediaStatus(`현재 ${items.length}개의 사진·영상을 순서번호 기준으로 배열해 표시 중입니다.`);
}

function downloadTextFile(filename, content, type='application/json') {
  const blob = new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function exportManagedMediaJson() {
  const payload = sortMediaItems((managedMedia || []).map(item => ({
    type: item.type,
    file: item.file,
    title: item.title,
    order: Number(item.order || 0)
  })));
  downloadTextFile('media.json', JSON.stringify(payload, null, 2));
}

function initMediaAdmin() {
  const uploadForm = qs('#mediaUploadForm');
  if (!uploadForm) return;

  uploadForm.addEventListener('submit', async e => {
    e.preventDefault();
    const fileInput = qs('#mediaFiles');
    const startOrder = Number(qs('#startOrder').value || 1);
    const titlePrefix = qs('#titlePrefix').value.trim();
    const files = Array.from(fileInput.files || []);
    if (!files.length) return alert('업로드할 사진 또는 영상을 선택해 주세요.');

    const currentMax = Math.max(0, ...((managedMedia || []).map(item => Number(item.order || 0))));
    const baseOrder = Math.max(startOrder, currentMax ? currentMax + 1 : startOrder);
    const newItems = [];

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const preview = await fileToDataURL(file);
      newItems.push({
        id: `m${Date.now()}_${i}`,
        type: inferMediaType(file.name),
        file: file.name,
        title: titlePrefix ? `${titlePrefix} ${i + 1}` : titleFromFileName(file.name),
        url: `media/${file.name}`,
        preview,
        source: 'managed',
        order: baseOrder + i
      });
    }
    managedMedia = sortMediaItems([...(managedMedia || []), ...newItems]).map((item, idx) => ({ ...item, order: idx + 1 }));
    saveManagedMedia();
    uploadForm.reset();
    renderMediaGallery();
    alert('관리자 목록에 사진·영상이 추가되었습니다. media 폴더에 실제 파일을 함께 올린 뒤 media.json을 덮어쓰면 홈페이지에 반영됩니다.');
  });

  qs('#exportMediaJsonBtn').addEventListener('click', () => {
    exportManagedMediaJson();
  });

  qs('#resetMediaBtn').addEventListener('click', async () => {
    if (!confirm('관리자에서 편집한 사진 목록을 초기 상태로 되돌리시겠습니까?')) return;
    localStorage.removeItem(MEDIA_STORAGE_KEY);
    managedMedia = await loadBaseMediaItems();
    saveManagedMedia();
    renderMediaGallery();
  });
}

function renderAll() {
  renderHome();
  renderTree();
  fillAccountSelectors();
  renderAccounts();
  renderLedger();
  renderReceipts();
  renderMediaGallery();
}

window.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLineageForm();
  initLedgerForms();
  initMediaAdmin();
  qs('#reloadMediaBtn').addEventListener('click', renderMediaGallery);
  renderAll();
});
