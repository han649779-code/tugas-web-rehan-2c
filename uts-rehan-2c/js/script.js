document.addEventListener("DOMContentLoaded", function () {
    
    // 1. FITUR DARK MODE TOGGLE (Manipulasi DOM)
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "Light Mode";
            darkModeToggle.classList.replace("btn-outline-light", "btn-outline-warning");
        } else {
            darkModeToggle.textContent = "Dark Mode";
            darkModeToggle.classList.replace("btn-outline-warning", "btn-outline-light");
        }
    });

    // 2. FITUR FILTER/SEARCH PROYEK
    const searchInput = document.getElementById("searchProject");
    const projectItems = document.querySelectorAll(".project-item");

    searchInput.addEventListener("keyup", function (e) {
        const keyword = e.target.value.toLowerCase();
        projectItems.forEach(function (item) {
            const projectName = item.getAttribute("data-name").toLowerCase();
            if (projectName.includes(keyword)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // 3. FITUR KALKULATOR / ESTIMASI BIAYA PROYEK (Function & DOM)
    const calcBtn = document.getElementById("calcBtn");
    calcBtn.addEventListener("click", function () {
        const basePrice = parseInt(document.getElementById("projectType").value);
        const extraPages = parseInt(document.getElementById("extraPages").value) || 0;
        const extraCostPerpage = 100000;

        // Fungsi perhitungan logika
        const total = basePrice + (extraPages * extraCostPerpage);

        // Tampilkan hasil ke DOM
        const resultDiv = document.getElementById("calcResult");
        const totalCostSpan = document.getElementById("totalCost");
        
        resultDiv.style.display = "block";
        totalCostSpan.textContent = "Rp " + total.toLocaleString("id-ID");
    });

    // 4. FITUR VALIDASI FORM KONTAK
    const contactForm = document.getElementById("contactForm");
    const formAlert = document.getElementById("formAlert");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah reload halaman secara default
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formAlert.innerHTML = `<div class="alert alert-danger">Semua kolom wajib diisi!</div>`;
        } else {
            formAlert.innerHTML = `<div class="alert alert-success">Terima kasih, ${name}! Pesan Anda berhasil dikirim.</div>`;
            contactForm.reset();
        }
    });

});