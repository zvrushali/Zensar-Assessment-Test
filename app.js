
const mockData = [
    {
      id: "id1",
      type: "co2",
      value: "120",
      online: true,
      location: "Floor 1"
    },
    {
      id: "id2",
      type: "temp",
      value: "20",
      online: true,
      location: "Floor 1"
    },
    {
      id: "id3",
      type: "temp",
      value: "20",
      online: true,
      location: "Floor 3"
    },
    {
      id: "id4",
      type: "co2",
      value: "250",
      online: false,
      location: "Floor 1"
    },
    {
      id: "id5",
      type: "devices",
      value: "20",
      online: true,
      location: "Floor 3"
    },
    {
      id: "id6",
      type: "devices",
      value: "17",
      online: true,
      location: "Basement"
    },
    {
      id: "id7",
      type: "devices",
      value: "2",
      online: true,
      location: "Warehouse"
    },
    {
      id: "id8",
      type: "co2",
      value: "110",
      online: true,
      location: "Warehouse"
    },
    {
      id: "id9",
      type: "temp",
      value: "22.5",
      online: false,
      location: "Basement"
    },
    {
      id: "id10",
      type: "co2",
      value: "475",
      online: false,
      location: "Floor 3"
    },
    {
      id: "id11",
      type: "co2",
      value: "519",
      online: true,
      location: "Basement"
    },
    {
      id: "id12",
      type: "temp",
      value: "14",
      online: true,
      location: "Warehouse"
    }
];
  
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(mockData);
      }, 1000 * Math.random());
    });
   
}
  
let myPromise = getData();
  myPromise.then(
      function(value) { 
          for(let data in value){
          
             $('#myTable').append('<tr><td>'+value[data]['type']+'</td><td>'+value[data]['value']+'</td>'+'<td>'+value[data]['online']+'</td><td>'+value[data]['location']+'</td></tr>');
          }
       },
      
);

$('select').on('change', function() {
    if(this.value == "type" || this.value=='location'){
        
        var sortedData  = sortData(mockData,this.value,'name')
    }
    if(this.value == "value"){
        
        var sortedData  = sortData(mockData,this.value,'number')
    }
     
    $("#myTable > tbody").empty();
    for(let data in sortedData){
        //  console.log(value[data]['online']);
        $('#myTable').append('<tr><td>'+sortedData[data]['type']+'</td><td>'+sortedData[data]['value']+'</td>'+'<td>'+sortedData[data]['online']+'</td><td>'+sortedData[data]['location']+'</td></tr>');
    }
        
});

function sortData(array, propertyName,dataType) {
    return array.sort(function (a, b) {
        if(dataType == 'number'){
            return a[propertyName] - b[propertyName];
        }
        if(dataType == 'name'){
            a = a[propertyName].toLowerCase();
            b = b[propertyName].toLowerCase();
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }
    });
}


