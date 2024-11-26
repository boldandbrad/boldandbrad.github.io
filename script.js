// load dynamic content on page load
onload = function () {
  getLoadTime();
  getSystem();
};

// calculate approximate page load time
function getLoadTime() {
  const [entry] = performance.getEntriesByType("navigation");
  // console.table(entry.toJSON());
  const loadDuration = entry.domComplete - entry.startTime;
  const loadtime_elements = document.getElementsByClassName("loadtime");
  for (const elem of loadtime_elements) {
    elem.innerHTML = loadDuration.toFixed(0) + "ms";
  }
}

// determine user operating system
function getSystem() {
  const userAgent = navigator.userAgent,
    platform = navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  let os = "web";
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "macOS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "windows";
  } else if (/Android/.test(userAgent)) {
    os = "android";
  } else if (!os && /Linux/.test(platform)) {
    os = "linux";
  }

  const system_elements = document.getElementsByClassName("sys");
  for (const elem of system_elements) {
    elem.innerHTML = os;
  }
}

// add key-event listener
document.addEventListener("keydown", parseKey);

// parse key-events
function parseKey(e) {
  console.log("key pressed: " + e.key);
  if (e.code == "Digit1") {
    show_home_tab();
  } else if (e.code == "Digit2") {
    show_projects_tab();
  }
}

function _activate_tab(element_id) {
  const projects_num = document.getElementById(element_id);
  projects_num.className = projects_num.className.replace(
    "nav-btn-id",
    "nav-btn-id-active",
  );
}

function _deactivate_tabs() {
  const win_nums = document.getElementsByClassName("nav-btn-id-active");
  for (let i = 0; i < win_nums.length; i++) {
    win_nums[i].className = win_nums[i].className.replace(
      "nav-btn-id-active",
      "nav-btn-id",
    );
  }
}

function show_home_tab() {
  document.getElementById("projects-tab").style.display = "none";
  document.getElementById("home-tab").style.display = "unset";
  _deactivate_tabs();
  _activate_tab("home-btn-id");
}

function show_projects_tab() {
  document.getElementById("home-tab").style.display = "none";
  document.getElementById("projects-tab").style.display = "unset";
  _deactivate_tabs();
  _activate_tab("projects-btn-id");
}
