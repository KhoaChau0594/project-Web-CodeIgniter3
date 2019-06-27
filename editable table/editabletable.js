var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');
var No = 1;

var $clone=""

// function total(){
//   var sum=0;
//   $('#table tbody tr:not(tr.hide)').each((index,value)=>{
//     $row = $(value).find('input');
//     sum = sum + (parseInt($($row[0]).val()) * parseInt($($row[1]).val()));
//     $('#table #sum').html(parseInt(sum));
//   })
// }

// $('#table').change(()=>{
//   total();
// });

$('.table-add').click(function () {
  var tableID = $(this).attr()[3];
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
  $clone.find('#No').html(No);
  $TABLE.find('table').append($clone);
  No++;
}); 

$('.table-remove').click(function () {
   No--;
  $(this).parents('tr').detach();
});

// $('.table-up').click(function () {
//   var $row = $(this).parents('tr');
//   if ($row.index() === 1) return; // Don't go above the header
//   $row.prev().before($row.get(0));
// });

// $('.table-down').click(function () {
//   var $row = $(this).parents('tr');
//   $row.next().after($row.get(0));
// });

// // A few jQuery helpers for exporting only
// jQuery.fn.pop = [].pop;
// jQuery.fn.shift = [].shift;

// $BTN.click(function () {
//   var $rows = $TABLE.find('tr:not(:hidden)');
//   var headers = [];
//   var data = [];
  
//   // Get the headers (add special header logic here)
//   $($rows.shift()).find('th:not(:empty)').each(function () {
//     headers.push($(this).text().toLowerCase());
//   });
  
//   // Turn all existing rows into a loopable array
//   $rows.each(function () {
//     var $td = $(this).find('td');
//     var h = {};
    
//     // Use the headers from earlier to name our hash keys
//     headers.forEach(function (header, i) {
//       h[header] = $td.eq(i).text();   
//     });
    
//     data.push(h);
//   });
  
//   // Output the result
//   $EXPORT.text(JSON.stringify(data));
// });

