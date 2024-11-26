import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div class="header">
      <div class="wrap flex">
        <div class="left">
          <a href="/" className="logo flex">
            <img
              className="tongue"
              src="https://colorhunt.co/img/color-hunt-logo-tongue.svg"
              alt="color-hunt-logo"
            />
            <img
              src="https://colorhunt.co//img/color-hunt-logo-face.svg"
              alt="color-hunt-logo"
            />
            <span className="mobileHide">Color Hunt</span>
          </a>
        </div>
        <div class="middle filterContainer">
          <div class="inputContainer flex">
            <input placeholder="Search palettes" onkeyup="showTags()" />
            <div class="searchIcon icon" icon="search"></div>
            <a class="clear" href="/">
              ✕
            </a>
          </div>
          <div class="filterWindow dropdown hidden card">
            <div class="color section">
              <div class="title">Colors</div>
            </div>
            <div class="line"></div>
            <div class="collection section">
              <div class="title">Collections</div>
            </div>
            <div class="line"></div>
            <div class="related section hide">
              <div class="title">Related</div>
            </div>
          </div>
        </div>
        <div class="right flex">
          <a
            target="_blank"
            href="//chrome.google.com/webstore/detail/hchlgfaicmddilenlflajnmomalehbom"
            class="button addToChrome"
          >
            <img
              class="icon"
              src="https://colorhunt.co/img/color-hunt-icon-chrome.png"
              alt="chrome-icon"
            />
            Add to Chrome
          </a>
          <div class="kebab button iconButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="littleMenu dropdown card hidden">
            <a class="tab button small" tab="palettes" href="/" status="on">
              Palettes
            </a>
            <a class="tab button small" tab="create" href="/create">
              Create
            </a>
            <a class="tab button small" tab="collection" href="/collection">
              Collection
            </a>
            <div class="line"></div>
            <a class="tab button small" tab="about" href="/about">
              About
            </a>
            <a
              class="tab button small"
              target="_blank"
              href="https://instagram.com/color.hunt"
            >
              Instagram
            </a>
            <div class="line"></div>
            <a class="tab button small" tab="terms" href="/terms">
              Terms of Service
            </a>
            <a class="tab button small" tab="privacy" href="/privacy">
              Privacy Policy
            </a>
            <div class="line"></div>
            <a
              class="tab button small"
              href="https://galshir.com"
              target="_blank"
            >
              Made by Gal Shir
            </a>
          </div>
        </div>
      </div>
      <div class="line bottom"></div>
    </div>
  );
};

export default Header;
