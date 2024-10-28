const confirmBtn = document.querySelector(".confirmBtn");
confirmBtn.addEventListener("click", handleConfirmDatas);

function handleConfirmDatas() {
  const numberInput = document.querySelector(".numberInput");
  const nameInput = document.querySelector(".nameInput");
  const dateMonthInput = document.querySelector(".dateMonthInput");
  const dateYearInput = document.querySelector(".dateYearInput");
  const cvcInput = document.querySelector(".cvcInput");
  if (
    numberInput.value.trim() !== "" && numberInput.value.length === 16 &&
    nameInput.value.trim() !== "" &&
    cvcInput.value.trim() !== "" && cvcInput.value.length === 3 &&
    dateMonthInput.value.trim() !== "" && dateMonthInput.value.length === 2 &&
    dateYearInput.value.trim() !== "" && dateYearInput.value.length === 2
  ) {
    document.querySelector(".numberText").innerText = numberInput.value.trim();
    document.querySelector(".nameText").innerText = nameInput.value.trim();
    document.querySelector(
      ".dateText"
    ).innerText = `${dateMonthInput.value.trim()}/${dateYearInput.value.trim()}`;
    document.querySelector(".cvcText").innerText = cvcInput.value.trim();
  } else {
    const inputs = [
      document.querySelector('.nameInput'),
      document.querySelector('.numberInput'),
      document.querySelector('.dateMonthInput'),
      document.querySelector('.dateYearInput'),
      document.querySelector('.cvcInput')
    ];
    inputs.forEach(input => {
      if (input.innerText === '') {
        input.classList.add('invalid-input');
      } else {
        input.classList.remove('invalid-input'); 
      }
    });
  }
}
