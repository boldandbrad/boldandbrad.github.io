document.addEventListener("keydown", parseKey);

function parseKey(e) {
  console.log("key pressed: " + e.key);
  if (e.code == "Digit1") {
    show_home_tab()
  }
  else if (e.code == "Digit2") {
    show_projects_tab()
  }
}

function _activate_tab(element_id) {
  var projects_num = document.getElementById(element_id);
  projects_num.className = projects_num.className.replace(
    "nav-btn-id",
    "nav-btn-id-active"
  );
}

function _deactivate_tabs() {
  var win_nums = document.getElementsByClassName("nav-btn-id-active");
  for (let i = 0; i < win_nums.length; i++) {
    win_nums[i].className = win_nums[i].className.replace(
      "nav-btn-id-active",
      "nav-btn-id"
    );
  }
}

function show_home_tab() {
  document.getElementById("projects-tab").style.display = "none";
  document.getElementById("home-tab").style.display = "block";
  _deactivate_tabs();
  _activate_tab("home-btn-id");
}

function show_projects_tab() {
  document.getElementById("home-tab").style.display = "none";
  document.getElementById("projects-tab").style.display = "block";
  _deactivate_tabs();
  _activate_tab("projects-btn-id");
}
