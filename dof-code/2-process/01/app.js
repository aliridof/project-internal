// Data Isi Default Berkas - Bertema Slate & Mendukung Interaktivitas Penuh
const codeFiles = {
    ".gitignore": `# Riwayat Log Lokal\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nnode_modules\ndist\n.vite\n.next\n\n# Folder ruang kerja AI\n.vbdo/`,
    "AI_RULES.md": `# Panduan Pengembangan AI (Slate Standard)\n\n1. Selalu lakukan styling menggunakan kelas utilitas Slate Tailwind CSS.\n2. Pastikan tata letak sepenuhnya responsif di perangkat seluler.\n3. Pertahankan kontras tinggi (>4.5:1 WCAG AA) demi aksesibilitas.\n4. Integrasikan element interaktif dengan state hover & focus yang elegan.`,
    "package.json": `{\n  "name": "aplikasi-workspace-sandbox-ai",\n  "version": "2.1.0",\n  "private": true,\n  "dependencies": {\n    "tailwindcss": "^3.4.0",\n    "lucide-react": "^0.300.0"\n  }\n}`,
    "index.html": `<!-- Pratinjau Ruang Kerja AI -->\n<div class="p-8 max-w-lg mx-auto text-center flex flex-col items-center justify-center h-full">\n  <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mb-4 shadow-sm">\n    <span style="font-size: 24px;" class="material-symbols-outlined">auto_awesome</span>\n  </div>\n  <h2 class="text-xl font-bold text-slate-900 tracking-tight">Selamat Datang di Simulator Sandbox</h2>\n  <p class="text-xs text-slate-500 mt-2 leading-relaxed">Pilih berkas dari Penjelajah Berkas untuk menyunting secara langsung, atau instruksikan AI di panel kiri untuk menghasilkan komponen visual secara dinamis!</p>\n  <div class="mt-6 flex flex-col gap-2 w-full max-w-xs">\n    <button onclick="window.parent.postMessage('explore-btn-clicked', '*'); alert('Mengeksplorasi fitur lokal...')" class="w-full bg-slate-800 hover:bg-slate-750 active:bg-slate-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-slate-300 outline-none">\n      Eksplorasi Fitur Lokal\n    </button>\n    <button onclick="alert('Membuka dokumentasi...')" class="w-full bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs py-2.5 px-4 rounded-lg transition-all focus:ring-2 focus:ring-slate-100 outline-none">\n      Baca Dokumentasi\n    </button>\n  </div>\n</div>`,
    "src/modules/subproject-l2/00.js": `// Berkas: src/modules/subproject-l2/00.js\n// Ini adalah modul sub-proyek level 2.\n\nconsole.log("Modul L2-00 Aktif");`,
    "src/modules/subproject-l2/01.js": `// Berkas: src/modules/subproject-l2/01.js\n// Konfigurasi internal level 2.`,
    "src/modules/subproject-l2/02.js": `// Berkas: src/modules/subproject-l2/02.js\n// Unit test untuk modul level 2.`,
    "src/utils/l1-utility.js": `// Berkas: src/utils/l1-utility.js\n// Skrip utilitas level 1.`,
    "docs/main-l0-doc.md": `# Dokumentasi Utama Proyek\n\nIni adalah dokumentasi utama proyek level 0.`
};

// State Global Aplikasi
let activeTab = 'preview'; // 'preview' atau 'code'
let currentFile = 'index.html';
let isLogsOpen = false;

// State Virtual Filesystem untuk Pengelola Workspace (Branches & Projects Tree)
let workspaceTree = [
    {
        id: "ws-1",
        name: "Proyek-Utama (main)",
        type: "project",
        expanded: true,
        files: {
            "index.html": `<!-- Pratinjau Ruang Kerja AI -->\n<div class="p-8 max-w-lg mx-auto text-center flex flex-col items-center justify-center h-full">\n  <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mb-4 shadow-sm">\n    <span style="font-size: 24px;" class="material-symbols-outlined">auto_awesome</span>\n  </div>\n  <h2 class="text-xl font-bold text-slate-900 tracking-tight">Selamat Datang di Simulator Sandbox</h2>\n  <p class="text-xs text-slate-500 mt-2 leading-relaxed">Pilih berkas dari Penjelajah Berkas untuk menyunting secara langsung, atau instruksikan AI di panel kiri untuk menghasilkan komponen visual secara dinamis!</p>\n  <div class="mt-6 flex flex-col gap-2 w-full max-w-xs">\n    <button onclick="window.parent.postMessage('explore-btn-clicked', '*'); alert('Mengeksplorasi fitur lokal...')" class="w-full bg-slate-800 hover:bg-slate-750 active:bg-slate-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-slate-300 outline-none">\n      Eksplorasi Fitur Lokal\n    </button>\n    <button onclick="alert('Membuka dokumentasi...')" class="w-full bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs py-2.5 px-4 rounded-lg transition-all focus:ring-2 focus:ring-slate-100 outline-none">\n      Baca Dokumentasi\n    </button>\n  </div>\n</div>`,
            ".gitignore": `# Riwayat Log Lokal\nlogs\n*.log\nnpm-debug.log*\nyarn-debug.log*\nnode_modules\ndist\n.vite\n.next\n\n# Folder ruang kerja AI\n.vbdo/`,
            "AI_RULES.md": `# Panduan Pengembangan AI (Slate Standard)\n\n1. Selalu lakukan styling menggunakan kelas utilitas Slate Tailwind CSS.\n2. Pastikan tata letak sepenuhnya responsif di perangkat seluler.\n3. Pertahankan kontras tinggi (>4.5:1 WCAG AA) demi aksesibilitas.\n4. Integrasikan element interaktif dengan state hover & focus yang elegan.`,
            "package.json": `{\n  "name": "aplikasi-workspace-sandbox-ai",\n  "version": "2.1.0",\n  "private": true,\n  "dependencies": {\n    "tailwindcss": "^3.4.0",\n    "lucide-react": "^0.300.0"\n  }\n}`,
            "src/modules/subproject-l2/00.js": `// Berkas: src/modules/subproject-l2/00.js\n// Ini adalah modul sub-proyek level 2.\n\nconsole.log("Modul L2-00 Aktif");`,
            "src/modules/subproject-l2/01.js": `// Berkas: src/modules/subproject-l2/01.js\n// Konfigurasi internal level 2.`,
            "src/modules/subproject-l2/02.js": `// Berkas: src/modules/subproject-l2/02.js\n// Unit test untuk modul level 2.`,
            "src/utils/l1-utility.js": `// Berkas: src/utils/l1-utility.js\n// Skrip utilitas level 1.`,
            "docs/main-l0-doc.md": `# Dokumentasi Utama Proyek\n\nIni adalah dokumentasi utama proyek level 0.`
        },
        children: [
            {
                id: "ws-2",
                name: "fitur-login (branch)",
                type: "branch",
                expanded: true,
                files: {
                    "index.html": `<!-- Pratinjau Ruang Kerja AI - Fitur Login -->\n<div class="p-8 max-w-sm mx-auto border border-slate-200 rounded-xl bg-white shadow-premium mt-8">\n  <h2 class="text-lg font-bold text-slate-800">Masuk Akun</h2>\n  <p class="text-xs text-slate-500 mt-1 mb-4">Masuk untuk mengelola sandbox Anda.</p>\n  <input type="email" placeholder="Email" class="w-full border border-slate-200 rounded-lg p-2 text-xs mb-2 focus:outline-none focus:border-slate-400" />\n  <input type="password" placeholder="Sandi" class="w-full border border-slate-200 rounded-lg p-2 text-xs mb-4 focus:outline-none focus:border-slate-400" />\n  <button class="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs py-2 rounded-lg" onclick="alert('Berhasil Masuk!')">Masuk</button>\n</div>`,
                    ".gitignore": `# Riwayat Log Lokal\nlogs\n*.log`,
                    "AI_RULES.md": `# Panduan Pengembangan AI (Slate Standard)\n\n1. Selalu lakukan styling menggunakan kelas utilitas Slate Tailwind CSS.`,
                    "package.json": `{\n  "name": "aplikasi-login",\n  "version": "1.0.0"\n}`
                },
                children: []
            }
        ]
    },
    {
        id: "ws-3",
        name: "Eksperimen-Vite",
        type: "project",
        expanded: false,
        files: {
            "index.html": `<!-- Pratinjau Eksperimen Vite -->\n<div class="p-12 text-center bg-slate-50 h-full flex flex-col justify-center items-center">\n  <div class="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">⚡</div>\n  <h2 class="text-xl font-bold text-slate-800">Eksperimen Sandbox Vite</h2>\n  <p class="text-xs text-slate-500 mt-2">Dijalankan menggunakan Vite 6.2.3 dev server.</p>\n</div>`,
            "package.json": `{\n  "name": "vite-sandbox",\n  "dependencies": {\n    "vite": "^6.2.3"\n  }\n}`
        },
        children: []
    }
];

let activeWorkspaceId = "ws-1";
let activeNewWorkspaceInput = null; // { parentId: 'root' | wsId }
let activeRenameWorkspaceId = null;
let fileSearchQuery = "";
let expandedFolders = {};
let emptyFolders = new Set();

// Helper untuk Pencarian Node Workspace
function findWorkspaceNode(nodes, id) {
    for (let node of nodes) {
        if (node.id === id) return node;
        if (node.children) {
            let found = findWorkspaceNode(node.children, id);
            if (found) return found;
        }
    }
    return null;
}

// Helper untuk Hapus Node Workspace
function deleteWorkspaceNodeById(nodes, id) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
            nodes.splice(i, 1);
            return true;
        }
        if (nodes[i].children) {
            let deleted = deleteWorkspaceNodeById(nodes[i].children, id);
            if (deleted) return true;
        }
    }
    return false;
}

// Helper untuk Menghitung Total Workspace
function countTotalWorkspaces(nodes) {
    let count = 0;
    nodes.forEach(node => {
        count++;
        if (node.children) {
            count += countTotalWorkspaces(node.children);
        }
    });
    return count;
}

// Helper untuk Menyesuaikan Icon Berkas
function getFileIcon(filename) {
    const base = filename.split('/').pop();
    if (base === '.gitignore') return 'settings';
    if (base === 'package.json') return 'package_2';
    if (base === 'AI_RULES.md') return 'article';
    if (base.endsWith('.html') || base.endsWith('.htm')) return 'html';
    if (base.endsWith('.png') || base.endsWith('.jpg') || base.endsWith('.jpeg')) return 'image';
    if (base.endsWith('.md')) return 'article';
    return 'description';
}

