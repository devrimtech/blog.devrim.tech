/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/2020/05/16/Plugin-Post/index.html","2129c7f1a04ba5fe2b35a471c73d19b9"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/2020/05/17/How-to-make-a-blog-with-Hexo/index.html","30b94ffe919ba302ba92cb2ea04f5f8a"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/2020/06/22/How-to-escape-tutorial-hell/index.html","05b6f1059e6b56f812a66234d84bceb0"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/archives/2020/05/index.html","5dc46297bcb8c05ea29a5439e58b9362"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/archives/2020/06/index.html","b466c443b4c3e4c2a57fe27d287f7031"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/archives/2020/index.html","5a86cd3c7d8673b2612897fcb6c17a9b"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/archives/index.html","e7d7075c1acb849f87f0cc90f5a10a64"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/css/index.css","94caa03a34c453aba9779bfb858ca28c"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/badge.js","4e6e7b242c9bda1a915d03396a80bbb4"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/octicons/octicons.css","6106fffe1c57ec203cd3d021ee60b2bc"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/octicons/octicons.eot","9f0a2ff14cf82ade5b0d5d09fc77a484"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/octicons/octicons.svg","8aa4d1a49fdf65cee44b75c58af991f4"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/octicons/octicons.ttf","8cc473483ca11c160a7d021b9773e81f"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/octicons/octicons.woff","5c2faa6e48106b82a0a22652110ba9d5"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/hexo-github/style.css","b5a2d4967e975077b4f3047cdab71068"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/1.jpg","86ca37d12552c6dcd4e79f549421164e"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/AnimeStreet.jpg","41fa18e9b9c269bfb28f9833dba37651"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/algolia.svg","7f55a5eff525feb4fa927e617395323a"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/cc-by-nc-nd.svg","5fcd1a5c962391d092c995d457fb3040"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/cc-by-nc-sa.svg","2ec8ab6280fa7ada792bebed6f636d8b"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/cc-by-nc.svg","cb04a42b5be6f93f0d2051bcbe1a828a"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/cc-by-nd.svg","c8941a39e22284084c2ec0d2e09c7759"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/cc-by-sa.svg","61380e86b4cec4af627e7228bb302a2b"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/cc-by.svg","f614962aac0740852c7fb67225856be7"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/Penguin.png","e2d20dfda8014a4e2f83a5d7afea96d9"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/apple-touch-icon.png","e6ed98d355d03a049b11bbd7e9a87311"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/favicon-144x144.png","ecc1a0ef423eee3925cf899843873ba6"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/favicon-16x16.png","edf1afce2acf6b68ee38dc302591ad0d"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/favicon-32x32.png","445e33f3b5dd377fa49b2fbff15e40be"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/favicon.png","57cccc576b11ed524906a8db7e768498"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/icons/stun-logo.svg","7866794021fb9567e574c2ef7295bcae"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/images/loading.svg","626a1afa3e60e3fbf6af9535e476434a"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/index.html","728dcfa8d7a79d5ea481b417782afcc2"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/js/header.js","cf94cbf06612c001abd71526d4173853"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/js/scroll.js","332f0cc90778f43fdc9126de8c40e26e"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/js/sidebar.js","b0a9da91774db324a2187ee7e57f3e8c"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/js/stun-boot.js","fa35aec51afd021ad8a0e4c93e762966"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/js/utils.js","c3223791c538351c1d5aca0d37b9696b"],["C:/Users/Devrim/Documents/GitHub/blog.devrim.tech/public/tags/hexo-programming-blog-frameworks-tutorial/index.html","0a8b191fa59d491f10f564b05ea872ab"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







