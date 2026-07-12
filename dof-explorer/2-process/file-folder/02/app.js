// ===== FILE SYSTEM DATA =====
const FILE_SYSTEM = {
  'Home': {
    type: 'folder', children: {
      'Pin': { type: 'folder', children: {} },
      'Recently': { type: 'folder', children: {} },
      'Frequently': { type: 'folder', children: {} }
    }
  },
  'Internal': {
    type: 'folder', children: {
      'Plan': {
        type: 'folder', children: {
          'Downloads': {
            type: 'folder', children: {
              'Desktop': {
                type: 'folder', children: {
                  'Proyek Website': { type: 'folder', children: {
                    'index.html': { type: 'file', ext: 'html', size: 24576, dateModified: '2024-12-15T10:30:00' },
                    'style.css': { type: 'file', ext: 'css', size: 8192, dateModified: '2024-12-15T10:30:00' },
                    'app.js': { type: 'file', ext: 'js', size: 16384, dateModified: '2024-12-14T16:20:00' },
                    'package.json': { type: 'file', ext: 'json', size: 1024, dateModified: '2024-12-10T09:00:00' },
                    'README.md': { type: 'file', ext: 'md', size: 4096, dateModified: '2024-12-12T14:00:00' },
                  }},
                  'Catatan Rapat.txt': { type: 'file', ext: 'txt', size: 2048, dateModified: '2024-12-18T09:15:00' },
                  'Shortcut Chrome.lnk': { type: 'file', ext: 'lnk', size: 512, dateModified: '2024-11-01T08:00:00' },
                }
              },
              'Dokumen': {
                type: 'folder', children: {
                  'Laporan Tahunan 2024.docx': { type: 'file', ext: 'docx', size: 524288, dateModified: '2024-12-01T11:00:00' },
                  'Presentasi Q4.pptx': { type: 'file', ext: 'pptx', size: 3145728, dateModified: '2024-11-28T14:30:00' },
                  'Data Keuangan.xlsx': { type: 'file', ext: 'xlsx', size: 1048576, dateModified: '2024-12-10T16:45:00' },
                  'Surat Resmi.pdf': { type: 'file', ext: 'pdf', size: 262144, dateModified: '2024-12-05T10:20:00' },
                  'Catatan Pribadi': { type: 'folder', children: {
                    'diary.txt': { type: 'file', ext: 'txt', size: 15360, dateModified: '2024-12-20T22:00:00' },
                    'ide-kerja.txt': { type: 'file', ext: 'txt', size: 4096, dateModified: '2024-12-19T08:30:00' },
                  }},
                  'Proposal Proyek.pdf': { type: 'file', ext: 'pdf', size: 1572864, dateModified: '2024-12-08T13:00:00' },
                }
              },
              'Unduhan': {
                type: 'folder', children: {
                  'setup-vscode.exe': { type: 'file', ext: 'exe', size: 89128960, dateModified: '2024-12-15T08:00:00' },
                  'node-v20.10.0.msi': { type: 'file', ext: 'msi', size: 31457280, dateModified: '2024-12-14T12:00:00' },
                  'wallpaper-nature.jpg': { type: 'file', ext: 'jpg', size: 4194304, dateModified: '2024-12-16T15:00:00' },
                  'ebook-programming.pdf': { type: 'file', ext: 'pdf', size: 8388608, dateModified: '2024-12-13T19:30:00' },
                  'font-pack.zip': { type: 'file', ext: 'zip', size: 15728640, dateModified: '2024-12-12T10:00:00' },
                  'video-tutorial.mp4': { type: 'file', ext: 'mp4', size: 157286400, dateModified: '2024-12-11T20:00:00' },
                  'music-ambient.mp3': { type: 'file', ext: 'mp3', size: 7340032, dateModified: '2024-12-10T18:00:00' },
                }
              },
              'Gambar': {
                type: 'folder', children: {
                  'Foto Liburan': { type: 'folder', children: {
                    'IMG_20241201_001.jpg': { type: 'file', ext: 'jpg', size: 5242880, dateModified: '2024-12-01T12:00:00' },
                    'IMG_20241201_002.jpg': { type: 'file', ext: 'jpg', size: 4823449, dateModified: '2024-12-01T12:05:00' },
                    'IMG_20241202_003.jpg': { type: 'file', ext: 'jpg', size: 5505024, dateModified: '2024-12-02T14:30:00' },
                    'panorama-beach.png': { type: 'file', ext: 'png', size: 12582912, dateModified: '2024-12-03T09:00:00' },
                  }},
                  'Screenshot': { type: 'folder', children: {
                    'screenshot-2024-12-10.png': { type: 'file', ext: 'png', size: 1048576, dateModified: '2024-12-10T11:00:00' },
                    'screenshot-2024-12-15.png': { type: 'file', ext: 'png', size: 921600, dateModified: '2024-12-15T16:30:00' },
                    'screenshot-2024-12-18.png': { type: 'file', ext: 'png', size: 1105920, dateModified: '2024-12-18T09:45:00' },
                  }},
                  'logo-perusahaan.png': { type: 'file', ext: 'png', size: 262144, dateModified: '2024-11-15T10:00:00' },
                  'banner-web.svg': { type: 'file', ext: 'svg', size: 32768, dateModified: '2024-11-20T13:00:00' },
                  'avatar.png': { type: 'file', ext: 'png', size: 65536, dateModified: '2024-12-05T08:00:00' },
                }
              },
              'Musik': {
                type: 'folder', children: {
                  'Playlist Santai': { type: 'folder', children: {
                    'rain-sounds.mp3': { type: 'file', ext: 'mp3', size: 8388608, dateModified: '2024-11-10T20:00:00' },
                    'jazz-cafe.mp3': { type: 'file', ext: 'mp3', size: 6291456, dateModified: '2024-11-12T18:00:00' },
                    'lo-fi-beats.mp3': { type: 'file', ext: 'mp3', size: 7340032, dateModified: '2024-11-15T22:00:00' },
                  }},
                  'podcast-ep1.mp3': { type: 'file', ext: 'mp3', size: 52428800, dateModified: '2024-12-05T07:00:00' },
                  'audiobook-ch1.m4a': { type: 'file', ext: 'm4a', size: 31457280, dateModified: '2024-12-08T21:00:00' },
                }
              },
              'Video': {
                type: 'folder', children: {
                  'Rekaman Meeting': { type: 'folder', children: {
                    'meeting-2024-12-10.mp4': { type: 'file', ext: 'mp4', size: 209715200, dateModified: '2024-12-10T17:00:00' },
                    'meeting-2024-12-17.mp4': { type: 'file', ext: 'mp4', size: 262144000, dateModified: '2024-12-17T17:30:00' },
                  }},
                  'tutorial-css.mp4': { type: 'file', ext: 'mp4', size: 157286400, dateModified: '2024-12-01T10:00:00' },
                  'demo-product.mp4': { type: 'file', ext: 'mp4', size: 104857600, dateModified: '2024-11-25T14:00:00' },
                  'clip-lucu.webm': { type: 'file', ext: 'webm', size: 20971520, dateModified: '2024-12-15T20:00:00' },
                }
              },
              'Drive C:': {
                type: 'folder', children: {
                  'Windows': { type: 'folder', children: {
                    'System32': { type: 'folder', children: {
                      'cmd.exe': { type: 'file', ext: 'exe', size: 286720, dateModified: '2024-06-01T00:00:00' },
                      'notepad.exe': { type: 'file', ext: 'exe', size: 204800, dateModified: '2024-06-01T00:00:00' },
                    }},
                    'Fonts': { type: 'folder', children: {
                      'arial.ttf': { type: 'file', ext: 'ttf', size: 131072, dateModified: '2024-06-01T00:00:00' },
                      'consolas.ttf': { type: 'file', ext: 'ttf', size: 98304, dateModified: '2024-06-01T00:00:00' },
                      'segoeui.ttf': { type: 'file', ext: 'ttf', size: 262144, dateModified: '2024-06-01T00:00:00' },
                    }},
                  }},
                  'Program Files': { type: 'folder', children: {
                    'Microsoft VS Code': { type: 'folder', children: {
                      'Code.exe': { type: 'file', ext: 'exe', size: 104857600, dateModified: '2024-11-20T10:00:00' },
                      'resources': { type: 'folder', children: {} },
                    }},
                    'Google': { type: 'folder', children: {
                      'Chrome': { type: 'folder', children: {
                        'chrome.exe': { type: 'file', ext: 'exe', size: 2621440, dateModified: '2024-12-01T08:00:00' },
                      }},
                    }},
                  }},
                  'Users': { type: 'folder', children: {
                    'Pengguna': { type: 'folder', children: {} },
                  }},
                }
              },
              'Drive D:': {
                type: 'folder', children: {
                  'Game': { type: 'folder', children: {
                    'Steam': { type: 'folder', children: {
                      'steam.exe': { type: 'file', ext: 'exe', size: 1572864, dateModified: '2024-10-15T12:00:00' },
                    }},
                    'Epic Games': { type: 'folder', children: {} },
                  }},
                  'Backup': { type: 'folder', children: {
                    'backup-2024-12-01.zip': { type: 'file', ext: 'zip', size: 524288000, dateModified: '2024-12-01T23:00:00' },
                    'backup-2024-12-15.zip': { type: 'file', ext: 'zip', size: 629145600, dateModified: '2024-12-15T23:00:00' },
                  }},
                }
              },
            }
          }
        }
      }
    }
  },
  'External': {
    type: 'folder', children: {
      'Storage': { type: 'folder', children: {} },
      'Drive': { type: 'folder', children: {} },
      'Git': { type: 'folder', children: {} },
      'Share': { type: 'folder', children: {} },
      'Mail': { type: 'folder', children: {} }
    }
  }
};

