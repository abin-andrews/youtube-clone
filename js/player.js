//Common Function to check if a value is in an array
//For videopage template
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function show()
{
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    return false;    
}    
    
function hide()
{
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';       
}