// Tampilkan Input Pembuatan Workspace / Branch Baru
function showCreateWorkspaceInput(parentId, event) {
    if (event) event.stopPropagation();
    
    // Perluas sidebar jika diringkas saat akan membuat baru
    const sidebar = document.getElementById('left-mini-sidebar');
    if (sidebar && sidebar.classList.contains('w-16')) {
        toggleSidebar();
    }
    
    // Pastikan parent diperluas
    if (parentId !== 'root') {
        const parentNode = findWorkspaceNode(workspaceTree, parentId);
        if (parentNode) {
            parentNode.expanded = true;
        }
    }
    
    activeNewWorkspaceInput = { parentId };
    renderWorkspaceTree();
    
    // Focus pada input field baru
    setTimeout(() => {
        const input = document.getElementById('new-ws-input');
        if (input) {
            input.focus();
            input.select();
        }
    }, 50);
}

// Simpan Workspace / Branch Baru
function saveNewWorkspace() {
    const input = document.getElementById('new-ws-input');
    if (!input || !activeNewWorkspaceInput) return;
    
    const name = input.value.trim();
    if (!name) {
        cancelNewWorkspaceInput();
        return;
    }
    
    let filesToCopy = {};
    if (activeNewWorkspaceInput.parentId !== 'root') {
        const parentNode = findWorkspaceNode(workspaceTree, activeNewWorkspaceInput.parentId);
        if (parentNode) {
            filesToCopy = JSON.parse(JSON.stringify(parentNode.files));
        }
    } else {
        filesToCopy = {
            "index.html": `<!-- Pratinjau Ruang Kerja Baru: ${name} -->\n<div class="p-8 max-w-lg mx-auto text-center flex flex-col items-center justify-center h-full">\n  <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mb-4 shadow-sm">\n    <span style="font-size: 24px;" class="material-symbols-outlined">auto_awesome</span>\n  </div>\n  <h2 class="text-xl font-bold text-slate-900 tracking-tight">Ruang Kerja: ${name}</h2>\n  <p class="text-xs text-slate-500 mt-2 leading-relaxed">Ruang kerja baru yang siap dikembangkan secara dinamis.</p>\n</div>`,
            "package.json": `{\n  "name": "${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}",\n  "version": "1.0.0"\n}`
        };
    }
    
    const newNode = {
        id: 'ws-' + Date.now(),
        name: name,
        type: activeNewWorkspaceInput.parentId === 'root' ? 'project' : 'branch',
        expanded: true,
        files: filesToCopy,
        children: []
    };
    
    if (activeNewWorkspaceInput.parentId === 'root') {
        workspaceTree.push(newNode);
    } else {
        const parentNode = findWorkspaceNode(workspaceTree, activeNewWorkspaceInput.parentId);
        if (parentNode) {
            parentNode.children.push(newNode);
        }
    }
    
    const isBranch = activeNewWorkspaceInput.parentId !== 'root';
    const logMsg = isBranch ? `Cabang (branch) baru "${name}" berhasil dibuat dari induknya!` : `Workspace baru "${name}" berhasil dibuat!`;
    showToast(logMsg);
    appendLog("sistem", logMsg, "success");
    
    activeNewWorkspaceInput = null;
    
    // Pilih workspace baru yang baru dibuat secara otomatis
    selectWorkspace(newNode.id);
}

function handleNewWorkspaceKey(event) {
    if (event.key === 'Enter') {
        saveNewWorkspace();
    } else if (event.key === 'Escape') {
        cancelNewWorkspaceInput();
    }
}

function cancelNewWorkspaceInput() {
    activeNewWorkspaceInput = null;
    renderWorkspaceTree();
}

// Mulai Mengubah Nama Workspace / Branch
function startRenameWorkspace(wsId, event) {
    if (event) event.stopPropagation();
    activeRenameWorkspaceId = wsId;
    renderWorkspaceTree();
    
    setTimeout(() => {
        const input = document.getElementById(`rename-ws-input-${wsId}`);
        if (input) {
            input.focus();
            input.select();
        }
    }, 50);
}

// Simpan Perubahan Nama Workspace
function saveRenameWorkspace(wsId) {
    const input = document.getElementById(`rename-ws-input-${wsId}`);
    if (!input) return;
    
    const newName = input.value.trim();
    if (!newName) {
        cancelRenameWorkspace();
        return;
    }
    
    const node = findWorkspaceNode(workspaceTree, wsId);
    if (node) {
        const oldName = node.name;
        node.name = newName;
        showToast(`Nama berhasil diubah menjadi "${newName}"`);
        appendLog("sistem", `Perubahan nama berhasil: ${oldName} -> ${newName}`, "info");
    }
    
    activeRenameWorkspaceId = null;
    renderWorkspaceTree();
}

function handleRenameWorkspaceKey(wsId, event) {
    if (event.key === 'Enter') {
        saveRenameWorkspace(wsId);
    } else if (event.key === 'Escape') {
        cancelRenameWorkspace();
    }
}

function cancelRenameWorkspace() {
    activeRenameWorkspaceId = null;
    renderWorkspaceTree();
}

// Hapus Workspace / Branch
function deleteWorkspacePrompt(wsId, event) {
    if (event) event.stopPropagation();
    
    const node = findWorkspaceNode(workspaceTree, wsId);
    if (!node) return;
    
    // Batasi agar tidak menghapus workspace terakhir
    const totalCount = countTotalWorkspaces(workspaceTree);
    if (totalCount <= 1) {
        showToast("Gagal: Harus menyisakan minimal satu workspace aktif!");
        return;
    }
    
    const oldModal = document.getElementById('custom-confirm-modal');
    if (oldModal) oldModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'custom-confirm-modal';
    modal.className = 'fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-floating w-full max-w-sm p-5 space-y-4">
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-200 shrink-0">
                <span class="material-symbols-outlined text-sm">warning</span>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-800">Hapus Workspace?</h4>
                <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">Apakah Anda yakin ingin menghapus "${node.name}"? Semua cabang di bawahnya dan seluruh berkas virtual di dalamnya akan terhapus secara permanen.</p>
            </div>
        </div>
        <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button id="confirm-cancel-ws-btn" class="bg-transparent hover:bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] font-semibold transition-all">
                Batal
            </button>
            <button id="confirm-delete-ws-btn" class="bg-slate-800 hover:bg-slate-750 active:bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all">
                Ya, Hapus
            </button>
        </div>
    </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('confirm-cancel-ws-btn').onclick = () => {
        modal.remove();
    };
    
    document.getElementById('confirm-delete-ws-btn').onclick = () => {
        deleteWorkspaceNodeById(workspaceTree, wsId);
        
        showToast(`"${node.name}" berhasil dihapus!`);
        appendLog("sistem", `Workspace dihapus dari simulator: ${node.name}`, "warning");
        
        // Jika menghapus workspace yang sedang aktif, alihkan ke workspace pertama
        if (wsId === activeWorkspaceId) {
            const nextWs = workspaceTree[0];
            selectWorkspace(nextWs.id);
        } else {
            renderWorkspaceTree();
        }
        modal.remove();
    };
}

// Beralih Workspace aktif
function selectWorkspace(workspaceId) {
    // 1. Simpan perubahan berkas aktif ke workspace yang ditinggalkan
    const activeNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
    if (activeNode) {
        activeNode.files = { ...codeFiles };
    }
    
    // 2. Muat workspace target
    const targetNode = findWorkspaceNode(workspaceTree, workspaceId);
    if (!targetNode) return;
    
    activeWorkspaceId = workspaceId;
    
    // Reset folder states
    emptyFolders.clear();
    expandedFolders = {};
    
    // Kosongkan codeFiles dan salin berkas workspace target
    for (let key in codeFiles) {
        delete codeFiles[key];
    }
    Object.assign(codeFiles, targetNode.files);
    
    // 3. Setel berkas aktif default
    const fileKeys = Object.keys(codeFiles);
    if (fileKeys.length > 0) {
        if (fileKeys.includes('index.html')) {
            currentFile = 'index.html';
        } else {
            currentFile = fileKeys[0];
        }
    }
    
    showToast(`Beralih ke workspace "${targetNode.name}"`);
    appendLog("sistem", `Berhasil beralih ke ruang kerja: ${targetNode.name}`, "info");
    
    // 4. Perbarui Rendering UI
    renderWorkspaceTree();
    renderFileExplorer();
    selectFile(currentFile);
    
    // 5. Re-kompilasi Preview
    compileSandbox();
}

function toggleWorkspaceExpand(wsId) {
    const wsNode = findWorkspaceNode(workspaceTree, wsId);
    if (wsNode) {
        wsNode.expanded = !wsNode.expanded;
        renderWorkspaceTree();
    }
}

