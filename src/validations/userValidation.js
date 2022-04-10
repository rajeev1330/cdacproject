const userValidation=(values)=>{
    let errors={}
    if(!values.name){
        errors.name="Name is required"
    }
    if(!/^[a-zA-Z]{0,30}$/.test(values.name)){
        errors.name="Name should contain alphabets only"
    }
    if(!values.city){
        errors.city="City is required"
    }
    if(!values.userid){
        errors.userid="Email id is required"
    }
    if(!/^[a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,5}$/.test(values.userid)){
        errors.userid="Invalid Email id"
    }
    if(!values.phone){
        errors.phone="Phone No. is required"
    }
    else if(values.phone.length!==10){
        errors.phone="Invalid Phone No."
    }
    if(!values.pwd){
        errors.pwd="Password is required"
    }
    else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(values.pwd)){
        errors.pwd="Minimum six characters, at least one letter and one number required"
    }

    if(!values.cpwd){
        errors.cpwd="Confirm password is required"
    }
    
    if(values.pwd && values.cpwd && values.pwd!==values.cpwd){
        errors.cpwd="Password does not match"
    }


    return errors;
}

export default userValidation;