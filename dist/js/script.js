let flag = false;
// const docGet_result = document.getElementById('result');
    

function btInput(value) {
    const docGet_result = document.getElementById('result');

    docGet_result.innerHTML += value;
    // document.getElementById('result').value += value;
}

function clrScreen(){
    flag = false;
    const docGet_result = document.getElementById('result');

    docGet_result.innerHTML = '';

    console.log(flag);
}

// function addition(){

// }

// function subtraction(){

// }

// function multiplication(){

// }

// function division(){

// }

function calculate(value){
    const docGet_result = document.getElementById('result');



    if(flag){
        let result  = eval(docGet_result.innerText);
        docGet_result.innerHTML = result;
        flag = false;
        return;
    }else{
        docGet_result.innerHTML += value;
    }

    flag = true;

    console.log(flag);
}



// $('button').click(()=>{
//     // $(document).ready(()=>{
//         // $('#algorithm').append(`${$(this).val()}`)
//         $('.screen').append(`<h1>hihihi</h1>`)
//     // })
// })