// Rekursif Render Workspace Tree HTML (Slate Theme Only)
function renderWorkspaceTreeHtml(nodes, depth = 0) {
    if (!nodes || nodes.length === 0) return '';
    let html = '';
    
    nodes.forEach(node => {
        const isActive = (node.id === activeWorkspaceId);
        const icon = node.type === 'project' ? 'folder_shared' : 'call_split';
        const titleText = node.name;
        
        const textClass = isActive ? 'text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-800';
        const bgClass = isActive ? 'bg-slate-100 border-slate-200' : 'border-transparent';
        
        html += `
        <div class="group flex items-center justify-between py-1.5 hover:bg-slate-100 rounded px-2 cursor-pointer transition-all border ${bgClass}">
            <div onclick="selectWorkspace('${node.id}')" class="flex items-center gap-1.5 truncate flex-1 min-w-0">
                <!-- Toggle Chevron -->
                ${(node.children && node.children.length > 0) ? `
                    <span onclick="event.stopPropagation(); toggleWorkspaceExpand('${node.id}')" class="material-symbols-outlined text-[12px] text-slate-400 hover:text-slate-700 transition-transform shrink-0 ${node.expanded ? 'rotate-90' : ''}">
                        play_arrow
                    </span>
                ` : '<span class="w-3 shrink-0"></span>'}
                
                <span class="material-symbols-outlined text-[14px] text-slate-400 group-hover:text-slate-700 transition-colors shrink-0">
                    ${icon}
                </span>
                
                ${activeRenameWorkspaceId === node.id ? `
                    <input id="rename-ws-input-${node.id}" type="text" value="${node.name}" 
                        onclick="event.stopPropagation()" 
                        onkeydown="handleRenameWorkspaceKey('${node.id}', event)"
                        onblur="saveRenameWorkspace('${node.id}')"
                        class="bg-white border border-slate-300 rounded px-1 text-[11px] font-mono text-slate-800 focus:outline-none focus:border-slate-500 w-full" />
                ` : `
                    <span class="truncate ${textClass}">${titleText}</span>
                `}
            </div>
            
            <!-- Hover Action Buttons (Branch, Edit, Delete) -->
            ${activeRenameWorkspaceId !== node.id ? `
            <div class="opacity-0 group-hover:opacity-100 flex items-center gap-1 shrink-0 ml-1.5">
                <button onclick="showCreateWorkspaceInput('${node.id}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Buat Cabang Baru (Branch)">
                    <span class="material-symbols-outlined text-[12px]">call_split</span>
                </button>
                <button onclick="startRenameWorkspace('${node.id}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Ubah Nama">
                    <span class="material-symbols-outlined text-[12px]">edit</span>
                </button>
                <button onclick="deleteWorkspacePrompt('${node.id}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Hapus">
                    <span class="material-symbols-outlined text-[12px]">delete</span>
                </button>
            </div>
            ` : ''}
        </div>
        `;
        
        // Inline input pembuatan di dalam parent
        if (activeNewWorkspaceInput && activeNewWorkspaceInput.parentId === node.id && node.expanded) {
            html += `
            <div class="flex items-center gap-1.5 py-1 px-2 rounded bg-slate-50 border border-slate-200/50 mt-1" style="margin-left: 12px;">
                <span class="material-symbols-outlined text-[14px] text-slate-400 shrink-0">call_split</span>
                <input id="new-ws-input" type="text" placeholder="Nama cabang..." 
                    onkeydown="handleNewWorkspaceKey(event)"
                    onblur="setTimeout(() => { if(activeNewWorkspaceInput) cancelNewWorkspaceInput(); }, 200)"
                    class="bg-white border border-slate-300 rounded px-1.5 py-0.5 text-[10px] font-mono text-slate-800 focus:outline-none focus:border-slate-500 w-full" />
                <button onmousedown="saveNewWorkspace()" class="w-4 h-4 text-slate-600 hover:text-slate-900 flex items-center justify-center">
                    <span class="material-symbols-outlined text-[12px]">check</span>
                </button>
            </div>
            `;
        }

        // Children recursive render
        if (node.expanded && node.children && node.children.length > 0) {
            html += `
            <div class="flex flex-col relative pl-2 ml-1.5 border-l border-slate-200/70">
                ${renderWorkspaceTreeHtml(node.children, depth + 1)}
            </div>
            `;
        }
    });
    return html;
}

// Rendering Workspace Tree di Left Sidebar
function renderWorkspaceTree() {
    const leftSidebarTree = document.getElementById('dynamic-file-hierarchy');
    if (!leftSidebarTree) return;
    
    let html = renderWorkspaceTreeHtml(workspaceTree, 0);
    
    // Input Inline Pembuatan Node Root Workspace
    if (activeNewWorkspaceInput && activeNewWorkspaceInput.parentId === 'root') {
        html += `
        <div class="flex items-center gap-1.5 py-1 px-2 rounded bg-slate-50 border border-slate-200/50 mt-1">
            <span class="material-symbols-outlined text-[14px] text-slate-400 shrink-0">folder_shared</span>
            <input id="new-ws-input" type="text" placeholder="Nama workspace..." 
                onkeydown="handleNewWorkspaceKey(event)"
                onblur="setTimeout(() => { if(activeNewWorkspaceInput) cancelNewWorkspaceInput(); }, 200)"
                class="bg-white border border-slate-300 rounded px-1.5 py-0.5 text-[10px] font-mono text-slate-800 focus:outline-none focus:border-slate-500 w-full" />
            <button onmousedown="saveNewWorkspace()" class="w-4 h-4 text-slate-600 hover:text-slate-900 flex items-center justify-center">
                <span class="material-symbols-outlined text-[12px]">check</span>
            </button>
        </div>
        `;
    }
    
    leftSidebarTree.innerHTML = html;
    
    // Update Badge Status di Sidebar
    const totalCount = countTotalWorkspaces(workspaceTree);
    const expandedBadge = document.getElementById('expanded-node-count-badge');
    const collapsedBadge = document.getElementById('collapsed-node-count-badge');
    
    if (expandedBadge) {
        expandedBadge.textContent = `${totalCount} cabang`;
    }
    if (collapsedBadge) {
        collapsedBadge.textContent = totalCount;
        collapsedBadge.setAttribute('title', `${totalCount} Cabang Workspace`);
    }
}

// Membangun struktur pohon berkas virtual berdasarkan codeFiles dan folder kosong
function buildFileTree() {
    const root = { name: 'root', type: 'folder', path: '', children: [] };
    
    // 1. Ambil semua path berkas, filter berdasarkan pencarian jika ada
    let files = Object.keys(codeFiles);
    if (fileSearchQuery) {
        files = files.filter(filename => filename.toLowerCase().includes(fileSearchQuery));
    }
    
    // Fungsi pembantu rekursif untuk menyisipkan jalur ke pohon
    function addPath(pathStr, isFile) {
        const parts = pathStr.split('/');
        let current = root;
        let currentPath = '';
        
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (!part) continue;
            
            currentPath = currentPath ? `${currentPath}/${part}` : part;
            const isLast = (i === parts.length - 1);
            
            let child = current.children.find(c => c.name === part && c.type === (isLast && isFile ? 'file' : 'folder'));
            
            if (!child) {
                child = {
                    name: part,
                    type: (isLast && isFile) ? 'file' : 'folder',
                    path: currentPath,
                    children: []
                };
                current.children.push(child);
            }
            current = child;
        }
    }
    
    // Tambahkan semua file aktif
    files.forEach(f => addPath(f, true));
    
    // Tambahkan folder kosong eksplisit jika tidak ada di files
    emptyFolders.forEach(f => {
        // Hanya tambahkan jika cocok dengan query pencarian (jika ada) atau folder tersebut berisi berkas yang cocok
        if (fileSearchQuery) {
            const hasMatchingFile = files.some(file => file.startsWith(f + '/'));
            if (!hasMatchingFile && !f.toLowerCase().includes(fileSearchQuery)) {
                return;
            }
        }
        addPath(f, false);
    });
    
    // Urutkan pohon: folder terlebih dahulu, kemudian berkas secara alfabetis
    function sortTree(node) {
        if (node.children) {
            node.children.sort((a, b) => {
                if (a.type !== b.type) {
                    return a.type === 'folder' ? -1 : 1;
                }
                return a.name.localeCompare(b.name);
            });
            node.children.forEach(sortTree);
        }
    }
    sortTree(root);
    return root;
}

// Rendering File Explorer (Penjelajah Berkas) di Panel Kanan
function renderFileExplorer() {
    const container = document.getElementById('file-tree-container');
    if (!container) return;
    
    const treeRoot = buildFileTree();
    const html = renderFileTreeNode(treeRoot, 0);
    
    if (!html || html.trim() === '') {
        container.innerHTML = `
        <div class="p-4 text-center text-[10px] text-slate-400 select-none">
            Tidak ada berkas.
        </div>
        `;
    } else {
        container.innerHTML = html;
    }
}

// Render node berkas/folder secara rekursif
function renderFileTreeNode(node, depth = 0) {
    if (node.name === 'root') {
        return node.children.map(child => renderFileTreeNode(child, depth)).join('');
    }
    
    const isFolder = (node.type === 'folder');
    const path = node.path;
    const paddingLeft = depth * 12 + 4; // Spasi indentasi aman dari CSS Purge
    
    if (isFolder) {
        if (expandedFolders[path] === undefined) {
            expandedFolders[path] = true; // perluas secara default
        }
        const isExpanded = expandedFolders[path];
        const icon = isExpanded ? 'folder_open' : 'folder';
        const chevron = isExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right';
        
        let html = `
        <div class="group flex items-center justify-between py-1 px-2 hover:bg-slate-50 rounded cursor-pointer transition-all border border-transparent hover:border-slate-200/50 text-slate-700" style="padding-left: ${paddingLeft}px;" onclick="toggleFolderExpand('${path}', event)">
            <div class="flex items-center gap-1 truncate flex-1 min-w-0">
                <span class="material-symbols-outlined text-[15px] text-slate-400 shrink-0 select-none">
                    ${chevron}
                </span>
                <span class="material-symbols-outlined text-[15px] text-slate-400 shrink-0 select-none">
                    ${icon}
                </span>
                <span class="truncate font-semibold text-slate-700 text-[11px]">${node.name}</span>
            </div>
            
            <!-- Folder Hover Actions (CRUD) -->
            <div class="opacity-0 group-hover:opacity-100 flex items-center gap-0.5 shrink-0 ml-1.5" onclick="event.stopPropagation()">
                <button onclick="addNewFileInFolderPrompt('${path}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Berkas Baru di Folder">
                    <span class="material-symbols-outlined text-[12px]">add</span>
                </button>
                <button onclick="addNewFolderInFolderPrompt('${path}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Folder Baru di Folder">
                    <span class="material-symbols-outlined text-[12px]">create_new_folder</span>
                </button>
                <button onclick="renameFolderPrompt('${path}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Ubah Nama Folder">
                    <span class="material-symbols-outlined text-[12px]">edit</span>
                </button>
                <button onclick="deleteFolderPrompt('${path}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Hapus Folder">
                    <span class="material-symbols-outlined text-[12px]">delete</span>
                </button>
            </div>
        </div>
        `;
        
        if (isExpanded) {
            if (node.children && node.children.length > 0) {
                html += `<div class="flex flex-col relative">
                    ${node.children.map(child => renderFileTreeNode(child, depth + 1)).join('')}
                </div>`;
            } else {
                html += `
                <div class="py-1 text-[9px] text-slate-400 italic select-none" style="padding-left: ${paddingLeft + 24}px;">
                    (folder kosong)
                </div>
                `;
            }
        }
        
        return html;
    } else {
        const isSelected = (path === currentFile);
        const icon = getFileIcon(node.name);
        
        return `
        <div onclick="selectFile('${path}')" class="group flex items-center justify-between py-1 px-2 hover:bg-slate-100 rounded cursor-pointer transition-all border border-transparent hover:border-slate-200/50 ${isSelected ? 'bg-slate-100 border-slate-200 text-slate-900 font-bold' : 'text-slate-600'}" style="padding-left: ${paddingLeft + 15}px;">
            <div class="flex items-center gap-1.5 truncate flex-1 min-w-0">
                <span class="material-symbols-outlined text-[14px] text-slate-400 group-hover:text-slate-700 transition-colors shrink-0 select-none">
                    ${icon}
                </span>
                <span class="truncate text-[11px]">${node.name}</span>
            </div>
            
            <!-- File Hover Actions -->
            <div class="opacity-0 group-hover:opacity-100 flex items-center gap-0.5 shrink-0 ml-1.5" onclick="event.stopPropagation()">
                <button onclick="renameFilePrompt('${path}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Ubah Nama Berkas">
                    <span class="material-symbols-outlined text-[12px]">edit</span>
                </button>
                <button onclick="deleteFilePrompt('${path}', event)" class="w-4 h-4 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all" title="Hapus Berkas">
                    <span class="material-symbols-outlined text-[12px]">delete</span>
                </button>
            </div>
        </div>
        `;
    }
}

