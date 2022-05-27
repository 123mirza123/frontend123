
<template>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
    <section  >
      <div class="row" >
         <div class="col-lg-12" >
           <div  class="main" >
             <div>
               <h5 >VendorsTable</h5> 
               <div class="topright"> <Modal  @save-vendor-clicked="addVendor"></Modal></div>  
              <div >
                   <table class=" table table-striped"  >
                    <thead>
                     <tr> 
                     <th  v-for="(header,index) in vendorsHeaders" :key="index" scope="col">{{header}} </th>
                     </tr>
                    </thead>

                    <tbody>
                     <tr v-for="(vendor,index) in vendorList" :key="index" >
                     <th scope="row" >{{vendor.id}}</th>
                     <td>{{vendor.name}}</td>
                     <td>{{vendor.phone}}</td>
                     <td>{{vendor.email}}</td>
                     <td>{{vendor.contactPearson}}</td>
                     <td>{{vendor.city}}</td>
                     <td>{{vendor.zipCode}}</td>
                     <td>{{vendor.adress}}</td>
                     <td>{{vendor.coment}}</td>
                     <td>
                     <button class="btn btn-primary btn-sm m-0" @click="editForm(index)">Edit<i class="bi bi-pencil-square"></i></button>
                     <button class="btn btn-danger btn-sm m-0" @click="deleteVendor(vendor.id,vendor.name)" >Delete<i class="bi bi-trash"></i></button>                   
                     </td>
                     </tr>
                    </tbody>
                   </table>
                 </div>
             </div>
           </div>
          </div>
      </div>
    </section>
<a href="#" class="back-to-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a>

</template>
<script>
import Modal from '@/components/Modal.vue';
import { axiosMixin } from "../Mixins/axiosMixin";
import { notify } from "@kyvg/vue3-notification";

export default ({
  
    name:'Vendors',
    mixins: [axiosMixin],
    components :{
        Modal,
        

    },
    data (){
      return{
      
        vendorsHeaders:[
          '#',
          'Name',
          'Phone Number',
          'Email',
          'Contact pearson',
          'City',
          'Zip Code',
          'Address',
          'Additional Comment',
          'Action'
         
        ],
        vendorList: []
        /*vendorList: [
           {
           id:'0',
           name:'sanjo',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko2',
           city:'Mostar',
           zipCode:'88000',
           adress:'adresa3',
           coment:'....'
           },

           {
           id:'1',
           name:'benjo',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko3',
           city:'Sarajevo',
           zipCode:'66000',
           adress:'adresa4',
           coment:'....'
           } ,

           {
           id:'2',
           name:'adin',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko4',
           city:'Tuzla',
           zipCode:'55000',
           adress:'adresa7',
           coment:'....'
           } ,

           {
           id:'3',
           name:'keno',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko',
           city:'Mostar',
           zipCode:'88000',
           adress:'adresa1',
           coment:'....',
           }   
        ]*/
      }

    },
       methods:{
    
         editForm(index){
          this.vendorList.fill(index);
         },

         deleteVendor: function (vendorID, vendorName) {
        //  let options = {
        //     headers: {
        //         "Content-type": "application/json;charset=UTF-8",
        //         Accept: "application/json;charset=UTF-8"
        //     },
        //     method: "DELETE",
        //     url: `https://internship2022-vendors-api.mss.ba/API/VendorDelete?ID=${vendorID}&Name=${vendorName}`,
        //     auth: true
        //   };

          if(confirm('are you sure?')){
            this.callApi("DELETE",`https://internship2022-vendors-api.mss.ba/API/VendorDelete?ID=${vendorID}&Name=${vendorName}`)
            .then((response) => {
              if (response.status === 200) {
                this.vendorList=[];
                this.getVendors();
                notify({
                  title: "Vendor succesfuly deleted",
                  type: 'success',
                });

              }
            })
            .catch((error) => {
            //console.log(`There is error in deleting data from ${options.url}`);

            console.log(`There is error in deleting data from https://internship2022-vendors-api.mss.ba/API/VendorDelete`);
            console.log(error);
          });
          }
          
          },
        getVendors() {
         

          //   let options = {
          //   headers: {
          //       "Content-type": "application/json;charset=UTF-8",
          //       Accept: "application/json;charset=UTF-8"
          //   },
          //   method: "GET",
          //   url: "https://internship2022-vendors-api.mss.ba/API/VendorGet" ,
          //   auth: true
          // };

          this.callApi("GET","https://internship2022-vendors-api.mss.ba/API/VendorGet")
          .then((response) => {
            console.log(response.data);
            response.data.forEach(el => {
              this.vendorList.push(
                {
                  id:el.vendorID,
                  name:el.vendorName,
                  phone: el.phoneNumber,
                  email:el.email,
                  contactPearson: el.contactPerson,
                  city:el.city,
                  zipCode:el.zipCode,
                  adress:el.address,
                  coment:el.additionalComment,
                }
              );
           
            
            });
          })
          .catch((error) => {
            //console.log(`There is error in getting data from ${options.url}`);

            console.log(`There is error in getting data from https://internship2022-vendors-api.mss.ba/API/VendorGet`);
            console.log(error);
          });
        },

        addVendor(createdObject) {
          ///  let options = {
        //     headers: {
        //         "Content-type": "application/json;charset=UTF-8",
        //         Accept: "application/json;charset=UTF-8"
        //     },
          //   method: "POST",
          //   url: "https://internship2022-vendors-api.mss.ba/API/VendorPost",
          //    data: createdObject
          // };


          

          debugger;
          this.callApi("POST","https://internship2022-vendors-api.mss.ba/API/VendorPost", createdObject)
          .then((response) => {
            debugger;
              if (response.status === 200) {
                this.vendorList=[];
                this.getVendors();
                notify({
                  title: "Vendors successfully created",
                  type: 'success',
                });

              }
            })   
            .catch((error) => {
            //console.log(`There is error in getting data from ${options.url}`);

            console.log(`There is error in getting data from "https://internship2022-vendors-api.mss.ba/API/VendorPost"`);
            console.log(error);
            notify({
              title: `${error}`,
              type: 'error'
            })
          });
        }
        
      },
          mounted(){
            this.getVendors();
        }

})
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	

	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
	
		position: absolute;

		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	td:nth-of-type(1):before { content: "Name"; }
	td:nth-of-type(2):before { content: "Phone number"; }
	td:nth-of-type(3):before { content: "Email"; }
	td:nth-of-type(4):before { content: "contactPearson"; }
	td:nth-of-type(5):before { content: "City"; }
	td:nth-of-type(6):before { content: "ZipCode"; }
	td:nth-of-type(7):before { content: "Address"; }
	td:nth-of-type(8):before { content: "comment"; }
}
.topright {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}

</style>
