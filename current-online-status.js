const status = document.querySelector(".status");
window.addEventListener("load", () => {
  const handleNetworkChange = () => {
    if (navigator.onLine) {
      status.classList.remove("offline");
    } else {
      status.classList.add("offline");
    }
  };

  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});