// ===== STATE =====
let currentPath = ['Internal', 'Plan', 'Downloads'];
let historyStack = [['Internal', 'Plan', 'Downloads']];
let historyIndex = 0;
let selectedItems = new Set();
let clipboard = { items: [], mode: null }; // mode: 'copy' | 'cut'
let viewMode = 'canvas';
let sortBy = 'name';
let sortDir = 'asc';
let searchQuery = '';
let renamingItem = null;

// ===== TAB STATE =====
let tabs = [
  {
    id: 'tab-1',
    name: 'Downloads',
    currentPath: ['Internal', 'Plan', 'Downloads'],
    historyStack: [['Internal', 'Plan', 'Downloads']],
    historyIndex: 0,
    selectedItems: new Set(),
    searchQuery: ''
  }
];
let activeTabId = 'tab-1';
let nextTabId = 2;

function getActiveTab() {
  return tabs.find(t => t.id === activeTabId) || tabs[0];
}

function syncActiveTabState() {
  const activeTab = getActiveTab();
  if (activeTab) {
    currentPath = activeTab.currentPath;
    historyStack = activeTab.historyStack;
    historyIndex = activeTab.historyIndex;
    selectedItems = activeTab.selectedItems;
    searchQuery = activeTab.searchQuery;
    
    // Update search input to match tab's search query
    const searchInp = document.getElementById('searchInput');
    if (searchInp) {
      searchInp.value = searchQuery || '';
    }
  }
}

function saveActiveTabState() {
  const activeTab = getActiveTab();
  if (activeTab) {
    activeTab.currentPath = [...currentPath];
    activeTab.historyStack = JSON.parse(JSON.stringify(historyStack));
    activeTab.historyIndex = historyIndex;
    activeTab.selectedItems = new Set(selectedItems);
    activeTab.searchQuery = searchQuery;
    activeTab.name = currentPath[currentPath.length - 1] || 'Internal';
  }
}

// ===== ITEM POSITIONS FOR CANVAS VIEW =====
let itemPositions = {};
const renderedEditors = new Map();
try {
  const saved = localStorage.getItem('dof_explorer_positions');
  if (saved) {
    itemPositions = JSON.parse(saved);
  }
} catch (e) {
  console.error(e);
}

function savePositions() {
  try {
    localStorage.setItem('dof_explorer_positions', JSON.stringify(itemPositions));
  } catch (e) {
    console.error(e);
  }
}

function resolveItemPositions(items) {
  const container = document.getElementById('fileContainer');
  const containerHeight = container ? container.clientHeight : 500;
  const itemHeight = 115;
  const itemWidth = 110;
  // Compute how many vertical slots fit in the height
  const rowCount = Math.max(1, Math.floor((containerHeight - 40) / itemHeight));
  
  // Track occupied slots "col,row"
  const occupiedSlots = new Set();
  const pathPrefix = currentPath.join('/') + '/';
  
  const unpositioned = [];
  
  items.forEach(([name, node]) => {
    const key = pathPrefix + name;
    if (itemPositions[key]) {
      const pos = itemPositions[key];
      // Map to nearest grid slots to mark them as occupied
      const col = Math.round((pos.x - 20) / itemWidth);
      const row = Math.round((pos.y - 20) / itemHeight);
      if (col >= 0 && row >= 0) {
        occupiedSlots.add(`${col},${row}`);
      }
    } else {
      unpositioned.push(name);
    }
  });
  
  let currentSlotIndex = 0;
  unpositioned.forEach(name => {
    const key = pathPrefix + name;
    while (true) {
      const row = currentSlotIndex % rowCount;
      const col = Math.floor(currentSlotIndex / rowCount);
      const slotKey = `${col},${row}`;
      if (!occupiedSlots.has(slotKey)) {
        occupiedSlots.add(slotKey);
        const x = col * itemWidth + 20;
        const y = row * itemHeight + 20;
        itemPositions[key] = { x, y };
        break;
      }
      currentSlotIndex++;
    }
  });
  
  if (unpositioned.length > 0) {
    savePositions();
  }
}

let isDragging = false;
let dragThresholdPassed = false;
let didDrag = false;
const DRAG_THRESHOLD = 3;

function initDrag(e, name) {
  // Only handle left click or touchstart
  if (e.button !== 0 && e.type !== 'touchstart') return;
  
  const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
  
  const startMouse = { x: clientX, y: clientY };
  dragThresholdPassed = false;
  isDragging = false;
  
  const pathPrefix = currentPath.join('/') + '/';
  
  // If clicked item is not selected, select it immediately
  if (!selectedItems.has(name)) {
    if (!e.ctrlKey && !e.metaKey) {
      selectedItems.clear();
    }
    selectedItems.add(name);
    renderFiles();
    updateToolbarState();
    updateStatusBar();
  }
  
  // Gather active drag list (all selected items)
  const dragItems = [];
  selectedItems.forEach(selName => {
    const key = pathPrefix + selName;
    const pos = itemPositions[key] || { x: 20, y: 20 };
    const el = document.querySelector(`[data-name="${escapeAttr(selName)}"]`);
    if (el) {
      dragItems.push({
        name: selName,
        element: el,
        startPos: { ...pos }
      });
    }
  });
  
  function onMove(moveEvent) {
    const curX = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientX : moveEvent.clientX;
    const curY = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientY : moveEvent.clientY;
    
    const dx = curX - startMouse.x;
    const dy = curY - startMouse.y;
    
    if (!dragThresholdPassed) {
      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        dragThresholdPassed = true;
        isDragging = true;
        didDrag = true;
      }
    }
    
    if (isDragging) {
      if (moveEvent.cancelable) {
        moveEvent.preventDefault();
      }
      dragItems.forEach(item => {
        const newX = Math.max(10, item.startPos.x + dx);
        const newY = Math.max(10, item.startPos.y + dy);
        item.element.style.left = `${newX}px`;
        item.element.style.top = `${newY}px`;
        item.element.classList.add('dragging');
      });
    }
  }
  
  function onUp(upEvent) {
    window.removeEventListener('mousemove', onMove, { passive: false });
    window.removeEventListener('mouseup', onUp);
    window.removeEventListener('touchmove', onMove, { passive: false });
    window.removeEventListener('touchend', onUp);
    
    if (isDragging) {
      const curX = upEvent.type === 'touchend' ? (upEvent.changedTouches ? upEvent.changedTouches[0].clientX : startMouse.x) : upEvent.clientX;
      const curY = upEvent.type === 'touchend' ? (upEvent.changedTouches ? upEvent.changedTouches[0].clientY : startMouse.y) : upEvent.clientY;
      const dx = curX - startMouse.x;
      const dy = curY - startMouse.y;
      
      dragItems.forEach(item => {
        const newX = Math.max(10, item.startPos.x + dx);
        const newY = Math.max(10, item.startPos.y + dy);
        const key = pathPrefix + item.name;
        itemPositions[key] = { x: newX, y: newY };
        item.element.classList.remove('dragging');
      });
      
      savePositions();
      isDragging = false;
      renderFiles();
      updateStatusBar();
    }
  }
  
  window.addEventListener('mousemove', onMove, { passive: false });
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onUp);
}

