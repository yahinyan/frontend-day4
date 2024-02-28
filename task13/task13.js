const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    setActiveTab(tabId);
  });
});
function setActiveTab(tabId) {
  contents.forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}