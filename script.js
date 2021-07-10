"use strict";
const next = document.querySelector(".nextb");
const prev = document.querySelector(".prevb");
const vacc = document.querySelector(".v-view");
const test = document.querySelector(".test-view");
const death = document.querySelector(".case-view");
const res = document.querySelector(".open");
const reg = document.querySelector(".registration");
const sch = document.querySelector(".schedule");
const dose = document.querySelector(".dose");
const vaccine = document.querySelector(".vaccination");
const crtf = document.querySelector(".certificate");
const se = document.querySelector(".side-effects");
const extp = document.querySelector(".l");
const extc = document.querySelector(".c");
const extw = document.querySelector(".w");
const extt = document.querySelector(".t");
const extin = document.querySelector(".in");
const exty = document.querySelector(".y");
const extf = document.querySelector(".f");

reg.addEventListener("click", function () {
  document.querySelector(".rque").classList.toggle("hidden");
});
sch.addEventListener("click", function () {
  document.querySelector(".sque").classList.toggle("hidden");
});
dose.addEventListener("click", function () {
  document.querySelector(".dque").classList.toggle("hidden");
});
vaccine.addEventListener("click", function () {
  document.querySelector(".vque").classList.toggle("hidden");
});
crtf.addEventListener("click", function () {
  document.querySelector(".cque").classList.toggle("hidden");
});
se.addEventListener("click", function () {
  document.querySelector(".seque").classList.toggle("hidden");
});

res.addEventListener("click", function () {
  const x = document.querySelector(".nav");
  x.classList.toggle("responsive");
});

next.addEventListener("click", function () {
  if (vacc.classList.contains("active")) {
    vacc.classList.add("hidden");
    test.classList.remove("hidden");
    vacc.classList.remove("active");
    test.classList.add("active");
    if (vacc.classList.contains("active")) prev.classList.add("hidden");
    if (!vacc.classList.contains("active")) prev.classList.remove("hidden");
    if (death.classList.contains("active")) next.classList.add("hidden");
    if (!death.classList.contains("active")) next.classList.remove("hidden");
  } else if (test.classList.contains("active")) {
    test.classList.add("hidden");
    death.classList.remove("hidden");
    test.classList.remove("active");
    death.classList.add("active");
    if (vacc.classList.contains("active")) prev.classList.add("hidden");
    if (!vacc.classList.contains("active")) prev.classList.remove("hidden");
    if (death.classList.contains("active")) next.classList.add("hidden");
    if (!death.classList.contains("active")) next.classList.remove("hidden");
  }
});
if (vacc.classList.contains("active")) prev.classList.add("hidden");
if (!vacc.classList.contains("active")) prev.classList.remove("hidden");
if (death.classList.contains("active")) next.classList.add("hidden");
if (!death.classList.contains("active")) next.classList.remove("hidden");
prev.addEventListener("click", function () {
  if (test.classList.contains("active")) {
    test.classList.remove("active");
    test.classList.add("hidden");
    vacc.classList.add("active");
    vacc.classList.remove("hidden");
    if (vacc.classList.contains("active")) prev.classList.add("hidden");
    if (!vacc.classList.contains("active")) prev.classList.remove("hidden");
    if (death.classList.contains("active")) next.classList.add("hidden");
    if (!death.classList.contains("active")) next.classList.remove("hidden");
  } else if (death.classList.contains("active")) {
    death.classList.remove("active");
    death.classList.add("hidden");
    test.classList.add("active");
    test.classList.remove("hidden");
    if (vacc.classList.contains("active")) prev.classList.add("hidden");
    if (!vacc.classList.contains("active")) prev.classList.remove("hidden");
    if (death.classList.contains("active")) next.classList.add("hidden");
    if (!death.classList.contains("active")) next.classList.remove("hidden");
  }
});
extp.addEventListener("click", function () {
  alert("You are being redirected to external website (MyGov website).");
});
extc.addEventListener("click", function () {
  alert("You are being redirected to external website (MyGov website).");
});
extw.addEventListener("click", function () {
  alert("You are being redirected to external website (MyGov website).");
});
extt.addEventListener("click", function () {
  alert("You are being redirected to external website.");
});
extin.addEventListener("click", function () {
  alert("You are being redirected to external website.");
});
exty.addEventListener("click", function () {
  alert("You are being redirected to external website.");
});
extf.addEventListener("click", function () {
  alert("You are being redirected to external website.");
});
