const number =  "aaabbcde"
 const myFunction =(str = '') =>{
	 let res= '';
	 let count = 1
	 for  (let i =0 ; i< str.length ; i++) {
		 let results = str [i]
		 let obj =[str +1] 
		 if (results === obj ){
			 count ++;
		 }else {
			 res += results  +String(count);
			 count =1
		 }
	 }
	 return res.length< str.length ? res : str;
 }
 console.log(myFunction (number));