function showResults() {
    const students = [
        { name: "Aman", marks: 85 },
        { name: "Sara", marks: 42 },
        { name: "Riya", marks: 68 },
        { name: "John", marks: 49 }
    ];

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // clear previous data

    // 1️⃣ Filter passed students
    const passed = students.filter(s => s.marks >= 50);

    // 2️⃣ Add +5 bonus
    const updated = passed.map(s => ({
        name: s.name,
        finalMarks: s.marks + 5
    }));

    // 3️⃣ Show each student's name & score
    updated.forEach(s => {
        outputDiv.innerHTML += `<p>${s.name} → Final Marks: <b>${s.finalMarks}</b></p>`;
    });

    // 4️⃣ Calculate class average
    const average = updated.reduce((sum, s) => sum + s.finalMarks, 0) / updated.length;

    outputDiv.innerHTML += `<p><b>Class Average: ${average.toFixed(2)}</b></p>`;
}
