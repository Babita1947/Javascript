const form = document.querySelector("form");
// this usecase will give you empty result
// const height = parseInt(document.querySelector("#height").value);


form.addEventListener("submit",function(e){
    e.preventDefault();//don't submit in server

    const height = parseInt(document.querySelector("#height").value);//querySelector() --> returns string type which can be converted into int using parseInt
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
       results.innerHTML = `Please give a valid height ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;

        if(weight < 18.6){
            results.innerHTML = `<span>Under Weight</span>`
        }
        else if(weight >= 18.6 && weight <= 24.9){
            results.innerHTML = `<span>Normal Range</span>`;
        }
        else{
            results.innerHTML = `<span>Greater than 24.9</span>`;
        }
    }
});