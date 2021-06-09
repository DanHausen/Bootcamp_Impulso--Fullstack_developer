#Return is optional. But ruby always return the last executed line result

p "Insert your name"
name = gets.chomp()

def method(name)
    p "Method executed. Good job, #{name}"
end

def add(number1:, number2: 10)
    number1 + number2
end

puts method(name)
puts add(number1: 15)