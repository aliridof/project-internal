/**
 * @file app.js - Unified IDE (refactored)
 */

// ============ 1. STATE & VFS ============
const fileContents = {
  'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Project</title>
</head>
<body>
<main class="container">
<h1>Hello World</h1>
</main>
</body>
</html>`,
  'styles.css': `body {
  font-family: 'Inter', sans-serif;
  color: #171717;
}
.container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
h1 { font-size: 3rem; font-weight: 700; letter-spacing: -0.05em; }`,
  'main.js': `document.addEventListener('DOMContentLoaded', () => {
  console.log('dof code initialized');
  const heading = document.querySelector('h1');
  heading.classList.add('fade-in');
});`,
  'package.json': `{
  "name": "dof-code",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": { "dev": "vite", "build": "vite build" },
  "devDependencies": { "vite": "^6.2.3" }
}`
};
let currentFile = 'index.html';

// ============ 2. SYNTAX HIGHLIGHTING ============
const escapeHTML = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const highlightHTML = (code) => {
  const esc = escapeHTML(code);
  return esc
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token-comment">$1</span>')
    .replace(/(&lt;\!DOCTYPE.*?[^&gt;]*&gt;)/g, '<span class="token-operator">$1</span>')
    .replace(/(&lt;\/?[a-zA-Z0-9\-]+)/g, '<span class="token-tag">$1</span>')
    .replace(/(\s[a-zA-Z0-9\-]+)(=)/g, ' <span class="token-attr">$1</span>$2')
    .replace(/(".*?")/g, '<span class="token-string">$1</span>')
    .replace(/(&gt;)/g, '<span class="token-operator">$1</span>');
};
const highlightCSS = (code) => {
  const esc = escapeHTML(code);
  return esc
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>')
    .replace(/([a-zA-Z0-9\-\.\#\s\:\(\)]+)\s*\{/g, '<span class="token-tag">$1</span> {')
    .replace(/([a-zA-Z0-9\-]+)\s*:/g, '<span class="token-attr">$1</span>:')
    .replace(/(:\s*[^;\}]+;)/g, ': <span class="token-string">$1</span>')
    .replace(/([\{\}])/g, '<span class="token-operator">$1</span>');
};
const highlightJS = (code) => {
  const esc = escapeHTML(code);
  return esc
    .replace(/(\/\/.*)/g, '<span class="token-comment">$1</span>')
    .replace(/(['"\`].*?['"\`])/g, '<span class="token-string">$1</span>')
    .replace(/\b(const|let|var|function|return|import|export|from|class|extends|new|document|window|addEventListener)\b/g, '<span class="token-tag">$1</span>')
    .replace(/([\{\}\(\)\=\+\-\*\/])/g, '<span class="token-operator">$1</span>');
};
const highlightJSON = (code) => {
  const esc = escapeHTML(code);
  return esc
    .replace(/(".*?")(\s*:)/g, '<span class="token-tag">$1</span>$2')
    .replace(/(:\s*"[^"]*")/g, ': <span class="token-string">$1</span>')
    .replace(/([\{\}\[\]\,])/g, '<span class="token-operator">$1</span>');
};
const getHighlightedCode = (file, code) => {
  if (file.endsWith('.html')) return highlightHTML(code);
  if (file.endsWith('.css')) return highlightCSS(code);
  if (file.endsWith('.js')) return highlightJS(code);
  if (file.endsWith('.json')) return highlightJSON(code);
  return escapeHTML(code);
};

// ============ 3. EDITOR (OVERLAY TECHNIQUE) ============
let editorInput, editorHighlight, editorGutterInner;

const initEditorElements = () => {
  editorInput = document.getElementById('editor-input');
  editorHighlight = document.getElementById('editor-highlight');
  editorGutterInner = document.getElementById('editor-gutter-inner');
  if (!editorInput) return;
  editorInput.addEventListener('input', handleCodeInput);
  editorInput.addEventListener('scroll', syncEditorScroll);
  editorInput.addEventListener('keydown', handleEditorKeyDown);
};

const syncEditorScroll = () => {
  if (editorHighlight) {
    editorHighlight.scrollTop = editorInput.scrollTop;
  }
  if (editorGutterInner) {
    editorGutterInner.style.transform = `translateY(-${editorInput.scrollTop}px)`;
  }
};

const handleEditorKeyDown = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const s = editorInput.selectionStart, en = editorInput.selectionEnd;
    const v = editorInput.value;
    editorInput.value = v.slice(0, s) + '  ' + v.slice(en);
    editorInput.selectionStart = editorInput.selectionEnd = s + 2;
    handleCodeInput();
  }
};

const handleCodeInput = () => {
  if (!editorInput) return;
  const text = editorInput.value;
  fileContents[currentFile] = text;
  editorHighlight.innerHTML = getHighlightedCode(currentFile, text);
  updateGutter(text);
  updateStats(currentFile, text);
  schedulePreview();
};

const updateStats = (filename, code) => {
  const chars = code.length;
  const lines = code.split('\n').length;
  const isProse = filename.endsWith('.html');
  const words = isProse && code.trim() !== '' ? code.trim().split(/\s+/).length : null;
  const el = document.getElementById('editor-stats');
  if (el) el.textContent = words !== null ? `${chars} chars · ${words} words · ${lines} lines` : `${chars} chars · ${lines} lines`;
};

const updateGutter = (code) => {
  if (!editorGutterInner) return;
  const lineCount = code.split('\n').length;
  const bufferMax = Math.max(15, lineCount);
  let html = '';
  for (let i = 1; i <= bufferMax; i++) html += `<div class="flex items-center justify-center">${i}</div>`;
  editorGutterInner.innerHTML = html;
};

const selectFileInIDE = (filename) => {
  currentFile = filename;
  const sub = document.getElementById('sub-top-bar-filename');
  if (sub) sub.textContent = filename;

  ['index.html', 'styles.css', 'main.js', 'package.json'].forEach(tab => {
    const key = tab.replace('.', '_');
    const tabEl = document.getElementById(`tab-${key}`);
    const itemEl = document.getElementById(`file-item-${key}`);
    const active = tab === filename;
    if (tabEl) tabEl.className = active
      ? "flex items-center gap-2 px-4 h-full bg-white border-b-2 border-orange-500 cursor-pointer text-gray-900 transition-all font-semibold text-xs"
      : "flex items-center gap-2 px-4 h-full border-b-2 border-transparent hover:bg-gray-50 cursor-pointer text-gray-400 transition-all text-xs";
    if (itemEl) {
      const sp = (tab === 'package.json') ? "px-4" : "pl-12 pr-4";
      itemEl.className = active
        ? `flex items-center gap-2 ${sp} py-1.5 bg-orange-50/50 border-r-2 border-orange-500 cursor-pointer text-gray-900 font-semibold`
        : `flex items-center gap-2 ${sp} py-1.5 hover:bg-gray-50 cursor-pointer text-gray-500 hover:text-gray-900`;
    }
  });

  const raw = fileContents[filename];
  editorInput.value = raw;
  editorHighlight.innerHTML = getHighlightedCode(filename, raw);
  updateGutter(raw);
  updateStats(filename, raw);
  editorInput.scrollTop = 0;
  if (editorGutterInner) editorGutterInner.style.transform = 'translateY(0)';
  updatePreview();
};

// ============ 4. PREVIEW (DEBOUNCED + SAFE INJECT) ============
let previewTimer = null;
const schedulePreview = () => {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(updatePreview, 400);
};

const updatePreview = () => {
  const iframe = document.getElementById('preview-iframe');
  if (!iframe) return;
  let combined = fileContents['index.html'] || '';
  const css = fileContents['styles.css'] || '';
  const js = fileContents['main.js'] || '';

  const styleTag = `\n<style>\n${css}\n</style>\n`;
  let hm = combined.match(/<head[^>]*>/i);
  if (hm) {
    const idx = hm.index + hm[0].length;
    combined = combined.slice(0, idx) + styleTag + combined.slice(idx);
  } else if (/<body[^>]*>/i.test(combined)) {
    combined = combined.replace(/<body[^>]*>/i, m => m + styleTag);
  } else combined = styleTag + combined;

  const scriptTag = `\n<script>\n${js}\n<\/script>\n`;
  if (/<\/body>/i.test(combined)) combined = combined.replace(/<\/body>/i, m => scriptTag + m);
  else combined += scriptTag;

  const tw = `\n<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\n`;
  hm = combined.match(/<head[^>]*>/i);
  if (hm) {
    const idx = hm.index + hm[0].length;
    combined = combined.slice(0, idx) + tw + combined.slice(idx);
  } else combined = tw + combined;

  iframe.srcdoc = combined;
};

const refreshPreview = () => {
  const card = document.getElementById('preview-screen-card');
  if (card) {
    card.style.opacity = '0.3';
    setTimeout(() => { card.style.opacity = '1'; updatePreview(); }, 300);
  }
};

let isMobileResponsive = false;
const toggleResponsive = () => {
  const card = document.getElementById('preview-screen-card');
  const btn = document.getElementById('responsive-btn');
  isMobileResponsive = !isMobileResponsive;
  if (card && btn) {
    if (isMobileResponsive) { card.style.maxWidth = '320px'; card.style.margin = '0 auto'; btn.classList.add('bg-gray-100', 'text-black'); }
    else { card.style.maxWidth = ''; card.style.margin = ''; btn.classList.remove('bg-gray-100', 'text-black'); }
  }
};

let isInspectMode = false;
const toggleInspect = () => {
  const card = document.getElementById('preview-screen-card');
  const btn = document.getElementById('inspect-btn');
  isInspectMode = !isInspectMode;
  if (card && btn) {
    if (isInspectMode) { card.classList.add('ring-2', 'ring-dashed', 'ring-orange-500'); btn.classList.add('bg-gray-100', 'text-black'); }
    else { card.classList.remove('ring-2', 'ring-dashed', 'ring-orange-500'); btn.classList.remove('bg-gray-100', 'text-black'); }
  }
};

// ============ 5. EXPLORER ============
const toggleExplorerFolder = (folderId) => {
  const c = document.getElementById(`folder-content-${folderId}`);
  const ch = document.getElementById(`chevron-${folderId}`);
  if (c && ch) {
    if (c.classList.contains('hidden')) { c.classList.remove('hidden'); ch.textContent = 'expand_more'; }
    else { c.classList.add('hidden'); ch.textContent = 'chevron_right'; }
  }
};
const triggerNewFile = () => { const n = prompt("Enter new file name:"); if (n) alert(`Created file: ${n}`); };
const triggerNewFolder = () => { const n = prompt("Enter new folder name:"); if (n) alert(`Created folder: ${n}`); };
const triggerStorage = () => alert("VFS local storage synchronized successfully.");

// ============ 6. JOURNAL ============
const toggleMediaChoices = () => {
  const o = document.getElementById('media-choices-overlay');
  const i = document.getElementById('media-toggle-icon');
  if (!o) return;
  if (o.classList.contains('hidden')) { o.classList.remove('hidden'); if (i) i.textContent = 'close'; }
  else { o.classList.add('hidden'); if (i) i.textContent = 'add'; }
};
const selectMediaType = (type) => {
  const input = document.getElementById('journal-input');
  if (input) input.placeholder = `Media active: ${type}. Write prompt...`;
  toggleMediaChoices();
};
const sendJournalNote = () => {
  const input = document.getElementById('journal-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  const welcome = document.getElementById('journal-welcome');
  if (welcome) welcome.remove();
  const history = document.getElementById('journal-inner');
  const jh = document.getElementById('journal-history');
  if (!history) return;

  const userMsg = document.createElement('div');
  userMsg.className = "flex justify-end";
  userMsg.innerHTML = `<div class="bg-black text-white text-xs px-4 py-3 rounded-2xl rounded-tr-none max-w-[90%] shadow-sm leading-relaxed font-sans">${escapeHTML(text)}</div>`;  // BUG 3: 90%
  history.appendChild(userMsg);
  input.value = '';   // BUG 2 FIX: clear input
  if (jh) jh.scrollTop = jh.scrollHeight;

  setTimeout(() => {
    let resp = "Analyzing workspace and syncing with developer metadata logs.";
    const q = text.toLowerCase();
    if (q.includes('log')) resp = "<strong>System Log Sync complete:</strong> VFS successfully matched indices. Build verified on localhost:3000 with zero warnings.";
    else if (q.includes('design')) resp = "<strong>Design aesthetic matched:</strong> High-end minimalist dark accents combined with orange highlights.";
    else if (q.includes('tech')) resp = "<strong>Technical specifications updated:</strong> Installed dev dependencies are compatible.";
    const sys = document.createElement('div');
    sys.className = "flex justify-start";
    sys.innerHTML = `<div class="bg-gray-50 border border-gray-100 text-gray-800 text-xs px-4 py-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-xs leading-relaxed font-sans">${resp}</div>`;  // BUG 3: 90%
    history.appendChild(sys);
    if (jh) jh.scrollTop = jh.scrollHeight;
  }, 600);
};
const handleJournalKeyDown = (e) => { if (e.key === 'Enter') sendJournalNote(); };

// ============ 7. LAYOUT & RESIZERS ============
let panelOrder = [];
let draggedName = null;

const wrapAndInitResizers = () => {
  const grid = document.getElementById('main-grid');
  if (!grid) return;
  const panels = [
    { id: 'panel-journal', resizerId: 'resizer-journal', name: 'journal' },
    { id: 'panel-explorer', resizerId: 'resizer-explorer', name: 'explorer' },
    { id: 'panel-editor', resizerId: 'resizer-editor', name: 'editor' },
    { id: 'panel-preview', resizerId: null, name: 'preview' }
  ];
  panels.forEach(p => {
    const el = document.getElementById(p.id);
    if (!el || document.getElementById(`wrapper-${p.name}`)) return;
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-${p.name}`;
    wrapper.className = 'h-full relative flex flex-col overflow-hidden';
    wrapper.setAttribute('data-panel', p.name);
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    if (p.resizerId) {
      const r = document.getElementById(p.resizerId);
      if (r) wrapper.appendChild(r);
    }
  });

  ['resizer-journal', 'resizer-explorer', 'resizer-editor'].forEach(rid => {
    const resizer = document.getElementById(rid);
    if (!resizer) return;
    let startX, startWidth, wrapper, rafId = null, delta = 0;
    resizer.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      wrapper = resizer.parentElement;
      if (!wrapper) return;
      startWidth = wrapper.getBoundingClientRect().width;
      const visible = Array.from(grid.children).filter(w => w.style.display !== 'none');
      const colIdx = visible.indexOf(wrapper);
      if (colIdx === -1 || colIdx === visible.length - 1) return;

      const onMove = (ev) => {
        delta = ev.clientX - startX;
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const cw = grid.getBoundingClientRect().width;
          const pct = Math.max(5, Math.min(((startWidth + delta) / cw) * 100, 85));
          const widths = visible.map(w => (w.getBoundingClientRect().width / cw) * 100);
          widths[colIdx] = pct;
          const tpl = visible.map((w, i) => {
            if (i === visible.length - 1) return '1fr';
            w.dataset.width = `${widths[i]}%`;
            return `${widths[i]}%`;
          });
          grid.style.gridTemplateColumns = tpl.join(' ');
          rafId = null;
        });
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        if (rafId) cancelAnimationFrame(rafId);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    });
  });

  syncPanelOrderFromDOM();
  updateGridLayout();
  renderDropdownList();
  window.addEventListener('resize', updateGridLayout);
};