// Toggle folder expand/collapse
function toggleFolderExpand(path, event) {
    if (event) event.stopPropagation();
    expandedFolders[path] = !expandedFolders[path];
    renderFileExplorer();
}

// Tambah Folder Baru di root
function addNewFolderPrompt() {
    const name = prompt("Masukkan nama folder baru:");
    if (!name || name.trim() === '') return;
    const folderPath = name.trim();
    
    emptyFolders.add(folderPath);
    expandedFolders[folderPath] = true;
    showToast(`Folder "${folderPath}" berhasil dibuat!`);
    renderFileExplorer();
}

// Tambah Folder Baru di dalam folder tertentu
function addNewFolderInFolderPrompt(parentPath, event) {
    if (event) event.stopPropagation();
    const name = prompt(`Masukkan nama folder baru di dalam "${parentPath}":`);
    if (!name || name.trim() === '') return;
    const folderPath = `${parentPath}/${name.trim()}`;
    
    emptyFolders.add(folderPath);
    expandedFolders[parentPath] = true;
    expandedFolders[folderPath] = true;
    showToast(`Folder "${folderPath}" berhasil dibuat!`);
    renderFileExplorer();
}

// Tambah Berkas Baru di dalam folder tertentu
function addNewFileInFolderPrompt(parentPath, event) {
    if (event) event.stopPropagation();
    const name = prompt(`Masukkan nama berkas baru di dalam "${parentPath}":`);
    if (!name || name.trim() === '') return;
    const filePath = `${parentPath}/${name.trim()}`;
    
    if (codeFiles[filePath] !== undefined) {
        showToast(`Berkas "${filePath}" sudah ada!`);
        return;
    }
    
    // Konten default berdasarkan ekstensi berkas
    let defaultContent = `<!-- Berkas: ${name.trim()} -->\n<div class="p-8 max-w-md mx-auto text-center border border-slate-200 rounded-xl bg-white shadow-premium mt-8">\n  <span class="material-symbols-outlined text-3xl text-slate-400">article</span>\n  <h2 class="text-sm font-bold text-slate-800 mt-2">${name.trim()}</h2>\n  <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Ini adalah berkas baru di dalam folder ${parentPath}.</p>\n</div>`;
    
    if (filePath.endsWith('.json')) {
        defaultContent = `{\n  "name": "${name.trim().replace('.json', '')}",\n  "version": "1.0.0"\n}`;
    } else if (filePath.endsWith('.js') || filePath.endsWith('.ts')) {
        defaultContent = `// Berkas: ${filePath}\nconsole.log("${name.trim()} loaded");`;
    } else if (filePath.endsWith('.md')) {
        defaultContent = `# ${name.trim()}\n\nTulis isi markdown di sini.`;
    }
    
    codeFiles[filePath] = defaultContent;
    
    // Simpan ke status workspace aktif
    const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
    if (wsNode) {
        wsNode.files = { ...codeFiles };
    }
    
    // Pastikan folder induk diperluas
    expandedFolders[parentPath] = true;
    
    showToast(`Berkas "${filePath}" berhasil dibuat!`);
    appendLog("sistem", `Berkas baru ditambahkan di folder ${parentPath}: ${name.trim()}`, "success");
    
    renderFileExplorer();
    selectFile(filePath);
}

// Dialog Ubah Nama Folder
function renameFolderPrompt(folderPath, event) {
    if (event) event.stopPropagation();
    const parts = folderPath.split('/');
    const currentName = parts[parts.length - 1];
    
    const newName = prompt(`Masukkan nama baru untuk folder "${currentName}":`, currentName);
    if (!newName || newName.trim() === '' || newName.trim() === currentName) return;
    
    const trimmedNewName = newName.trim();
    parts[parts.length - 1] = trimmedNewName;
    const newFolderPath = parts.join('/');
    
    // 1. Ubah nama berkas-berkas dengan awalan folderPath
    const oldFiles = Object.keys(codeFiles);
    oldFiles.forEach(f => {
        if (f === folderPath || f.startsWith(folderPath + '/')) {
            const relativePath = f.substring(folderPath.length);
            const newFilePath = newFolderPath + relativePath;
            
            codeFiles[newFilePath] = codeFiles[f];
            delete codeFiles[f];
            
            if (currentFile === f) {
                currentFile = newFilePath;
            }
        }
    });
    
    // 2. Ubah nama folder kosong yang tersimpan
    const oldEmptyFolders = Array.from(emptyFolders);
    oldEmptyFolders.forEach(f => {
        if (f === folderPath) {
            emptyFolders.delete(f);
            emptyFolders.add(newFolderPath);
        } else if (f.startsWith(folderPath + '/')) {
            const relativePath = f.substring(folderPath.length);
            const newPath = newFolderPath + relativePath;
            emptyFolders.delete(f);
            emptyFolders.add(newPath);
        }
    });
    
    // 3. Ubah nama expandedFolders state
    const oldExpandedKeys = Object.keys(expandedFolders);
    oldExpandedKeys.forEach(k => {
        if (k === folderPath) {
            expandedFolders[newFolderPath] = expandedFolders[k];
            delete expandedFolders[k];
        } else if (k.startsWith(folderPath + '/')) {
            const relativePath = k.substring(folderPath.length);
            const newKey = newFolderPath + relativePath;
            expandedFolders[newKey] = expandedFolders[k];
            delete expandedFolders[k];
        }
    });
    
    // Simpan ke status workspace aktif
    const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
    if (wsNode) {
        wsNode.files = { ...codeFiles };
    }
    
    showToast(`Folder diubah menjadi "${newFolderPath}"`);
    appendLog("sistem", `Folder diubah namanya: ${folderPath} -> ${newFolderPath}`, "info");
    
    renderFileExplorer();
    if (codeFiles[currentFile] !== undefined) {
        selectFile(currentFile);
    }
}

// Dialog Hapus Folder
function deleteFolderPrompt(folderPath, event) {
    if (event) event.stopPropagation();
    
    const filesInFolder = Object.keys(codeFiles).filter(f => f === folderPath || f.startsWith(folderPath + '/'));
    
    const oldModal = document.getElementById('custom-confirm-modal');
    if (oldModal) oldModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'custom-confirm-modal';
    modal.className = 'fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-floating w-full max-w-sm p-5 space-y-4">
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-200 shrink-0">
                <span class="material-symbols-outlined text-sm">warning</span>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-800">Hapus Folder?</h4>
                <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">Apakah Anda yakin ingin menghapus folder "${folderPath}" beserta seluruh isinya (${filesInFolder.length} berkas) secara permanen?</p>
            </div>
        </div>
        <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button id="confirm-cancel-folder-btn" class="bg-transparent hover:bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] font-semibold transition-all">
                Batal
            </button>
            <button id="confirm-delete-folder-btn" class="bg-slate-800 hover:bg-slate-750 active:bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all">
                Ya, Hapus Semua
            </button>
        </div>
    </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('confirm-cancel-folder-btn').onclick = () => {
        modal.remove();
    };
    
    document.getElementById('confirm-delete-folder-btn').onclick = () => {
        filesInFolder.forEach(f => {
            delete codeFiles[f];
        });
        
        const oldEmptyFolders = Array.from(emptyFolders);
        oldEmptyFolders.forEach(f => {
            if (f === folderPath || f.startsWith(folderPath + '/')) {
                emptyFolders.delete(f);
            }
        });
        
        const oldExpandedKeys = Object.keys(expandedFolders);
        oldExpandedKeys.forEach(k => {
            if (k === folderPath || k.startsWith(folderPath + '/')) {
                delete expandedFolders[k];
            }
        });
        
        const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
        if (wsNode) {
            wsNode.files = { ...codeFiles };
        }
        
        showToast(`Folder "${folderPath}" berhasil dihapus!`);
        appendLog("sistem", `Folder dihapus beserta isinya: ${folderPath}`, "warning");
        
        if (filesInFolder.includes(currentFile)) {
            const remainingFiles = Object.keys(codeFiles);
            if (remainingFiles.length > 0) {
                selectFile(remainingFiles[0]);
            } else {
                codeFiles['index.html'] = `<!-- default -->\n<div class="p-8 max-w-sm mx-auto text-center border border-slate-200 rounded-xl bg-white shadow-premium mt-8">\n  <h2 class="text-xs font-bold text-slate-800">Ruang Kerja Kosong</h2>\n</div>`;
                if (wsNode) wsNode.files = { ...codeFiles };
                selectFile('index.html');
            }
        } else {
            renderFileExplorer();
        }
        modal.remove();
    };
}

// Dialog Ubah Nama Berkas
function renameFilePrompt(filename, event) {
    if (event) event.stopPropagation();
    const newName = prompt("Masukkan nama baru untuk berkas:", filename);
    if (!newName || newName.trim() === '' || newName === filename) return;
    
    const content = codeFiles[filename];
    delete codeFiles[filename];
    codeFiles[newName] = content;
    
    if (currentFile === filename) {
        currentFile = newName;
    }
    
    const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
    if (wsNode) {
        wsNode.files = { ...codeFiles };
    }
    
    showToast(`Nama berkas diubah menjadi "${newName}"`);
    appendLog("sistem", `Berkas diubah namanya: ${filename} -> ${newName}`, "info");
    
    renderFileExplorer();
    selectFile(currentFile);
}

