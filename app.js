// Application State
let allStatements = [];
let filteredStatements = [];
let currentTab = 'sih'; // 'sih' or 'isro'
let bookmarks = [];

// Filter States
let searchQuery = '';
let categoryFilter = ''; // 'Software', 'Hardware', or ''
let themeFilter = '';
let orgFilter = '';
let bookmarksOnly = false;
let sortBy = 'id-asc';
let expandedId = null;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const themeSelect = document.getElementById('themeSelect');
const orgSelect = document.getElementById('orgSelect');
const sortSelect = document.getElementById('sortSelect');
const activeFiltersBar = document.getElementById('activeFiltersBar');
const resultsCount = document.getElementById('resultsCount');
const psList = document.getElementById('psList');
const loader = document.getElementById('loader');
const emptyState = document.getElementById('emptyState');

// Stats Counters
const statTotalCount = document.getElementById('statTotalCount');
const statSoftwareCount = document.getElementById('statSoftwareCount');
const statHardwareCount = document.getElementById('statHardwareCount');
const statBookmarksCount = document.getElementById('statBookmarksCount');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
  updateBookmarksState();
  loadData();
  setupEventListeners();
  updateStatsCounters();
});

// Load Preloaded Data from data.js
function loadData() {
  try {
    const dataRef = currentTab === 'sih' ? (typeof SIH_DATA !== 'undefined' ? SIH_DATA : undefined) : (typeof ISRO_DATA !== 'undefined' ? ISRO_DATA : undefined);
    if (dataRef === undefined) {
      throw new Error(`Data for tab '${currentTab}' is not defined. Make sure data.js is loaded properly.`);
    }
    allStatements = cleanData(dataRef);
    initializeDropdowns();
    applyFilters();
    
    // Hide loader and show list
    loader.style.display = 'none';
    psList.style.display = 'flex';
    
    // Handle deep link hash routing after render
    handleInitialHashRouting();
  } catch (error) {
    console.error('Error loading preloaded data:', error);
    showErrorState();
  }
}

// Update Bookmarks Local Reference based on active tab
function updateBookmarksState() {
  const key = currentTab === 'sih' ? 'sih2025_bookmarks' : 'isro2026_bookmarks';
  bookmarks = JSON.parse(localStorage.getItem(key)) || [];
}

// Tab Switching Handler
window.switchTab = function(tab) {
  if (currentTab === tab) return;
  
  currentTab = tab;
  expandedId = null; // collapse any active card
  
  const tabSIH = document.getElementById('tabSIH');
  const tabISRO = document.getElementById('tabISRO');
  const logoText = document.querySelector('.logo-text');
  
  if (currentTab === 'sih') {
    tabSIH.classList.add('active', 'sih');
    tabISRO.classList.remove('active', 'isro');
    if (logoText) logoText.textContent = "SIH 2025 Portal";
    
    document.querySelector('header h1').textContent = "Smart India Hackathon 2025";
    document.querySelector('header .subtitle').textContent = "Search, filter, and shortlist the official problem statements with ease. Tap on any statement to view detailed descriptions, departments, and reference material.";
  } else {
    tabISRO.classList.add('active', 'isro');
    tabSIH.classList.remove('active', 'sih');
    if (logoText) logoText.textContent = "ISRO BAH 2026 Portal";
    
    document.querySelector('header h1').textContent = "ISRO Antariksh Hackathon 2026";
    document.querySelector('header .subtitle').textContent = "Search, filter, and analyze real-world space technology and remote sensing challenges from the Indian Space Research Organisation.";
  }
  
  // Update local bookmarks key
  updateBookmarksState();
  
  // Clear and reset form filters quietly
  searchQuery = '';
  categoryFilter = '';
  themeFilter = '';
  orgFilter = '';
  bookmarksOnly = false;
  
  searchInput.value = '';
  themeSelect.value = '';
  orgSelect.value = '';
  
  document.getElementById('btnSoftware').classList.remove('active', 'software');
  document.getElementById('btnHardware').classList.remove('active', 'hardware');
  document.getElementById('btnStarred').classList.remove('active', 'starred');
  
  // Reload the dataset (which automatically triggers initialisedropdowns and applyfilters)
  loadData();
};

