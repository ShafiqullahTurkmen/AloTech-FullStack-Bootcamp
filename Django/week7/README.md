### Soru 1:
Parametre olarak verilen l rakamdan (basamak sayısı) oluşan, yine parametre olarak verilen n adet rastgele sayı üreten bir generator yazalım. Daha önce üretilen bir sayının tekrar üretilmemesini bekliyoruz. Fonksiyonun signature'ı: random_number_generator(n, l=6)

### Çözüm: 
```python
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
```
### Çıktı:
```bash
[4, 7, 5, 2, 3, 6, 9, 8, 1]
```

### Soru 2:
Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,
  a) aldığı tüm sayı parametrelerinin değerini 1 arttıracak,
  b) boolean dönüş değerini tersine çevirecek (True dönüyor ise False, False dönüyor ise True yapacak şekilde)
bir decorator yazalım. (Not: Belki de mod_batch fonksiyonu yanlış implemente edilmiştir... Bu durumda öncelikle onun beklenen çıktıyı verecek şekilde düzenlenmesi gerekir. :))

```python
def my_awesome_decorator(fun):
  def wrapped(*args):
    return fun(*args)
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
  """Parametre olarak verilen tüm sayıların 3 ile tam bölünebilir olup olmadığını kontrol eder.
  
  >>> mod_batch(1, 2, 3)
  False
  >>> mod_batch(3, 9, 21)
  True
  """
  return all([True for number in numbers if number % 3 == 0])
```
### Çözüm: 
```python
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
```
### Çıktı:
```bash
True
False
```