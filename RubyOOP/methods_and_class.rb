# Useful for when we have a functionality that is not dependant on object state
# We can call these class methods without creating a new instace of the class
# Class methods cannot be called on specific objects

class Car
    @@name = "Gol"
    def self.drive
        p "Driving"
        Car.new
    end
end

car = Car.drive