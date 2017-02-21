# Accessibility
 * Use semantic html, e.g. `<nav>` instead of `<div>`
 * Adjust contrast, color, clickable area size, font-size, readability
 * Elements accessible using keyboard
 * Use semantic html elements and lay out html structure in a logical manner
 * Make site fully responsive (scaling with browser width)
 * Default color & contrast optimised for readability
 * Optimised for assistive technologies and screen readers
 * Add Aria landmarks

## Navbar - things to consider
* Better contrast on hover
* Add 'Skip to main content / navigation' additional navigation

## Modal - things to consider
 * Keyboard control for closing an open modal
 * On modal open, set focus onto modal
 * Disable tabbing or clicking outside modal area if modal open
 * Close on Escape key or on close button
 * Switch focus back to original focus state on modal close (eg. button clicked)
 * Accessible <button> close element with ARIA attribute

## Resources
 1. http://juicystudio.com/services/luminositycontrastratio.php
 1. https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/
 1. https://blogs.ancestry.com/ancestry/2014/01/27/creating-a-completely-accessible-navigation-bar-in-html-css-and-js/
 1. https://bitsofco.de/accessible-modal-dialog/
