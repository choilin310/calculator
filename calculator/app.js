function toggleSign() {
    let display = document.getElementsByName('display')[0];
    if (display.value !== '') {
      display.value = parseFloat(display.value) * -1;
    }
  }

// ... Existing helper functions ...

// Helper function to toggle the tip dropdown
function toggleTipDropdown() {
    const tipDropdown = document.getElementById('tipDropdown');
    tipDropdown.style.display = tipDropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  // ... Existing functions ...
  