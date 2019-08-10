// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let storeDataBtn = document.getElementById('storeData');
let fillDataBtn = document.getElementById('fillData');
let clearDataBtn = document.getElementById('clearData');
let displayDataBtn = document.getElementById('displayData');

/*
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
*/
storeDataBtn.onclick = action;
fillDataBtn.onclick = action;
clearDataBtn.onclick = action;
displayDataBtn.onclick = action;

function action(element) {
  //let color = element.target.value;
  console.log(element.target.id);

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        //code: 'color = "' + color + '";',
        code: 'btn = "' + element.target.id + '";'
        //file: 'contentScript.js'
      },
      function() {
        chrome.tabs.executeScript(tabs[0].id, {file: 'jquery-3.4.1.min.js'}, function() {
          chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'});
        });
      }
    );
  });
  //window.close();
};
