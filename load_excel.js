function loadSheet() {
    const url = "ingredients.xlsx";
    const file = fetch(url).arrayBuffer();
    const workbook = XLSX.read(file);

    alert(workbook.SheetNames);
}