// Dialog Hapus Berkas
function deleteFilePrompt(filename, event) {
    if (event) event.stopPropagation();
    
    if (Object.keys(codeFiles).length <= 1) {
        showToast("Gagal: Harus menyisakan minimal satu berkas!");
        return;
    }
    
    const oldModal = document.getElementById('custom-confirm-modal');
    if (oldModal) oldModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'custom-confirm-modal';
    modal.className = 'fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-floating w-full max-w-sm p-5 space-y-4">
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-200 shrink-0">
                <span class="material-symbols-outlined text-sm">warning</span>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-800">Hapus Berkas?</h4>
                <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">Apakah Anda yakin ingin menghapus berkas "${filename}" secara permanen?</p>
            </div>
        </div>
        <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button id="confirm-cancel-file-btn" class="bg-transparent hover:bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] font-semibold transition-all">
                Batal
            </button>
            <button id="confirm-delete-file-btn" class="bg-slate-800 hover:bg-slate-750 active:bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all">
                Ya, Hapus
            </button>
        </div>
    </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('confirm-cancel-file-btn').onclick = () => {
        modal.remove();
    };
    
    document.getElementById('confirm-delete-file-btn').onclick = () => {
        delete codeFiles[filename];
        
        const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
        if (wsNode) {
            wsNode.files = { ...codeFiles };
        }
        
        showToast(`Berkas "${filename}" berhasil dihapus!`);
        appendLog("sistem", `Berkas dihapus: ${filename}`, "warning");
        
        if (currentFile === filename) {
            const remainingFiles = Object.keys(codeFiles);
            selectFile(remainingFiles[0]);
        } else {
            renderFileExplorer();
        }
        modal.remove();
    };
}

// Responsivitas & Mockup State
let isMobileSidebarOpen = false;
let isFileExplorerOpen = false;
let isInspectMode = false;
let currentDevice = 'desktop'; // 'desktop', 'tablet', 'mobile'
let tokenTabActive = 'token'; // 'token', 'char', 'data'
let isAutoSetup = true;

// AI Workspace Settings State
let currentMode = 'Bangun';
let currentModel = 'Gemini 3.5 Flash';
let currentEffort = 'Sedang';
let currentIO = 'Standard';

// Inisialisasi Awal saat Halaman Dimuat
window.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi Workspace Tree & File Explorer
    selectWorkspace('ws-1');
    
    // Tutup dropdown otomatis jika mengeklik di luar menu
    document.addEventListener('click', () => {
        closeAllDropdowns();
    });

    // Cegah penutupan dropdown jika mengeklik kontainer pemicunya
    const ddButtons = ['context-provider-btn', 'context-model-btn', 'context-level-btn', 'context-mode-btn', 'dropdown-io-toggle-btn', 'explorer-token-tab-btn'];
    ddButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', (e) => e.stopPropagation());
        }
    });

    // Sinkronisasi status awal UI compiler ke sandbox
    compileSandbox();
});

// Buka-tutup Sidebar Utama (Left Mini Sidebar)
function toggleSidebar() {
    const sidebar = document.getElementById('left-mini-sidebar');
    const expandBtn = document.getElementById('left-sidebar-expand-btn');
    if (!sidebar || !expandBtn) return;

    const isCollapsed = sidebar.classList.contains('w-16');

    if (isCollapsed) {
        // Expand
        sidebar.classList.remove('w-16');
        sidebar.classList.add('w-72');
        expandBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">chevron_left</span>';
        showToast("Sidebar diperluas.");
    } else {
        // Collapse
        sidebar.classList.remove('w-72');
        sidebar.classList.add('w-16');
        expandBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">chevron_right</span>';
        showToast("Sidebar diringkas.");
    }
}

// Buka-tutup Sidebar Utama Seluler
function toggleMobileSidebar() {
    const sidebar = document.getElementById('main-sidebar');
    const backdrop = document.getElementById('mobile-sidebar-backdrop');
    if (!sidebar || !backdrop) return;
    
    isMobileSidebarOpen = !isMobileSidebarOpen;

    if (isMobileSidebarOpen) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
    }
}

// Buka-tutup Penjelajah Berkas (File Explorer)
function toggleFileExplorer() {
    const explorer = document.getElementById('file-explorer');
    const backdrop = document.getElementById('mobile-explorer-backdrop');
    if (!explorer || !backdrop) return;

    isFileExplorerOpen = !isFileExplorerOpen;

    if (isFileExplorerOpen) {
        explorer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
    } else {
        explorer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
    }
}

// Beralih Struktur Tampilan Sidebar Kiri
function switchSidebarView(view) {
    const builder = document.getElementById('panel-builder');
    const history = document.getElementById('panel-history');
    const context = document.getElementById('panel-context');
    
    const btnChat = document.getElementById('tab-btn-chat');
    const btnHistory = document.getElementById('tab-btn-history');
    const btnContext = document.getElementById('tab-btn-context');
    const btnContextExp = document.getElementById('tab-btn-context-expanded');
    const btnContextCol = document.getElementById('tab-btn-context-collapsed');
    
    if (builder) builder.classList.add('hidden');
    if (history) history.classList.add('hidden');
    if (context) context.classList.add('hidden');
    
    const inactiveClasses = "flex-1 py-1.5 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 text-slate-500 hover:text-slate-800 bg-transparent border border-transparent";
    const activeClasses = "flex-1 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 text-slate-800 bg-white border border-slate-200/40 shadow-sm";
    
    [btnChat, btnHistory, btnContext].forEach(btn => {
        if (btn) {
            btn.className = inactiveClasses;
            btn.setAttribute('aria-selected', 'false');
        }
    });

    // Reset mini-sidebar Settings/Setup buttons
    if (btnContextExp) {
        btnContextExp.className = "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/50 hover:text-slate-900 transition-all active:scale-[0.98]";
    }
    if (btnContextCol) {
        btnContextCol.className = "w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-95";
    }
    
    if (view === 'history') {
        if (history) history.classList.remove('hidden');
        if (btnHistory) {
            btnHistory.className = activeClasses;
            btnHistory.setAttribute('aria-selected', 'true');
        }
        showToast("Membuka Riwayat Percakapan");
    } else if (view === 'context') {
        if (context) context.classList.remove('hidden');
        if (btnContext) {
            btnContext.className = activeClasses;
            btnContext.setAttribute('aria-selected', 'true');
        }
        if (btnContextExp) {
            btnContextExp.className = "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 border border-slate-300 transition-all active:scale-[0.98] shadow-inner";
        }
        if (btnContextCol) {
            btnContextCol.className = "w-8 h-8 rounded-lg flex items-center justify-center text-slate-900 bg-slate-100 border border-slate-200 shadow-inner transition-all active:scale-95";
        }
        showToast("Membuka Detail Setup & Settings");
    } else {
        if (builder) builder.classList.remove('hidden');
        if (btnChat) {
            btnChat.className = activeClasses;
            btnChat.setAttribute('aria-selected', 'true');
        }
    }

    // Tutup laci seluler otomatis jika di layar seluler
    if (isMobileSidebarOpen) {
        toggleMobileSidebar();
    }
}

// Dropdown Toggle Control
function toggleDropdown(event, id) {
    if (event) event.stopPropagation();
    const currentDd = document.getElementById(id);
    if (!currentDd) return;
    const isOpened = !currentDd.classList.contains('hidden');
    
    closeAllDropdowns();
    if (!isOpened) {
        currentDd.classList.remove('hidden');
    }
}

function closeAllDropdowns() {
    const ddIds = ['dd-mode', 'dd-model', 'dd-effort', 'dd-tabs-bottom', 'dd-io'];
    ddIds.forEach(id => {
        const dd = document.getElementById(id);
        if (dd) dd.classList.add('hidden');
    });
}

// Memilih Setup & Konfigurasi dari Menu Dropdown
function selectMode(name, iconName) {
    currentMode = name;
    const modelText = document.getElementById('current-setup-mode');
    if (modelText) modelText.textContent = name;
    
    // Perbarui juga data label status atau icon pemicu jika ada
    showToast(`Mode aktif diatur ke: ${name}`);
    closeAllDropdowns();
}

function selectModel(name) {
    currentModel = name;
    const modelText = document.getElementById('current-setup-model');
    if (modelText) modelText.textContent = name;
    
    showToast(`Model AI aktif: ${name}`);
    closeAllDropdowns();
}

function selectEffort(level) {
    currentEffort = level;
    const effortText = document.getElementById('current-setup-effort');
    if (effortText) effortText.textContent = level === 'Mati' ? 'Mati' : `${level} Effort`;
    
    showToast(`Daya Berpikir diatur ke: ${level}`);
    closeAllDropdowns();
}

function selectIO(ioName) {
    currentIO = ioName;
    showToast(`Mode Output Kompilasi: ${ioName}`);
    closeAllDropdowns();
}

// Auto Setup Switch Button Toggle
function toggleAutoSetup() {
    isAutoSetup = !isAutoSetup;
    const dot = document.getElementById('context-auto-switch-dot');
    const btn = document.getElementById('context-auto-switch-btn');
    if (!dot || !btn) return;

    if (isAutoSetup) {
        dot.classList.add('translate-x-4');
        btn.classList.add('bg-slate-800');
        btn.classList.remove('bg-slate-200');
        btn.setAttribute('aria-pressed', 'true');
        showToast("Auto Setup diaktifkan!");
    } else {
        dot.classList.remove('translate-x-4');
        btn.classList.remove('bg-slate-800');
        btn.classList.add('bg-slate-200');
        btn.setAttribute('aria-pressed', 'false');
        showToast("Auto Setup dinonaktifkan.");
    }
}

