//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function() {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Validate input
    if (blockId < 1 || blockId > 9 || !color) {
        alert("Please enter a valid block ID (1-9) and a color.");
        return;
    }

    // Reset all grid items to transparent
    const items = document.querySelectorAll(".grid-item");
    items.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Change the background color of the selected grid item
    const selectedItem = document.getElementById(blockId);
    if (selectedItem) {
        selectedItem.style.backgroundColor = color;
    }
});

document.getElementById("reset").addEventListener("click", function() {
    const items = document.querySelectorAll(".grid-item");
    items.forEach(item => {
        item.style.backgroundColor = "lightgray"; // Reset to original color
    });
});

