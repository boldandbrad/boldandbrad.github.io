
function _activate_tab(element_id) {
  var projects_num = document.getElementById(element_id);
  projects_num.className = projects_num.className.replace(
    "tmux-win-num",
    "tmux-win-num-active"
  );
}

function _deactivate_tabs() {
  var win_nums = document.getElementsByClassName("tmux-win-num-active");
  for (let i = 0; i < win_nums.length; i++) {
    win_nums[i].className = win_nums[i].className.replace(
      "tmux-win-num-active",
      "tmux-win-num"
    );
  }
}

function show_home_tab() {
  document.getElementById("projects-tab").style.display = "none";
  document.getElementById("home-tab").style.display = "block";
  _deactivate_tabs();
  _activate_tab("home-num");
}

function show_projects_tab() {
  document.getElementById("home-tab").style.display = "none";
  document.getElementById("projects-tab").style.display = "block";
  _deactivate_tabs();
  _activate_tab("projects-num");
}
