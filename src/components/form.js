export function showForm() {
    if (document.querySelector("#overlay")) return; // Prevent duplicates

    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.style.display = "block";

    overlay.addEventListener("click", () => {
        overlay.remove();
    });

    document.body.appendChild(overlay);
}
