// ==UserScript==
// @name Better CrawlDB
// @version 0.1
// @namespace https://github.com/stuartdb/better-crawldb
// @author Stuart Baker
// @description Changes the crawl learndb titles to make them searchable.
// @include *://loom.shalott.org/*
// @downloadURL https://github.com/stuartdb/better-crawldb/raw/master/better-crawldb.user.js
// @updateURL https://github.com/stuartdb/better-crawldb/raw/master/better-crawldb.meta.js
// @run-at document-end
// ==/UserScript==
(function () {
    'use strict';
    var i = 0,
        pre = '~',
        titles = document.getElementsByTagName('dt');

    for (i = 0; i < titles.length; i += 1) {
        titles[i].lastChild.textContent = pre +
            titles[i].lastChild.textContent;
    }

}());
