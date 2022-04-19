window.onload = function () {
  const interval = setInterval(() => {
    if (isCommentLoaded()) {
      document.querySelector(
        "ytd-expander.ytd-video-secondary-info-renderer"
      ).collapsed = false;
      document.querySelector(
        "[target-id='engagement-panel-structured-description']"
      ).visibility = "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED";

      const desContainer_title = document.querySelector(
        "[target-id='engagement-panel-structured-description'] #title"
      );
      desContainer_title.innerHTML = "";
      const cmt_title = document.querySelector("#comments #title");
      desContainer_title.appendChild(cmt_title);

      const desExpandContainer = document.querySelector(
        "[target-id='engagement-panel-structured-description'] #content"
      );
      const cmts = document.querySelector("#comments");
      desExpandContainer.innerHTML = "";
      desExpandContainer.appendChild(cmts);
      desExpandContainer.style.padding = "0 10px";
      desExpandContainer.style.overflow = "auto";

      document.querySelector("tp-yt-paper-button#more").click();
      document.querySelector("tp-yt-paper-button#more").style.display = "none";
      document.querySelector("tp-yt-paper-button#less").style.display = "none";

      console.log("Transform done!");
      clearInterval(interval);
    }
  }, 500);
};

const isCommentLoaded = (_) => {
  const _cmts = document.querySelector("#comments");
  return _cmts && _cmts.textContent.trim().length > 0;
  // return false;
};
