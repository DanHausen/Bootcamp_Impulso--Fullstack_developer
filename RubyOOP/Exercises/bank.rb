class Tasks    
    def transfer(origin, destination, amount)   
        amount < 0 ? amount *= -1 : amount *= 1
        origin.amount -= amount    
        destination.amount += amount
    end
end

class Nubank
    attr_accessor :amount
    
    def initialize(amount)
        @amount = amount
    end
end

class Inter
    attr_accessor :amount
    
    def initialize(amount)
        @amount = amount
    end
end

nubank = Nubank.new(0)
inter = Inter.new(0)

tasks = Tasks.new
tasks.transfer(inter, nubank, 100)
p inter.amount
p nubank.amount
