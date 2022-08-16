let nav = document.querySelector("nav"),
	sections = document.querySelectorAll("#home,#about,#skills,#portfolio,#services,#contact");

const scrolled = () => {
	for (const section of sections) {
		//this code is to animate navbar underline & navbar active section
		let top = window.scrollY,
			offset = section.offsetTop - 405,
			height = section.offsetHeight,
			link = document.querySelector(`[href='#${section.id}']`);

		if (top >= offset && top < offset + height) link.classList.add("active");
		else link.classList.remove("active");

		top > 200 ? nav.classList.add("bg-light") : nav.classList.remove("bg-light");
	}
};
window.addEventListener("scroll", scrolled);
scrolled();
