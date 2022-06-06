 /**
 * Explanation or Description of this method
 *
 * @author 
 * @create date
 * @param name
 * @return true(valid) || false(invalid)
 *
 */
export const validateName = (name) =>{

    let namechk = /^[a-z ,.'-]+$/i;
    if(name.match(namechk)){
        return true;
    }else return false;
  
}

 /**
 * Explanation or Description of this method
 *
 * @author 
 * @create date
 * @param string
 * @return true(not null) || false(null)
 *
 */
export const nullChk = (i) =>{
    if(i === null || i === "" || i.length <= 0) {
        return false;
    }else return true;
}


 /**
 * Explanation or Description of this method
 *
 * @author 
 * @create date
 * @param email
 * @return true(valid) || false(invalid)
 *
 */
let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const emailChk = (email) => {
    if(email.match(emailFormat)){
        return true;
    }
    else return false;
}

 /**
 * Explanation or Description of this method
 *
 * @author 
 * @create date
 * @param num
 * @return true(valid) || false(invalid)
 *
 */
let numberFormat=/(\d)(?=(\d{3})+$)/g;
export const numberChk = (num) => {
    if(num.match(numberFormat)){
        return true;
    }else return false;
}