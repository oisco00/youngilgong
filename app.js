const STORAGE_KEY = 'youngil-jeong-clan-site-v6';
const MEDIA_STORAGE_KEY = 'youngil-jeong-media-admin-v1';

const defaultData = {
  siteTitle: '영일정씨 지주사공계 문중',
  subtitle: '영일정씨의 유래와 종파 구조, 복재 정담 후손 계보, 영천 원당제실 기록을 근거 중심으로 정리한 디지털 문중 홈페이지',
  overviewStats: [
    { value: '2계열', label: '대문중의 큰 구조', meta: '공개 문헌상 지주사공계 · 감무공계' },
    { value: '정문예~정담', label: '공개 문헌 확인 축', meta: '영천 지역 공개 문헌에서 이어지는 상계' },
    { value: '26~30대', label: '세보 원문 직접 확인', meta: '정호인 · 정무상 · 정병운 · 정한채 · 정현규' },
    { value: '1~5파', label: '원당제실 회의 구분', meta: '매년 4월 둘째 주 대표자 협의 구조' }
  ],
  branchIntro: '영일정씨는 영일·연일·오천을 관향으로 전해 오는 정씨 문중으로, 전승상 시조는 정종은입니다. 공개 문헌에서는 크게 지주사공계와 감무공계의 두 계열로 정리되며, 본 홈페이지는 그 가운데 지주사공계를 중심으로 구성하였습니다. 지주사공계는 고려 전기의 문신 정습명을 중시조로 받들며, 문한의 전통, 절의, 충의, 향촌 교육의 정신을 함께 계승한 계통으로 이해됩니다. 영천 지역 공개 문헌에서는 정문예에서 좌랑 정치소, 생원 정이상, 훈도 정굉, 감찰 정인개를 거쳐 복재 정담으로 이어지는 흐름이 확인되며, 복재 정담 이후의 후손 가운데 사용자 직계는 세보 원문을 통해 27대 정무상, 28대 정병운, 29대 정한채, 30대 정현규로 직접 확인됩니다. 26대 정호인은 세보 면 배열상 가장 유력한 상계 인물로 정리하되, 후일 추가 대조 가능성을 열어 두었습니다.',
  branchList: [
    { title: '전승 시조', desc: '영일정씨는 전승상 정종은을 시조로 모시며, 관향은 영일·연일·오천으로 함께 전합니다.' },
    { title: '중시조와 대계열', desc: '공개 문헌에서는 고려 전기 정습명을 받드는 지주사공계와 정극유를 받드는 감무공계의 두 큰 계열로 설명합니다.' },
    { title: '지주사공계의 상징성', desc: '지주사공계는 문한의 전통, 절의, 향촌 교육, 충의의 실천을 함께 중시하는 계통으로 이해할 수 있습니다.' },
    { title: '복재 정담 계열', desc: '영천 지역 공개 문헌에서는 정문예 → 정치소 → 정이상 → 정굉 → 정인개 → 정담으로 이어지는 흐름이 확인됩니다.' },
    { title: '원당제실 운영 구분', desc: '사용자 전언 기준으로 원당제실 대문중회의는 1파부터 5파까지 대표자가 모여 문중 현안을 협의하는 구조로 운영됩니다.' },
    { title: '기록 원칙', desc: '공개 문헌으로 확인되는 구간과 세보 원문으로 직접 확인되는 구간을 구분하고, 미확정 세대는 추정 또는 연구 구간으로 명시합니다.' }
  ],
  evidenceCards: [
    {
      tone: 'public',
      badge: '공개 문헌 확인',
      title: '상계와 역사 인물',
      desc: '백과사전과 지역 문화대전 등 공개 자료로 확인되는 인물과 계통입니다.',
      items: [
        '정종은 전승 시조',
        '정습명 지주사공계 중시조',
        '정문예 → 정치소 → 정이상 → 정굉 → 정인개 → 정담'
      ]
    },
    {
      tone: 'family',
      badge: '세보 원문 확인',
      title: '사용자 현재 직계',
      desc: '복재공파세보 면에서 직접 읽히는 사용자 직계 구간입니다.',
      items: [
        '26대 정호인(鄭浩仁)',
        '27대 정무상(鄭武相)',
        '28대 정병운(鄭炳雲)',
        '29대 정한채(鄭翰埰)',
        '30대 정현규(鄭鉉圭)'
      ]
    },
    {
      tone: 'review',
      badge: '추가 대조 필요',
      title: '연구 구간',
      desc: '정담 이후 26대 직전까지의 중간 세대와 26대 연결은 후속 세보 대조가 유효한 구간입니다.',
      items: [
        '복재 정담 이후 중간 세대',
        '26대 정호인 연결 구조',
        '대문중 내 세부 파명과 운영 관례의 공식 문서화'
      ]
    }
  ],
  lineageMap: [
    { label: '시조 전승', title: '정종은', desc: '영일정씨의 시조 전승', tone: 'public' },
    { label: '중시조', title: '정습명', desc: '지주사공계 중시조', tone: 'public' },
    { label: '공개 문헌', title: '정문예 계열', desc: '정문예 → 정치소 → 정이상 → 정굉 → 정인개', tone: 'public' },
    { label: '복재공', title: '정담', desc: '영천성 회복·향교 중건', tone: 'public' },
    { label: '연구 구간', title: '중간 세대 미상', desc: '후손 계보 추가 대조 필요', tone: 'review' },
    { label: '세보 직계', title: '정호인 → 정현규', desc: '26~30대 직접 확인 구간', tone: 'family' }
  ],
  legacyStory: [
    { title: '정습명(鄭襲明) · 지주사공계의 기틀', body: '정습명은 고려 전기의 문신으로 예부시랑, 한림학사, 추밀원지주사 등을 지낸 인물로 알려집니다. 지주사공계가 문한과 정치의 격을 중시하는 계통으로 전해지는 배경을 상징적으로 보여 줍니다.' },
    { title: '정몽주(鄭夢周) · 절의의 상징', body: '정몽주는 고려 말의 절신이자 대학자로, 영일정씨를 대표하는 이름입니다. 그의 절의와 학문은 후손들에게 가문을 기억하는 정신적 기준으로 작용합니다.' },
    { title: '복재 정담(鄭湛) · 충의와 교육', body: '복재 정담은 임진왜란 시기 영천성 회복에 공을 세운 인물로 전하고, 전후에는 향교 중건과 후진 양성에 힘써 향촌 사회를 다시 세운 인물로 기억됩니다.' },
    { title: '연일정씨 6의사 · 실천의 전통', body: '연일정씨 문중에서는 임진왜란 때 형제들이 함께 의병으로 일어나 나라를 지킨 6의사 전승이 전합니다. 이는 문중의 정체성이 학문뿐 아니라 실천적 충의와도 맞닿아 있음을 보여 줍니다.' },
    { title: '생활 윤리와 문중 품격', body: '근검절약, 교육, 기록, 선조 봉향, 공동체 운영은 문중 홈페이지가 단순한 정보 모음이 아니라 후손을 위한 품격 있는 기록 공간이 되어야 하는 이유를 보여 줍니다.' }
  ],
  notables: [
    { name: '정종은(鄭宗殷)', period: '전승상 시조', achievement: '영일정씨의 시원을 상징하는 전승 인물' },
    { name: '정습명(鄭襲明)', period: '고려 전기', achievement: '지주사공계 중시조로 기억되는 고려 전기 문신' },
    { name: '정몽주(鄭夢周)', period: '고려 말', achievement: '절의와 학문의 상징으로 영일정씨를 대표하는 인물' },
    { name: '정문예(鄭文乂)', period: '조선 전기', achievement: '복재 정담 상계의 공개 문헌상 연결 인물' },
    { name: '정담(鄭湛)', period: '조선 중기', achievement: '영천성 회복과 향교 중건으로 기억되는 복재공' }
  ],
  lineageTimeline: [
    { gen: '공개 문헌', name: '정문예', hanja: '鄭文乂', note: '영천 지역 공개 문헌상 복재 정담 상계의 출발점' },
    { gen: '좌랑', name: '정치소', hanja: '鄭致邵', note: '좌랑공으로 불리는 핵심 연결 인물' },
    { gen: '생원', name: '정이상', hanja: '鄭履祥', note: '공개 문헌상 상계 연결 고리' },
    { gen: '훈도', name: '정굉', hanja: '鄭紘', note: '향촌 교육과 연결되는 상계 인물' },
    { gen: '감찰', name: '정인개', hanja: '鄭仁愷', note: '복재 정담 직전 세대' },
    { gen: '복재', name: '정담', hanja: '鄭湛', note: '영천성 회복, 향교 중건의 중심 인물' },
    { gen: '연구 구간', name: '중간 세대 미상', hanja: '未詳', note: '복재 정담 이후 26대 직전까지 추가 세보 대조 필요' }
  ],
  recordPrinciples: [
    { label: '공개 문헌', title: '대외 공개 자료로 확인된 구간은 별도로 표시', body: '한국민족문화대백과사전, 디지털영천문화대전 등 일반 검증 가능한 자료를 기준으로 표기합니다.' },
    { label: '세보 원문', title: '현재 직계는 복재공파세보 원문 우선', body: '정무상, 정병운, 정한채, 정현규는 세보 면에서 직접 읽히는 현재 직계로 정리합니다.' },
    { label: '추정 구간', title: '미확정 세대는 추정 또는 연구 구간으로 남김', body: '확실하지 않은 연결은 성급히 단정하지 않고 후속 자료 대조를 전제로 남깁니다.' },
    { label: '문중 운영', title: '전언 기반 운영 정보는 안내 형식으로 제시', body: '원당제실 회의와 파별 대표 구조는 사용자 전언에 기반한 안내 초안으로 반영합니다.' }
  ],
  wondangInfo: [
    { title: '원당제실의 의미', desc: '영천 북안 원당은 선조를 봉향하고 문중 구성원이 모여 제향과 회의를 준비하는 상징적 공간으로 기억됩니다.' },
    { title: '기록의 방향', desc: '재실의 유래, 편액, 제향일, 중수 연혁, 사진과 영상, 회의 결과 등을 누적 기록하여 후손 누구나 문중의 역사를 한눈에 볼 수 있도록 하는 데 목적이 있습니다.' },
    { title: '공동체의 가치', desc: '원당제실은 건물 자체보다도 선대를 기리는 마음, 후손의 연대, 문중 운영의 지속성을 보여 주는 문화적 중심입니다.' }
  ],
  meetingSummary: [
    { title: '1파 대표', desc: '대문중 주요 안건, 제향 협의, 연간 운영 현황을 공유하는 대표 창구로 소개할 수 있습니다.' },
    { title: '2파 대표', desc: '차기 행사 준비, 후손 참여 확대, 기록 보존, 문중 협력 과제를 조율하는 축으로 정리할 수 있습니다.' },
    { title: '3파 대표', desc: '지역별 후손 네트워크, 선영 관리, 재실 활용과 관련한 의견을 전달하는 역할로 정리할 수 있습니다.' },
    { title: '4파 대표', desc: '세대 간 소통, 전통 계승, 후손 교육, 문중 활동의 연속성을 논의하는 대표 역할로 소개할 수 있습니다.' },
    { title: '5파 대표', desc: '각 파 의견을 모아 회의 결과를 정리하고, 다음 회의와 제향 준비를 연결하는 통합적 역할로 설명할 수 있습니다.' }
  ],
  sourceList: [
    { title: '영일정씨 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0037647', desc: '영일정씨 시조 전승과 지주사공계·감무공계의 큰 구조 설명' },
    { title: '정습명 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0050486', desc: '지주사공 정습명의 생애와 관직' },
    { title: '정몽주 - 한국민족문화대백과사전', url: 'https://encykorea.aks.ac.kr/Article/E0050190', desc: '정몽주의 절의와 학문' },
    { title: '정문예 - 디지털영천문화대전', url: 'https://yeongcheon.grandculture.net/yeongcheon/toc/GC05101105', desc: '복재 정담 상계 관련 공개 문헌' },
    { title: '정담 - 디지털영천문화대전', url: 'https://yeongcheon.grandculture.net/yeongcheon/toc/GC05101116', desc: '복재 정담의 생애와 영천성 회복, 향교 중건 관련 설명' },
    { title: '복재공파세보 사용자 소장본', url: '#', desc: '현재 직계와 26대 유력 인물을 대조한 세보 원문 자료' }
  ],
  externalLinks: [
    { title: '경주박물관', url: 'https://gyeongju.museum.go.kr/', desc: '경주권 역사·문화유산 참고' },
    { title: 'yuniljung.com', url: 'http://yuniljung.com/', desc: '문중 관련 참고 홈페이지' }
  ],
  treeNodes: [
    { id: 'n1', name: '정종은', hanja: '鄭宗殷', gen: '시조', branch: '영일정씨', verified: 'public', note: '영일정씨의 시조로 전승되는 인물입니다.' },
    { id: 'n2', name: '정습명', hanja: '鄭襲明', gen: '중시조', branch: '지주사공계', verified: 'public', note: '고려 전기의 명신으로 지주사공계의 중시조로 기억됩니다.' },
    { id: 'n3', name: '정문예', hanja: '鄭文乂', gen: '공개문헌', branch: '지주사공계', verified: 'public', note: '영천 지역 공개 문헌에서 복재 정담의 상계로 확인되는 인물입니다.' },
    { id: 'n4', name: '정치소', hanja: '鄭致邵', gen: '좌랑', branch: '좌랑공계', verified: 'public', note: '좌랑공으로 불리며 복재 정담 상계의 핵심 연결 인물입니다.' },
    { id: 'n5', name: '정이상', hanja: '鄭履祥', gen: '생원', branch: '좌랑공계', verified: 'public', note: '생원으로 전하며 공개 문헌상 상계의 연결 고리입니다.' },
    { id: 'n6', name: '정굉', hanja: '鄭紘', gen: '훈도', branch: '좌랑공계', verified: 'public', note: '훈도로 전하며 정인개의 상계로 공개 문헌에서 확인됩니다.' },
    { id: 'n7', name: '정인개', hanja: '鄭仁愷', gen: '감찰', branch: '좌랑공계', verified: 'public', note: '감찰로 전하며 복재 정담의 직전 세대로 공개 문헌에서 확인됩니다.' },
    { id: 'n8', name: '정담', hanja: '鄭湛', gen: '복재', branch: '복재공 계열', verified: 'public', note: '영천성 회복과 향교 중건에 힘쓴 복재공입니다.' },
    { id: 'n9', name: '중간 세대 미상', hanja: '未詳', gen: '연구구간', branch: '복재공 후손', verified: 'needs_review', note: '복재 정담 이후 26대 직전까지의 중간 세대는 추가 세보 대조가 필요한 구간입니다.' },
    { id: 'n10', name: '정호인', hanja: '鄭浩仁', gen: '26대', branch: '사용자 직계', verified: 'family', note: '복재공파세보 66면에서 직접 확인되는 사용자 직계 증조부 세대입니다.' },
    { id: 'n11', name: '정무상', hanja: '鄭武相', gen: '27대', branch: '사용자 직계', verified: 'family', note: '복재공파세보 67면에서 직접 확인되는 사용자 직계 조부 세대입니다.' },
    { id: 'n12', name: '정병운', hanja: '鄭炳雲', gen: '28대', branch: '사용자 직계', verified: 'family', note: '복재공파세보 67면에서 직접 확인되는 사용자 직계 부친 세대입니다.' },
    { id: 'n13', name: '정한채', hanja: '鄭翰埰', gen: '29대', branch: '사용자 직계', verified: 'family', note: '대한민국명장(정보처리), 우수숙련기술인(정보처리), 대한민국산업현장교수(정보통신), (주)동양정보시스템 대표.' },
    { id: 'n13', name: '정길채', hanja: '鄭吉埰', gen: '29대', branch: '사용자 형제', verified: 'family', note: '' },
    { id: 'n14', name: '정현규', hanja: '鄭鉉圭', gen: '30대', branch: '사용자 직계', verified: 'family', note: '경상북도교육청근무, 기록연구사(경북대 박사과정)' },
    { id: 'n14', name: '정현우', hanja: '鄭鉉祐', gen: '30대', branch: '사용자 조카', verified: 'family', note: '디자인 기획' },
    { id: 'n14', name: '정현민', hanja: '鄭鉉敏', gen: '30대', branch: '사용자 직계', verified: 'family', note: '제빵사' },
    { id: 'n14', name: '정현일', hanja: '鄭鉉一', gen: '30대', branch: '사용자 조카', verified: 'family', note: '대구시 공무원' }
  ],
  treeEdges: [['n1','n2'], ['n2','n3'], ['n3','n4'], ['n4','n5'], ['n5','n6'], ['n6','n7'], ['n7','n8'], ['n8','n9'], ['n9','n10'], ['n10','n11'], ['n11','n12'], ['n12','n13'], ['n13','n14']],
  ledgerAccounts: [
    { id: 'acc1', name: '문중 운영계좌', bank: '은행명 입력', number: '계좌번호 입력', openingBalance: 0 }
  ],
  ledgerEntries: [],
  receipts: []
};

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }
function money(v){ return Number(v || 0).toLocaleString('ko-KR'); }
function escapeHtml(str=''){ return str.replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }

function sortMediaItems(items=[]) {
  return [...items].sort((a,b) => {
    const ao = Number(a.order || 0);
    const bo = Number(b.order || 0);
    if (ao !== bo) return ao - bo;
    return String(a.file || '').localeCompare(String(b.file || ''), 'ko');
  });
}
function inferMediaType(name) {
  const lower = String(name || '').toLowerCase();
  if (/(png|jpg|jpeg|gif|webp)$/i.test(lower)) return 'image';
  if (/(mp4|webm|ogg|mov)$/i.test(lower)) return 'video';
  return 'other';
}
function titleFromFileName(name) {
  return String(name || '').replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
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
      overviewStats: parsed.overviewStats || clone(defaultData.overviewStats),
      evidenceCards: parsed.evidenceCards || clone(defaultData.evidenceCards),
      lineageMap: parsed.lineageMap || clone(defaultData.lineageMap),
      lineageTimeline: parsed.lineageTimeline || clone(defaultData.lineageTimeline),
      recordPrinciples: parsed.recordPrinciples || clone(defaultData.recordPrinciples),
      legacyStory: parsed.legacyStory || clone(defaultData.legacyStory),
      branchList: parsed.branchList || clone(defaultData.branchList),
      notables: parsed.notables || clone(defaultData.notables),
      wondangInfo: parsed.wondangInfo || clone(defaultData.wondangInfo),
      meetingSummary: parsed.meetingSummary || clone(defaultData.meetingSummary),
      sourceList: parsed.sourceList || clone(defaultData.sourceList),
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

function initNav() {
  qsa('.navbtn').forEach(btn => btn.addEventListener('click', () => {
    qsa('.navbtn').forEach(b => b.classList.remove('active'));
    qsa('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    qs('#' + btn.dataset.panel).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));
}

function renderOverviewStats() {
  const wrap = qs('#overviewStats');
  if (!wrap) return;
  wrap.innerHTML = (state.overviewStats || []).map(item => `
    <article class="stat-card">
      <div class="value">${escapeHtml(item.value)}</div>
      <div class="label">${escapeHtml(item.label)}</div>
      <div class="meta">${escapeHtml(item.meta || '')}</div>
    </article>
  `).join('');
}

function renderFeatureList(target, items, options={}) {
  const el = qs(target);
  if (!el) return;
  el.innerHTML = (items || []).map(item => `
    <div class="item">
      <strong>${escapeHtml(item.title || item.name || item.label)}</strong>
      <div class="muted">${escapeHtml(item.desc || item.body || item.achievement || item.value || '')}</div>
    </div>
  `).join('');
}

function renderEvidenceCards() {
  const wrap = qs('#evidenceCards');
  if (!wrap) return;
  wrap.innerHTML = (state.evidenceCards || []).map(card => `
    <article class="evidence-card">
      <span class="evidence-badge ${card.tone}">${escapeHtml(card.badge)}</span>
      <strong>${escapeHtml(card.title)}</strong>
      <div class="muted">${escapeHtml(card.desc)}</div>
      <ul class="evidence-list">${(card.items || []).map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderLineageMap() {
  const wrap = qs('#lineageMap');
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="lineage-track">
      ${(state.lineageMap || []).map(step => `
        <article class="lineage-step ${step.tone}">
          <div class="step-label">${escapeHtml(step.label)}</div>
          <div class="step-title">${escapeHtml(step.title)}</div>
          <div class="step-desc">${escapeHtml(step.desc)}</div>
        </article>
      `).join('')}
    </div>
    <div class="lineage-legend">
      <span class="legend-pill"><span class="legend-dot public"></span> 공개 문헌 확인 구간</span>
      <span class="legend-pill"><span class="legend-dot family"></span> 세보 원문 확인 구간</span>
      <span class="legend-pill"><span class="legend-dot review"></span> 추가 대조 필요 구간</span>
    </div>
  `;
}

function renderTimeline() {
  const wrap = qs('#lineageTimeline');
  if (!wrap) return;
  wrap.innerHTML = (state.lineageTimeline || []).map(item => `
    <article class="timeline-item">
      <div class="timeline-badge">${escapeHtml(item.gen)}</div>
      <div>
        <strong>${escapeHtml(item.name)}${item.hanja ? ` (${escapeHtml(item.hanja)})` : ''}</strong>
        <div class="timeline-note">${escapeHtml(item.note || '')}</div>
      </div>
    </article>
  `).join('');
}

function renderRecordPrinciples() {
  const wrap = qs('#recordPrinciples');
  if (!wrap) return;
  wrap.innerHTML = (state.recordPrinciples || []).map(item => `
    <article class="principle-card">
      <div class="principle-label">${escapeHtml(item.label)}</div>
      <strong>${escapeHtml(item.title)}</strong>
      <div class="muted">${escapeHtml(item.body)}</div>
    </article>
  `).join('');
}

function renderReadingBlock() {
  const intro = qs('#branchIntro');
  if (intro) intro.innerHTML = escapeHtml(state.branchIntro || '');
}

function renderHome() {
  qs('#siteTitle').textContent = state.siteTitle;
  qs('#siteSubtitle').textContent = state.subtitle;
  renderOverviewStats();
  renderReadingBlock();
  renderFeatureList('#branchList', state.branchList);
  renderEvidenceCards();
  renderLineageMap();
  renderFeatureList('#legacyStory', state.legacyStory);
  renderFeatureList('#notables', state.notables);
  renderTimeline();
  renderRecordPrinciples();
  renderFeatureList('#wondangInfo', state.wondangInfo);
  renderFeatureList('#warHeroes', state.meetingSummary);
  renderFeatureList('#sourceList', state.sourceList);
  const links = qs('#externalLinks');
  if (links) {
    links.innerHTML = (state.externalLinks || []).map(item => `
      <div class="source-item">
        <a href="${item.url}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>
        <div class="muted">${escapeHtml(item.desc || '')}</div>
      </div>
    `).join('');
  }
}

function renderTree() {
  const nodes = state.treeNodes;
  const verifyLabel = { public: '공개자료 검증', family: '세보 원문 확인', needs_review: '추가 대조 필요' };
  const treeView = qs('#treeView');
  if (!treeView) return;
  treeView.innerHTML = nodes.map(n => `
    <div class="node" data-id="${n.id}">
      <strong>${escapeHtml(n.gen)} ${escapeHtml(n.name)} ${n.hanja ? '(' + escapeHtml(n.hanja) + ')' : ''}</strong>
      <div>${escapeHtml(n.branch)} <span class="verify ${n.verified}">${verifyLabel[n.verified] || ''}</span></div>
      <small>${escapeHtml(n.note)}</small>
    </div>
  `).join('');
  const position = qs('#myPosition');
  if (position) position.innerHTML = '<strong>현재 확인 기준:</strong> 공개 문헌 구간은 정문예 → 정치소 → 정이상 → 정굉 → 정인개 → 정담이며, 세보 원문 구간은 27대 정무상 → 28대 정병운 → 29대 정한채 → 30대 정현규입니다. 26대 정호인은 복재공파세보 면 배열상 가장 유력한 상계 인물로 연구 구간에 배치했습니다.';
  qsa('.node').forEach(nodeEl => nodeEl.addEventListener('click', () => {
    const node = nodes.find(n => n.id === nodeEl.dataset.id);
    const detail = qs('#nodeDetail');
    if (!detail) return;
    detail.innerHTML = `
      <div class="item">
        <strong>${escapeHtml(node.gen)} ${escapeHtml(node.name)} ${node.hanja ? '(' + escapeHtml(node.hanja) + ')' : ''}</strong>
        <div class="muted">${escapeHtml(node.branch)}</div>
        <div class="mt-12">${escapeHtml(node.note)}</div>
      </div>
    `;
  }));
}

function initLineageForm() {
  const form = qs('#lineageForm');
  if (!form) return;
  form.addEventListener('submit', e => {
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
  ['#entryAccount','#receiptAccount','#csvAccount'].forEach(sel => {
    const el = qs(sel);
    if (el) el.innerHTML = options;
  });
}

function renderAccounts() {
  const wrap = qs('#accounts');
  if (!wrap) return;
  wrap.innerHTML = state.ledgerAccounts.map(a => {
    const related = state.ledgerEntries.filter(e => e.accountId === a.id);
    const lastBalance = related.length ? Number(related[related.length - 1].balance || 0) : Number(a.openingBalance || 0);
    return `<div class="stat"><div class="v">${money(lastBalance)}</div><div>${escapeHtml(a.name)}</div><div class="muted">${escapeHtml(a.bank)} / ${escapeHtml(a.number)}</div></div>`;
  }).join('');
}

function renderLedger() {
  const body = qs('#ledgerBody');
  if (!body) return;
  const nameById = Object.fromEntries(state.ledgerAccounts.map(a => [a.id, a.name]));
  const rows = [...state.ledgerEntries].sort((a,b) => String(a.date).localeCompare(String(b.date)));
  body.innerHTML = rows.map(r => `
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
  const wrap = qs('#receiptList');
  if (!wrap) return;
  wrap.innerHTML = state.receipts.map(r => `
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
  const accountForm = qs('#accountForm');
  if (accountForm) {
    accountForm.addEventListener('submit', e => {
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
  }

  const entryForm = qs('#entryForm');
  if (entryForm) {
    entryForm.addEventListener('submit', e => {
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
  }

  const receiptForm = qs('#receiptForm');
  if (receiptForm) {
    receiptForm.addEventListener('submit', async e => {
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
  }

  const csvForm = qs('#csvForm');
  if (csvForm) {
    csvForm.addEventListener('submit', async e => {
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
  }

  const exportBtn = qs('#exportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'youngil-jeong-site-data.json';
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }

  const resetBtn = qs('#resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (!confirm('저장된 데이터 전체를 초기화하시겠습니까?')) return;
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(MEDIA_STORAGE_KEY);
      state = loadData();
      managedMedia = null;
      renderAll();
    });
  }
}

function fileToDataURL(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
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
          <div class="admin-actions"><button type="button" class="secondary media-delete-btn" data-id="${item.id}">삭제</button></div>
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
  if (!gallery) return;
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

  const exportBtn = qs('#exportMediaJsonBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportManagedMediaJson);

  const resetMediaBtn = qs('#resetMediaBtn');
  if (resetMediaBtn) {
    resetMediaBtn.addEventListener('click', async () => {
      if (!confirm('관리자에서 편집한 사진 목록을 초기 상태로 되돌리시겠습니까?')) return;
      localStorage.removeItem(MEDIA_STORAGE_KEY);
      managedMedia = await loadBaseMediaItems();
      saveManagedMedia();
      renderMediaGallery();
    });
  }
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
  const reload = qs('#reloadMediaBtn');
  if (reload) reload.addEventListener('click', renderMediaGallery);
  renderAll();
});
