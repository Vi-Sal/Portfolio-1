"use strict";

// Selecting Elements

// Navigation
const navContent = document.querySelector(".nav-content");
const btnShowNav = document.querySelector(".btn-show-nav");
const btnCloseNav = document.querySelector(".btn-close-nav");
const overlay = document.querySelector(".overlay");

// Functionality
function showNavContent() {
	navContent.classList.toggle("show");
	overlay.classList.toggle("show");
}
// Navigation

// Event handlers
btnShowNav.addEventListener("click", showNavContent);
btnCloseNav.addEventListener("click", showNavContent);
overlay.addEventListener("click", showNavContent);

//# Experiences Blog
const experiences = document.querySelector(".experiences-container");
const exChilds = document.querySelectorAll(".experiences-container > *");
const exInfoChilds = document.querySelectorAll(".experiences-info > *");
const exDateChilds = document.querySelectorAll(".experiences-date > *");
const btnContact = document.querySelector(".btn-contact-1");

// Functionality
function revealExperiences(contents, observe) {
	const [content] = contents;
	if (content.isIntersecting) {
		// console.log(content.isIntersecting);
		experiences.classList.add("reveal-content");
		exChilds.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
		exInfoChilds.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
		exDateChilds.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
		btnContact.classList.add("reveal-content");
	} else {
		// console.log(content.isIntersecting);
		experiences.classList.remove("reveal-content");
		exChilds.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
		exInfoChilds.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
		exDateChilds.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
		btnContact.classList.remove("reveal-content");
	}
}

const obsExperiences = new IntersectionObserver(revealExperiences, {
	threshold: 0.2,
});

obsExperiences.observe(experiences);

//# Portfolios

const portfolios = document.querySelector(".portfolio-container");
const portInfoChilds = document.querySelectorAll(".portfolio-info > * ");
const portContents = document.querySelectorAll(".portfolio-contents");

// Functionality
function revealPortfolio(contents) {
	const [content] = contents;
	// console.log(content.target)
	if (content.isIntersecting) {
		// console.log(content.isIntersecting);
		portInfoChilds.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
		portContents.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
	} else {
		// console.log(content.isIntersecting);
		portInfoChilds.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
		portContents.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
	}
}

// Intersection Observer
const obsPortfolio = new IntersectionObserver(revealPortfolio, {
	threshold: 0.05,
});

obsPortfolio.observe(portfolios);

//*# About-me

const aboutMe = document.querySelector(".about-me");
const aboutMeInfoChilds = document.querySelectorAll(".about-me-info > *");
const aboutMeRate = document.querySelectorAll(".rate > h2");
const aboutMePic = document.querySelector(".about-me-contact > img");

// Functionality
function revealAboutMe(contents) {
	const [content] = contents;
	// console.log(content.isIntersecting);

	if (content.isIntersecting) {
		aboutMeInfoChilds.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
		aboutMeRate.forEach((ele) => {
			ele.classList.add("reveal-content");
		});
		aboutMePic.classList.add("reveal-content");
	} else {
		aboutMeInfoChilds.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
		aboutMeRate.forEach((ele) => {
			ele.classList.remove("reveal-content");
		});
		aboutMePic.classList.remove("reveal-content");
	}
}

const obsAboutMe = new IntersectionObserver(revealAboutMe, {
	threshold: 0.1,
});

obsAboutMe.observe(aboutMe);

//*# Contact card
const btnContacts = document.querySelectorAll(".btn-contact");
const card = document.querySelector(".contact-card");

// Functionality
function showCard() {
	navContent.classList.remove("show");
	overlay.classList.remove("show");
	card.classList.add("show-card");
}
function hideCard(e) {
	e.target.classList.remove("show-card");
}

card.addEventListener("click", hideCard);

btnContacts.forEach((element) => {
	element.addEventListener("click", showCard);
});
