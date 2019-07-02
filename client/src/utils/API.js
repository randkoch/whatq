import axios from "axios";

export default {
    //create a vendor
    createVendor: function() {
        return axios.post("/api/vendor");
      },
    //get all vendors
    getVendors: function() {
        return axios.get("/api/vendor");
      }, 
    //get vendor by ID
    findVendor: function() {
        return axios.get("/api/vendor/:id");
      },
    //update vendor by ID
    updateVendor: function() {
        return axios.put("/api/vendor/:id");
      },
    //delete vendor by ID
    removeVendor: function() {
        return axios.delete("/api/vendor/:id");
      },
    //get menus
    getMenus: function() {
        return axios.get("/api/vendor/:id/menus");
      },
    //update menus
    updateMenu: function() {
        return axios.put("/api/vendor/:id/menus");
      },
    //get menus
    deleteMenu: function() {
        return axios.delete("/api/vendor/:id/menus");
      },
    //create an item
    createItem: function() {
        return axios.post("/api/vendor/:id/menuItems");
      },
    //get items
    getItems: function() {
        return axios.get("/api/vendor/:id/menuItems");
      },
    //update menus
    updateItem: function() {
        return axios.put("/api/vendor/:id/menuItems");
      },
    //delete menu
    deleteItem: function() {
        return axios.delete("/api/vendor/:id/menuItems");
      } 
};