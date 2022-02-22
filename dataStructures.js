// level 2

function arrayOdd(array) {

    let newArray = array.filter((data) => {
         if (data % 2 != 0) {
             return data
 
         }
     })
 return newArray;
 
 }

function upperCase(string) {
    let vowels = ["a", "e", "i", "o", "u"];

    let newArray = string.split("").map((data) => {
        if (vowels.includes(data)) {
            return data.toUpperCase()
        }
        else{
            return data;
        }
    })
    return newArray.join("");

}



function maxArray(array){
    let max = 0;
    array.forEach((data)=>{
        if(data > max){
            max = data;
        }

    })
    return max;
}