// ===== ICON HELPERS =====
function getFolderIcon() {
  return `<svg class="w-12 h-12" viewBox="0 0 48 48" fill="none"><path d="M6 12C6 10.8954 6.89543 10 8 10H19L22 14H40C41.1046 14 42 14.8954 42 16V38C42 39.1046 41.1046 40 40 40H8C6.89543 40 6 39.1046 6 38V12Z" fill="#FFB300"/><path d="M6 16H42V38C42 39.1046 41.1046 40 40 40H8C6.89543 40 6 39.1046 6 38V16Z" fill="#FFCA28"/></svg>`;
}

function getFileIcon(ext) {
  const colors = {
    txt: ['#90A4AE','#78909C'], docx: ['#42A5F5','#1E88E5'], doc: ['#42A5F5','#1E88E5'],
    xlsx: ['#66BB6A','#43A047'], xls: ['#66BB6A','#43A047'], csv: ['#66BB6A','#43A047'],
    pptx: ['#FF7043','#F4511E'], ppt: ['#FF7043','#F4511E'],
    pdf: ['#EF5350','#E53935'], jpg: ['#AB47BC','#8E24AA'], jpeg: ['#AB47BC','#8E24AA'],
    png: ['#AB47BC','#8E24AA'], gif: ['#AB47BC','#8E24AA'], svg: ['#FFA726','#FB8C00'],
    mp3: ['#EC407A','#D81B60'], m4a: ['#EC407A','#D81B60'], wav: ['#EC407A','#D81B60'],
    mp4: ['#5C6BC0','#3949AB'], webm: ['#5C6BC0','#3949AB'], avi: ['#5C6BC0','#3949AB'],
    mkv: ['#5C6BC0','#3949AB'], zip: ['#FFA726','#FB8C00'], rar: ['#FFA726','#FB8C00'],
    '7z': ['#FFA726','#FB8C00'], exe: ['#78909C','#546E7A'], msi: ['#78909C','#546E7A'],
    html: ['#FF7043','#F4511E'], css: ['#42A5F5','#1E88E5'], js: ['#FFEE58','#FDD835'],
    json: ['#66BB6A','#43A047'], md: ['#42A5F5','#1E88E5'], ttf: ['#78909C','#546E7A'],
    otf: ['#78909C','#546E7A'], woff: ['#78909C','#546E7A'], lnk: ['#42A5F5','#1E88E5'],
  };
  const c = colors[ext] || ['#BDBDBD','#9E9E9E'];
  const label = ext ? ext.toUpperCase() : 'FILE';
  return `<svg class="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <path d="M12 6C12 4.89543 12.8954 4 14 4H30L38 12V42C38 43.1046 37.1046 44 36 44H14C12.8954 44 12 43.1046 12 42V6Z" fill="${c[0]}"/>
    <path d="M30 4L38 12H32C30.8954 12 30 11.1046 30 10V4Z" fill="${c[1]}" opacity="0.8"/>
    <text x="25" y="34" text-anchor="middle" fill="white" font-size="8" font-weight="600" font-family="system-ui">${label}</text>
  </svg>`;
}

function getSmallFolderIcon() {
  return `<svg class="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M2 5C2 4.44772 2.44772 4 3 4H7.5L9 6H17C17.5523 6 18 6.44772 18 7V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V5Z" fill="#FFB300"/><path d="M2 7H18V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V7Z" fill="#FFCA28"/></svg>`;
}

function getSmallFileIcon(ext) {
  const c = ({
    txt:'#78909C', docx:'#1E88E5', xlsx:'#43A047', pptx:'#F4511E', pdf:'#E53935',
    jpg:'#8E24AA', png:'#8E24AA', svg:'#FB8C00', mp3:'#D81B60', mp4:'#3949AB',
    zip:'#FB8C00', exe:'#546E7A', html:'#F4511E', css:'#1E88E5', js:'#FDD835',
    json:'#43A047', md:'#1E88E5',
  })[ext] || '#9E9E9E';
  return `<svg class="w-5 h-5" viewBox="0 0 20 20"><path d="M5 2C5 1.44772 5.44772 1 6 1H13L17 5V18C17 18.5523 16.5523 19 16 19H6C5.44772 19 5 18.5523 5 18V2Z" fill="${c}"/><path d="M13 1L17 5H14C13.4477 5 13 4.55228 13 4V1Z" fill="${c}" opacity="0.7"/></svg>`;
}

// ===== FILE SYSTEM HELPERS =====
function getNode(path) {
  let node = FILE_SYSTEM;
  for (const seg of path) {
    if (node[seg]) {
      node = node[seg].children || node[seg];
    } else if (node.children && node.children[seg]) {
      node = node.children[seg];
    } else {
      return null;
    }
  }
  return node;
}

function getParentNode(path) {
  if (path.length <= 1) return null;
  return getNode(path.slice(0, -1));
}

function getCurrentFolder() {
  const node = getNode(currentPath);
  return node && node.children ? node.children : (node || {});
}

function getFileMetadata(ext) {
  if (!ext) return { category: 'File', extension: '-' };
  const extLower = ext.toLowerCase();
  
  const images = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
  const docs = ['txt', 'docx', 'doc', 'pdf', 'md', 'csv', 'xlsx', 'xls', 'pptx', 'ppt'];
  const code = ['html', 'css', 'js', 'json'];
  const audio = ['mp3', 'm4a', 'wav'];
  const video = ['mp4', 'webm', 'avi', 'mkv'];
  const archive = ['zip', 'rar', '7z'];
  const app = ['exe', 'msi'];
  const font = ['ttf', 'otf', 'woff'];
  const shortcut = ['lnk'];

  let category = 'File';
  if (images.includes(extLower)) category = 'Gambar';
  else if (docs.includes(extLower)) category = 'Dokumen';
  else if (code.includes(extLower)) category = 'Kode';
  else if (audio.includes(extLower)) category = 'Audio';
  else if (video.includes(extLower)) category = 'Video';
  else if (archive.includes(extLower)) category = 'Arsip';
  else if (app.includes(extLower)) category = 'Aplikasi';
  else if (font.includes(extLower)) category = 'Font';
  else if (shortcut.includes(extLower)) category = 'Pintasan';

  return {
    category: category,
    extension: extLower.toUpperCase()
  };
}

function getColumnType(ext) {
  const meta = getFileMetadata(ext);
  return ext ? `${meta.category} (${meta.extension})` : 'File';
}

function formatSize(bytes) {
  if (bytes === undefined || bytes === null) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
  return (bytes / 1073741824).toFixed(1) + ' GB';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2,'0');
  const month = String(d.getMonth()+1).padStart(2,'0');
  const year = d.getFullYear();
  const h = String(d.getHours()).padStart(2,'0');
  const m = String(d.getMinutes()).padStart(2,'0');
  return `${day}/${month}/${year} ${h}:${m}`;
}

// ===== RENDERING =====
function render() {
  saveActiveTabState();
  renderTabs();
  renderBreadcrumb();
  renderSidebar();
  renderFiles();
  updateToolbarState();
  updateStatusBar();
  updateViewButtons();
}

