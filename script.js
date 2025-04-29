function beforesubmit(){
    let output = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log('inputdata :', inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString('en-IN');
    outputdate.value = formattedDate;
}