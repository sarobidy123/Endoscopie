(() => {
  const routeMap = {
    SCREEN_101: '../tableau_de_bord_prototype_interactif/code.html',
    SCREEN_75: '../fil_de_prescription_prototype_interactif/code.html',
    SCREEN_109: '../agenda_prototype_interactif/code.html',
    SCREEN_30: '../liste_patients_menu_check_list_actif/code.html',
    SCREEN_116: '../rapport_prototype_interactif/code.html',
    SCREEN_125: '../archives_prototype_interactif/code.html',
    SCREEN_67: '../checklist_avant_prototype_interactif/code.html',
    SCREEN_71: '../checklist_avant_prototype_interactif/code.html',
    SCREEN_102: '../checklist_apr_s_prototype_interactif/code.html',
    SCREEN_130: '../patient_dossier_interactif/code.html',
    SCREEN_74: '../planification_de_l_examen_harmonis_e_fran_ais/code.html',
    SCREEN_113: '../demande_de_cpa_fid_le_l_image/code.html'
  };

  const routeToScreenId = Object.fromEntries(
    Object.entries(routeMap).map(([screenId, route]) => [new URL(route, window.location.href).pathname.replace(/\\/g, '/'), screenId])
  );

  const sidebarScreenByPageScreen = {
    SCREEN_71: 'SCREEN_30',
    SCREEN_102: 'SCREEN_30'
  };

  const headerConfigByPageScreen = {
    SCREEN_101: {
      title: 'Tableau de bord',
      subtitle: 'Vue globale du service',
      icon: 'dashboard'
    },
    SCREEN_75: {
      title: 'Fil de prescription',
      subtitle: 'Demandes et planification',
      icon: 'medication'
    },
    SCREEN_109: {
      title: 'Agenda / Rendez-vous',
      subtitle: 'Planning des examens',
      icon: 'calendar_month'
    },
    SCREEN_30: {
      title: 'Check-lists',
      subtitle: 'Suivi des étapes de préparation',
      icon: 'checklist'
    },
    SCREEN_116: {
      title: 'Rapport',
      subtitle: 'Validation et consultation',
      icon: 'description'
    },
    SCREEN_125: {
      title: 'Archives',
      subtitle: 'Historique et dossiers',
      icon: 'inventory_2'
    },
    SCREEN_67: {
      title: 'Dossier patient',
      subtitle: 'Synthèse clinique',
      icon: 'person'
    },
    SCREEN_130: {
      title: 'Dossier patient',
      subtitle: 'Synthèse clinique',
      icon: 'person'
    },
    SCREEN_71: {
      title: 'Check-list avant',
      subtitle: 'Phase 1 / Avant l\'endoscopie',
      icon: 'fact_check'
    },
    SCREEN_102: {
      title: 'Check-list après',
      subtitle: 'Phase 2 / Après l\'endoscopie',
      icon: 'fact_check'
    },
    SCREEN_74: {
      title: 'Planification de l\'examen',
      subtitle: 'Organisation du parcours',
      icon: 'event'
    },
    SCREEN_113: {
      title: 'Demande CPA / image',
      subtitle: 'Documents et images associés',
      icon: 'assignment_add'
    }
  };

  const defaultHeaderConfig = headerConfigByPageScreen.SCREEN_101;

  const currentPath = window.location.pathname.replace(/\\/g, '/');

  const ensureShellStyles = () => {
    if (document.getElementById('endoscopy-shell-styles')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'endoscopy-shell-styles';
    style.textContent = `
      body {
        background: #f9f9fd;
        color: #191c1e;
        font-family: Inter, sans-serif;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: Manrope, sans-serif;
      }

      #endoscopy-shared-sidebar a[data-endoscopy-active="true"],
      aside a[data-endoscopy-active="true"] {
        background: #ffffff !important;
        color: #00478d !important;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
      }

      #endoscopy-shared-sidebar a[data-endoscopy-active="true"] span,
      aside a[data-endoscopy-active="true"] span {
        color: #00478d !important;
      }

      #endoscopy-shared-sidebar a[data-endoscopy-active="true"]:hover,
      aside a[data-endoscopy-active="true"]:hover {
        background: #ffffff !important;
        color: #00478d !important;
      }

      #endoscopy-shared-header {
        background: rgba(249, 249, 253, 0.8) !important;
        backdrop-filter: blur(24px);
        border-bottom: 1px solid rgba(194, 198, 212, 0.2);
      }

      main {
        padding-top: 4rem !important;
      }
    `;
    document.head.appendChild(style);
  };

  const sidebarActiveClasses = ['bg-white', 'dark:bg-slate-800', 'text-blue-700', 'dark:text-blue-400', 'shadow-sm'];
  const sidebarInactiveClasses = ['text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-200', 'dark:hover:bg-slate-800/80'];

  const sharedSidebarHTML = `<!-- SideNavBar (shared) -->
<aside id="endoscopy-shared-sidebar" class="fixed left-0 top-0 h-full w-64 z-50 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-xl surface-container-low no-border flex flex-col p-4 space-y-2">
  <div class="flex items-center gap-3 mb-8 px-2">
    <div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
      <span class="material-symbols-outlined text-white" data-icon="clinical_notes">clinical_notes</span>
    </div>
    <div>
      <h1 class="font-manrope font-extrabold text-blue-800 dark:text-blue-300 leading-tight">Unité Endoscopie</h1>
      <p class="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">personnel de service endoscopie</p>
    </div>
  </div>
  <nav class="flex-1 space-y-1">
    <a data-screen="SCREEN_101" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all font-inter text-sm font-semibold" href="{{DATA:SCREEN:SCREEN_101}}">
      <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span class="">Tableau de bord</span>
    </a>
    <a data-screen="SCREEN_75" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all font-inter text-sm font-semibold" href="{{DATA:SCREEN:SCREEN_75}}">
      <span class="material-symbols-outlined" data-icon="medication">medication</span>
      <span class="">Fil de prescription</span>
    </a>
    <a data-screen="SCREEN_109" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all font-inter text-sm font-semibold" href="{{DATA:SCREEN:SCREEN_109}}">
      <span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
      <span class="">Agenda / Rendez-vous</span>
    </a>
    <div class="space-y-1">
      <a data-screen="SCREEN_30" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all font-inter text-sm font-semibold" href="{{DATA:SCREEN:SCREEN_30}}">
        <span class="material-symbols-outlined" data-icon="checklist">checklist</span>
        <span class="">Check-lists</span>
      </a>
      <div class="ml-4 mt-1 flex flex-col space-y-1">
        <a data-screen="SCREEN_71" class="flex items-center gap-3 text-slate-500 dark:text-slate-400 p-2 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all text-sm font-medium" href="{{DATA:SCREEN:SCREEN_71}}">
          <span class="material-symbols-outlined" data-icon="fact_check">fact_check</span>
          <span class="">Check-list avant</span>
        </a>
        <a data-screen="SCREEN_102" class="flex items-center gap-3 text-slate-500 dark:text-slate-400 p-2 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all text-sm font-medium" href="{{DATA:SCREEN:SCREEN_102}}">
          <span class="material-symbols-outlined" data-icon="fact_check">fact_check</span>
          <span class="">Check-list après</span>
        </a>
      </div>
    </div>
    <a data-screen="SCREEN_116" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all font-inter text-sm font-semibold" href="{{DATA:SCREEN:SCREEN_116}}">
      <span class="material-symbols-outlined" data-icon="description">description</span>
      <span>Rapport</span>
    </a>
    <a data-screen="SCREEN_125" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-200 dark:hover:bg-slate-800/80 rounded-lg transition-all font-inter text-sm font-semibold" href="{{DATA:SCREEN:SCREEN_125}}">
      <span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
      <span>Archives</span>
    </a>
  </nav>
</aside>`;

  const buildSharedHeaderHTML = (pageScreen) => {
    const headerConfig = headerConfigByPageScreen[pageScreen] || defaultHeaderConfig;

    return `<!-- TopNavBar (shared) -->
<header id="endoscopy-shared-header" class="fixed top-0 left-64 right-0 flex justify-between items-center px-8 h-16 z-40">
  <div class="flex items-center gap-4 min-w-0">
    <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
      <span class="material-symbols-outlined" data-icon="${headerConfig.icon}">${headerConfig.icon}</span>
    </div>
    <div class="min-w-0">
      <p class="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Unité Endoscopie</p>
      <h2 class="text-lg font-semibold text-on-surface leading-tight truncate">${headerConfig.title}</h2>
      <p class="text-[10px] text-on-surface-variant truncate">${headerConfig.subtitle}</p>
    </div>
  </div>
  <div class="flex items-center gap-6">
    <div class="relative hidden md:block w-96">
      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
      <input class="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60" placeholder="Search patient, procedure, or medical ID..." type="text" />
    </div>
    <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors text-on-surface-variant">
      <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
    </button>
    <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors text-on-surface-variant">
      <span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
    </button>
    <div class="h-8 w-px bg-outline-variant/30 mx-2"></div>
    <div class="flex items-center gap-3">
      <div class="text-right hidden sm:block">
        <p class="text-xs font-bold text-on-surface">Dr. Claire Durand</p>
        <p class="text-[10px] text-on-surface-variant">Senior Gastroenterologist</p>
      </div>
      <img alt="Medical Practitioner Profile" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10" data-alt="Professional headshot of a female doctor in a white clinical coat, soft hospital background lighting, clean medical portrait style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpCPoa1-xQGST0tn5uvNG8134TqeV3_8_RU9bbK23k9_a-IA7of8ExfMl0NqQrjE_4RO2eQYxrkH8_NqPgmF03i04surbHl6Q8fj5_qVWSDQUYNOKPNJUyABhiHVDIwPKAKtZYHhgJBRx-oSPtXjWZMyPZC8BSju76cjhwmaQbPmV6fuebz5Dk4yJmfG-vtiGqtSB6TLJsF86Bt5VhwO4e557WouBXqg3pz7SqWMcd1hkQffQKG_VRHcpJhEYWwqlSiYihBZZHTWU" />
    </div>
  </div>
</header>`;
  };

  const injectSharedHeader = (pageScreen) => {
    const sharedHeader = document.getElementById('endoscopy-shared-header');
    const bodyHeader = document.querySelector('body > header');
    const headerHTML = buildSharedHeaderHTML(pageScreen);

    if (sharedHeader) {
      sharedHeader.outerHTML = headerHTML;
      return;
    }

    if (bodyHeader) {
      bodyHeader.outerHTML = headerHTML;
      return;
    }

    const main = document.querySelector('main');
    if (main) {
      main.insertAdjacentHTML('beforebegin', headerHTML);
      return;
    }

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  };

  const setSidebarActiveState = (activeScreenId) => {
    const sidebarLinks = document.querySelectorAll('#endoscopy-shared-sidebar a[data-screen]');
    sidebarLinks.forEach((anchor) => {
      const isActive = anchor.dataset.screen === activeScreenId;
      if (isActive) {
        anchor.setAttribute('aria-current', 'page');
      } else {
        anchor.removeAttribute('aria-current');
      }
      anchor.setAttribute('data-endoscopy-active', isActive ? 'true' : 'false');

      anchor.classList.remove(...sidebarActiveClasses, ...sidebarInactiveClasses);

      if (isActive) {
        anchor.classList.add(...sidebarActiveClasses);
      } else {
        anchor.classList.add(...sidebarInactiveClasses);
      }
    });
  };

  const injectSharedSidebar = () => {
    if (document.getElementById('endoscopy-shared-sidebar')) return;

    const existingAside = document.querySelector('aside');
    try {
      if (existingAside) {
        existingAside.outerHTML = sharedSidebarHTML;
      } else {
        document.body.insertAdjacentHTML('afterbegin', sharedSidebarHTML);
      }
    } catch (e) {
      // fallback: try simple insertion
      document.body.insertAdjacentHTML('afterbegin', sharedSidebarHTML);
    }
  };

  const resolveTemplate = (value) => value.replace(/\{\{DATA:SCREEN:(SCREEN_\d+)\}\}/g, (_, screenId) => routeMap[screenId] || '#');

  const applyRoutes = () => {
    ensureShellStyles();
    const pageScreen = (document.body && document.body.dataset && document.body.dataset.screen) || null;
    injectSharedHeader(pageScreen);
    injectSharedSidebar();

    document.querySelectorAll('a[href*="{{DATA:SCREEN:"]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (href) {
        const resolvedHref = resolveTemplate(href);
        anchor.setAttribute('href', resolvedHref);

        const resolvedPath = new URL(resolvedHref, window.location.href).pathname.replace(/\\/g, '/');
        if (resolvedPath === currentPath) {
          anchor.setAttribute('aria-current', 'page');
          anchor.setAttribute('data-endoscopy-active', 'true');
        }
      }
    });

    document.querySelectorAll('[onclick*="{{DATA:SCREEN:"]').forEach((element) => {
      const onclick = element.getAttribute('onclick') || '';
      const match = onclick.match(/\{\{DATA:SCREEN:(SCREEN_\d+)\}\}/);
      if (!match) {
        return;
      }

      const target = routeMap[match[1]];
      if (!target) {
        return;
      }

      element.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = target;
      });
      element.removeAttribute('onclick');

      if (element.tagName === 'A') {
        element.setAttribute('href', target);
      }
    });

    document.querySelectorAll('a[href]').forEach((anchor) => {
      if (anchor.getAttribute('aria-current') === 'page') {
        anchor.setAttribute('data-endoscopy-active', 'true');
      }
    });

    const activeScreenId = sidebarScreenByPageScreen[pageScreen] || (pageScreen && routeMap[pageScreen] ? pageScreen : routeToScreenId[currentPath]);
    setSidebarActiveState(activeScreenId || 'SCREEN_101');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyRoutes);
  } else {
    applyRoutes();
  }
})();
