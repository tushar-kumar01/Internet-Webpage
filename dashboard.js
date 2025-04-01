document.addEventListener('DOMContentLoaded', () => {
    // Create the dashboard container
    const dashboard = document.createElement('div');
    dashboard.classList.add('dashboard', 'bg-light', 'p-3', 'mb-4', 'rounded');
  
    // Add the dashboard content
    dashboard.innerHTML = `
      <h2 class="text-center mb-4">Menu</h2>
      <div class="list-group">
        <a href="index.html" class="list-group-item list-group-item-action">
          <i class="fas fa-home me-2"></i>Home
        </a>
        <a href="intro.html" class="list-group-item list-group-item-action">
          <i class="fas fa-book me-2"></i>Introduction to the Digital Revolution
        </a>
        <a href="infrastructure.html" class="list-group-item list-group-item-action">
          <i class="fas fa-network-wired me-2"></i>Understanding Internet Infrastructure
        </a>
        <a href="evolution.html" class="list-group-item list-group-item-action">
          <i class="fas fa-code me-2"></i>Evolution of Web Development
        </a>
        <a href="careers.html" class="list-group-item list-group-item-action">
          <i class="fas fa-briefcase me-2"></i>Career Pathways in Tech
        </a>
        <a href="milestones.html" class="list-group-item list-group-item-action">
          <i class="fas fa-trophy me-2"></i>Key Milestones in Digitalization
        </a>
        <a href="roadmap.html" class="list-group-item list-group-item-action">
          <i class="fas fa-map me-2"></i>Learning Roadmap
        </a>
        <a href="trends.html" class="list-group-item list-group-item-action">
          <i class="fas fa-chart-line me-2"></i>Industry Trends & Future Skills
        </a>
      </div>
    `;
  

    // Create the sidebar container
    const sidebar = document.createElement('div');
    sidebar.classList.add('dashboard-sidebar', 'hidden'); // Initially hidden

    // Add the sidebar content
    sidebar.innerHTML = `
      <h2 class="text-center mb-4">Tool Bar</h2>
      <div class="list-group">
        <a href="index.html" class="list-group-item list-group-item-action">
          <i class="fas fa-home me-2"></i>Home
        </a>
        <a href="intro.html" class="list-group-item list-group-item-action">
          <i class="fas fa-book me-2"></i>Introduction
        </a>
        <a href="infrastructure.html" class="list-group-item list-group-item-action">
          <i class="fas fa-network-wired me-2"></i>Infrastructure
        </a>
        <a href="evolution.html" class="list-group-item list-group-item-action">
          <i class="fas fa-code me-2"></i>Web Evolution
        </a>
        <a href="careers.html" class="list-group-item list-group-item-action">
          <i class="fas fa-briefcase me-2"></i>Careers
        </a>
        <a href="milestones.html" class="list-group-item list-group-item-action">
          <i class="fas fa-trophy me-2"></i>Milestones
        </a>
        <a href="roadmap.html" class="list-group-item list-group-item-action">
          <i class="fas fa-map me-2"></i>Roadmap
        </a>
        <a href="trends.html" class="list-group-item list-group-item-action">
          <i class="fas fa-chart-line me-2"></i>Trends
        </a>
      </div>
      <button class="close-sidebar btn btn-light btn-sm">
        <i class="fas fa-times"></i> Close
      </button>
    `;

    // Insert the sidebar into the body
    document.body.appendChild(sidebar);

    // Create the hamburger menu button
    const menuButton = document.createElement('div');
    menuButton.classList.add('hamburger-menu');
    menuButton.innerHTML = `
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    `;

    // Add the menu button to the body
    document.body.appendChild(menuButton);

    // Add event listeners for toggling the sidebar
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden'); // Toggle the sidebar visibility
        document.querySelector('.main-content').classList.toggle('expanded'); // Adjust content layout
    });

    // Add event listener for the close button
    sidebar.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-sidebar') || event.target.closest('.close-sidebar')) {
            sidebar.classList.add('hidden'); // Hide the sidebar
            document.querySelector('.main-content').classList.remove('expanded'); // Reset content layout
        }
    });
});


