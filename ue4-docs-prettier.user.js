// ==UserScript==
// @name         Unreal Engine API Docs Prettier
// @namespace    https://kschultz-web-misc.s3-us-west-2.amazonaws.com
// @version      0.3
// @description  Improves formatting of Unreal Engine API documentation.
// @author       Kris Schultz
// @match        https://docs.unrealengine.com/en-US/API/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Collapse sections.
    document.querySelectorAll('.expanded').forEach(el => {
        // Keep only the "Syntax" section open by default.
        const sectionName = el.firstElementChild.textContent;
        if (sectionName != 'Syntax' && sectionName != 'Parameters') {
            el.onclick();
        }
    });

    // Inject better CSS.
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'https://kschultz-web-misc.s3-us-west-2.amazonaws.com/tampermonkey/ue2-docs-prettier/ue4-docs-theme1.css';
    document.head.append(cssLink);
})();