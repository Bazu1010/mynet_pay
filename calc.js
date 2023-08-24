var myForm = document.getElementById('myform');
myform.addEventListener("submit", function getData(e) {

    e.preventDefault();

    


    bs = Number(document.getElementById("b_salary").value)
    be = Number(document.getElementById("benefits").value)

let gs = calcGross( bs,be)
document.getElementById("gs").innerText = gs;


let rnhif = calcNhif(gs)
document.getElementById("nhif").innerHTML = rnhif;

 let rnssf = calcNssf(gs)
 document.getElementById("nssf").innerText = rnssf;

 let rnhdf = calcNhdf(gs)
 document.getElementById("nhdf").innerText = rnhdf;

let t_inc = calcTaxable(gs,rnssf,rnhdf)
document.getElementById("t_inc").innerText = t_inc;

let paye = calcPaye ( t_inc)
document.getElementById("payee").innerHTML = paye;

let nSalary = calcNsalary(gs,rnhif,rnhdf,rnssf,paye)
document.getElementById("ns").innerHTML = nSalary;

})

    function calcGross(basic_salary, benefits) {

        gross = basic_salary + benefits;
        return gross;
    }

     //NHIF

     function calcNhif(gs) {
        // let nhif_contribution = 0
        if (gs < 5999) {
                nhif_contribution = 150
        } else if (gs > 6000 && gs < 7999) {
                nhif_contribution = 300
        } else if (gs > 8000 && gs < 11999) {
                nhif_contribution = 400
        } else if (gs > 12000 && gs < 14999) {
                nhif_contribution = 500
        } else if (gs > 15000 && gs < 19999) {
                nhif_contribution = 600
        } else if (gs > 20000 && gs < 24999) {
                nhif_contribution = 750
        } else if (gs > 25000 && gs < 29999) {
                nhif_contribution = 850
        } else if (gs > 30000 && gs < 34999) {
                nhif_contribution = 900
        } else if (gs > 35000 && gs < 39999) {
                nhif_contribution = 950
        } else if (gs > 40000 && gs < 44999) {
                nhif_contribution = 1000
        } else if (gs > 45000 && gs < 49999) {
                nhif_contribution = 1100
        } else if (gs > 50000 && gs < 59999) {
                nhif_contribution = 1200
        } else if (gs > 60000 && gs < 69999) {
                nhif_contribution = 1300
        } else if (gs > 70000 && gs < 79999) {
                nhif_contribution = 1400
        } else if (gs > 80000 && gs < 89999) {
                nhif_contribution = 1500
        } else if (gs > 90000 && gs < 99999) {
                nhif_contribution = 1600
        } else if (gs > 99999) {
                nhif_contribution = 1700
        } else {
                console.log("Invalid")
        }
        return nhif_contribution;
} 



                //NSSF

                function calcNssf(gs) {

                    let nssfR = 0.06;
                    if (gs < 18000) {

                            let ns_sf = (gs * nssfR)
                            return ns_sf;
                    }
                    else {
                            ns_sf = 18000 * 0.06
                            return ns_sf;
                    }

            }
           

               //NHDF


               function calcNhdf(gs) {

                  let nhdfR = 0.03
                  nh_df=0
                
                if(gs<83334){
                  
                 nh_df = (gs * nhdfR)
                }
                else{
                 nh_df = 2500
                }

                return nh_df;
        }
       
         //Taxable_income

         function calcTaxable(gs ,rnssf,rnhdf) {

             

            let taxable_income = gs - (rnssf + rnhdf)
            return taxable_income;
    }

     //PAYE

     function calcPaye ( t_inc,tRelief){

        let tRelief = 2400
        if (t_inc<=24000){
            let pa_ye = 24000*0.1;
            return pa_ye;
        }else if(t_inc>24000 && t_inc<32333){
            pa_ye = 2400+(t_inc-24000)*0.25;
            return paye;
        }else if(t_inc>32333 && t_inc<=50000){
            pa_ye = (2400+2083.25)+(t_inc-32333)*0.3
        }else{pa_ye = (2400+2083.25)+(t_inc-32333)*0.3+(t_inc-50000)*0.35}

        return pa_ye - tRelief;
    }

     //Net_Salary

     function calcNsalary(gs,rnhif,rnhdf,rnssf,paye){
        let  net_salary = gs - (rnhif + rnhdf +  rnssf + paye)
        return net_salary;

    }
   
    
    


    



    





