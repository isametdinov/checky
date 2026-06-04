document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       KPI ANIMATION
    ========================= */

    function animate(id, value) {
        const el = document.getElementById(id);
        if (!el) return;

        let start = 0;
        let step = value / 100;

        let timer = setInterval(() => {
            start += step;

            if (start >= value) {
                start = value;
                clearInterval(timer);
            }

            el.innerText = Math.floor(start).toLocaleString();
        }, 15);
    }

    animate("total-sales", 125000000);
    animate("fuel-sold", 8520);
    animate("expenses", 18500000);
    animate("profit", 106500000);

    /* =========================
       SALES LINE CHART
    ========================= */

    const salesCtx = document.getElementById("sales-chart");

    if (salesCtx) {
        new Chart(salesCtx, {
            type: "line",
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Sales (UZS)",
                    data: [12000000, 15000000, 11000000, 18000000, 20000000, 17000000, 22000000],
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37,99,235,0.1)",
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                }
            }
        });
    }

    /* =========================
       FUEL BAR CHART
    ========================= */

    const fuelCtx = document.getElementById("fuel-chart");

    if (fuelCtx) {
        new Chart(fuelCtx, {
            type: "bar",
            data: {
                labels: ["AI-80", "AI-91", "Diesel"],
                datasets: [{
                    label: "Liters Sold",
                    data: [4500, 3200, 1800],
                    backgroundColor: ["#2563eb", "#10b981", "#f59e0b"]
                }]
            }
        });
    }

    /* =========================
       SIMPLE NOTIFICATION
    ========================= */

    const notifBtn = document.getElementById("notification-btn");

    if (notifBtn) {
        notifBtn.addEventListener("click", () => {
            alert("You have 3 new notifications");
        });
    }

});