// Sidebar navigation enhancement for targeting and scrolling
(function() {
    'use strict';

    function scrollToSidebarItem(targetHref) {
        // Wait for DOM to settle
        setTimeout(() => {
            const sidebar = document.querySelector('.sidebar-content');
            if (!sidebar) {
                console.log('Sidebar not found');
                return;
            }

            // Try multiple selectors to find the target link
            let targetLink = sidebar.querySelector(`a[href="${targetHref}"]`);
            if (!targetLink) {
                // Try without trailing slash
                const hrefWithoutSlash = targetHref.replace(/\/$/, '');
                targetLink = sidebar.querySelector(`a[href="${hrefWithoutSlash}"]`);
            }
            if (!targetLink) {
                // Try with trailing slash
                const hrefWithSlash = targetHref.endsWith('/') ? targetHref : targetHref + '/';
                targetLink = sidebar.querySelector(`a[href="${hrefWithSlash}"]`);
            }

            if (!targetLink) {
                console.log('Target link not found:', targetHref);
                return;
            }

            console.log('Found target link:', targetLink.href);

            // Get the sidebar container's scrollable area
            const sidebarScrollContainer = sidebar.closest('.sidebar-pane') || sidebar;
            
            // Calculate positions
            const containerRect = sidebarScrollContainer.getBoundingClientRect();
            const targetRect = targetLink.getBoundingClientRect();
            
            // Calculate the offset needed to center the target
            const containerCenter = containerRect.height / 2;
            const targetRelativeTop = targetRect.top - containerRect.top;
            const targetCenter = targetRelativeTop + (targetRect.height / 2);
            
            const scrollOffset = targetCenter - containerCenter;
            const currentScrollTop = sidebarScrollContainer.scrollTop;
            const newScrollTop = currentScrollTop + scrollOffset;
            
            console.log('Scrolling sidebar to center target:', {
                containerCenter,
                targetCenter,
                scrollOffset,
                currentScrollTop,
                newScrollTop
            });
            
            sidebarScrollContainer.scrollTo({
                top: Math.max(0, newScrollTop),
                behavior: 'smooth'
            });
        }, 200);
    }

    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const sidebar = document.querySelector('.sidebar-content');
        if (!sidebar) return;

        console.log('Current path:', currentPath);

        const links = sidebar.querySelectorAll('a');
        links.forEach(link => {
            const linkPath = new URL(link.href, window.location.origin).pathname;
            
            // Normalize paths for comparison
            const normalizedCurrent = currentPath.replace(/\/$/, '') || '/';
            const normalizedLink = linkPath.replace(/\/$/, '') || '/';
            
            if (normalizedCurrent === normalizedLink) {
                console.log('Found matching link:', link.href);
                link.setAttribute('aria-current', 'page');
                scrollToSidebarItem(link.getAttribute('href'));
            }
        });
    }

    function handleCardClicks() {
        const cards = document.querySelectorAll('.uap-card-link');
        console.log('Found cards:', cards.length);
        
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                console.log('Card clicked, target:', href);
                
                if (href) {
                    // Wait for navigation to complete
                    setTimeout(() => {
                        scrollToSidebarItem(href);
                    }, 500);
                }
            });
        });
    }

    function init() {
        console.log('Initializing sidebar navigation');
        highlightCurrentPage();
        handleCardClicks();
    }

    // Wait for everything to load
    function waitForSidebar() {
        const sidebar = document.querySelector('.sidebar-content');
        if (sidebar) {
            init();
        } else {
            setTimeout(waitForSidebar, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForSidebar);
    } else {
        waitForSidebar();
    }

    // Handle Astro navigation
    document.addEventListener('astro:after-swap', () => {
        console.log('Astro navigation detected');
        setTimeout(init, 100);
    });
})();