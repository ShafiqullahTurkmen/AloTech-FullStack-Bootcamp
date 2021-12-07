import random

# Generates random numbers 
def random_number_generator(n, l=3):
    # Checks if n is greater than l number of digits
    if n > (10**l - 10**(l-1)):
        print('n random numbers cannot be greater than the l number of digits')
        return  
    list_numbers = []
    # creates number for random.range() method
    start_number = 10**(l-1)
    # creates number for random.range() method
    end_number  = start_number * 10

    ## creates unique n random numbers
    for i in range(n):
        #creates a number
        newDigit = random.randrange(start_number, end_number)
        # checks if it is created before or not, then yields a unique number 
        if newDigit not in list_numbers:
            list_numbers.append(newDigit)
            yield newDigit
        elif newDigit in list_numbers:
            while(newDigit in list_numbers):
                newDigit = random.randrange(start_number,end_number )
                 
            list_numbers.append(newDigit)  
            yield newDigit  

number_generator = random_number_generator(9,1)

print(list(number_generator))

print("************************************************************")

# Decorator, increments args by one then reverses its result
def my_awesome_decorator(fun):
  def wrapped(*args):
    list_args = []
    for i in args:
        list_args.append(i + 1) 
    return (not fun(*list_args))
  return wrapped

# Checks numbers if they are divisible by 3 without any remainder.
@my_awesome_decorator
def mod_batch(*numbers):
    for i in numbers:
        if i % 3 != 0:
            return False
    return True

print(mod_batch(3,6,9))
print(mod_batch(2,5,8))

