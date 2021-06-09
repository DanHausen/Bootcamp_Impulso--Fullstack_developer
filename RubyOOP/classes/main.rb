require "./RubyOOP/classes/person"
require "./RubyOOP/classes/car"
require "awesome_print"

person = Person.new("Dan")
car = Car.new("Gol", person)

ap person
ap car