// Clean and Validate Data
function cleanData(data) {
  return data
    .filter(row => row.Problem_Statement_ID && row.Problem_Statement_Title)
    .map(row => ({
      Problem_Statement_ID: row.Problem_Statement_ID.trim(),
      Problem_Statement_Title: row.Problem_Statement_Title.trim(),
      Category: row.Category ? row.Category.trim() : 'Software',
      Theme: row.Theme ? row.Theme.trim() : 'General',
      Organization: row.Organization ? row.Organization.trim() : 'N/A',
      Department: row.Department ? row.Department.trim() : 'N/A',
      Description: row.Description ? row.Description.trim() : '',
      Dataset_Links: row.Dataset_Links ? row.Dataset_Links.trim() : '',
      Youtube_Links: row.Youtube_Links ? row.Youtube_Links.trim() : ''
    }));
}

// Populate Filter Dropdowns dynamically
function initializeDropdowns() {
  // Clear previous options except the default 'All' select option
  themeSelect.innerHTML = '<option value="">All Themes</option>';
  orgSelect.innerHTML = '<option value="">All Organizations</option>';
  
  const themes = new Set();
  const orgs = new Set();
  
  allStatements.forEach(item => {
    if (item.Theme) themes.add(item.Theme);
    if (item.Organization) orgs.add(item.Organization);
  });
  
  // Sort and populate Themes
  Array.from(themes).sort().forEach(theme => {
    const option = document.createElement('option');
    option.value = theme;
    option.textContent = theme;
    themeSelect.appendChild(option);
  });
  
  // Sort and populate Organizations
  Array.from(orgs).sort().forEach(org => {
    const option = document.createElement('option');
    option.value = org;
    option.textContent = org;
    orgSelect.appendChild(option);
  });
}

// Event Listeners setup
function setupEventListeners() {
  // Real-time Search Input with simple debounce fallback
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    }, 200);
  });

  // Dropdown Changes
  themeSelect.addEventListener('change', (e) => {
    themeFilter = e.target.value;
    applyFilters();
  });

  orgSelect.addEventListener('change', (e) => {
    orgFilter = e.target.value;
    applyFilters();
  });

  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    applyFilters();
  });

  // Direct location hash listener for deep link sharing
  window.addEventListener('hashchange', handleHashChange);
}

// Process Filters & Sorting
function applyFilters() {
  filteredStatements = allStatements.filter(item => {
    // 1. Category Filter
    if (categoryFilter && item.Category !== categoryFilter) return false;
    
    // 2. Theme Filter
    if (themeFilter && item.Theme !== themeFilter) return false;
    
    // 3. Organization Filter
    if (orgFilter && item.Organization !== orgFilter) return false;
    
    // 4. Bookmarks Only
    if (bookmarksOnly && !bookmarks.includes(item.Problem_Statement_ID)) return false;
    
    // 5. Search Text Filter
    if (searchQuery) {
      const matchText = `${item.Problem_Statement_ID} ${item.Problem_Statement_Title} ${item.Theme} ${item.Organization} ${item.Description} ${item.Department}`.toLowerCase();
      if (!matchText.includes(searchQuery)) return false;
    }
    
    return true;
  });

  // Apply Sorting
  sortData();
  
  // Render output
  renderList();
  renderActiveFilters();
  updateStatsCounters();
}

// Sort filtered data
function sortData() {
  if (sortBy === 'id-asc') {
    filteredStatements.sort((a, b) => parseInt(a.Problem_Statement_ID) - parseInt(b.Problem_Statement_ID));
  } else if (sortBy === 'id-desc') {
    filteredStatements.sort((a, b) => parseInt(b.Problem_Statement_ID) - parseInt(a.Problem_Statement_ID));
  } else if (sortBy === 'title-asc') {
    filteredStatements.sort((a, b) => a.Problem_Statement_Title.localeCompare(b.Problem_Statement_Title));
  }
}

