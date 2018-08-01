var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var palet = document.getElementById('paleta');
var list_pixels = document.getElementById('grilla-pixeles');

function see_array(nombreColores){
  for(var i = 0; i < nombreColores.length; i++){
    var div_create = document.createElement('div');
    div_create.attributes = 'backgroundColor';
    div_create.style.backgroundColor = nombreColores[i];
    div_create.className = 'color-paleta';
    palet.appendChild(div_create);
  }
}
see_array(nombreColores);


var div_pixel = document.createElement('div');
for(i = 0; i < 1750; i++){
  div_pixel = document.createElement('div');
  list_pixels.appendChild(div_pixel);
}


var selected_color = document.getElementById('indicador-de-color'); 
palet.addEventListener('mousedown', change_color);
function change_color(e){
  selected_color.style.backgroundColor = e.target.style.backgroundColor;
}



list_pixels.addEventListener('mousedown',painting);
function painting (e){
  e.target.style.backgroundColor = selected_color.style.backgroundColor;
  //div_colors.style.backgroundColor = selected_color;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    console.log(colorActual);
    selected_color.style.backgroundColor = colorActual;
  });

var mouseApretado;

/////detect mouse down or up////////////

 /*eso lo detectas si queres con un event listener sobre la grilla de pixeles, eso
ya lo tenes ?
y te conviene con cada uno de esos dos llamar una funcion que modifique una variable
que puede ser la que compruebe que el mouse esta apretado o suelto
y a partir de ahi, con un mousemove
por ejemplo (y chequeando la variable de comprobante) anda pintando pixeles*/

var mouse;

function check_mouse(){
  list_pixels.addEventListener('mousedown', check_1,false);
  function check_1(){
    mouse = true;
    return mouse;
  }
  list_pixels.addEventListener('mouseup',check_2,false);
  function check_2(){
    mouse = false;
    return mouse;
  }
}

/*function mouseDownUp() {
  grilla.addEventListener('mousedown', function() {
      mouse = true;
      return mouse;
  }, false);
  grilla.addEventListener('mouseup', function() {
      mouse = false;
      return mouse;
  }, false);
 }*/