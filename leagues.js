const LEAGUES_HTML = `
<div id="view-matches" style="display: none;">
    <div class="mb-6">
        <h2 class="text-2xl font-black flex items-center gap-3"><i data-lucide="grid" class="text-blue-400"></i> GRILLE COMPLÈTE</h2>
    </div>

    <div class="flex overflow-x-auto no-scrollbar gap-3 mb-8 border-b border-slate-700/50 pb-3 sticky top-[85px] z-40 glass pt-3 rounded-t-xl px-2">
        <button onclick="filterLeague('all')" class="league-tab active pb-3 px-4 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap" id="tab-all">
            Tous
        </button>

        <button onclick="filterLeague('GER')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-GER">
            🇩🇪 Allemagne
        </button>
        <button onclick="filterLeague('ESP')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-ESP">
            🇪🇸 Espagne
        </button>
        <button onclick="filterLeague('ITA')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-ITA">
            🇮🇹 Italie
        </button>
        <button onclick="filterLeague('FRA')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-FRA">
            🇫🇷 France
        </button>
        
        <button onclick="filterLeague('NED')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-NED">
            🇳🇱 Pays-Bas
        </button>
        <button onclick="filterLeague('POR')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-POR">
            🇵🇹 Portugal
        </button>
        <button onclick="filterLeague('TUR')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-TUR">
            🇹🇷 Turquie
        </button>
        <button onclick="filterLeague('BEL')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-BEL">
            🇧🇪 Belgique
        </button>

        <button onclick="filterLeague('SCO')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-SCO">
            🏴󠁧󠁢󠁳󠁣󠁴󠁿 Écosse
        </button>
        <button onclick="filterLeague('DEN')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-DEN">
            🇩🇰 Danemark
        </button>
        <button onclick="filterLeague('CRO')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-CRO">
            🇭🇷 Croatie
        </button>
        <button onclick="filterLeague('POL')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-POL">
            🇵🇱 Pologne
        </button>
        <button onclick="filterLeague('ROU')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-ROU">
            🇷🇴 Roumanie
        </button>

        <button onclick="filterLeague('SAU')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-SAU">
            🇸🇦 Arabie S.
        </button>
        <button onclick="filterLeague('SUI')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-SUI">
            🇨🇭 Suisse
        </button>
        <button onclick="filterLeague('CZE')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-CZE">
            🇨🇿 Rép. Tchèque
        </button>
        <button onclick="filterLeague('AUT')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-AUT">
            🇦🇹 Autriche
        </button>
        <button onclick="filterLeague('GRE')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-GRE">
            🇬🇷 Grèce
        </button>
        <button onclick="filterLeague('CYP')" class="league-tab pb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all whitespace-nowrap" id="tab-CYP">
            🇨🇾 Chypre
        </button>
    </div>

    <div id="match-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    </div>
</div>
`;
