document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".report-form");
    const table = document.querySelector("tbody");

    let reports = JSON.parse(localStorage.getItem("checkyReports")) || [];

    function render() {
        if (!table) return;

        table.innerHTML = "";

        reports.forEach((r, index) => {
            table.innerHTML += `
                <tr>
                    <td>${r.date}</td>
                    <td>${r.operator}</td>
                    <td>${r.sales}</td>
                    <td>${r.expenses}</td>
                    <td><span class="status completed">Saved</span></td>
                    <td>
                        <button onclick="deleteReport(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const newReport = {
                date: form.querySelector("input[type='date']").value,
                operator: form.querySelector("input[type='text']").value,
                sales: form.querySelectorAll("input[type='number']")[2].value,
                expenses: form.querySelectorAll("input[type='number']")[4].value
            };

            reports.push(newReport);
            localStorage.setItem("checkyReports", JSON.stringify(reports));

            render();
            form.reset();
        });
    }

    window.deleteReport = function (index) {
        reports.splice(index, 1);
        localStorage.setItem("checkyReports", JSON.stringify(reports));
        render();
    };

    render();

});