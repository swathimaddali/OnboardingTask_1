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


    }



}

/*

    public class EmployeeDataAccessLayer
    {
       
        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            try
            {
                return db.TblEmployee.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record     
        public int AddEmployee(TblEmployee employee)
        {
            try
            {
                db.TblEmployee.Add(employee);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar employee    
        public int UpdateEmployee(TblEmployee employee)
        {
            try
            {
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular employee    
      
        //To Delete the record of a particular employee    
        
        //To Get the list of Cities    
        public List<TblCities> GetCities()
        {
            List<TblCities> lstCity = new List<TblCities>();
            lstCity = (from CityList in db.TblCities select CityList).ToList();
            return lstCity;
        }
    
    */