function renderTabs() {
  const container = document.getElementById('tabContainer');
  if (!container) return;
  
  container.innerHTML = tabs.map(tab => {
    const isActive = tab.id === activeTabId;
    const name = tab.name || tab.currentPath[tab.currentPath.length - 1] || 'Internal';
    
    let icon = '📁';
    if (name === 'Desktop') icon = '🖥️';
    else if (name === 'Unduhan') icon = '⬇️';
    else if (name === 'Dokumen') icon = '📄';
    else if (name === 'Gambar') icon = '🖼️';
    else if (name === 'Musik') icon = '🎵';
    else if (name === 'Video') icon = '🎬';
    else if (name.startsWith('Local Disk') || name.startsWith('Volume') || name.startsWith('Drive')) icon = '💾';
    else if (name === 'Home') icon = '🏠';
    else if (name === 'Internal') icon = '💾';
    else if (name === 'External') icon = '🌐';
    else if (name === 'Plan') icon = '📁';
    else if (name === 'Downloads') icon = '📥';
    else if (name === 'Storage') icon = '📁';
    else if (name === 'Drive') icon = '🚀';
    else if (name === 'Git') icon = '🔗';
    else if (name === 'Share') icon = '📁';
    else if (name === 'Mail') icon = '📧';
    
    const activeClasses = isActive 
      ? 'bg-white text-[#1a1a1a] border-[#e0e0e0] border-t-2 border-t-[#0078d4] shadow-sm font-semibold' 
      : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a] border-transparent';
      
    return `
      <div class="flex items-center h-[34px] px-3 gap-2 rounded-t-lg text-xs border border-b-0 cursor-pointer select-none transition-all duration-150 shrink-0 ${activeClasses}" 
           style="width: 150px; margin-bottom: -1px;" 
           onclick="switchTab('${tab.id}')"
           title="${escapeHtml(tab.currentPath.join('\\'))}">
        <span class="text-sm shrink-0">${icon}</span>
        <span class="truncate flex-1 text-[11px]">${escapeHtml(name)}</span>
        ${tabs.length > 1 ? `
          <button class="w-4 h-4 rounded-full flex items-center justify-center hover:bg-black/10 text-[10px] text-[#888] hover:text-[#1a1a1a] transition-all" 
                  onclick="event.stopPropagation(); closeTab('${tab.id}');" 
                  title="Tutup tab">
            ✕
          </button>
        ` : ''}
      </div>
    `;
  }).join('');
}

function switchTab(tabId) {
  if (activeTabId === tabId) return;
  saveActiveTabState();
  activeTabId = tabId;
  syncActiveTabState();
  render();
}

function addNewTab(path = ['Internal', 'Plan', 'Downloads']) {
  saveActiveTabState();
  const id = `tab-${nextTabId++}`;
  const name = path[path.length - 1] || 'Internal';
  
  tabs.push({
    id: id,
    name: name,
    currentPath: [...path],
    historyStack: [[...path]],
    historyIndex: 0,
    selectedItems: new Set(),
    searchQuery: ''
  });
  
  activeTabId = id;
  syncActiveTabState();
  render();
  
  setTimeout(() => {
    const container = document.getElementById('tabContainer');
    if (container) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    }
  }, 50);
}

function closeTab(tabId) {
  if (tabs.length <= 1) return;
  const index = tabs.findIndex(t => t.id === tabId);
  if (index === -1) return;
  
  if (activeTabId === tabId) {
    const newActiveIndex = index === 0 ? 1 : index - 1;
    activeTabId = tabs[newActiveIndex].id;
  }
  
  tabs.splice(index, 1);
  syncActiveTabState();
  render();
}

function openInNewTab(name) {
  const folder = getCurrentFolder();
  const node = folder[name];
  if (!node || node.type !== 'folder') return;
  
  const newPath = [...currentPath, name];
  addNewTab(newPath);
  showToast(`Dibuka di Tab Baru: ${name}`);
}

function renderBreadcrumb() {
  const nav = document.getElementById('breadcrumbNav');
  let html = '';
  currentPath.forEach((seg, i) => {
    if (i > 0) html += `<svg class="w-3 h-3 text-[#999] mx-1 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>`;
    const isLast = i === currentPath.length - 1;
    html += `<span class="nav-breadcrumb text-[13px] cursor-pointer whitespace-nowrap ${isLast ? 'font-semibold text-[#1a1a1a]' : 'text-[#555]'}" onclick="navigateTo(${i})">${seg}</span>`;
  });
  nav.innerHTML = html;
}

function renderSidebar() {
  const container = document.getElementById('sidebarContainer');
  if (!container) return;

  const items = [
    // Home Section
    { name: 'Home', path: ['Home'], icon: '🏠', level: 0 },
    { name: 'Pin', path: ['Home', 'Pin'], icon: '📌', level: 1 },
    { name: 'Recently', path: ['Home', 'Recently'], icon: '🕐', level: 1 },
    { name: 'Frequently', path: ['Home', 'Frequently'], icon: '⭐', level: 1 },
    
    // Divider
    { divider: true },

    // Internal Section
    { name: 'Internal', path: ['Internal'], icon: '💾', level: 0 },
    { name: 'Plan', path: ['Internal', 'Plan'], icon: '📁', level: 1 },
    { name: 'Downloads', path: ['Internal', 'Plan', 'Downloads'], icon: '📥', level: 2 },

    // Divider
    { divider: true },

    // External Section
    { name: 'External', path: ['External'], icon: '🌐', level: 0 },
    { name: 'Storage', path: ['External', 'Storage'], icon: '📁', level: 1 },
    { name: 'Drive', path: ['External', 'Drive'], icon: '🚀', level: 1 },
    { name: 'Git', path: ['External', 'Git'], icon: '🔗', level: 1 },
    { name: 'Share', path: ['External', 'Share'], icon: '📁', level: 1 },
    { name: 'Mail', path: ['External', 'Mail'], icon: '📧', level: 1 },
  ];

  container.innerHTML = items.map(item => {
    if (item.divider) {
      return `<div class="my-2 border-t border-[#e5e5e5]"></div>`;
    }

    const isActive = JSON.stringify(currentPath) === JSON.stringify(item.path);
    let paddingClass = 'pl-4';
    if (item.level === 1) paddingClass = 'pl-8';
    if (item.level === 2) paddingClass = 'pl-12';

    const fontClass = item.level === 0 ? 'font-semibold text-[#1a1a1a]' : 'text-[#444]';

    return `<div class="sidebar-item flex items-center gap-2.5 ${paddingClass} py-1.5 cursor-pointer ${isActive ? 'active' : ''}" 
      onclick="navigateToPathArray(${JSON.stringify(item.path).replace(/"/g, '&quot;')})">
      <span class="text-sm shrink-0">${item.icon}</span>
      <span class="text-[13px] truncate ${fontClass}">${item.name}</span>
    </div>`;
  }).join('');
}

function getSortedItems(folder) {
  const entries = Object.entries(folder);
  const q = searchQuery.toLowerCase();
  const filtered = q ? entries.filter(([name]) => name.toLowerCase().includes(q)) : entries;
  
  filtered.sort(([aName, aNode], [bName, bNode]) => {
    const aIsFolder = aNode.type === 'folder';
    const bIsFolder = bNode.type === 'folder';
    if (aIsFolder && !bIsFolder) return -1;
    if (!aIsFolder && bIsFolder) return 1;
    
    let cmp = 0;
    if (sortBy === 'name') cmp = aName.localeCompare(bName);
    else if (sortBy === 'dateModified') cmp = (aNode.dateModified || '').localeCompare(bNode.dateModified || '');
    else if (sortBy === 'type') cmp = (aNode.ext || '').localeCompare(bNode.ext || '');
    else if (sortBy === 'category') {
      const aMeta = aIsFolder ? { category: 'Folder' } : getFileMetadata(aNode.ext);
      const bMeta = bIsFolder ? { category: 'Folder' } : getFileMetadata(bNode.ext);
      cmp = aMeta.category.localeCompare(bMeta.category);
    }
    else if (sortBy === 'extension') {
      const aMeta = aIsFolder ? { extension: '-' } : getFileMetadata(aNode.ext);
      const bMeta = bIsFolder ? { extension: '-' } : getFileMetadata(bNode.ext);
      cmp = aMeta.extension.localeCompare(bMeta.extension);
    }
    else if (sortBy === 'size') cmp = (aNode.size || 0) - (bNode.size || 0);
    return sortDir === 'asc' ? cmp : -cmp;
  });
  return filtered;
}

