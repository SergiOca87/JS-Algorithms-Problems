//Convert to Roman
function convertToRoman(num) {

    const numbers = [1000, 500, 100, 50, 10, 5, 1];
    const romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  
    let romanAccumulation = [];
    let regularAccumulation = num;
  
    const accumulate = () => {
        for(let i = numbers.length; i >= 0; i--) {
            if( regularAccumulation >= numbers[i] ) {
                
                romanAccumulation.push(romanNumerals[i]);
                regularAccumulation -= parseInt(numbers[i]);
                console.log(`${regularAccumulation} is bigger than ${numbers[i]}, RomanAccumulation is ${romanAccumulation}`)
                console.log(regularAccumulation)
                  break;
            }
        
            //After this first loop check the amount that we have in romanNumerals
        }
    }
  
    while(regularAccumulation > 0) {
        accumulate()
    }
  
     //First check if romanAccumulation has repeated values
      const s = new Set(romanAccumulation);
      const hasRepeatedValue = romanAccumulation.length >= 4 && s.length !== romanAccumulation;
  
      const repeatedValues = [];
     
  
      if(hasRepeatedValue) {
          // If there are repeated values we must check if there is 4 of something
          
          for(let i = 0; i < romanAccumulation.length; i++) {
             if( romanAccumulation[i] === romanAccumulation [i + 1]) {
                repeatedValues.push(romanAccumulation[i]);
                
                console.log('values length is', repeatedValues.length)
                if( repeatedValues.length === 4  ) {
                    const romanNumeralIndex = romanNumerals.indexOf(repeatedValues[0]);
                    console.log(romanNumeralIndex, repeatedValues)
                    return romanAccumulation.splice(1, 4, romanNumerals[romanNumeralIndex - 1]);
                } else if( repeatedValues.length === 3 && repeatedValues.length > 4  ) {
                    console.log('smaller than 5')
                    //replace 3 repeated value by a single numeral, in a previous position in the romanNumerals Array:
                    const romanNumeralIndex = romanNumerals.indexOf(repeatedValues[0]);
                    
                  //   const romanAccumulationIndex = romanAccumulation.indexOf(repeatedValues[0]);
                    //months.splice(4, 1, 'May');
                    // replaces 1 element at index 4
                    return romanAccumulation.splice(1, 3, romanNumerals[romanNumeralIndex - 1]);
                    // romanAccumulation.push(romanNumerals[romanNumeralIndex - 1])
                  }
              }
          };
          //Clean up the romanAccumulation Arr from repeated values
          romanAccumulation = [...new Set(romanAccumulation)]
  
      }
    
  console.log('repeatedValues', repeatedValues, 'romanAccumulation', romanAccumulation)
    
  console.log(romanAccumulation)
  return romanAccumulation.join("");
  }
  
  convertToRoman(5);