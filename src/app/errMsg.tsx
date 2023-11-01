'use client'
import { error } from 'console';
import React, { useEffect, useState } from 'react';


function copyLink(){
  const copyBtn = document.getElementById('copyBtn') as HTMLButtonElement;
  navigator.clipboard.writeText(shortenedLink);
  copyBtn.innerHTML = "Copied!";
}

export function setupListener(){
  const linkForm = document.getElementById('link-form') as HTMLFormElement;
  const copyBtn = document.getElementById('copyBtn') as HTMLButtonElement;

  copyBtn?.addEventListener('click', copyLink);
  linkForm?.addEventListener('submit', formSubmit);
}


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
    const btn = document.getElementById('shorten-btn') as HTMLButtonElement;
    const copyBtn = document.getElementById('copyBtn') as HTMLButtonElement;
    btn.innerHTML = message;
    btn.disabled = true;
    await fetch("/api/shorten", {
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
    copyBtn.innerHTML = "Copy";
}

var originalLink = "";

const setOriginalLink = (lin:any) => {
  originalLink = lin;
}

function formSubmit(e:any){
  const errMsg = document.getElementById('err-msg') as HTMLDivElement;
  const input = document.getElementById('link-input') as HTMLInputElement;
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
