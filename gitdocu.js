

const fetchGitWorkflowImage = async () => {
  const imagePath = "./images/git/Git_Workflow.png"; 
  const gitDocuContainer = document.getElementById("gitDocuContainer"); // Ersetze mit der tatsächlichen ID
  
  if (!gitDocuContainer) {
    console.error("Container für das Git-Workflow-Bild nicht gefunden!");
    return;
  }

  gitDocuContainer.innerHTML = `<img src=${imagePath} alt="Git Workflow" style="max-width: 100%; height: auto; border: 2px solid #000; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);">`;
};


window.onload = () => {
  fetchGitWorkflowImage();

};