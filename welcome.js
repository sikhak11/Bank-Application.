    var viewLogic = (function () {

   var deposit = document.getElementById('deposit')
   var balance = document.getElementById('balance')
   var withdraw = document.getElementById('withdraw')
   var drop = document.getElementById('drop')
   var amount = document.getElementById('amount')
   var submit = document.getElementById('btn')
   var table = document.getElementById('table')
//    var type = document.getElementById('type')
//    var amt = document.getElementById('amt')

   return{
       elements :{
             deposit,
             balance,
              withdraw,
              drop,
              amount,
              submit,
            //   selectDepo,
            //   selectWith
            table
       }
   }
}) ()

var controllerLogic = function(){
    
    viewLogic.elements.submit.addEventListener('click', ()=>{

        var TransAmt = viewLogic.elements.amount.value
        var MainBal = viewLogic.elements.balance.value
        var drop = viewLogic.elements.drop.value
        var table = viewLogic.elements.table


        if(drop === 'Deposit'){
            // console.log('contiue')

            // console.log(`${selectDepo}`)

            MainBal = parseInt(TransAmt) + parseInt(MainBal)
            // console.log(`${MainBal}`)

            viewLogic.elements.balance.value = MainBal
            viewLogic.elements.deposit.value = TransAmt
            // viewLogic.elements.type.innerHTML = drop
            // viewLogic.elements.amt.innerHTML = TransAmt


            modelLogic(drop,TransAmt,'green')

        }

       else if(drop === 'Withdraw'){

        if(parseInt(TransAmt) > parseInt(MainBal)) {
            alert('Insufficient balance')
        }
        else{

        
           MainBal =   parseInt(MainBal) - parseInt(TransAmt)
            // console.log(`${MainBal}`)
            
            viewLogic.elements.balance.value = MainBal
            viewLogic.elements.withdraw.value = TransAmt

            modelLogic(drop,TransAmt,'red')
        }
                                                                                                                                              }

        
        //  if(TransAmt > MainBal){
        //      console.log(`${MainBal}`)
        //     console.log('Insufficient Balance')
        //     // viewLogic.elements.balance.value = MainBal
        //     // return false
        // }
       
        // if(TransAmt > MainBal){
        //     console.log(`${MainBal}`)
        //     alert('Insufficient Balance')
        // }

    })
}
controllerLogic()


function modelLogic(drop,TransAmt,color){
    
    $('#table').append(`<tr style='color:${color}'><td>${drop}</td><td>${TransAmt}</td></tr>`)

}

