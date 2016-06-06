var hiddenPre=document.createElement("pre");

// Regular Expressions for parsing tags and attributes
var START_TAG_REGEXP =
        /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
    END_TAG_REGEXP = /^<\/\s*([\w:-]+)[^>]*>/,
    ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
    BEGIN_TAG_REGEXP = /^</,
    BEGING_END_TAGE_REGEXP = /^<\//,
    COMMENT_REGEXP = /<!--(.*?)-->/g,
    DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
    CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
    SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    // Match everything outside of normal chars and " (quote character)
    NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;

/**
 * decodes all entities into regular string
 * @param value
 * @returns {string} A string with decoded entities.
 */
function decodeEntities(value) {
    if (!value) { return ''; }

    hiddenPre.innerHTML = value.replace(/</g,"&lt;");
    // innerText depends on styling as it doesn't display hidden elements.
    // Therefore, it's better to use textContent not to cause unnecessary reflows.
    return hiddenPre.textContent;
}

/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function encodeEntities(value) {
    return value.
        replace(/&/g, '&amp;').
        replace(SURROGATE_PAIR_REGEXP, function(value) {
            var hi = value.charCodeAt(0);
            var low = value.charCodeAt(1);
            return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
        }).
        replace(NON_ALPHANUMERIC_REGEXP, function(value) {
            return '&#' + value.charCodeAt(0) + ';';
        }).
        replace(/</g, '&lt;').
        replace(/>/g, '&gt;');
}