// Mengganti Berkas Aktif pada File Tree / Explorer
function selectFile(filename) {
    if (codeFiles[filename] === undefined) return;
    currentFile = filename;
    
    // Perbarui visualisasi pohon berkas secara dinamis
    renderFileExplorer();

    // Perbarui tab editor dan teks
    const activeTabTitle = document.getElementById('active-tab-title');
    if (activeTabTitle) {
        activeTabTitle.innerHTML = `${filename} <button id="editor-close-tab-btn" onclick="showToast('Tab dilindungi dari penutupan!')" class="text-slate-500 hover:text-white ml-2 flex items-center justify-center p-0.5 rounded transition-colors" aria-label="Tutup tab berkas"><span style="font-size: 11px;" class="material-symbols-outlined">close</span></button>`;
    }
    
    const editorTextarea = document.getElementById('editor-textarea');
    if (editorTextarea) {
        editorTextarea.value = codeFiles[filename];
        adjustLineNumbers(codeFiles[filename]);
    }

    // Tutup laci otomatis di seluler
    if (isFileExplorerOpen) {
        toggleFileExplorer();
    }
}

// Sinkronisasi Perubahan Editor Kode
function reflectEditorChange() {
    const editorTextarea = document.getElementById('editor-textarea');
    if (!editorTextarea) return;
    const editorText = editorTextarea.value;
    codeFiles[currentFile] = editorText;
    adjustLineNumbers(editorText);

    // Sinkronisasi real-time ke workspace aktif
    const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
    if (wsNode) {
        wsNode.files = { ...codeFiles };
    }

    // Jika yang diedit index.html, render live ke sandbox pratinjau
    if (currentFile === 'index.html') {
        compileSandbox();
    }
}

// Sesuaikan baris angka editor secara dinamis
function adjustLineNumbers(text) {
    const lineCount = text.split('\n').length;
    const lineCol = document.getElementById('editor-line-numbers');
    if (!lineCol) return;
    let linesString = '';
    for (let i = 1; i <= Math.max(15, lineCount); i++) {
        linesString += `${i}<br>`;
    }
    lineCol.innerHTML = linesString;
}

// Ganti Tab Utama (Tampilan/Preview vs Kode Sumber)
function switchMainTab(tab) {
    activeTab = tab;
    const previewEl = document.getElementById('toggle-preview');
    const codeEl = document.getElementById('toggle-code');
    const workspacePreview = document.getElementById('workspace-preview');
    const workspaceCode = document.getElementById('workspace-code');

    if (!previewEl || !codeEl || !workspacePreview || !workspaceCode) return;

    if (tab === 'preview') {
        previewEl.className = "text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-slate-900 shadow-sm flex items-center gap-1.5 transition-all";
        previewEl.setAttribute('aria-selected', 'true');
        
        codeEl.className = "text-xs font-semibold px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-all";
        codeEl.setAttribute('aria-selected', 'false');
        
        workspacePreview.classList.remove('hidden');
        workspaceCode.classList.add('hidden');
        compileSandbox();
    } else {
        previewEl.className = "text-xs font-semibold px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-all";
        previewEl.setAttribute('aria-selected', 'false');
        
        codeEl.className = "text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-slate-900 shadow-sm flex items-center gap-1.5 transition-all";
        codeEl.setAttribute('aria-selected', 'true');

        workspacePreview.classList.add('hidden');
        workspaceCode.classList.remove('hidden');
        
        // Refresh Editor Text
        const editorTextarea = document.getElementById('editor-textarea');
        if (editorTextarea) {
            editorTextarea.value = codeFiles[currentFile];
            adjustLineNumbers(codeFiles[currentFile]);
        }
    }
}

// Kompilasi visual kode index.html ke sandbox pratinjau
function compileSandbox() {
    const previewRoot = document.getElementById('sandbox-compiled-root');
    const blankPageEl = document.getElementById('blank-page-graphic');
    if (!previewRoot || !blankPageEl) return;

    const htmlCode = codeFiles['index.html'];
    if (htmlCode && htmlCode.trim() !== '' && !htmlCode.includes('Halaman Kosong')) {
        previewRoot.innerHTML = htmlCode;
        previewRoot.classList.remove('hidden');
        blankPageEl.classList.add('hidden');
    } else {
        previewRoot.classList.add('hidden');
        blankPageEl.classList.remove('hidden');
    }
}

// Memilih saran prompt cepat
function setQuickPrompt(promptText) {
    const promptInput = document.getElementById('prompt-input');
    if (promptInput) {
        promptInput.value = promptText;
        promptInput.focus();
    }
}

