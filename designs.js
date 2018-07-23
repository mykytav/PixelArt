// execute this code only when the document is loaded
$(function() {
  let count = 0;

  $('#submit-button').on('click', makeGrid);
  // makes grid
  function makeGrid(e) {
    e.preventDefault();
    count++;
    let inputHeight = $('#inputHeight').val();
    let inputWidth = $('#inputWidth').val();
    let table = "<table class='table'>";
    for (let row = 0; row < inputWidth; row++) {
      table += "<tr class='tr'>";
      for (let column = 0; column < inputHeight; column++) {
        if (inputHeight > 40 || inputWidth > 40) {
          alert("Grid's max width and height are 40");
          inputHeight = 1;
          inputWidth = 1;
        }
        table += "<td class='td'></td>";
      }
      table += '</tr>';
    }
    table += '</table>';
    $('#container').append(table);
    const text = $('#submit-button').attr('value', 'New one');
  }
  // function colorCell
  $('#container').on('click', '.td', function colorCell() {
    const color = $('#colorPicker').val();
    $(this).css('background-color', color);
  });
  //clearCell function -  clear cell color on doubleclick
  $('#container').on('dblclick', '.td', function clearCell() {
    $(this).css('background-color', '');
  });
  // Clear table and create a new one
  $('#submit-button').click(e => {
    if (count > 1) {
      $('#container').html('');
      makeGrid(e);
    }
  });
});
