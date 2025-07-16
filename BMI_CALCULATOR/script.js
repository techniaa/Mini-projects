const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
   const Height= parseInt(document.querySelector('#Height').value);
   const Weight= parseInt(document.querySelector('#Weight').value);
      const results= document.querySelector('#results');
      if(Height===''||Height<0||isNaN(Height)){
        results.innerHTML=(`Please give a valid height: ${Height}`);
      }
      else if(Weight===''||Weight<0||isNaN(Weight)){
        results.innerHTML=(`please give a valid weight: ${Weight}`);
      }
      else{
        const BMI=(Weight/((Height*Height)/10000)).toFixed(2);
       
      
      let category='';
      if(BMI<18.6){category='underweight';
       results.classList.add('bubble', 'underweight');}
      else if(BMI<=24.9) {category='normal weight';
       results.classList.add('bubble', 'Normal');}
      else {category='Overweight';
       results.classList.add('bubble', 'overweight');}
       results.innerHTML=`<span>${BMI} (${category})</span>`
      }

})