// Render Results to UI
function renderList() {
  // Update Results Count Indicator
  resultsCount.innerHTML = `Showing <span>${filteredStatements.length}</span> of <span>${allStatements.length}</span> statements`;

  if (filteredStatements.length === 0) {
    psList.style.display = 'none';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';
  psList.style.display = 'flex';
  
  psList.innerHTML = filteredStatements.map(item => {
    const isBookmarked = bookmarks.includes(item.Problem_Statement_ID);
    const isExpanded = expandedId === item.Problem_Statement_ID;
    const catClass = item.Category.toLowerCase() === 'software' ? 'software-card' : 'hardware-card';
    
    // Prepare external link and image layout
    let linksHtml = '';
    let imagesHtml = '';
    
    if (item.Dataset_Links) {
      const urls = item.Dataset_Links.split(',').map(url => url.trim()).filter(url => url);
      const isImage = (url) => /\.(webp|png|jpg|jpeg|gif|svg)$/i.test(url.split('?')[0]);
      
      const imageUrls = urls.filter(isImage);
      const standardUrls = urls.filter(url => !isImage(url));
      
      if (imageUrls.length > 0) {
        imagesHtml = `
          <div class="ps-detail-section">
            <div class="ps-section-title">
              <i class="fa-solid fa-image"></i> Problem Diagrams & Workflows
            </div>
            <div class="ps-image-gallery" style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 0.5rem;">
              ${imageUrls.map(url => `
                <div class="ps-image-wrapper" style="border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; background: rgba(0,0,0,0.25); box-shadow: var(--shadow-glow-soft); max-width: 100%;">
                  <img src="${url}" alt="Problem Statement Diagram" style="width: 100%; height: auto; display: block; cursor: zoom-in;" loading="lazy" onclick="window.open('${url}', '_blank')">
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
      
      if (standardUrls.length > 0) {
        linksHtml += standardUrls.map(url => `
          <a href="${url}" target="_blank" rel="noopener" class="ps-link-btn dataset-btn">
            <i class="fa-solid fa-database"></i> Reference Dataset
          </a>
        `).join('');
      }
    }
    
    if (item.Youtube_Links) {
      linksHtml += `<a href="${item.Youtube_Links}" target="_blank" rel="noopener" class="ps-link-btn youtube-btn">
                     <i class="fa-brands fa-youtube"></i> Explainer Video
                   </a>`;
    }
    
    return `
      <div class="ps-card ${catClass} ${isExpanded ? 'expanded' : ''}" id="card-${item.Problem_Statement_ID}">
        <div class="ps-card-header" onclick="toggleCard('${item.Problem_Statement_ID}')">
          <div class="ps-header-left">
            <span class="ps-id-badge">${item.Problem_Statement_ID}</span>
            <span class="ps-category-tag">${item.Category}</span>
          </div>
          <div class="ps-header-main">
            <div class="ps-meta-row">
              <span class="ps-theme-badge">${item.Theme}</span>
            </div>
            <h3 class="ps-title">${item.Problem_Statement_Title}</h3>
            <div class="ps-org">
              <i class="fa-solid fa-building-ngo"></i> ${item.Organization}
            </div>
          </div>
          <div class="ps-header-right" onclick="event.stopPropagation();">
            <button class="btn-icon-action" onclick="copyShareLink('${item.Problem_Statement_ID}')" title="Copy Direct Link to Share">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button class="btn-icon-action bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${item.Problem_Statement_ID}')" title="${isBookmarked ? 'Remove Bookmark' : 'Save to Bookmarks'}">
              <i class="fa-solid fa-star"></i>
            </button>
            <div class="expand-chevron" onclick="toggleCard('${item.Problem_Statement_ID}'); event.stopPropagation();">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="ps-card-body" style="max-height: ${isExpanded ? '2000px' : '0px'}">
          <div class="ps-body-content">
            <!-- Full Description -->
            <div class="ps-detail-section">
              <div class="ps-section-title">
                <i class="fa-solid fa-circle-info"></i> Detailed Problem Description
              </div>
              <div class="ps-description-text">
                ${formatDescription(item.Description)}
              </div>
            </div>
            
            <!-- Reference Images Gallery (if any) -->
            ${imagesHtml}
            
            <!-- Metadata Grid -->
            <div class="ps-meta-details-grid">
              <div class="ps-meta-item">
                <span class="ps-meta-item-label">Nodal Department / Ministry</span>
                <span class="ps-meta-item-value">${item.Department || 'N/A'}</span>
              </div>
              <div class="ps-meta-item">
                <span class="ps-meta-item-label">Organization</span>
                <span class="ps-meta-item-value">${item.Organization}</span>
              </div>
            </div>

            <!-- Links Row -->
            ${linksHtml ? `
              <div class="ps-detail-section">
                <div class="ps-section-title">
                  <i class="fa-solid fa-link"></i> Supporting Resources
                </div>
                <div class="ps-links-grid">
                  ${linksHtml}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Convert Description Markdown/Text structure into beautiful HTML lists/headers
function formatDescription(text) {
  if (!text) return '<p>No description provided.</p>';
  
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  
  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    // Identify list formats starting with •, *, -, or numbered lists
    const isListItem = line.startsWith('•') || line.startsWith('*') || line.startsWith('-') || /^\d+[\.\)]\s/.test(line);
    
    if (isListItem) {
      if (!inList) {
        html += '<ul style="margin-left: 1.25rem; margin-bottom: 0.75rem; list-style-type: disc;">';
        inList = true;
      }
      // Remove bullet prefixes
      const content = line.replace(/^[•\*\-\s]+|^\d+[\.\)]\s+/, '');
      html += `<li style="margin-bottom: 0.35rem; color: #cbd5e1;">${content}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      
      // Highlight section labels ending in colons or structural headings
      const lowerLine = line.toLowerCase();
      if (line.endsWith(':') || 
          lowerLine.startsWith('background') || 
          lowerLine.startsWith('problem statement') || 
          lowerLine.startsWith('expected solution') || 
          lowerLine.startsWith('problem description') || 
          lowerLine.startsWith('technical scope') || 
          lowerLine.startsWith('objective') || 
          lowerLine.startsWith('outcomes') || 
          lowerLine.startsWith('impact')) {
        html += `<h4 style="margin: 1.25rem 0 0.5rem 0; font-family: var(--font-family-title); color: #fff; font-size: 0.95rem; font-weight: 600; text-transform: capitalize; border-left: 3px solid #3b82f6; padding-left: 0.5rem;">${line}</h4>`;
      } else {
        html += `<p style="margin-bottom: 0.75rem; color: #cbd5e1;">${line}</p>`;
      }
    }
  }
  
  if (inList) {
    html += '</ul>';
  }
  
  return html;
}

// Render active filter badges
function renderActiveFilters() {
  const filters = [];
  
  if (categoryFilter) {
    filters.push({
      label: `Category: ${categoryFilter}`,
      clear: () => toggleCategoryFilter('')
    });
  }
  if (themeFilter) {
    filters.push({
      label: `Theme: ${themeFilter}`,
      clear: () => {
        themeFilter = '';
        themeSelect.value = '';
        applyFilters();
      }
    });
  }
  if (orgFilter) {
    filters.push({
      label: `Org: ${orgFilter}`,
      clear: () => {
        orgFilter = '';
        orgSelect.value = '';
        applyFilters();
      }
    });
  }
  if (bookmarksOnly) {
    filters.push({
      label: `Bookmarks Only`,
      clear: () => toggleBookmarksOnly()
    });
  }
  if (searchQuery) {
    filters.push({
      label: `Search: "${searchQuery}"`,
      clear: () => {
        searchQuery = '';
        searchInput.value = '';
        applyFilters();
      }
    });
  }

  if (filters.length === 0) {
    activeFiltersBar.style.display = 'none';
    activeFiltersBar.innerHTML = '';
    return;
  }

  activeFiltersBar.style.display = 'flex';
  activeFiltersBar.innerHTML = `
    ${filters.map((filter, index) => `
      <div class="active-filter-pill">
        <span>${filter.label}</span>
        <button onclick="clearFilterItem(${index})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('')}
    <button class="btn-clear-all" onclick="clearFilters()">Clear All</button>
  `;
  
  // Store click actions globally to access via index safely
  window.activeFilterClears = filters.map(f => f.clear);
}

// Clear individual filter by pill action
window.clearFilterItem = function(index) {
  if (window.activeFilterClears && window.activeFilterClears[index]) {
    window.activeFilterClears[index]();
  }
};

// Reset all Filters
window.clearFilters = function() {
  searchQuery = '';
  categoryFilter = '';
  themeFilter = '';
  orgFilter = '';
  bookmarksOnly = false;
  
  // Reset Form Inputs
  searchInput.value = '';
  themeSelect.value = '';
  orgSelect.value = '';
  
  // Update Buttons UI
  document.getElementById('btnSoftware').classList.remove('active');
  document.getElementById('btnHardware').classList.remove('active');
  document.getElementById('btnStarred').classList.remove('active');
  
  applyFilters();
};

// Toggle Category (Software / Hardware) filter
window.toggleCategoryFilter = function(category) {
  const btnSW = document.getElementById('btnSoftware');
  const btnHW = document.getElementById('btnHardware');
  
  if (categoryFilter === category || category === '') {
    categoryFilter = '';
    btnSW.classList.remove('active');
    btnHW.classList.remove('active');
  } else {
    categoryFilter = category;
    if (category === 'Software') {
      btnSW.classList.add('active', 'software');
      btnHW.classList.remove('active');
    } else {
      btnHW.classList.add('active', 'hardware');
      btnSW.classList.remove('active');
    }
  }
  applyFilters();
};

// Toggle Bookmarks Only View
window.toggleBookmarksOnly = function() {
  const btnStarred = document.getElementById('btnStarred');
  bookmarksOnly = !bookmarksOnly;
  
  if (bookmarksOnly) {
    btnStarred.classList.add('active', 'starred');
  } else {
    btnStarred.classList.remove('active');
  }
  applyFilters();
};

// Toggle Card details expanded state
window.toggleCard = function(id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;
  
  const body = card.querySelector('.ps-card-body');
  
  if (expandedId === id) {
    // Collapsing current
    expandedId = null;
    card.classList.remove('expanded');
    body.style.maxHeight = '0px';
  } else {
    // Collapse previously expanded card if exists
    if (expandedId) {
      const prevCard = document.getElementById(`card-${expandedId}`);
      if (prevCard) {
        prevCard.classList.remove('expanded');
        prevCard.querySelector('.ps-card-body').style.maxHeight = '0px';
      }
    }
    
    // Expand clicked card
    expandedId = id;
    card.classList.add('expanded');
    body.style.maxHeight = '2000px';
  }
};

// Toggle Star/Bookmark status
window.toggleBookmark = function(id) {
  const index = bookmarks.indexOf(id);
  if (index === -1) {
    bookmarks.push(id);
  } else {
    bookmarks.splice(index, 1);
  }
  
  const key = currentTab === 'sih' ? 'sih2025_bookmarks' : 'isro2026_bookmarks';
  localStorage.setItem(key, JSON.stringify(bookmarks));
  
  // Re-render only modified card components & update badges
  const btn = document.querySelector(`#card-${id} .bookmark-btn`);
  if (btn) {
    btn.classList.toggle('bookmarked');
  }
  
  updateStatsCounters();
  
  // If in Bookmarks Only mode, refresh display
  if (bookmarksOnly) {
    applyFilters();
  }
};

// Update Stats Dashboard counters
function updateStatsCounters() {
  // Total counts in source list
  statTotalCount.textContent = allStatements.length;
  
  const swCount = allStatements.filter(item => item.Category === 'Software').length;
  statSoftwareCount.textContent = swCount;
  
  const hwCount = allStatements.filter(item => item.Category === 'Hardware').length;
  statHardwareCount.textContent = hwCount;
  
  statBookmarksCount.textContent = bookmarks.length;
}

// Copy direct page-link to statement to clipboard
window.copyShareLink = function(id) {
  const shareUrl = `${window.location.origin}${window.location.pathname}#${id}`;
  
  navigator.clipboard.writeText(shareUrl).then(() => {
    const toast = document.getElementById('copyToast');
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy link:', err);
  });
};

// Deep Linking Routing Logic (Checks location hash on initial load)
function handleInitialHashRouting() {
  const hash = window.location.hash.substring(1).trim();
  if (hash) {
    scrollToAndExpandCard(hash);
  }
}

// Handle hash changes on runtime
function handleHashChange() {
  const hash = window.location.hash.substring(1).trim();
  if (hash) {
    scrollToAndExpandCard(hash);
  }
}

// Expand target card and scroll it into visible window frame
function scrollToAndExpandCard(id) {
  // Search for statement in current filters. If not found, clear filters so user can see it!
  const exists = allStatements.some(item => item.Problem_Statement_ID === id);
  if (!exists) return;
  
  const inFilteredList = filteredStatements.some(item => item.Problem_Statement_ID === id);
  if (!inFilteredList) {
    clearFilters(); // Reset active search/filters to ensure target is visible
  }
  
  // Delay slightly to let layout settle / render finish
  setTimeout(() => {
    const card = document.getElementById(`card-${id}`);
    if (card) {
      // Toggle card open
      expandedId = id;
      card.classList.add('expanded');
      card.querySelector('.ps-card-body').style.maxHeight = '2000px';
      
      // Scroll into view centering the card
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add brief focus flash highlight
      card.classList.add('highlighted');
      setTimeout(() => {
        card.classList.remove('highlighted');
      }, 1500);
    }
  }, 100);
}

// Error state fallback
function showErrorState() {
  loader.style.display = 'none';
  emptyState.style.display = 'flex';
  emptyState.querySelector('h3').textContent = 'Error loading statements';
  emptyState.querySelector('p').textContent = 'Something went wrong while parsing the data file. Please ensure the CSV is properly formatted and exists in the directory.';
  emptyState.querySelector('button').style.display = 'none';
}
