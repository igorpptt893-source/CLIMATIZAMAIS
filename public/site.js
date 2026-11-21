const WA = "5591991336230";
document.querySelector("#year").textContent = new Date().getFullYear();
const hamb = document.querySelector("#hamb"), nav = document.querySelector("#siteNav");
hamb.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.querySelectorAll("[data-service]").forEach(a => a.addEventListener("click", () => { const s = document.querySelector('[name="service"]'); if (s) [...s.options].forEach(o => { if (o.text.toLowerCase() === a.dataset.service.toLowerCase()) s.value = o.value }) }));
document.querySelector("#leadForm").addEventListener("submit", e => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)); const msg = `Olá, Climatizamais! Gostaria de solicitar um orçamento.\\nNome: ${d.name}\\nTelefone: ${d.phone}\\nServiço: ${d.service}\\nDetalhes: ${d.message || "Não informado"}`; window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer") });