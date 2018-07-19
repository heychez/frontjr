$(function () {
  $("component").each(function (index) {
    const html = loadHTML($(this).attr('path'));
    $(html).insertAfter(this);
    $(this).remove();
  });
});

const loadHTML = (url) => {
  var req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send();
  // element.innerHTML = req.responseText; 
  return req.responseText;
};


// $(function () {
//   $("[list]").each(function (index) {
//     const list = $(this).attr('list');
//     console.log($(this).html())

//     $(this).find('item-prop').each(function () {
//       const prop = $(this).text();
//       $(this).after(data[list][index][prop])
//       // $(this).remove();
//     });

//     data[list].forEach(item => {
      
//     });
//   });
// });

// const data = {
//   animals: [{
//     name: 'dog'
//   }, {
//     name: 'cat'
//   }]
// };