// Aksi Pengiriman Instruksi Prompt (AI Simulator Utama)
function triggerAISimulation() {
    const promptInput = document.getElementById('prompt-input');
    if (!promptInput) return;
    const text = promptInput.value.trim();
    
    if (!text) {
        showToast("Masukkan instruksi prompt terlebih dahulu!");
        return;
    }

    // Tampilkan panel log terminal secara otomatis untuk memperlihatkan aktivitas kompilasi
    const logsPanel = document.getElementById('logs-panel');
    if (logsPanel && logsPanel.classList.contains('hidden')) {
        toggleLogsPanel();
    }

    // Tambah Log Pertama (Memulai)
    appendLog("sistem", `Menerima prompt instruksi: "${text}"`, "info");
    appendLog("penyusun", `Parameter konfigurasi model: ${currentModel}, kapasitas penalaran: ${currentEffort}`, "info");

    showToast("Instruksi dikirim ke AI...");
    promptInput.value = '';

    // Langkah Kompilasi Simulasi dengan Timer (Visual feedback sangat realistis!)
    setTimeout(() => {
        appendLog("penyusun", "Menganalisis dependensi komponen & tata letak visual...", "info");
    }, 450);

    setTimeout(() => {
        appendLog("sistem", "Merumuskan kode html menggunakan sistem desain Slate...", "info");
    }, 900);

    setTimeout(() => {
        // Melakukan penyesuaian virtual berkas berdasarkan jenis prompt
        let generatedCode = '';
        
        if (text.toLowerCase().includes('profil') || text.toLowerCase().includes('person')) {
            generatedCode = `<!-- Mockup Halaman Profil Minimalis - Slate Theme -->
<div class="p-6 max-w-md mx-auto my-4 bg-white border border-slate-200 rounded-2xl shadow-premium">
    <div class="flex flex-col items-center text-center pb-4 border-b border-slate-100">
        <!-- Avatar Mockup -->
        <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 border border-slate-200 mb-3 shadow-inner">
            <span style="font-size: 36px;" class="material-symbols-outlined">person_outline</span>
        </div>
        <h3 class="text-base font-bold text-slate-800 tracking-tight">Yadi Tegal</h3>
        <span class="text-xs text-slate-500 font-medium">UI/UX Engineer & Frontend Developer</span>
        <p class="text-[11px] text-slate-400 mt-2 max-w-[260px] leading-relaxed">Berfokus pada pembuatan antarmuka digital minimalis berdaya aksesibilitas tinggi menggunakan Slate Tailwind CSS.</p>
    </div>
    
    <!-- Bagian Spesialisasi Kerja -->
    <div class="py-4 border-b border-slate-100">
        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Bidang Keahlian</h4>
        <div class="flex flex-wrap gap-1.5">
            <span class="bg-slate-100 text-slate-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-slate-200/50">TypeScript</span>
            <span class="bg-slate-100 text-slate-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-slate-200/50">Tailwind CSS</span>
            <span class="bg-slate-100 text-slate-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-slate-200/50">Accessibility</span>
            <span class="bg-slate-100 text-slate-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-slate-200/50">Mockup Design</span>
        </div>
    </div>
    
    <!-- Formulir Kontak Interaktif -->
    <div class="pt-4">
        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Kirim Pesan Pesanan</h4>
        <form onsubmit="event.preventDefault(); alert('Sukses! Pesan Anda telah terkirim dalam simulasi sandbox.');" class="space-y-2.5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 mb-1" for="contact-name">Nama Lengkap</label>
                <input required type="text" id="contact-name" placeholder="Nama Anda" class="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 outline-none transition-all focus:border-slate-500">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 mb-1" for="contact-msg">Isi Pesan</label>
                <textarea required id="contact-msg" rows="2" placeholder="Tulis rincian di sini..." class="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 outline-none transition-all focus:border-slate-500 resize-none"></textarea>
            </div>
            <button type="submit" class="w-full bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs py-2 rounded-lg transition-all shadow-sm">
                Kirim Pesan
            </button>
        </form>
    </div>
</div>`;
        } else if (text.toLowerCase().includes('tombol') || text.toLowerCase().includes('button') || text.toLowerCase().includes('palette')) {
            generatedCode = `<!-- Mockup Koleksi Tombol Slate - Desain Eksklusif -->
<div class="p-6 max-w-md mx-auto my-4 bg-white border border-slate-200 rounded-2xl shadow-premium space-y-5">
    <div class="pb-3 border-b border-slate-100">
        <h3 class="text-sm font-bold text-slate-800 tracking-tight">Koleksi Tombol Interaktif</h3>
        <p class="text-[11px] text-slate-400 mt-0.5">Semua tingkat interaksi visual dan warna menggunakan keluarga Slate.</p>
    </div>
    
    <!-- State Dasar -->
    <div class="space-y-2">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1. Variasi Gaya Utama</span>
        <div class="flex flex-wrap gap-2">
            <button onclick="alert('Tombol Utama diklik!')" class="bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all shadow-sm focus:ring-1 focus:ring-slate-400 outline-none">Primary</button>
            <button onclick="alert('Tombol Sekunder diklik!')" class="bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all focus:ring-1 focus:ring-slate-200 outline-none">Secondary</button>
            <button onclick="alert('Tombol Tersier diklik!')" class="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all outline-none">Tertiary</button>
        </div>
    </div>
    
    <!-- State Interaksi Khusus -->
    <div class="space-y-2">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2. Status & Ikon</span>
        <div class="flex flex-wrap gap-2 items-center">
            <button disabled class="bg-slate-100 text-slate-400 text-xs px-3.5 py-1.5 rounded-lg cursor-not-allowed border border-slate-200 opacity-60 flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">block</span> Disabled
            </button>
            <button class="bg-slate-800 text-white text-xs px-3.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5 cursor-wait">
                <div class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Loading...
            </button>
            <button onclick="alert('Tombol Berikon diklik!')" class="bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">send</span> Kirim
            </button>
        </div>
    </div>

    <!-- Tombol Saklar Toggle Switcer -->
    <div class="space-y-2">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">3. Sakelar Berkelompok</span>
        <div class="inline-flex border border-slate-200 rounded-lg overflow-hidden bg-slate-50 p-0.5">
            <button onclick="alert('Memilih Opsi A')" class="bg-white text-slate-800 text-[11px] font-bold px-3 py-1 rounded-md shadow-xs transition-all">Opsi A</button>
            <button onclick="alert('Memilih Opsi B')" class="text-slate-500 hover:text-slate-800 text-[11px] px-3 py-1 rounded-md transition-all">Opsi B</button>
        </div>
    </div>
</div>`;
        } else if (text.toLowerCase().includes('dark') || text.toLowerCase().includes('gelap') || text.toLowerCase().includes('mode')) {
            generatedCode = `<!-- Mockup Tampilan Gelap (Slate Dark-Canvas) -->
<div class="p-6 max-w-md mx-auto my-4 bg-slate-950 text-slate-200 border border-slate-800 rounded-2xl shadow-floating space-y-4">
    <div class="flex items-center justify-between pb-3 border-b border-slate-900">
        <div>
            <h3 class="text-xs font-bold text-white tracking-wider uppercase font-mono">CODE_RENDER_SERVER</h3>
            <span class="text-[9px] text-slate-500 font-mono">STATUS: ACTIVE_LOCAL</span>
        </div>
        <!-- Toggle Mode Gelap Internal -->
        <button onclick="const p = this.closest('.bg-slate-950'); if(p.classList.contains('bg-slate-950')) { p.className=p.className.replace('bg-slate-950 text-slate-200 border-slate-800', 'bg-white text-slate-800 border-slate-200'); p.querySelector('h3').className='text-xs font-bold text-slate-800 tracking-wider uppercase font-mono'; this.textContent='Kembali Gelap'; } else { p.className=p.className.replace('bg-white text-slate-800 border-slate-200', 'bg-slate-950 text-slate-200 border-slate-800'); p.querySelector('h3').className='text-xs font-bold text-white tracking-wider uppercase font-mono'; this.textContent='Ganti Terang'; }" class="bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors">
            Ganti Terang
        </button>
    </div>
    
    <div class="space-y-2">
        <p class="text-xs text-slate-400 leading-relaxed font-sans">Kode editor sandbox lokal mengemulasikan output rendering secara presisi tanpa lag:</p>
        <div class="bg-slate-900 border border-slate-800 p-3 rounded-lg font-mono text-[10px] text-slate-300">
            <span class="text-slate-500">1</span> &lt;div class="slate-canvas"&gt;<br>
            <span class="text-slate-500">2</span> &nbsp;&nbsp;&lt;span class="text-accent"&gt;✦&lt;/span&gt;<br>
            <span class="text-slate-500">3</span> &nbsp;&nbsp;&lt;p&gt;Dark mode emulated!&lt;/p&gt;<br>
            <span class="text-slate-500">4</span> &lt;/div&gt;
        </div>
    </div>
    
    <div class="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
        <span class="material-symbols-outlined text-[12px]">info</span>
        <span>Gunakan tombol sakelar di atas untuk menguji ketepatan warna.</span>
    </div>
</div>`;
        } else {
            // General SaaS Dashboard Component
            generatedCode = `<!-- Mockup Dashboard SaaS Minimalis - Slate Theme -->
<div class="p-5 max-w-md mx-auto my-2 bg-white border border-slate-200 rounded-2xl shadow-premium space-y-4 text-slate-700">
    <div class="flex items-center justify-between pb-2 border-b border-slate-100">
        <div>
            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none block">IKHTISAR UTAMA</span>
            <h3 class="text-sm font-bold text-slate-800 tracking-tight mt-0.5">Workspace Analitika</h3>
        </div>
        <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-semibold border border-slate-200/40">Hari Ini</span>
    </div>

    <!-- Statistik Kartu Grid -->
    <div class="grid grid-cols-2 gap-3">
        <div class="border border-slate-150 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer" onclick="alert('Detail Traffic: 1,240 permintaan lokal')">
            <span class="text-[10px] text-slate-400 font-bold block">TRAFFIC</span>
            <span class="text-base font-bold text-slate-800 tracking-tight">1,240 req</span>
            <span class="text-[9px] text-slate-500 font-medium block mt-0.5">● Berhasil</span>
        </div>
        <div class="border border-slate-150 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer" onclick="alert('Detail CPU: Stabil di 1.2%')">
            <span class="text-[10px] text-slate-400 font-bold block">CPU LOAD</span>
            <span class="text-base font-bold text-slate-800 tracking-tight">1.2%</span>
            <span class="text-[9px] text-slate-500 font-medium block mt-0.5">● Stabil</span>
        </div>
    </div>

    <!-- Grafik SVG Minimalis (Slate Colors) -->
    <div class="space-y-1">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kapasitas Muatan</span>
        <div class="h-20 w-full bg-slate-50 rounded-xl border border-slate-150 p-2 flex items-end justify-between gap-1">
            <div class="bg-slate-200 w-full rounded-t" style="height: 20%"></div>
            <div class="bg-slate-300 w-full rounded-t" style="height: 45%"></div>
            <div class="bg-slate-400 w-full rounded-t" style="height: 30%"></div>
            <div class="bg-slate-500 w-full rounded-t" style="height: 65%"></div>
            <div class="bg-slate-600 w-full rounded-t" style="height: 50%"></div>
            <div class="bg-slate-700 w-full rounded-t" style="height: 85%"></div>
            <div class="bg-slate-850 w-full rounded-t" style="height: 75%"></div>
        </div>
    </div>

    <!-- Interactive Task Tracker Mockup -->
    <div class="pt-2 border-t border-slate-100">
        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Simulasi Daftar Tugas</h4>
        <div class="space-y-1.5 text-xs text-slate-700" id="sandbox-task-list">
            <label class="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                <input type="checkbox" checked class="rounded text-slate-800 focus:ring-0" onclick="showToast('Tugas diselesaikan!')">
                <span class="line-through text-slate-400">Verifikasi standar WCAG</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-slate-50">
                <input type="checkbox" class="rounded text-slate-800 focus:ring-0" onclick="showToast('Tugas selesai!')">
                <span>Bersihkan pustaka warna aksen</span>
            </label>
        </div>
    </div>
</div>`;
        }

        // Simpan ke virtual filesystem
        codeFiles['index.html'] = generatedCode;
        
        // Output logs sukses kompilasi
        appendLog("penyusun", "Kompilasi Sandbox berhasil! Dokumen \"index.html\" diperbarui.", "success");
        appendLog("sistem", "Server reload berjalan di PORT 3000.", "success");

        // Ganti file fokus ke index.html agar kodenya terload di editor
        selectFile('index.html');
        
        // Ganti Tampilan Tab ke Preview agar instan terlihat hasilnya
        switchMainTab('preview');
        
        showToast("Halaman berhasil dikompilasi AI!");

        if (isMobileSidebarOpen) {
            toggleMobileSidebar();
        }
    }, 1400);
}

// Buka-tutup Panel Log Terminal
function toggleLogsPanel() {
    const panel = document.getElementById('logs-panel');
    if (!panel) return;
    
    isLogsOpen = !isLogsOpen;
    if (isLogsOpen) {
        panel.classList.remove('hidden');
    } else {
        panel.classList.add('hidden');
    }
}

// Bersihkan log terminal
function clearLogs() {
    const container = document.getElementById('logs-container');
    if (container) {
        container.innerHTML = `<p class="text-slate-400 italic text-center py-4 select-none">Tidak ada rekaman log saat ini.</p>`;
    }
    const badge = document.getElementById('log-count-badge');
    if (badge) {
        badge.classList.add('hidden');
        badge.textContent = '0';
    }
    updateTerminalStats(0);
}

// Tambah log baru ke list secara dinamis
function appendLog(category, msg, level) {
    const container = document.getElementById('logs-container');
    if (!container) return;

    if (container.innerHTML.includes('Tidak ada rekaman log')) {
        container.innerHTML = '';
    }

    const timeString = new Date().toTimeString().split(' ')[0];
    
    // Gunakan murni sistem warna Slate untuk log sesuai anjuran tambahan
    let levelClass = "border-l-2 border-slate-300 bg-slate-50/75 text-slate-700";
    let tag = "Info";
    let icon = "info";

    if (level === 'success') {
        levelClass = "border-l-2 border-slate-500 bg-slate-50 text-slate-800";
        tag = "Sukses";
        icon = "done_all";
    } else if (level === 'error') {
        levelClass = "border-l-2 border-slate-800 bg-slate-50 text-slate-900";
        tag = "Gagal";
        icon = "error";
    } else if (level === 'warning') {
        levelClass = "border-l-2 border-slate-400 bg-slate-50 text-slate-700";
        tag = "Peringatan";
        icon = "warning";
    }

    const wrapper = document.createElement('div');
    wrapper.className = `log-item ${levelClass} p-1.5 rounded flex items-start gap-3`;
    wrapper.setAttribute('data-level', level || 'info');
    wrapper.setAttribute('data-category', category || 'sistem');
    wrapper.innerHTML = `
        <span class="font-bold flex items-center gap-1 shrink-0 select-none">
            <span class="material-symbols-outlined text-[14px]">${icon}</span>
            ${tag}
        </span>
        <div class="flex-1">${msg}</div>
        <span class="text-slate-400 select-none text-[10px] shrink-0">${timeString}</span>
    `;
    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;
    
    // Perbarui counter log badge di header
    const badge = document.getElementById('log-count-badge');
    if (badge) {
        badge.classList.remove('hidden');
        const count = parseInt(badge.textContent || 0) + 1;
        badge.textContent = count;
        updateTerminalStats(count);
    }
}

// Update statistik counter log di bar navigasi log
function updateTerminalStats(totalCount) {
    const stats = document.getElementById('terminal-log-stats');
    if (stats) {
        stats.textContent = `${totalCount}/${totalCount} pesan log`;
    }
}

// Filter File Tree di Explorer
function filterFiles() {
    const queryInput = document.getElementById('file-search-input');
    if (!queryInput) return;
    fileSearchQuery = queryInput.value.toLowerCase().trim();
    renderFileExplorer();
}