function renderFiles() {
  const container = document.getElementById('fileContainer');
  const folder = getCurrentFolder();
  const items = getSortedItems(folder);
  const headers = document.getElementById('listHeaders');

  if (items.length === 0) {
    container.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-[#999]">
      <svg class="w-16 h-16 mb-3 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-width="1.5"/></svg>
      <p class="text-sm">Folder ini kosong</p></div>`;
    headers.style.display = 'none';
    return;
  }

  if (viewMode === 'canvas') {
    headers.style.display = 'none';
    resolveItemPositions(items);
    const pathPrefix = currentPath.join('/') + '/';
    container.innerHTML = `<div class="relative w-full h-full min-h-[500px]" style="min-width: 100%; min-height: 100%;" id="canvasArea">${items.map(([name, node]) => {
      const isSelected = selectedItems.has(name);
      const key = pathPrefix + name;
      const pos = itemPositions[key] || { x: 20, y: 20 };

      if (renderedEditors.has(key)) {
        const editor = renderedEditors.get(key);
        if (node.content === undefined) {
          node.content = getDefaultContent(name, node.ext);
        }
        return `<div class="absolute bg-white border border-[#c0c0c0] rounded-lg shadow-lg flex flex-col overflow-hidden text-editor"
          style="left: ${editor.x}px; top: ${editor.y}px; width: ${editor.width}px; height: ${editor.height}px; min-width: 200px; min-height: 150px; z-index: 50;"
          data-name="${escapeAttr(name)}"
          id="editor-${escapeAttr(name)}">
          <div class="flex items-center justify-between bg-[#f3f3f3] hover:bg-[#eaeaea] border-b border-[#e0e0e0] px-3 py-1.5 select-none cursor-move shrink-0 editor-header"
               onmousedown="initEditorDrag(event, '${escapeJS(name)}')"
               ontouchstart="initEditorDrag(event, '${escapeJS(name)}')"
               onclick="handleItemClick(event, '${escapeJS(name)}')">
            <div class="flex items-center gap-2 pointer-events-none select-none text-[12px] font-semibold text-[#333]">
              <span class="text-sm shrink-0">${getFileIcon(node.ext)}</span>
              <span class="truncate max-w-[150px]" title="${escapeAttr(name)}">${escapeHtml(name)}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button class="w-5 h-5 flex items-center justify-center rounded hover:bg-black/10 text-[#666] text-xs font-bold" 
                      onclick="unrenderEditor(event, '${escapeJS(name)}')" 
                      title="Kembalikan ke Ikon">
                ✕
              </button>
            </div>
          </div>
          <div class="flex-1 min-h-0 relative p-1 bg-white">
            <textarea class="w-full h-full p-2 outline-none font-mono text-[12px] leading-relaxed bg-white text-[#222] resize-none border border-transparent focus:border-[#0078d4] rounded"
                      oninput="handleEditorInput(event, '${escapeJS(name)}')"
                      onmousedown="event.stopPropagation()"
                      onclick="event.stopPropagation()"
                      oncontextmenu="event.stopPropagation()">${escapeHtml(node.content)}</textarea>
          </div>
          <div class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-0.5 select-none z-10 editor-resize-handle"
               onmousedown="initEditorResize(event, '${escapeJS(name)}')"
               ontouchstart="initEditorResize(event, '${escapeJS(name)}')"
               oncontextmenu="event.stopPropagation()">
            <svg class="w-2.5 h-2.5 text-[#aaa]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M10,0 L0,10 L10,10 Z" />
            </svg>
          </div>
        </div>`;
      }

      const icon = node.type === 'folder' ? getFolderIcon() : getFileIcon(node.ext);
      const displayName = name.length > 20 ? name.substring(0, 18) + '…' : name;
      return `<div class="canvas-item p-2 flex flex-col items-center justify-center text-center cursor-pointer ${isSelected ? 'selected' : ''}" 
        style="position: absolute; left: ${pos.x}px; top: ${pos.y}px;"
        data-name="${escapeAttr(name)}" 
        onmousedown="initDrag(event, '${escapeJS(name)}')"
        ontouchstart="initDrag(event, '${escapeJS(name)}')"
        onclick="handleItemClick(event, '${escapeJS(name)}')" 
        ondblclick="handleItemDblClick('${escapeJS(name)}')"
        oncontextmenu="handleItemContext(event, '${escapeJS(name)}')">
        <div class="mb-1 pointer-events-none select-none">${icon}</div>
        <div class="text-[12px] leading-tight w-full break-words line-clamp-2 pointer-events-none select-none" title="${escapeAttr(name)}">${escapeHtml(displayName)}</div>
      </div>`;
    }).join('')}</div>`;
  } else {
    headers.style.display = 'flex';
    container.innerHTML = `<div class="flex flex-col">${items.map(([name, node]) => {
      const isSelected = selectedItems.has(name);
      const icon = node.type === 'folder' ? getSmallFolderIcon() : getSmallFileIcon(node.ext);
      const ext = node.type === 'folder' ? '' : (node.ext || '');
      const meta = node.type === 'folder' ? { category: 'Folder', extension: '-' } : getFileMetadata(ext);
      return `<div class="file-item flex items-center px-4 py-1.5 cursor-pointer border-b border-transparent ${isSelected ? 'selected' : ''}" 
        data-name="${escapeAttr(name)}" 
        onclick="handleItemClick(event, '${escapeJS(name)}')" 
        ondblclick="handleItemDblClick('${escapeJS(name)}')"
        oncontextmenu="handleItemContext(event, '${escapeJS(name)}')">
        <div class="w-8 mr-2 flex items-center justify-center pointer-events-none">${icon}</div>
        <div class="flex-1 text-[13px] truncate pointer-events-none" title="${escapeAttr(name)}">${escapeHtml(name)}</div>
        <div class="w-32 text-[12px] text-[#888] pointer-events-none">${formatDate(node.dateModified)}</div>
        <div class="w-28 text-[12px] text-[#888] pointer-events-none truncate" title="${escapeAttr(meta.category)}">${meta.category}</div>
        <div class="w-16 text-[12px] text-[#888] pointer-events-none truncate" title="${escapeAttr(meta.extension)}">${meta.extension}</div>
        <div class="w-24 text-right text-[12px] text-[#888] pointer-events-none">${node.type === 'folder' ? '' : formatSize(node.size)}</div>
      </div>`;
    }).join('')}</div>`;
  }
}

function escapeHtml(str) { return str.replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'&quot;'); }
function escapeAttr(str) { return str.replace(/&/g,'&').replace(/"/g,'&quot;').replace(/</g,'<'); }
function escapeJS(str) { return str.replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

// ===== NAVIGATION =====
function navigateTo(index) {
  currentPath = currentPath.slice(0, index + 1);
  pushHistory();
  selectedItems.clear();
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  render();
}

function navigateToPathArray(pathArr) {
  currentPath = [...pathArr];
  pushHistory();
  selectedItems.clear();
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  render();
}

function navigateToPath(pathStr) {
  const parts = pathStr.split(/[/\\]/).filter(Boolean);
  if (parts.length > 0) {
    currentPath = parts;
    pushHistory();
    selectedItems.clear();
    render();
  }
  hideAddressInput();
}

function goBack() {
  if (historyIndex > 0) {
    historyIndex--;
    currentPath = [...historyStack[historyIndex]];
    selectedItems.clear();
    render();
  }
}

// Global functions must still be accessible via window
function goForward() {
  if (historyIndex < historyStack.length - 1) {
    historyIndex++;
    currentPath = [...historyStack[historyIndex]];
    selectedItems.clear();
    render();
  }
}

function goUp() {
  if (currentPath.length > 1) {
    currentPath = currentPath.slice(0, -1);
    pushHistory();
    selectedItems.clear();
    render();
  }
}

function pushHistory() {
  historyStack = historyStack.slice(0, historyIndex + 1);
  historyStack.push([...currentPath]);
  historyIndex = historyStack.length - 1;
}

// ===== SELECTION =====
let lastClickTime = 0;
let lastClickedItem = null;

function handleItemClick(e, name) {
  e.stopPropagation();
  if (didDrag) {
    didDrag = false;
    return;
  }

  const currentTime = new Date().getTime();
  const isDoubleTap = (name === lastClickedItem && (currentTime - lastClickTime) < 300);
  lastClickTime = currentTime;
  lastClickedItem = name;

  if (e.ctrlKey || e.metaKey) {
    if (selectedItems.has(name)) selectedItems.delete(name);
    else selectedItems.add(name);
  } else {
    selectedItems.clear();
    selectedItems.add(name);
  }
  renderFiles();
  updateToolbarState();
  updateStatusBar();

  if (isDoubleTap) {
    handleItemDblClick(name);
    lastClickedItem = null;
  }
}

function handleItemDblClick(name) {
  const folder = getCurrentFolder();
  const node = folder[name];
  if (!node) return;
  if (node.type === 'folder') {
    currentPath.push(name);
    pushHistory();
    selectedItems.clear();
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    render();
  } else if (viewMode === 'canvas' && isTextOrCodeFile(node.ext)) {
    renderAsEditor(name);
  } else {
    showToast(`Membuka ${name}...`);
  }
}

function handleContainerClick(e) {
  if (didDrag) {
    didDrag = false;
    return;
  }
  if (e.target === document.getElementById('fileContainer') || e.target.closest('#fileContainer') === document.getElementById('fileContainer') && !e.target.closest('.grid-item, .file-item, .canvas-item')) {
    selectedItems.clear();
    renderFiles();
    updateToolbarState();
    updateStatusBar();
  }
}

// ===== TOOLBAR STATE =====
function updateToolbarState() {
  document.getElementById('btnBack').classList.toggle('disabled', historyIndex <= 0);
  document.getElementById('btnForward').classList.toggle('disabled', historyIndex >= historyStack.length - 1);
  document.getElementById('btnUp').classList.toggle('disabled', currentPath.length <= 1);
}

function updateStatusBar() {
  const folder = getCurrentFolder();
  const totalItems = Object.keys(folder).length;
  const selCount = selectedItems.size;
  let text = `${totalItems} item`;
  if (totalItems !== 1) text += '';
  if (selCount > 0) {
    let totalSize = 0;
    selectedItems.forEach(name => {
      const node = folder[name];
      if (node && node.size) totalSize += node.size;
    });
    text += `  ·  ${selCount} dipilih`;
    if (totalSize > 0) text += `  ·  ${formatSize(totalSize)}`;
  }
  document.getElementById('statusText').textContent = text;
}

function updateViewButtons() {
  const btnCanvas = document.getElementById('btnCanvasView');
  if (btnCanvas) btnCanvas.classList.toggle('bg-black/5', viewMode === 'canvas');
  const btnList = document.getElementById('btnListView');
  if (btnList) btnList.classList.toggle('bg-black/5', viewMode === 'list');
  // Sort indicators
  const indicators = { name: 'sortNameIndicator', dateModified: 'sortDateIndicator', category: 'sortCategoryIndicator', extension: 'sortExtensionIndicator', size: 'sortSizeIndicator' };
  Object.entries(indicators).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = sortBy === key ? (sortDir === 'asc' ? '▲' : '▼') : '';
  });
}

// ===== VIEW / SORT =====
function setView(mode) {
  viewMode = mode;
  render();
}

function setSort(by) {
  if (sortBy === by) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  else { sortBy = by; sortDir = 'asc'; }
  render();
}

// ===== ADDRESS BAR =====
document.getElementById('addressBarContainer').addEventListener('click', function(e) {
  if (e.target.closest('.nav-breadcrumb') || e.target.id === 'addressInput') return;
  showAddressInput();
});

function showAddressInput() {
  const nav = document.getElementById('breadcrumbNav');
  const input = document.getElementById('addressInput');
  nav.style.display = 'none';
  input.style.display = 'block';
  input.value = currentPath.join('\\');
  input.focus();
  input.select();
}

function hideAddressInput() {
  const nav = document.getElementById('breadcrumbNav');
  const input = document.getElementById('addressInput');
  nav.style.display = 'flex';
  input.style.display = 'none';
}

// ===== SEARCH =====
function handleSearch(val) {
  searchQuery = val;
  saveActiveTabState();
  renderFiles();
}

function toggleSearch() {
  const input = document.getElementById('searchInput');
  input.focus();
}

// ===== FILE OPERATIONS =====
function copyItem() {
  if (selectedItems.size === 0) return;
  const folder = getCurrentFolder();
  clipboard = { items: [...selectedItems].map(n => ({ name: n, node: JSON.parse(JSON.stringify(folder[n])) })), mode: 'copy', sourcePath: [...currentPath] };
  showToast(`${clipboard.items.length} item disalin`);
  updateToolbarState();
}

function cutItem() {
  if (selectedItems.size === 0) return;
  const folder = getCurrentFolder();
  clipboard = { items: [...selectedItems].map(n => ({ name: n, node: JSON.parse(JSON.stringify(folder[n])) })), mode: 'cut', sourcePath: [...currentPath] };
  showToast(`${clipboard.items.length} item dipotong`);
  updateToolbarState();
}

function pasteItem() {
  if (clipboard.items.length === 0) return;
  const folder = getCurrentFolder();
  clipboard.items.forEach(item => {
    let newName = item.name;
    let counter = 1;
    while (folder[newName]) {
      const dotIdx = newName.lastIndexOf('.');
      if (item.node.type === 'folder' || dotIdx === -1) {
        newName = `${item.name} (${counter})`;
      } else {
        newName = `${newName.substring(0, dotIdx)} (${counter})${newName.substring(dotIdx)}`;
      }
      counter++;
    }
    folder[newName] = JSON.parse(JSON.stringify(item.node));
  });

  if (clipboard.mode === 'cut') {
    const sourceFolder = getNode(clipboard.sourcePath);
    if (sourceFolder && sourceFolder.children) {
      clipboard.items.forEach(item => {
        delete sourceFolder.children[item.name];
      });
    }
    clipboard = { items: [], mode: null };
  }

  selectedItems.clear();
  render();
  showToast('Item ditempel');
}

function deleteItem() {
  if (selectedItems.size === 0) return;
  const folder = getCurrentFolder();
  const count = selectedItems.size;
  selectedItems.forEach(name => delete folder[name]);
  selectedItems.clear();
  render();
  showToast(`${count} item dihapus`);
}

function startRename() {
  if (selectedItems.size !== 1) return;
  const name = [...selectedItems][0];
  renamingItem = name;
  renderFiles();
  // Find the element and add input
  setTimeout(() => {
    const el = document.querySelector(`[data-name="${escapeAttr(name)}"]`);
    if (!el) return;
    const nameDiv = el.querySelector('div:nth-child(2)');
    if (!nameDiv) return;
    const originalName = name;
    const dotIdx = name.lastIndexOf('.');
    const selectEnd = (renamingItem && getFileNode(renamingItem)?.type !== 'folder' && dotIdx > 0) ? dotIdx : name.length;
    nameDiv.innerHTML = `<input class="rename-input w-full text-[12px] bg-white px-1 py-0.5" value="${escapeAttr(originalName)}" data-original="${escapeAttr(originalName)}"/>`;
    const inp = nameDiv.querySelector('input');
    inp.focus();
    inp.setSelectionRange(0, selectEnd);
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') finishRename(inp.value, originalName);
      if (e.key === 'Escape') cancelRename();
    });
    inp.addEventListener('blur', () => finishRename(inp.value, originalName));
  }, 50);
}

function getFileNode(name) {
  const folder = getCurrentFolder();
  return folder[name];
}

function finishRename(newName, oldName) {
  if (!renamingItem) return;
  renamingItem = null;
  const folder = getCurrentFolder();
  newName = newName.trim();
  if (!newName || newName === oldName) { render(); return; }
  if (folder[newName]) { showToast('Nama sudah ada'); render(); return; }
  folder[newName] = folder[oldName];
  delete folder[oldName];
  // Update ext for files
  if (folder[newName].type === 'file') {
    const dotIdx = newName.lastIndexOf('.');
    folder[newName].ext = dotIdx > 0 ? newName.substring(dotIdx + 1) : '';
  }
  selectedItems.clear();
  selectedItems.add(newName);
  render();
  showToast('Item diganti nama');
}

function cancelRename() {
  renamingItem = null;
  render();
}

// ===== NEW ITEM =====
function showNewItemMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('newItemMenu');
  menu.innerHTML = `
    <div class="px-3 py-1.5 text-[11px] text-[#888] font-semibold">Baru</div>
    <div class="menu-item flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px]" onclick="createNewItem('folder')">
      ${getSmallFolderIcon()}<span>Folder</span></div>
    <div class="menu-item flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px]" onclick="createNewItem('txt')">
      ${getSmallFileIcon('txt')}<span>Dokumen Teks</span></div>
    <div class="menu-item flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px]" onclick="createNewItem('xlsx')">
      ${getSmallFileIcon('xlsx')}<span>Lembar Kerja Excel</span></div>
    <div class="menu-item flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px]" onclick="createNewItem('pptx')">
      ${getSmallFileIcon('pptx')}<span>Presentasi PowerPoint</span></div>
    <div class="menu-item flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px]" onclick="createNewItem('html')">
      ${getSmallFileIcon('html')}<span>Dokumen HTML</span></div>
  `;
  showMenuAt(menu, e);
}

function createNewItem(type) {
  hideAllMenus();
  const folder = getCurrentFolder();
  let name, node;
  if (type === 'folder') {
    name = 'Folder Baru';
    let c = 1;
    while (folder[name]) { name = `Folder Baru (${c})`; c++; }
    node = { type: 'folder', children: {}, dateModified: new Date().toISOString() };
  } else {
    const names = { txt: 'Dokumen Teks Baru.txt', xlsx: 'Lembar Kerja Baru.xlsx', pptx: 'Presentasi Baru.pptx', html: 'Halaman Baru.html' };
    name = names[type] || `File Baru.${type}`;
    let c = 1;
    const baseName = name.substring(0, name.lastIndexOf('.'));
    const ext = name.substring(name.lastIndexOf('.'));
    while (folder[name]) { name = `${baseName} (${c})${ext}`; c++; }
    node = { type: 'file', ext: type, size: 0, dateModified: new Date().toISOString() };
  }
  folder[name] = node;
  selectedItems.clear();
  selectedItems.add(name);
  render();
  // Auto rename
  setTimeout(() => startRename(), 100);
}

// ===== SORT MENU =====
function showSortSubMenu(e, parentEl) {
  e.stopPropagation();
  const menu = document.getElementById('sortMenu');
  const options = [
    { key: 'name', label: 'Nama' },
    { key: 'dateModified', label: 'Tanggal Diubah' },
    { key: 'category', label: 'Kategori' },
    { key: 'extension', label: 'Ekstensi' },
    { key: 'size', label: 'Urutkan Ukuran' },
  ];
  menu.innerHTML = options.map(o => {
    const isActive = sortBy === o.key;
    const arrow = isActive ? (sortDir === 'asc' ? ' ▲' : ' ▼') : '';
    return `<div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px] ${isActive ? 'font-semibold' : ''}" onclick="setSort('${o.key}'); hideAllMenus();">
      ${isActive ? '<svg class="w-4 h-4 text-[#0078d4]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>' : '<span class="w-4"></span>'}
      <span>${o.label}${arrow}</span></div>`;
  }).join('');
  
  menu.classList.remove('hidden');
  const parentRect = parentEl.getBoundingClientRect();
  menu.style.position = 'fixed';
  let left = parentRect.right;
  if (left + 180 > window.innerWidth) {
    left = parentRect.left - 180;
  }
  menu.style.left = left + 'px';
  menu.style.top = parentRect.top + 'px';
}

// ===== TEXT EDITOR RENDERER FOR CANVAS VIEW =====
function isTextOrCodeFile(ext) {
  const textExtensions = ['txt', 'html', 'css', 'js', 'json', 'md', 'svg', 'xml', 'ini', 'log'];
  return textExtensions.includes((ext || '').toLowerCase());
}

function getDefaultContent(name, ext) {
  ext = (ext || '').toLowerCase();
  if (ext === 'txt') {
    return `Catatan: ${name}\nDibuat pada: ${new Date().toLocaleDateString()}\n\nTulis sesuatu di sini...`;
  }
  if (ext === 'html') {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${name}</title>
</head>
<body>
  <h1>Halo dari ${name}!</h1>
</body>
</html>`;
  }
  if (ext === 'css') {
    return `body {
  background-color: #f0f0f0;
  font-family: sans-serif;
}`;
  }
  if (ext === 'js') {
    return `console.log("Halo dari ${name}!");`;
  }
  if (ext === 'json') {
    return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": ""
}`;
  }
  if (ext === 'md') {
    return `# ${name}\n\nDokumen Markdown baru.`;
  }
  return `Isi dokumen ${name}`;
}

