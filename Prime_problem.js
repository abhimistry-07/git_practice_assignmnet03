function check_prime(num){

	let count = 0;
	for(let i=1 ; i<=num ; i++){
		if(num%i == 0){
			count++
		}	
	}
	
	if(count == 2){
		return true;
	}
	return false;
}

let ans = check_prime(13)

if(ans == true){
console.log(num, "is prime");
}else{
console.log(num, "is not prime");	
}