const syncPanelOrderFromDOM = () => {
  const grid = document.getElementById('main-grid');
  if (!grid) return;
  panelOrder = Array.from(grid.children)
    .filter(w => w.hasAttribute('data-panel'))
    .map(w => w.getAttribute('data-panel'));
};

const updateGridLayout = () => {
  const grid = document.getElementById('main-grid');
  if (!grid) return;
  if (window.innerWidth <= 1024) return; // CSS flex handles mobile
  const visible = Array.from(grid.children).filter(w => w.style.display !== 'none');
  if (visible.length === 0) { grid.style.gridTemplateColumns = ''; return; }
  grid.style.gridTemplateColumns = visible.map((w, i) =>
    i === visible.length - 1 ? '1fr' : (w.dataset.width || '1fr')
  ).join(' ');
  visible.forEach((w, i) => {
    const r = w.querySelector('[data-panel-resizer]');
    if (r) r.style.display = (i === visible.length - 1) ? 'none' : '';
  });
};

const togglePanelVisibility = (name, force) => {
  const wrapper = document.querySelector(`[data-panel="${name}"]`);
  if (!wrapper) return;
  const makeVisible = force !== undefined ? force : wrapper.style.display === 'none';
  wrapper.style.display = makeVisible ? '' : 'none';
  renderDropdownList();
  updateGridLayout();
};

