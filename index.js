const topBoxes = document.getElementsByClassName("topBox");
let expandedBox = null;

// Function to revert expandedBox to its default state
const revertToDefaultState = () => {
    if (expandedBox) {
        expandedBox.style.height = "";
        expandedBox.style.border = "";
        expandedBox.style.background = ""
        const radioButton = expandedBox.querySelector('input[type="radio"]');
        if (radioButton) {
            radioButton.checked = false;
        }
        expandedBox = null;
    }
};

// Add event listener to body to handle clicks outside topBoxes
document.body.addEventListener("click", (event) => {
    const clickedElement = event.target;
    // Check if the clicked element is not a .topBox or its descendant
    if (!clickedElement.closest('.topBox')) {
        revertToDefaultState();
    }
});

// Add event listeners to each .box inside topBoxes
Array.from(topBoxes).forEach(element => {
    const box = element.querySelector('.box');
    // const innerBox = element.querySelector('.inner-box')
    box.addEventListener("click", (event) => {
        // Prevent the event from bubbling up to the parent element
        event.stopPropagation();

        // Get the parent .topBox element
        const parentTopBox = event.currentTarget.closest('.topBox');

        if (expandedBox === parentTopBox) {
            revertToDefaultState();
        } else {
            if (expandedBox) {
                revertToDefaultState();
            }
            parentTopBox.style.height = "174.11px";
            parentTopBox.style.border = "2px solid #FF6B82"
            parentTopBox.style.background = "#FFF9FA"
            expandedBox = parentTopBox;
            const radioButton = parentTopBox.querySelector('input[type="radio"]');
            if (radioButton) {
                radioButton.checked = true;
            }
        }
    });
});
