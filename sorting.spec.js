describe('Bubble Sort', function(){
    it('handles an empty array.', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one item.', function(){
        expect( bubbleSort([32]) ).toEqual( [32] );
    });

    it('handles an array with two items.', function(){
        expect( bubbleSort([21,15]) ).toEqual( [15,21] );
    });

    it('handles an array with a bunch of items.', function(){
        expect( bubbleSort([5,1,3,4,2]) ).toEqual( [1,2,3,4,5] );
    });
    it('handles an array with way too many items.', function(){
        expect( bubbleSort([4,2,6,7,1,10,3,5,9,8]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
    });
});

describe('Merge Sort', function(){
    it('is able to merge two pre-sorted arrays.', function(){
        expect(mergeSortMerge([1,3,7,5],[4,6,8,2])).toEqual([1,3,7,5,4,6,8,2]);
        //write method explicitly to combine two arrays (arr1,arr2)
    });

    it('cannot do anything if given nothing.', function() {
    	expect(mergeSort([])).toEqual([]);
  	});

    it('pretty much does nothing with an array of 1 item.', function() {
    	expect(mergeSort([13])).toEqual([13]);
  	});

    it('is able to split an array into two halves.', function() {
    	expect(unMerge([1,3,7,5,4,6,8,2])).toEqual([[1,3,7,5],[4,6,8,2]]);
  	});

    it('is able to sort and recombine arrays.', function() {
    	expect(mergeSort([1,3,7,5,4,6,8,2])).toEqual([1,2,3,4,5,6,7,8]);
  	});

  	it('writes some nice shiny green text on the screen.', function() {
    	expect(1).toEqual(1);
  	});

});
