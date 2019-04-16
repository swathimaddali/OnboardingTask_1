using OnboardingTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnboardingTask.Models
{
    public class DataAccessLayer
    {

        masterContext db = new masterContext();

        public IEnumerable<Customer> GetAllCustomers()
        {
            try
            {
                return db.Customer.ToList();
            }
            catch
            {
                throw;
            }
        }


        public int DeleteCustomer(int id)
        {
            try
            {
                Customer cust = db.Customer.Find(id);
                db.Customer.Remove(cust);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int AddCustomer(Customer cust) { 
      
            try
            {
                db.Customer.Add(cust);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Customer GetCustomerData(int id)
        {
            try
            {
                Customer customer = db.Customer.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }



        public int UpdateCustomer(Customer cust) {
            try
            {
                db.Entry(cust).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            

        }



        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                return db.Product.ToList();
            }
            catch
            {
                throw;
            }
        }


        public int DeleteProduct(int id)
        {
            try
            {
                Product prod = db.Product.Find(id);
                db.Product.Remove(prod);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int AddProduct(Product prod)
        {

            try
            {
                db.Product.Add(prod);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Product GetProductData(int id)
        {
            try
            {
                Product customer = db.Product.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }



        public int UpdateProduct(Product cust)
        {
            try
            {
                db.Entry(cust).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }


        }


        public IEnumerable<Store> GetAllStores()
        {
            try
            {
                return db.Store.ToList();
            }
            catch
            {
                throw;
            }
        }


        public int DeleteStore(int id)
        {
            try
            {
                Store cust = db.Store.Find(id);
                db.Store.Remove(cust);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int AddStore(Store cust)
        {

            try
            {
                db.Store.Add(cust);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Store GetStoreData(int id)
        {
            try
            {
                Store customer = db.Store.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }



        public int UpdateStore(Store cust)
        {
            try
            {
                db.Entry(cust).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }


        }



    }



}