const movePanelInOrder = (drag, target) => {
  const di = panelOrder.indexOf(drag), ti = panelOrder.indexOf(target);
  if (di === -1 || ti === -1 || di === ti) return;
  panelOrder.splice(di, 1);
  panelOrder.splice(ti, 0, drag);
  applyDOMOrder();
};
const applyDOMOrder = () => {
  const grid = document.getElementById('main-grid');
  if (!grid) return;
  panelOrder.forEach(name => {
    const w = document.querySelector(`[data-panel="${name}"]`);
    if (w) grid.appendChild(w);
  });
  updateGridLayout();
};

const renderDropdownList = () => {
  const c = document.getElementById('dropdown-list');
  if (!c) return;
  c.innerHTML = '';
  panelOrder.forEach(name => {
    const w = document.querySelector(`[data-panel="${name}"]`);
    if (!w) return;
    const visible = w.style.display !== 'none';
    const label = name.charAt(0).toUpperCase() + name.slice(1);
    const item = document.createElement('div');
    item.className = 'flex items-center px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors cursor-grab active:cursor-grabbing select-none';
    item.setAttribute('draggable', 'true');
    item.setAttribute('data-name', name);
    item.innerHTML = `<span class="material-symbols-outlined text-gray-400 mr-1.5 pointer-events-none" style="font-size:14px">drag_handle</span><span class="font-medium pointer-events-none capitalize">${label}</span>`;
    const btn = document.createElement('button');
    btn.className = 'ml-auto w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-200 text-gray-400 hover:text-gray-900';
    btn.innerHTML = `<span class="material-symbols-outlined pointer-events-none" style="font-size:14px">${visible ? 'close' : 'add'}</span>`;
    btn.addEventListener('click', (e) => { e.stopPropagation(); togglePanelVisibility(name); });
    item.appendChild(btn);

    item.addEventListener('dragstart', (e) => { draggedName = name; item.classList.add('opacity-40'); e.dataTransfer.setData('text/plain', name); });
    item.addEventListener('dragend', () => { item.classList.remove('opacity-40'); draggedName = null; Array.from(c.children).forEach(x => x.classList.remove('bg-gray-100')); });
    item.addEventListener('dragover', (e) => { e.preventDefault(); if (draggedName && draggedName !== name) item.classList.add('bg-gray-100'); });
    item.addEventListener('dragleave', () => item.classList.remove('bg-gray-100'));
    item.addEventListener('drop', (e) => { e.preventDefault(); item.classList.remove('bg-gray-100'); if (draggedName && draggedName !== name) { movePanelInOrder(draggedName, name); renderDropdownList(); } });
    c.appendChild(item);
  });
};