// Filter Percakapan Riwayat
function filterConversations() {
    const query = document.getElementById('conversation-search-input').value.toLowerCase().trim();
    const items = document.querySelectorAll('#conversations-list-container .conversation-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Filter Terminal Logs secara real-time
function filterTerminalLogs() {
    const levelSelect = document.getElementById('terminal-log-level-select').value;
    const typeSelect = document.getElementById('terminal-log-type-select').value;
    const query = document.getElementById('terminal-log-search-input').value.toLowerCase().trim();
    
    const logs = document.querySelectorAll('#logs-container .log-item');
    let visibleCount = 0;

    logs.forEach(log => {
        const lvl = log.getAttribute('data-level');
        const cat = log.getAttribute('data-category');
        const text = log.textContent.toLowerCase();
        
        const lvlMatch = (levelSelect === 'all' || lvl === levelSelect);
        const typeMatch = (typeSelect === 'all' || cat === typeSelect);
        const textMatch = (query === '' || text.includes(query));

        if (lvlMatch && typeMatch && textMatch) {
            log.classList.remove('hidden');
            visibleCount++;
        } else {
            log.classList.add('hidden');
        }
    });

    const stats = document.getElementById('terminal-log-stats');
    if (stats) {
        stats.textContent = `${visibleCount}/${logs.length} pesan log`;
    }
}

// Alihkan ukuran render di frame preview (Desktop, Tablet, Mobile)
function toggleDeviceMock() {
    const frame = document.getElementById('preview-container-frame');
    const label = document.getElementById('device-toggle-label');
    if (!frame || !label) return;

    if (currentDevice === 'desktop') {
        currentDevice = 'tablet';
        frame.style.maxWidth = '768px';
        frame.style.height = '90%';
        label.textContent = 'Tablet';
        showToast("Pratinjau diatur ke ukuran Tablet (768px)");
    } else if (currentDevice === 'tablet') {
        currentDevice = 'mobile';
        frame.style.maxWidth = '380px';
        frame.style.height = '85%';
        label.textContent = 'Mobile';
        showToast("Pratinjau diatur ke ukuran Mobile (380px)");
    } else {
        currentDevice = 'desktop';
        frame.style.maxWidth = '100%';
        frame.style.height = '100%';
        label.textContent = 'Desktop';
        showToast("Pratinjau diatur ke ukuran Desktop Penuh");
    }
}

// Toggle Mode Inspeksi Mockup
function toggleInspectMode() {
    isInspectMode = !isInspectMode;
    const btn = document.getElementById('inspect-element');
    const container = document.getElementById('preview-container-frame');
    if (!btn || !container) return;

    if (isInspectMode) {
        btn.classList.add('bg-slate-100', 'text-slate-800');
        container.classList.add('ring-2', 'ring-dashed', 'ring-slate-400');
        showToast("Mode inspeksi elemen aktif! Sorot item di frame pratinjau.");
    } else {
        btn.classList.remove('bg-slate-100', 'text-slate-800');
        container.classList.remove('ring-2', 'ring-dashed', 'ring-slate-400');
        showToast("Mode inspeksi dinonaktifkan.");
    }
}

// Alihkan Tab Statistik Token
function switchTokenStatsTab(tab) {
    tokenTabActive = tab;
    
    const label = document.getElementById('token-stats-label');
    const percentage = document.getElementById('token-stats-percentage');
    const progress = document.getElementById('token-stats-progress');
    const expLabel = document.getElementById('explorer-token-label');
    const expPercentage = document.getElementById('explorer-token-percentage');
    const expProgress = document.getElementById('explorer-token-progress');

    const btnChar = document.getElementById('token-tab-char');
    const btnData = document.getElementById('token-tab-data');
    const btnToken = document.getElementById('token-tab-token');

    const inactiveClasses = "py-1.5 text-[10px] font-medium text-slate-600 flex items-center justify-center gap-1.5 rounded-lg hover:text-slate-900 transition-colors";
    const activeClasses = "py-1.5 text-[10px] font-bold text-slate-900 flex items-center justify-center gap-1.5 rounded-lg bg-white shadow-sm transition-all border border-slate-200";

    [btnChar, btnData, btnToken].forEach(btn => {
        if (btn) {
            btn.className = inactiveClasses;
            btn.setAttribute('aria-selected', 'false');
        }
    });

    let activeBtn = btnToken;
    let labelVal = "20,000 / 1,000,000T";
    let pctVal = "2 / 100%";
    let widthVal = "8%";

    if (tab === 'char') {
        activeBtn = btnChar;
        labelVal = "118,500 / 5,000,000C";
        pctVal = "2.37%";
        widthVal = "2.37%";
    } else if (tab === 'data') {
        activeBtn = btnData;
        labelVal = "450 / 10,000D";
        pctVal = "4.5%";
        widthVal = "4.5%";
    }

    if (activeBtn) {
        activeBtn.className = activeClasses;
        activeBtn.setAttribute('aria-selected', 'true');
    }

    if (label) label.textContent = labelVal;
    if (percentage) percentage.textContent = pctVal;
    if (progress) progress.style.width = widthVal;
    
    if (expLabel) expLabel.textContent = labelVal;
    if (expPercentage) expPercentage.textContent = pctVal;
    if (expProgress) expProgress.style.width = widthVal;
    
    showToast(`Beralih statistik ke: ${tab === 'char' ? 'Karakter' : tab === 'data' ? 'Data' : 'Token'}`);
    closeAllDropdowns();
}

// Simulasi Melampirkan Berkas Konten
function simulateAttachFile() {
    showToast("Mengunggah berkas eksternal dalam sandbox...");
    setTimeout(() => {
        appendLog("sistem", "Mengunggah berkas kustom: attached_context.txt (14 KB)", "info");
        showToast("Berkas berhasil dilampirkan ke konteks AI!");
    }, 800);
}

// Dialog Riwayat Perubahan Berkas
function triggerFileHistory() {
    const history = document.getElementById('file-history-overlay');
    const fileTitle = document.getElementById('history-file-title');
    if (fileTitle) {
        fileTitle.textContent = `Menampilkan rincian histori modifikasi berkas: ${currentFile}`;
    }
    if (history) history.classList.remove('hidden');
}

function closeFileHistory() {
    const history = document.getElementById('file-history-overlay');
    if (history) history.classList.add('hidden');
}

// Tambah Berkas Baru ke Penjelajah Berkas (Simulasi)
function addNewFilePrompt() {
    const name = prompt("Masukkan nama berkas baru (contoh: about.html):");
    if (!name || name.trim() === '') return;
    
    const trimmedName = name.trim();
    if (codeFiles[trimmedName] !== undefined) {
        showToast(`Berkas "${trimmedName}" sudah ada!`);
        return;
    }
    
    // Konten default berdasarkan ekstensi berkas
    let defaultContent = `<!-- Berkas: ${trimmedName} -->\n<div class="p-8 max-w-md mx-auto text-center border border-slate-200 rounded-xl bg-white shadow-premium mt-8">\n  <span class="material-symbols-outlined text-3xl text-slate-400">article</span>\n  <h2 class="text-sm font-bold text-slate-800 mt-2">${trimmedName}</h2>\n  <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">Ini adalah berkas baru di dalam workspace aktif.</p>\n</div>`;
    
    if (trimmedName.endsWith('.json')) {
        defaultContent = `{\n  "name": "${trimmedName.replace('.json', '')}",\n  "version": "1.0.0"\n}`;
    } else if (trimmedName.endsWith('.js') || trimmedName.endsWith('.ts')) {
        defaultContent = `// Berkas: ${trimmedName}\nconsole.log("${trimmedName} loaded");`;
    } else if (trimmedName.endsWith('.md')) {
        defaultContent = `# ${trimmedName}\n\nTulis isi markdown di sini.`;
    }
    
    codeFiles[trimmedName] = defaultContent;
    
    // Simpan ke status workspace aktif
    const wsNode = findWorkspaceNode(workspaceTree, activeWorkspaceId);
    if (wsNode) {
        wsNode.files = { ...codeFiles };
    }
    
    showToast(`Berkas "${trimmedName}" berhasil dibuat!`);
    appendLog("sistem", `Berkas baru ditambahkan: ${trimmedName}`, "success");
    
    renderFileExplorer();
    selectFile(trimmedName);
}

// Memuat Percakapan Simulasi dari Riwayat Samping
function loadMockConversation(type) {
    if (type.includes('profil')) {
        setQuickPrompt('Buat halaman profil minimalis');
    } else if (type.includes('tombol')) {
        setQuickPrompt('Ubah tombol menjadi modern');
    }
    showToast("Memuat isi percakapan ke prompt!");
}

// Segarkan / Reload Pratinjau Sandbox
function refreshSandbox() {
    showToast("Memuat ulang pratinjau kompilasi...");
    appendLog("jaringan", "Meminta muat ulang dokumen pratinjau...", "info");
    setTimeout(() => {
        compileSandbox();
        appendLog("penyusun", "Muat ulang dokumen index.html selesai.", "success");
        showToast("Pratinjau sandbox segar kembali!");
    }, 500);
}

// Aksi Pendukung Tambahan (Salin & Unduh)
function triggerCodeCopy() {
    const codeToCopy = codeFiles[currentFile];
    const tempText = document.createElement('textarea');
    tempText.value = codeToCopy;
    document.body.appendChild(tempText);
    tempText.select();
    document.execCommand('copy');
    document.body.removeChild(tempText);
    showToast("Kode sumber berhasil disalin!");
}

function triggerDownload() {
    showToast("Mengunduh arsip kode sumber...");
    appendLog("sistem", "Mengompresi semua berkas sumber ke dalam berkas .zip...", "info");
    setTimeout(() => {
        appendLog("penyusun", "Arsip workspace-export.zip berhasil diunduh.", "success");
        showToast("Unduhan siap!");
    }, 1000);
}

function clearCache() {
    showToast("Membersihkan memori cache...");
    appendLog("sistem", "Melakukan pembersihan berkas cache penyimpanan lokal.", "info");
    setTimeout(() => {
        appendLog("sistem", "Cache penyimpanan sandbox berhasil dibersihkan.", "success");
        showToast("Cache lokal dibersihkan!");
    }, 700);
}

function showToast(text) {
    const toastEl = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (!toastEl || !toastText) return;
    toastText.textContent = text;
    toastEl.classList.remove('translate-y-[-100px]', 'opacity-0');
    toastEl.classList.add('translate-y-0', 'opacity-100');

    // Gunakan id unik pembantu timeout untuk mencegah overlap
    if (window.toastTimeoutId) {
        clearTimeout(window.toastTimeoutId);
    }
    window.toastTimeoutId = setTimeout(() => {
        toastEl.classList.add('translate-y-[-100px]', 'opacity-0');
        toastEl.classList.remove('translate-y-0', 'opacity-100');
    }, 2500);
}
