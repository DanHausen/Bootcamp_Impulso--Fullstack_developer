class Sensor
    def install
        p "Installing Sensor"
    end

    def initiate
        p "Initializing Sensor"
    end
    
    def colect
        #Normal sensor
        p "Collecting and analyzing"
    end
end

class TemperatureSensor < Sensor
    def colect
        p "Collecting and analyzing. Temperature"
        super #To call for Parent Method
    end
end

sensor = TemperatureSensor.new
sensor.colect