const resetPanelWidths = () => {
  const grid = document.getElementById('main-grid');
  if (!grid) return;
  const visible = Array.from(grid.children).filter(w => w.style.display !== 'none');
  const n = visible.length;
  if (!n) return;
  const eq = (100 / n).toFixed(4) + '%';
  visible.forEach((w, i) => { if (i < n - 1) w.dataset.width = eq; else delete w.dataset.width; });
  updateGridLayout();
};

const spawnTemplatePanel = (name, title) => {
  const grid = document.getElementById('main-grid');
  const tpl = document.getElementById('panel-template');
  if (!grid || !tpl) return;
  const clone = tpl.cloneNode(true);
  clone.id = `panel-${name}`;
  clone.className = 'flex flex-col bg-white overflow-hidden h-full border-r border-gray-100';
  clone.setAttribute('data-purpose', 'template-panel');  // BUG 5 FIX: keep CSS class-based working
  clone.querySelector('.template-top span').textContent = title;
  clone.querySelector('.template-main').id = `main-content-${name}`;
  const wrapper = document.createElement('div');
  wrapper.className = 'h-full relative flex flex-col overflow-hidden';
  wrapper.setAttribute('data-panel', name);
  wrapper.appendChild(clone);
  const resizer = document.createElement('div');
  resizer.setAttribute('data-panel-resizer', '');
  resizer.className = 'shrink-0';
  wrapper.appendChild(resizer);
  grid.insertBefore(wrapper, grid.lastElementChild);
  syncPanelOrderFromDOM();
  updateGridLayout();
  renderDropdownList();
};

// ============ 8. EXPORTS ============
Object.assign(window, {
  fileContents, highlightHTML, highlightCSS, highlightJS, highlightJSON, getHighlightedCode,
  selectFileInIDE, updatePreview, toggleExplorerFolder, triggerNewFile, triggerNewFolder, triggerStorage,
  toggleMediaChoices, selectMediaType, sendJournalNote, handleJournalKeyDown,
  refreshPreview, toggleResponsive, toggleInspect,
  togglePanelVisibility, resetPanelWidths, spawnTemplatePanel
});

// ============ 9. INIT ============
const initApp = () => {
  initEditorElements();
  wrapAndInitResizers();
  selectFileInIDE('index.html');
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