function renderAsEditor(name) {
  const pathPrefix = currentPath.join('/') + '/';
  const key = pathPrefix + name;
  const pos = itemPositions[key] || { x: 20, y: 20 };
  renderedEditors.set(key, {
    x: pos.x,
    y: pos.y,
    width: 320,
    height: 240
  });
  selectedItems.clear();
  renderFiles();
}

function unrenderEditor(e, name) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const pathPrefix = currentPath.join('/') + '/';
  const key = pathPrefix + name;
  const editor = renderedEditors.get(key);
  if (editor) {
    itemPositions[key] = { x: editor.x, y: editor.y };
    savePositions();
  }
  renderedEditors.delete(key);
  renderFiles();
}

function handleEditorInput(e, name) {
  const folder = getCurrentFolder();
  const node = folder[name];
  if (node) {
    node.content = e.target.value;
    node.size = e.target.value.length;
    node.dateModified = new Date().toISOString();
  }
}

function initEditorDrag(e, name) {
  if (e.button !== 0 && e.type !== 'touchstart') return;
  
  const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
  
  const startMouse = { x: clientX, y: clientY };
  
  const pathPrefix = currentPath.join('/') + '/';
  const key = pathPrefix + name;
  const editor = renderedEditors.get(key);
  if (!editor) return;
  
  const startPos = { x: editor.x, y: editor.y };
  const el = document.getElementById(`editor-${name}`);
  
  if (el) {
    document.querySelectorAll('.text-editor').forEach(other => {
      other.style.zIndex = '40';
    });
    el.style.zIndex = '50';
  }
  
  function onMove(moveEvent) {
    const curX = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientX : moveEvent.clientX;
    const curY = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientY : moveEvent.clientY;
    
    const dx = curX - startMouse.x;
    const dy = curY - startMouse.y;
    
    const newX = Math.max(10, startPos.x + dx);
    const newY = Math.max(10, startPos.y + dy);
    
    editor.x = newX;
    editor.y = newY;
    
    if (el) {
      el.style.left = `${newX}px`;
      el.style.top = `${newY}px`;
    }
    
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }
  }
  
  function onUp() {
    window.removeEventListener('mousemove', onMove, { passive: false });
    window.removeEventListener('mouseup', onUp);
    window.removeEventListener('touchmove', onMove, { passive: false });
    window.removeEventListener('touchend', onUp);
    
    itemPositions[key] = { x: editor.x, y: editor.y };
    savePositions();
  }
  
  window.addEventListener('mousemove', onMove, { passive: false });
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onUp);
}

