module.exports = {

	somme: function somme(x, y){
		return x + y;
	},
	
	multiplication: function multiplication(x, y) {
		return x * y;
	},

	findMax2: function findMax2 (x, y) {

			if ( x>y)
		return x;
			else
		return y;
	},

	findMax3: function findMax3 (x, y, z) {
	var max;
	
		if (x>y && x>z){
		return max;}

	
		else if (y>x && y>z){
		return y;}
	
		else if(z>x && z>y){
		return z;}
	},

	//findMaxTab: function findMaxTab (x, y, y) {
	//	return 'TODO';
	//},

	//function findMaxTab(NomTableau, ValeurMax)
   //{   
   //var ValeuMax = NomTableau[0];
    //for (i=0; i<NomTableau.length; i++)
      //      {
        //        if (NomTableau[i] > ValeurMax)
          //          {
              ///          return ValeurMax = NomTableau[i];
             //       }
            //}
//    },  
function PlusGrandeValeur(array)
{
    var max;
    for (i=0;val=array[i]; i++)
    {
        if (array[i] > max)
        {
            max=array[i];
        }
    }
    return max;
}
}