function getUser() {

    var selectedCountry = document.getElementById('country').value;
    console.log(selectedCountry)

    var mobileNumber = document.getElementById('numberInput').value;
    console.log(mobileNumber)

    if(selectedCountry === "60" && mobileNumber === "173527250"){
        return true
    } else {
        return false
    }
}

document.getElementById('check').addEventListener('click',(()=>{
    console.log('hi')
    if(getUser()){
        window.location.href = 'second-page.html';
    } else{
        alert('Invalid user details! You cannot go to the second page.');
    }
}))