function initEditorResize(e, name) {
  if (e.button !== 0 && e.type !== 'touchstart') return;
  
  e.stopPropagation();
  e.preventDefault();
  
  const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
  
  const startMouse = { x: clientX, y: clientY };
  
  const pathPrefix = currentPath.join('/') + '/';
  const key = pathPrefix + name;
  const editor = renderedEditors.get(key);
  if (!editor) return;
  
  const startSize = { width: editor.width || 320, height: editor.height || 240 };
  const el = document.getElementById(`editor-${name}`);
  
  function onMove(moveEvent) {
    const curX = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientX : moveEvent.clientX;
    const curY = moveEvent.type === 'touchmove' ? moveEvent.touches[0].clientY : moveEvent.clientY;
    
    const dx = curX - startMouse.x;
    const dy = curY - startMouse.y;
    
    const newW = Math.max(200, startSize.width + dx);
    const newH = Math.max(150, startSize.height + dy);
    
    editor.width = newW;
    editor.height = newH;
    
    if (el) {
      el.style.width = `${newW}px`;
      el.style.height = `${newH}px`;
    }
    
    if (moveEvent.cancelable) {
      moveEvent.preventDefault();
    }
  }
  
  function onUp() {
    window.removeEventListener('mousemove', onMove, { passive: false });
    window.removeEventListener('mouseup', onUp);
    window.removeEventListener('touchmove', onMove, { passive: false });
    window.removeEventListener('touchend', onUp);
  }
  
  window.addEventListener('mousemove', onMove, { passive: false });
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onUp);
}

