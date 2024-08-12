sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("com.app.yard.controller.Home", {
        onInit: function () {
            
        },

                //open for login fragment
                login: async function () {
                    if (!this.Login) {
                        this.Login = await this.loadFragment("loginDialog")
                    }
                    this.Login.open();
                },
                oncancelbtn: function () {
                    if(this.Login.isOpen()){
                    this.Login.close()
                    }
                },

                LoginBtnClick:function(){
                    
                        var oU = this.getView().byId("user").getValue();
                        var oP = this.getView().byId("password").getValue();


                        if (oU === "Security" && oP === "Security@123") {
                            this.getRouter().navTo("RouteMain", { id: oU })
                            
                        }
                        else if(oU==="Supervisor" && oP==="Supervisor@123"){
                            this.getRouter().navTo("RouteMain", { id: oU })
                        }
                        else if(oU==="Vendor" && oP==="Vendor@123"){
                            this.getRouter().navTo("RouteMain",{id:oU})
                        }
                        else{
                            MessageToast.show("Please Provide valid Credentials")
                        }
         
                    
                },
                
        
    });
});
