

const STORAGE_KEY = 'youngil-jeong-clan-site-v5';
const MEDIA_STORAGE_KEY = 'youngil-jeong-media-admin-v1';

const defaultData = {
  siteTitle: '영일정씨 지주사공계 문중 아카이브',
  subtitle: '영일정씨의 유래와 종파 구조, 복재 정담 후손 계보, 영천 원당제실 기록을 함께 담은 디지털 문중 홈페이지',
  branchIntro: '영일정씨는 영일·연일·오천을 관향으로 전해 오는 정씨 문중으로, 전승상 시조는 정종은이며, 현전 문헌에서는 크게 지주사공계와 감무공계의 두 계열로 정리됩니다. 그 가운데 지주사공계는 고려 전기의 명신 정습명을 중시조로 받들며, 문한의 전통과 절의, 충의, 교육의 정신을 이어 온 계통입니다. 영천 지역 공개 문헌에서는 정문예에서 좌랑 정치소, 생원 정이상, 훈도 정굉, 감찰 정인개를 거쳐 복재 정담으로 이어지는 흐름이 확인되며, 복재 정담 이후의 후손 가운데 사용자 직계는 세보 원문을 통해 27대 정무상, 28대 정병운, 29대 정한채, 30대 정현규로 확인됩니다.',
  clanBranches: [
    { title: '대문중의 큰 축', desc: '영일정씨는 공개 문헌상 크게 지주사공계와 감무공계의 두 계열로 설명됩니다. 본 홈페이지는 그 가운데 지주사공계의 전통을 중심으로 구성하였습니다.' },
    { title: '지주사공계의 상징', desc: '지주사공 정습명은 고려 전기의 문신으로, 문한과 정치의 기틀을 세운 중시조로 기억됩니다. 지주사공계는 이후 절의와 학문, 향촌의 도덕 질서를 함께 중시하는 가풍으로 전승됩니다.' },
    { title: '복재 정담으로 이어지는 공개 계통', desc: '영천 지역 공개 자료에서는 정문예 → 좌랑 정치소 → 생원 정이상 → 훈도 정굉 → 감찰 정인개 → 복재 정담으로 이어지는 계보가 확인됩니다.' },
    { title: '복재공 후손 세보', desc: '이번에 분석한 복재공파세보에서는 복재 정담 후손 가운데 사용자 직계가 27대 정무상, 28대 정병운, 29대 정한채, 30대 정현규로 이어짐이 확인됩니다. 26대는 정호인으로 강하게 추정되나 추가 대조가 필요합니다.' },
    { title: '원당제실 운영 구분(홈페이지 정리안)', desc: '영천 원당제실 대문중회의는 매년 4월 둘째 주 무렵 1파부터 5파까지의 대표자가 모여 문중 현안을 의논하는 구조로 운영된다고 전승되며, 본 홈페이지에는 그 운영 구분을 안내 형식으로 반영하였습니다.' },
    { title: '홈페이지 구성 원칙', desc: '공개 문헌으로 확인되는 상계는 공개 사료 기준으로, 세보에서 직접 보이는 현재 직계는 가족 세보 기준으로 구분하여 기술하였습니다. 미확정 세대는 추정으로 명시합니다.' }
  ],
  lineageTimeline: [
    { gen: '공개문헌', name: '정문예', hanja: '鄭文乂' },
    { gen: '좌랑', name: '정치소', hanja: '鄭致邵' },
    { gen: '생원', name: '정이상', hanja: '鄭履祥' },
    { gen: '훈도', name: '정굉', hanja: '鄭紘' },
    { gen: '감찰', name: '정인개', hanja: '鄭仁愷' },
    { gen: '복재', name: '정담', hanja: '鄭湛' },
    { gen: '연구구간', name: '중간 세대 미상', hanja: '未詳' },
    { gen: '26대', name: '정호인', hanja: '鄭浩仁(강한 추정)' }
  ],
  warHeroes: [
    { title: '1파 대표', desc: '대문중 운영상 첫째 파 대표가 참석하여 문중 주요 안건, 제향 협의, 사업 및 재정 현황을 공유하는 구간으로 정리합니다.' },
    { title: '2파 대표', desc: '둘째 파 대표가 참석하여 각 파의 의견을 조정하고, 차기 행사 준비와 기록 보존, 문중 내 협력 과제를 함께 논의하는 구간입니다.' },
    { title: '3파 대표', desc: '셋째 파 대표는 문중 행사 참여 현황과 지역별 후손 네트워크, 선영 및 재실 관련 의견을 함께 전달하는 역할로 정리할 수 있습니다.' },
    { title: '4파 대표', desc: '넷째 파 대표는 문중 운영의 연속성과 전통 계승을 위해 세대 간 소통, 기록 정리, 후손 교육 관련 논의에 참여하는 구조로 소개할 수 있습니다.' },
    { title: '5파 대표', desc: '다섯째 파 대표는 전체 문중의 통합 운영을 위해 앞선 파 대표들과 함께 합의안을 만들고, 차기 회의와 제향 준비를 연계하는 역할로 설명할 수 있습니다.' }
  ],
  legacyStory: [
    { title: '정습명(鄭襲明) · 지주사공계의 기틀', body: '정습명은 고려 전기의 문신으로 예부시랑, 한림학사, 추밀원지주사 등을 지내며 왕실과 국가의 문한 질서를 세운 인물로 기억됩니다. 지주사공계가 학문과 절의를 중시하는 전통의 뿌리로 자주 거론됩니다.' },
    { title: '정몽주(鄭夢周) · 절의의 상징', body: '정몽주는 고려 말의 대학자이자 절신으로, 영일정씨를 대표하는 상징적 인물입니다. 그의 이름은 가문의 품격, 정치적 신념, 도학적 절의를 보여 주는 정신적 표상으로 남아 있습니다.' },
    { title: '복재 정담(鄭湛) · 영천성 회복과 향교 중건', body: '복재 정담은 임진왜란 당시 영천성 회복에 공을 세운 인물로 전하고, 전후에는 향교 중건과 후진 양성에 힘써 향촌 질서와 교육을 바로 세운 후손으로 기억됩니다.' },
    { title: '연일정씨 6의사 · 충의의 실천', body: '임진왜란 시기 연일정씨 문중에서는 형제들이 함께 의병으로 일어나 나라를 지킨 6의사의 전승이 내려옵니다. 이는 지주사공계가 단지 학맥이 아니라 충의의 실천까지 겸한 가풍임을 보여 줍니다.' },
    { title: '최부자 가문과의 인연', body: '정사제 계열로 전하는 혼맥과 생활철학의 전승은 근검절약, 나눔, 가풍의 엄정함을 상징하는 이야기로 함께 소개되며, 영일정씨 후손들의 생활윤리와도 연결되는 감동의 소재가 됩니다.' }
  ],
  heritageMessage: '본 홈페이지는 공개 문헌으로 확정되는 계통과, 복재공파세보에서 직접 읽히는 현재 직계를 구분하여 기록합니다. 공개 문헌 구간은 정문예에서 복재 정담까지, 세보 원문 구간은 27대 정무상에서 30대 정현규까지를 기준으로 삼았습니다. 26대 정호인은 면 구성상 매우 유력하지만 현재 확보한 자료만으로는 추정 단계이므로, 후일 추가 세보와 대조하여 확정할 수 있도록 열어 두었습니다.',
  notables: [
    { name: '정종은(鄭宗殷)', period: '전승상 시조', achievement: '영일정씨의 시조로 전승되는 인물로, 문중의 관향과 가문의 시원을 상징합니다.' },
    { name: '정습명(鄭襲明)', period: '고려 전기', achievement: '지주사공계의 중시조로 기억되며, 예부시랑·한림학사·추밀원지주사 등을 지낸 문신입니다.' },
    { name: '정몽주(鄭夢周)', period: '고려 말', achievement: '절의와 학문의 상징으로, 영일정씨를 대표하는 가장 널리 알려진 인물입니다.' },
    { name: '정문예(鄭文乂)', period: '조선 전기', achievement: '영천 지역 공개 문헌에서 복재 정담의 상계로 확인되는 인물입니다.' },
    { name: '정담(鄭湛)', period: '조선 중기', achievement: '복재공으로 전하며, 영천성 회복과 향교 중건, 향촌 교육에 기여한 인물로 기억됩니다.' },
    { name: '정무상(鄭武相)', period: '27대', achievement: '복재공파세보 원문에서 사용자 직계의 조부 세대로 확인되는 인물입니다.' },
    { name: '정병운(鄭炳雲)', period: '28대', achievement: '복재공파세보 원문에서 사용자 직계 부친으로 확인되며, 근현대 가계의 중심을 이룹니다.' },
    { name: '정한채(鄭翰埰)', period: '29대', achievement: '사용자 본인으로, 복재 정담 후손의 계보를 현대 디지털 기록으로 재정리하는 역할을 맡고 있습니다.' }
  ],
  directPeople: [],
  myAchievements: [],
  wondangInfo: [
    { label: '원당제실의 위치와 의미', value: '영천 북안 원당은 선조를 봉향하고 문중 구성원이 모여 제향과 회의를 준비하는 상징적 공간으로 기억됩니다.' },
    { label: '정기 모임', value: '사용자 전언에 따르면 매년 4월 둘째 주 무렵 대문중회의가 열리며, 각 파 대표자가 참석하여 문중 현안을 협의합니다.' },
    { label: '홈페이지 기록 방향', value: '재실의 유래, 편액, 제향일, 중수 연혁, 사진과 영상, 회의 결과 등을 누적 기록하여 후손 누구나 문중의 역사를 한눈에 볼 수 있도록 하는 데 목적이 있습니다.' },
    { label: '문중 공동체의 가치', value: '원당제실은 단순한 건물이 아니라, 선대를 기리는 마음과 후손의 연대를 실천하는 생활 문화의 중심으로 소개할 수 있습니다.' }
  ],
  externalLinks: [
    { title: '경주박물관', url: 'https://gyeongju.museum.go.kr/', desc: '신라와 경주권 역사 문화유산 참고' },
    { title: 'yuniljung.com', url: 'http://yuniljung.com/', desc: '문중 관련 참고 홈페이지' }
  ],
  sourceList: [
    { title: '영일정씨 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0037647', desc: '영일정씨의 시조 전승, 지주사공계·감무공계 등 대분류 설명' },
    { title: '정습명 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0050486', desc: '지주사공 정습명의 생애와 관직, 영일정씨 관련 맥락' },
    { title: '정몽주 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0050190', desc: '영일정씨 대표 인물 정몽주의 절의와 학문' },
    { title: '정문예 - 디지털영천문화대전', url: 'https://yeongcheon.grandculture.net/yeongcheon/toc/GC05101105', desc: '복재 정담 상계 관련 공개 문헌' },
    { title: '정담 - 디지털영천문화대전', url: 'https://yeongcheon.grandculture.net/yeongcheon/toc/GC05101116', desc: '복재 정담의 생애와 영천성 회복, 향교 중건 관련 설명' },
    { title: '복재공파세보 원문', url: '#', desc: '사용자 제공 복재공파세보 스캔본 기준으로 현재 직계를 대조함' }
  ],
  treeNodes: [
    { id: 'n1', name: '정종은', hanja: '鄭宗殷', gen: '시조', branch: '영일정씨', verified: 'public', note: '영일정씨의 시조로 전승되는 인물입니다.' },
    { id: 'n2', name: '정습명', hanja: '鄭襲明', gen: '중시조', branch: '지주사공계', verified: 'public', note: '고려 전기의 명신으로 지주사공계의 중시조로 기억됩니다.' },
    { id: 'n3', name: '정문예', hanja: '鄭文乂', gen: '공개문헌', branch: '지주사공계', verified: 'public', note: '영천 지역 공개 문헌에서 복재 정담의 상계로 확인되는 인물입니다.' },
    { id: 'n4', name: '정치소', hanja: '鄭致邵', gen: '좌랑', branch: '좌랑공계', verified: 'public', note: '좌랑공으로 불리며 복재 정담 상계의 핵심 연결 인물입니다.' },
    { id: 'n5', name: '정이상', hanja: '鄭履祥', gen: '생원', branch: '좌랑공계', verified: 'public', note: '생원으로 전하며, 복재 정담 상계의 연결 고리입니다.' },
    { id: 'n6', name: '정굉', hanja: '鄭紘', gen: '훈도', branch: '좌랑공계', verified: 'public', note: '훈도로 전하며, 정인개의 상계로 공개 문헌에서 확인됩니다.' },
    { id: 'n7', name: '정인개', hanja: '鄭仁愷', gen: '감찰', branch: '좌랑공계', verified: 'public', note: '감찰로 전하며, 복재 정담의 부친 세대로 공개 문헌에서 확인됩니다.' },
    { id: 'n8', name: '정담', hanja: '鄭湛', gen: '복재', branch: '복재공 계열', verified: 'public', note: '영천성 회복과 향교 중건에 힘쓴 복재공입니다.' },
    { id: 'n9', name: '중간 세대 미상', hanja: '未詳', gen: '연구구간', branch: '복재공 후손', verified: 'needs_review', note: '복재 정담 이후 26대 직전까지의 중간 세대는 추가 세보 대조가 필요합니다.' },
    { id: 'n10', name: '정호인', hanja: '鄭浩仁', gen: '26대', branch: '사용자 직계', verified: 'needs_review', note: '복재공파세보 66면의 배치상 매우 유력한 26대 후보입니다.' },
    { id: 'n11', name: '정무상', hanja: '鄭武相', gen: '27대', branch: '사용자 직계', verified: 'family', note: '복재공파세보 67면에서 직접 확인되는 사용자 직계 조부 세대입니다.' },
    { id: 'n12', name: '정병운', hanja: '鄭炳雲', gen: '28대', branch: '사용자 직계', verified: 'family', note: '복재공파세보 67면에서 직접 확인되는 사용자 직계 부친 세대입니다.' },
    { id: 'n13', name: '정한채', hanja: '鄭翰埰', gen: '29대', branch: '사용자 직계', verified: 'family', note: '대한민국명장(정보처리), 우수숙련기술인(정보처리), 대한민국산업현장교수(정보통신), (주)동양정보시스템 대표.' },
    { id: 'n14', name: '정현규', hanja: '鄭鉉圭', gen: '30대', branch: '사용자 직계', verified: 'family', note: '복재공파세보 67면에서 직접 확인되는 사용자 직계 후손입니다.' }
  ],
  treeEdges: [['n1','n2'], ['n2','n3'], ['n3','n4'], ['n4','n5'], ['n5','n6'], ['n6','n7'], ['n7','n8'], ['n8','n9'], ['n9','n10'], ['n10','n11'], ['n11','n12'], ['n12','n13'], ['n13','n14']],
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

  const wondangInfo = qs('#wondangInfo');
  if (wondangInfo) wondangInfo.innerHTML = state.wondangInfo.map(i => `<div class="item"><strong>${escapeHtml(i.label)}</strong><div class="muted">${escapeHtml(i.value)}</div></div>`).join('');
  const notables = qs('#notables');
  if (notables) notables.innerHTML = state.notables.map(i => `<div class="item"><strong>${escapeHtml(i.name)} <span class="muted">${escapeHtml(i.period)}</span></strong><div>${escapeHtml(i.achievement)}</div></div>`).join('');
  const directPeople = qs('#directPeople');
  if (directPeople) directPeople.innerHTML = state.directPeople.map(i => `<div class="person-card"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.body)}</div></div>`).join('');
  const myAchievements = qs('#myAchievements');
  if (myAchievements) myAchievements.innerHTML = state.myAchievements.map(i => `<div class="person-card"><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.detail)}</div></div>`).join('');
  const externalLinks = qs('#externalLinks');
  if (externalLinks) externalLinks.innerHTML = state.externalLinks.map(i => `<div class="source-item"><a href="${i.url}" target="_blank" rel="noreferrer">${escapeHtml(i.title)}</a><div class="muted">${escapeHtml(i.desc || '')}</div></div>`).join('');
  const sourceList = qs('#sourceList');
  if (sourceList) sourceList.innerHTML = state.sourceList.map(i => `<div class="source-item"><a href="${i.url}" target="_blank" rel="noreferrer">${escapeHtml(i.title)}</a><div class="muted">${escapeHtml(i.desc)}</div></div>`).join('');
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
  qs('#myPosition').innerHTML = '<strong>현재 확인 기준:</strong> 공개 문헌 구간은 정문예 → 정치소 → 정이상 → 정굉 → 정인개 → 정담이며, 세보 원문 구간은 27대 정무상 → 28대 정병운 → 29대 정한채 → 30대 정현규입니다. 26대 정호인은 강한 추정 단계로 표시했습니다.';

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