// ===== CONTEXT MENU =====
function showContextMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  const folder = getCurrentFolder();
  const hasSelection = selectedItems.size > 0;
  
  let menuItems = [];
  
  if (hasSelection) {
    const name = [...selectedItems][0];
    const node = name ? getFileNode(name) : null;
    const isFolder = node && node.type === 'folder';

    if (viewMode === 'canvas') {
      const isTextFile = !isFolder && isTextOrCodeFile(node ? node.ext : '');
      const isOpenAsEditor = isTextFile;
      menuItems.push({ 
        id: 'Open', 
        icon: isOpenAsEditor ? '📝' : '📊', 
        label: 'Open', 
        action: () => { handleItemDblClick(name); }, 
        disabled: selectedItems.size !== 1 
      });
    }
    if (isFolder && selectedItems.size === 1) {
      menuItems.push({ icon: '➕', label: 'Buka di Tab Baru', action: () => { openInNewTab(name); } });
    }
    if (menuItems.length > 0) {
      menuItems.push({ divider: true });
    }
    menuItems.push({ icon: '✂️', label: 'Potong', action: cutItem, shortcut: 'Ctrl+X' });
    menuItems.push({ icon: '📋', label: 'Salin', action: copyItem, shortcut: 'Ctrl+C' });
    menuItems.push({ divider: true });
    menuItems.push({ icon: '✏️', label: 'Ganti Nama', action: startRename, shortcut: 'F2', disabled: selectedItems.size !== 1 });
    menuItems.push({ icon: '🗑️', label: 'Hapus', action: deleteItem, shortcut: 'Del' });
    menuItems.push({ divider: true });
    menuItems.push({ icon: '📄', label: 'Properti', action: () => showProperties() });
  } else {
    menuItems.push({ icon: '📁', label: 'Folder Baru', action: () => createNewItem('folder') });
    menuItems.push({ icon: '📄', label: 'Dokumen Teks', action: () => createNewItem('txt') });
    menuItems.push({ divider: true });
    if (clipboard.items.length > 0) {
      menuItems.push({ icon: '📋', label: 'Tempel', action: pasteItem, shortcut: 'Ctrl+V' });
      menuItems.push({ divider: true });
    }
    menuItems.push({ icon: '🔄', label: 'Segarkan', action: () => render() });
    
    // Only show Sort by options if we are in List View!
    if (viewMode === 'list') {
      menuItems.push({ divider: true });
      menuItems.push({ icon: '📊', label: 'Urutkan berdasarkan', hasSub: true, action: (ev) => { showSortSubMenu(ev, ev.currentTarget); } });
    }
  }

  const menu = document.getElementById('contextMenu');
  menu.innerHTML = menuItems.map(item => {
    if (item.divider) return '<div class="my-1 border-t border-[#e5e5e5]"></div>';
    return `<div class="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] text-[13px] ${item.disabled ? 'opacity-40 pointer-events-none' : ''}" data-action="${item.label}" id="${item.id || ''}">
      <span class="w-5 text-center text-sm">${item.icon || ''}</span>
      <span class="flex-1">${item.label}</span>
      ${item.shortcut ? `<span class="text-[11px] text-[#999] ml-4">${item.shortcut}</span>` : ''}
      ${item.hasSub ? `<span class="text-[10px] text-[#888] ml-2">▶</span>` : ''}
    </div>`;
  }).join('');

  // Wire up actions
  let actionIdx = 0;
  menuItems.forEach((item, i) => {
    if (item.divider) return;
    const el = menu.querySelectorAll('[data-action]')[actionIdx];
    if (el && item.action) {
      el.addEventListener('click', (ev) => {
        if (item.hasSub) {
          ev.stopPropagation();
          item.action(ev);
        } else {
          hideAllMenus();
          item.action();
        }
      });
    }
    actionIdx++;
  });

  showMenuAt(menu, e);
}

function handleItemContext(e, name) {
  e.preventDefault();
  e.stopPropagation();
  if (!selectedItems.has(name)) {
    selectedItems.clear();
    selectedItems.add(name);
    renderFiles();
  }
  showContextMenu(e);
}

function showProperties() {
  const name = [...selectedItems][0];
  const node = getFileNode(name);
  if (!node) return;
  const isFolder = node.type === 'folder';
  const meta = isFolder ? { category: 'Folder', extension: '-' } : getFileMetadata(node.ext);
  const type = isFolder ? 'Folder file' : `${meta.category} (${meta.extension})`;
  let childCount = '';
  if (isFolder && node.children) {
    childCount = `${Object.keys(node.children).length} item`;
  }
  showToast(`${name} — ${type}${childCount ? ' · ' + childCount : ''}${node.size ? ' · ' + formatSize(node.size) : ''}`);
}

// ===== MENU HELPERS =====
function showMenuAt(menu, e) {
  menu.classList.remove('hidden');
  const rect = menu.getBoundingClientRect();
  let x = e.clientX, y = e.clientY;
  if (x + 220 > window.innerWidth) x = window.innerWidth - 220;
  if (y + rect.height > window.innerHeight) y = window.innerHeight - rect.height - 10;
  menu.style.left = x + 'px';
  menu.style.top = y + 'px';
}

function hideAllMenus() {
  document.getElementById('contextMenu').classList.add('hidden');
  document.getElementById('newItemMenu').classList.add('hidden');
  document.getElementById('sortMenu').classList.add('hidden');
}

document.addEventListener('click', hideAllMenus);

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.ctrlKey && e.key === 'c') { e.preventDefault(); copyItem(); }
  else if (e.ctrlKey && e.key === 'x') { e.preventDefault(); cutItem(); }
  else if (e.ctrlKey && e.key === 'v') { e.preventDefault(); pasteItem(); }
  else if (e.ctrlKey && e.key === 't') { e.preventDefault(); addNewTab(); }
  else if (e.ctrlKey && e.key === 'w') { e.preventDefault(); closeTab(activeTabId); }
  else if (e.key === 'Delete') { deleteItem(); }
  else if (e.key === 'F2') { e.preventDefault(); startRename(); }
  else if (e.key === 'Backspace') { e.preventDefault(); goUp(); }
  else if (e.key === 'Enter' && selectedItems.size === 1) { handleItemDblClick([...selectedItems][0]); }
  else if (e.ctrlKey && e.key === 'a') { e.preventDefault(); const folder = getCurrentFolder(); Object.keys(folder).forEach(n => selectedItems.add(n)); renderFiles(); updateToolbarState(); updateStatusBar(); }
});

// ===== TOAST =====
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast-anim bg-[#1a1a1a] text-white text-sm px-4 py-2.5 rounded-lg shadow-lg';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// Bind all globally required functions to window object for inline HTML event handlers
window.toggleSearch = toggleSearch;
window.goBack = goBack;
window.goForward = goForward;
window.goUp = goUp;
window.navigateToPath = navigateToPath;
window.hideAddressInput = hideAddressInput;
window.handleSearch = handleSearch;
window.showNewItemMenu = showNewItemMenu;
window.cutItem = cutItem;
window.copyItem = copyItem;
window.pasteItem = pasteItem;
window.startRename = startRename;
window.deleteItem = deleteItem;
window.setView = setView;
window.setSort = setSort;
window.navigateToPathArray = navigateToPathArray;
window.navigateTo = navigateTo;
window.handleContainerClick = handleContainerClick;
window.createNewItem = createNewItem;
window.handleItemClick = handleItemClick;
window.handleItemDblClick = handleItemDblClick;
window.handleItemContext = handleItemContext;
window.showContextMenu = showContextMenu;
window.addNewTab = addNewTab;
window.switchTab = switchTab;
window.closeTab = closeTab;
window.openInNewTab = openInNewTab;
window.initDrag = initDrag;
window.hideAllMenus = hideAllMenus;
window.renderAsEditor = renderAsEditor;
window.unrenderEditor = unrenderEditor;
window.handleEditorInput = handleEditorInput;
window.initEditorDrag = initEditorDrag;
window.initEditorResize = initEditorResize;

// ===== INIT =====
syncActiveTabState();
render();
