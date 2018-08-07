/* jQuery Load in of Info for the top of Portfolio */
$().ready($("#top .info").fadeIn(3500));

/* Mobile Menu Toggle */
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));

let test = [
  {
    name: "James",
    company: "Jesus.com",
    title: "CTO",
    picture: "https://d3iw72m71ie81c.cloudfront.net/male-39.jpg",
    review:
      "My company just launched our completely revamped website and couldn't be any happier with the way the site turned out, and our experience with Juan. He took our old website with outdated graphics, fonts, etc., and transformed it into a modern and incredibly attractive site. When we met with him to discuss the project, we were immediately impressed with how easy he was to communicate with—just real, down to earth, believable person that doesn't talk over your head with tech jargon. He listened and spent ample time understanding our products and message to make sure the site layout was appropriate."
  },
  {
    name: "Michael",
    company: "XYZ Company",
    title: "CEO",
    picture: "https://d3iw72m71ie81c.cloudfront.net/male-79.jpg",
    review:
      "When I first made contact with Juan, I was taken with the ‘can-do’ attitude towards our entire project (it was a big one), and his willingness to meet our needs – both creative and budgetary! We had a fairly intense approval process on our end, but Juan always made working together easy; from new needs popping up, to last minute changes, the overall approach was hard-working but always positive. Even post-launch, Juan has continued to be helpful and interactive, making it easy to solve any issues quickly and resolutely. Thank you, Juan!"
  },
  {
    name: "Mercedes",
    company: "Mercedes Photography",
    title: "Owner",
    picture:
      "https://d3iw72m71ie81c.cloudfront.net/711cbf1b-5f24-42ab-8dad-708f4460e848",
    review:
      "“In our case, there was no business without the site! Juan was the only person that within the first meeting made me feel very confident and comfortable that he understood and could produce what we envisioned. It’s been a terrific experience working with him. I have never had to ask twice for answers and when delivered, he always made sense! The finished product is far superior than I imagined!”"
  }
];
/* Left Testimonial Box */
const sideImage = document.querySelectorAll(".person-img");
let leftName = sideImage[0].children[0].children[0];
sideImage[0].style.background = `url('${test[0].picture}')`;
leftName.textContent = `${test[0].name}`;

/* Right Testimonial Box */
let rightName = sideImage[1].children[0].children[0];
sideImage[1].style.background = `url('${test[2].picture}')`;
rightName.textContent = `${test[2].name}`;

/* Center Image */
const centerImage = document.querySelector(".user-img");
let centerName = centerImage.nextElementSibling.children[0];
let centerTitle = centerImage.nextElementSibling.children[1];
let centerPara = centerImage.parentElement.nextElementSibling;
centerImage.style.background = `url('${test[1].picture}')`;
centerName.textContent = `${test[1].name}`;
centerTitle.textContent = `${test[1].title}, ${test[1].company}`;
centerPara.textContent = `${test[1].review}`;

sideImage.forEach((side)=>{
  side.addEventListener("click", () => {
    let tempPic = centerImage.style.background;
    let tempName = centerName.textContent;
    centerImage.style.background = side.style.background;
    centerName.textContent = side.children[0].children[0].textContent;
    side.style.background = tempPic;
    side.children[0].children[0].textContent = tempName;
    switch (centerName.textContent) {
      case `${test[0].name}`:
        centerName.textContent = `${test[0].name}`;
        centerTitle.textContent = `${test[0].title}, ${test[0].company}`;
        centerPara.textContent = `${test[0].review}`;
        break;
      case `${test[2].name}`:
        centerName.textContent = `${test[2].name}`;
        centerTitle.textContent = `${test[2].title}, ${test[2].company}`;
        centerPara.textContent = `${test[2].review}`;
        break;
      default:
        centerName.textContent = `${test[1].name}`;
        centerTitle.textContent = `${test[1].title}, ${test[1].company}`;
        centerPara.textContent = `${test[1].review}`;
        break;
    }
  });
});

