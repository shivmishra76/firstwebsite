window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.padding = ".5rem 1rem";
    
  } else {
    document.getElementById("navigation").style.padding = "2rem 4rem";
    
  }
}
function animateSkillsBars() {
  const skillsBars = document.querySelectorAll('.skills-bar');
  
  skillsBars.forEach((skillsBar) => {
    const skillsBarBefore = skillsBar.querySelector('::before');
    const rect = skillsBar.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      skillsBarBefore.style.width = '100%'; // Set the width to 100% to trigger the animation
    } else {
      skillsBarBefore.style.width = '0%'; // Reset the width to 0% when out of view
    }
  });
}

// Attach scroll event listener to window
window.addEventListener('scroll', animateSkillsBars);

// Trigger the initial check when the page loads
animateSkillsBars();

function toggleExpandableContent() {
  var content = document.getElementById("expandableContent");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.innerHTML = "Hide";
  } else {
    content.style.display = "none"
    button.innerHTML = "Show";
  }
}
function toggleExpandableContent1() {
  var content = document.getElementById("expandableContent1");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button1.innerHTML = "Hide";
  } else {
    content.style.display = "none"
    button1.innerHTML = "Show";
  }
}
function toggleExpandableContent2() {
  var content = document.getElementById("expandableContent2");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button2.innerHTML = "Hide";
  } else {
    content.style.display = "none"
    button2.innerHTML = "Show";
  }
}