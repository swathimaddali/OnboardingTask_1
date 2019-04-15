using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnboardingTask.Models;

namespace OnboardingTask.Controllers
{

    [Route("[controller]")]
    public class CustomerController : Controller
    {


        DataAccessLayer objcustomer = new DataAccessLayer();

        [HttpGet("[action]")]

        //Customer/Index
        public IEnumerable<Customer> Index()
        {
            System.Console.WriteLine("inside CustomerController:::Index");
            return objcustomer.GetAllCustomers();
        }



        //https://localhost:44394/Customer/Delete/1
        [HttpDelete]
        [Route("Delete/{id}")]
       
        public int Delete(int id)
        {
            System.Diagnostics.Debug.WriteLine("inside CustomerController:::delete::" + objcustomer.DeleteCustomer(id));

            return objcustomer.DeleteCustomer(id);
        }


        // GET https://localhost:44394/Customer/Details/2 
        // GET: Customer/Details/5

        [HttpGet]
        [Route("Details/{id}")]
        public Customer Details(int id)
        {
            return objcustomer.GetCustomerData(id);
        }




        //Customer/Edit


        // POST: Customer/Edit/5
        [HttpPut]
        [Route("Edit/{id}")]
        
        public int Edit(Customer customer)
        {
             // TODO: Add update logic here

                return objcustomer.UpdateCustomer(customer);
     
        }
        /*

        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit(TblEmployee employee)
        {
            return objemployee.UpdateEmployee(employee);
        }


*/
        /*
        public class CustomerController : Controller
        {
            // GET: Customer
            public ActionResult Index()
            {
                return View();
            }

           

            // GET: Customer/Create
            public ActionResult Create()
            {
                return View();
            }
            */
        //POST: Customer/Create


        [HttpPost]    
        [Route("Create")]
        public int Create(Customer customer)
        {
            return objcustomer.AddCustomer(customer);
        }



        /*
            // GET: Customer/Edit/5
            public ActionResult Edit(int id)
            {
                return View();
            }

           
            // GET: Customer/Delete/5
            public ActionResult Delete(int id)
            {
                return View();
            }

            // POST: Customer/Delete/5
            [HttpPost]
            [ValidateAntiForgeryToken]
            public ActionResult Delete(int id, IFormCollection collection)
            {
                try
                {
                    // TODO: Add delete logic here

                    return RedirectToAction(nameof(Index));
                }
                catch
                {
                    return View();
                }
            }
        }*/
    }
}