# There are two types of numbers: int and float.
p 56
p 56.class
p 56.999
p 56.999.class
p 56_999 #Underscores are ignored

add = 5 + 9.85
p add

p 9.send("+", 3) #This is a way to call methods
p 34.even?
p 34.odd?

class Integer #We can overwrite methods
    def +(outro_valor)
        self - outro_valor
    end
end
p 50+12