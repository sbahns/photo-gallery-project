function search() {
  // Declare variables
  let input, filter, row, thumbnail, img, i, txtValue;
  input = document.getElementById('gallery-search');
  filter = input.value.toUpperCase();
  row = document.getElementById("lightgallery");
  thumbnail = row.getElementsByClassName('gallery-thumbnail');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < thumbnail.length; i++) {
    img = thumbnail[i].getElementsByTagName("img")[0];
    txtValue = img.alt || img.title;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      thumbnail[i].style.display = "";
    } else {
      thumbnail[i].style.display = "none";
    }
  }
}
