import { MEDIA_PERMISSION_PROMPT_VISIBILITY_CHANGED } from './actionTypes';


/**
 * Signals that the prompt for media permission is visible or not.
 *
 * @param {boolean} isVisible - If the value is true - the prompt for media
 * permission is visible otherwise the value is false/undefined.
 * @param {string} browser - The name of the current browser.
 * @public
 * @returns {{
 *     type: MEDIA_PERMISSION_PROMPT_VISIBILITY_CHANGED,
 *     browser: {string},
 *     isVisible: {boolean}
 * }}
 */
export function mediaPermissionPromptVisibilityChanged(isVisible: boolean, browser: string) {
    return {
        type: MEDIA_PERMISSION_PROMPT_VISIBILITY_CHANGED,
        browser,
        isVisible
    };
}

/**
 * Opens {@link PageReloadDialog}.
 *
 * @param {any} _dummy1 - N/A for web.
 * @param {any} _dummy2 - N/A for web.
 * @param {any} _dummy3 - N/A for web.
 *
 * @returns {Function}
 */
export function openPageReloadDialog(_dummy1: any, _dummy2: any, _dummy3: any): any {
    // Dummy
}
