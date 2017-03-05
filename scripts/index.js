function createCanvas(rowSize, columnSize) {
  let pixelWidth = (100 / rowSize)
  for (var i = 1; i <= rowSize * columnSize; i++) {
    $('div.canvas').append(`<div id="px-${i}" class="pixel"></div>`);
  };
  $('div.pixel').css('width', `${pixelWidth}%`)
};

function createPalette(palette) {
  for (var i = 0; i < 6; i++) {
    $('div.palette').append(`<div id="c-${i}" class="color-choice"></div>`);
    $(`#c-${i}`).css('background', palette[i])
  }
};

$(document).ready(function () {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  createPalette(colors);
  createCanvas(16, 9);
});

//TBD determine pixel's color

// change pixel's color on click
$('.canvas').on('click', '.pixel', function () {
  $(this).css('background-color', 'red')
})