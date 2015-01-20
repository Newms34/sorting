
function bubbleSort(arr){
	var inOrder = false;
	if (arr.length<=1){
		return arr;
	}
	
	else{
		var i=0;
		while (!inOrder){
			//take pairs, sort, continue
			inOrder = true;
			for (var i=0;i<arr.length-1;i++){
				var item1 = arr[i];
				var item2 =arr[i+1];
				if (item1>item2){
					arr[i]=item2;
					arr[i+1]=item1;
					inOrder = false;
				}
			}

		}
		return arr;
	}
}

function mergeSortMerge(arr1,arr2){
	return arr1.concat(arr2);
}


function unMerge(arrToSort) {
	var halfNum = Math.floor(arrToSort.length/2);
	var arr1=arrToSort;
	var arr2=arrToSort.splice(halfNum);
 	return [arr1,arr2];
}


function mergeSort(arrToSort){
	if (arrToSort.length < 2){
		return arrToSort;
	}
	//split into two arrays
	var arrs = unMerge(arrToSort);
	return merge(mergeSort(arrs[0]),mergeSort(arrs[1]));

}
function merge(arrL, arrR){
	var posL=0, posR = 0;
	var outArr = [];
	while (posL< arrL.length && posR < arrR.length){
		//do stuff
		if (arrL[posL]< arrR[posR]){
			outArr.push(arrL[posL++]);
		}
		else {
			outArr.push(arrR[posR++]);
		}
	}
	return outArr.concat(arrL.slice(posL)).concat(arrR.slice(posR));
}

(function timers(){
    var myArr=[];
    var maxL=parseInt(prompt('List size?','1000'))
    for (var i=0;i<maxL;i++){
        myArr.push(Math.floor(Math.random()*maxL));
    }
    
    console.time("native");
    myArr.sort();
    console.timeEnd("native");

    console.time("bubble");
    bubbleSort(myArr);
    console.timeEnd("bubble");

    console.time("merge");
    mergeSort(myArr);
    console.timeEnd("merge");  
})();