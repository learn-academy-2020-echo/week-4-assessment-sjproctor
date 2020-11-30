# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def odds_only(array)
  odd_arr = array.select do |val|
    val.is_a?(Integer) && val.odd?
  end
  odd_arr.sort
end

p odds_only full_arr1
p odds_only full_arr2


array.select{ |val| val.odd? if val.is_a? Integer }.sort
array.select{|value| value.is_a? Numeric }.select{|value| value.odd?}.sort


# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

def finder(array, letter)
  array.select{|word| word.include? letter}
end
p finder beverages_array, letter_o
p finder beverages_array, letter_a
p finder beverages_array, 'f'
p finder beverages_array, 'j'



# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowel string
  string.delete'aeiouAEIOU'
end
p remove_vowel album1
p remove_vowel album2
p remove_vowel album3



# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_nums array
  array.inject(0, :+)
end
p sum_nums nums_array1
p sum_nums nums_array2

def sum_of array
  array.sum
end
p sum_of nums_array1
p sum_of nums_array2

# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'

def check_palindrome string
  string_reverse = string.downcase.reverse
  if string.downcase == string_reverse
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"
  end
end
p check_palindrome is_palindrome1
p check_palindrome is_palindrome2
p check_palindrome is_palindrome3


def check_palindrome2 string
  lowercase_stripped_string = string.downcase.gsub(' ', '')
  lowercase_stripped_string_reversed = lowercase_stripped_string.reverse
  if lowercase_stripped_string_reversed == lowercase_stripped_string
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"
  end
end
p check_palindrome2 is_palindrome1
p check_palindrome2 is_palindrome2
p check_palindrome2 is_palindrome3
p check_palindrome2 is_palindrome4
