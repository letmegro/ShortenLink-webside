'use client'
import { error } from 'console';
import React, { useEffect, useState } from 'react';
// shorten link control access variables
const input = document.getElementById('link-input') as HTMLInputElement;
const linkForm = document.getElementById('link-form') as HTMLFormElement;
const errMsg = document.getElementById('err-msg') as HTMLDivElement;
const btn = document.getElementById('shorten-btn') as HTMLButtonElement;
const copyBtn = document.getElementById('copyBtn') as HTMLButtonElement;

copyBtn?.addEventListener('click', copyLink);

function copyLink(){
  navigator.clipboard.writeText(shortenedLink);
  copyBtn.innerHTML = "Copied!";
}

linkForm?.addEventListener('submit', formSubmit);

function checkUrl (string:any) {
    let givenURL ;
    try {
        givenURL = new URL (string);
    } catch (error) {
       return false; 
    }
    return true;
  }
  var message = 'Shortening...';
  const setMessage = (msg:any) => {
    message = msg;
  }

  var shortenedLink = "";
  const setShortenedLink = (newLink:any) => {
    shortenedLink = newLink;
  }

  // shortened link result constrol access variables
  const linkContainer = document.getElementById('linkContainer') as HTMLDivElement;
  const ogLink = document.getElementById('ogLink') as HTMLParagraphElement;
  const newLink = document.getElementById('shortenedLink') as HTMLDivElement;
  const loader = document.getElementById('loader') as HTMLDivElement;

  const updateShortenedLinks = () => {
    loader.classList.add('hidden');
    loader.classList.remove('flex');
    linkContainer.classList.add('flex');
    linkContainer.classList.remove('hidden');
    ogLink.innerHTML = originalLink;
    newLink.innerHTML = shortenedLink;
  }
  
  async function callShorten(link:any){
    
    btn.innerHTML = message;
    btn.disabled = true;
    await fetch("http://localhost:8080/api/shorten-link", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Link: link})
    }).then(
      response => response.json()
    ).then(
      data => {
        setMessage("Shorten");
        btn.disabled = false;
        btn.innerHTML = message;
        setShortenedLink(data);
        updateShortenedLinks();
      }
    ).then(() => {}
    ).catch(error => {console.log(error)});
    setMessage("Shortening...");
}

var originalLink = "";

const setOriginalLink = (lin:any) => {
  originalLink = lin;
}

function formSubmit(e:any){
    e.preventDefault();
    if(input.value === "" || !checkUrl(input.value)){
        errMsg.innerHTML = "Please enter a valid link";
        input.classList.add('border-red');
    }
    else{
        loader.classList.add('flex');
        loader.classList.remove('hidden');
        linkContainer.classList.remove('flex');
        linkContainer.classList.add('hidden');
        setOriginalLink(input.value);
        callShorten(originalLink);
        errMsg.innerHTML = "";
        input.classList.remove('border-red');
    }
}
