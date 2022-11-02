function check_prime(num){
	
	let factor=0;
	for(let i=1 ; i<=num ; i++){
		if(num%i==0){
		factor++;
		}
		}
		if(factor==2){
			return true;
		}else{
		return false;	
	}
}

let answer=check_prime(13);
console.log(answer);
	